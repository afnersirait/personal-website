# Kubernetes Deployment Guide

This guide explains how to deploy your personal website to Kubernetes using GitHub Actions for automated CI/CD.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Architecture Overview](#architecture-overview)
- [Setup Instructions](#setup-instructions)
- [GitHub Actions Workflows](#github-actions-workflows)
- [Kubernetes Resources](#kubernetes-resources)
- [Manual Deployment](#manual-deployment)
- [Monitoring & Troubleshooting](#monitoring--troubleshooting)

## 🔧 Prerequisites

### Required Tools
- **Kubernetes Cluster** (v1.24+)
  - Minikube (local testing)
  - GKE, EKS, AKS (cloud providers)
  - Self-managed cluster
- **kubectl** (v1.24+)
- **Docker** (for local builds)
- **GitHub Account** with repository access

### Required Kubernetes Components
- **NGINX Ingress Controller**
- **cert-manager** (for SSL certificates)
- **Metrics Server** (for HPA)

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                      GitHub Actions                          │
│  ┌──────────────────┐         ┌──────────────────┐         │
│  │  Build & Push    │────────▶│   Deploy to K8s  │         │
│  │  Docker Image    │         │                  │         │
│  └──────────────────┘         └──────────────────┘         │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│              GitHub Container Registry (GHCR)                │
│                ghcr.io/afnersirait/personal-website         │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                   Kubernetes Cluster                         │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │                    Ingress                          │    │
│  │  (NGINX + SSL/TLS via cert-manager)                │    │
│  └────────────────────────────────────────────────────┘    │
│                           │                                  │
│                           ▼                                  │
│  ┌────────────────────────────────────────────────────┐    │
│  │                    Service                          │    │
│  │              (ClusterIP on port 80)                 │    │
│  └────────────────────────────────────────────────────┘    │
│                           │                                  │
│                           ▼                                  │
│  ┌────────────────────────────────────────────────────┐    │
│  │                  Deployment                         │    │
│  │         (2-10 replicas with HPA)                    │    │
│  │                                                      │    │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐         │    │
│  │  │  Pod 1   │  │  Pod 2   │  │  Pod N   │         │    │
│  │  │ Next.js  │  │ Next.js  │  │ Next.js  │         │    │
│  │  │ :3000    │  │ :3000    │  │ :3000    │         │    │
│  │  └──────────┘  └──────────┘  └──────────┘         │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

## 🚀 Setup Instructions

### Step 1: Configure GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions

Add the following secrets:

#### 1. `KUBECONFIG`
Your Kubernetes cluster configuration (base64 encoded):

```bash
# Get your kubeconfig
cat ~/.kube/config | base64 | tr -d '\n'

# Or for specific cluster
kubectl config view --flatten --minify | base64 | tr -d '\n'
```

Copy the output and add it as `KUBECONFIG` secret in GitHub.

#### 2. `GITHUB_TOKEN`
This is automatically provided by GitHub Actions, no need to add manually.

### Step 2: Install Required Kubernetes Components

#### Install NGINX Ingress Controller

```bash
# Using Helm
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
helm install ingress-nginx ingress-nginx/ingress-nginx \
  --namespace ingress-nginx \
  --create-namespace

# Or using kubectl
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.9.4/deploy/static/provider/cloud/deploy.yaml
```

#### Install cert-manager (for SSL)

```bash
# Using Helm
helm repo add jetstack https://charts.jetstack.io
helm repo update
helm install cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --create-namespace \
  --set installCRDs=true

# Or using kubectl
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.13.0/cert-manager.yaml
```

#### Create ClusterIssuer for Let's Encrypt

```bash
cat <<EOF | kubectl apply -f -
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: afnersirait@gmail.com  # Replace with your email
    privateKeySecretRef:
      name: letsencrypt-prod
    solvers:
    - http01:
        ingress:
          class: nginx
EOF
```

#### Install Metrics Server (for HPA)

```bash
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
```

### Step 3: Update Domain in Ingress

Edit `k8s/ingress.yaml` and replace `afnersirait.com` with your actual domain:

```yaml
spec:
  tls:
  - hosts:
    - yourdomain.com  # Your domain
    - www.yourdomain.com
    secretName: personal-website-tls
  rules:
  - host: yourdomain.com
    # ... rest of config
```

### Step 4: Configure DNS

Point your domain to your Kubernetes cluster's ingress IP:

```bash
# Get the ingress IP
kubectl get svc -n ingress-nginx

# Create A records:
# yourdomain.com      → <INGRESS_IP>
# www.yourdomain.com  → <INGRESS_IP>
```

### Step 5: Enable GitHub Container Registry

1. Go to your GitHub profile → Settings → Developer settings → Personal access tokens
2. Create a token with `write:packages` permission
3. The GitHub Actions workflow will automatically use `GITHUB_TOKEN`

## 🔄 GitHub Actions Workflows

### Workflow 1: Build and Push Docker Image

**File**: `.github/workflows/docker-build-push.yml`

**Triggers**:
- Push to `main` branch
- Pull requests to `main`
- Git tags (e.g., `v1.0.0`)

**What it does**:
1. Builds multi-platform Docker image (amd64, arm64)
2. Pushes to GitHub Container Registry
3. Tags with branch name, SHA, and `latest`
4. Uses layer caching for faster builds

### Workflow 2: Deploy to Kubernetes

**File**: `.github/workflows/deploy-k8s.yml`

**Triggers**:
- After successful Docker build (automatic)
- Manual trigger via GitHub Actions UI

**What it does**:
1. Connects to your Kubernetes cluster
2. Creates/updates namespace
3. Creates image pull secret
4. Applies Kubernetes manifests
5. Waits for rollout to complete
6. Verifies deployment

## 📦 Kubernetes Resources

### Deployment (`k8s/deployment.yaml`)

- **Replicas**: 2 (minimum)
- **Image**: `ghcr.io/afnersirait/personal-website:latest`
- **Resources**:
  - Requests: 256Mi RAM, 250m CPU
  - Limits: 512Mi RAM, 500m CPU
- **Health Checks**:
  - Liveness probe on `/`
  - Readiness probe on `/`

### Service (`k8s/deployment.yaml`)

- **Type**: ClusterIP
- **Port**: 80 → 3000 (container)

### Ingress (`k8s/ingress.yaml`)

- **Controller**: NGINX
- **SSL/TLS**: Automatic via cert-manager
- **Hosts**: Your domain(s)

### HPA (`k8s/hpa.yaml`)

- **Min Replicas**: 2
- **Max Replicas**: 10
- **Metrics**:
  - CPU: 70% utilization
  - Memory: 80% utilization

## 🛠️ Manual Deployment

If you prefer to deploy manually:

### Build Docker Image Locally

```bash
# Build the image
docker build -t personal-website:latest .

# Test locally
docker run -p 3000:3000 personal-website:latest

# Tag for registry
docker tag personal-website:latest ghcr.io/afnersirait/personal-website:latest

# Login to GHCR
echo $GITHUB_TOKEN | docker login ghcr.io -u afnersirait --password-stdin

# Push to registry
docker push ghcr.io/afnersirait/personal-website:latest
```

### Deploy to Kubernetes

```bash
# Create namespace
kubectl create namespace personal-website

# Create image pull secret
kubectl create secret docker-registry ghcr-secret \
  --docker-server=ghcr.io \
  --docker-username=afnersirait \
  --docker-password=$GITHUB_TOKEN \
  --namespace=personal-website

# Apply manifests
kubectl apply -f k8s/deployment.yaml -n personal-website
kubectl apply -f k8s/ingress.yaml -n personal-website
kubectl apply -f k8s/hpa.yaml -n personal-website

# Check status
kubectl get all -n personal-website
```

## 📊 Monitoring & Troubleshooting

### Check Deployment Status

```bash
# Get all resources
kubectl get all -n personal-website

# Check pod logs
kubectl logs -f deployment/personal-website -n personal-website

# Describe deployment
kubectl describe deployment personal-website -n personal-website

# Check HPA status
kubectl get hpa -n personal-website

# Check ingress
kubectl get ingress -n personal-website
kubectl describe ingress personal-website -n personal-website
```

### Common Issues

#### 1. ImagePullBackOff

```bash
# Check if secret exists
kubectl get secret ghcr-secret -n personal-website

# Recreate secret
kubectl delete secret ghcr-secret -n personal-website
kubectl create secret docker-registry ghcr-secret \
  --docker-server=ghcr.io \
  --docker-username=afnersirait \
  --docker-password=$GITHUB_TOKEN \
  --namespace=personal-website
```

#### 2. CrashLoopBackOff

```bash
# Check logs
kubectl logs -f deployment/personal-website -n personal-website --previous

# Check events
kubectl get events -n personal-website --sort-by='.lastTimestamp'
```

#### 3. SSL Certificate Issues

```bash
# Check cert-manager
kubectl get certificate -n personal-website
kubectl describe certificate personal-website-tls -n personal-website

# Check certificate request
kubectl get certificaterequest -n personal-website
```

#### 4. Ingress Not Working

```bash
# Check ingress controller
kubectl get pods -n ingress-nginx

# Check ingress logs
kubectl logs -n ingress-nginx deployment/ingress-nginx-controller

# Verify DNS
nslookup yourdomain.com
```

### Scaling

```bash
# Manual scaling
kubectl scale deployment personal-website --replicas=5 -n personal-website

# Check HPA
kubectl get hpa -n personal-website

# Describe HPA
kubectl describe hpa personal-website -n personal-website
```

### Rolling Updates

```bash
# Update image
kubectl set image deployment/personal-website \
  personal-website=ghcr.io/afnersirait/personal-website:v2.0.0 \
  -n personal-website

# Check rollout status
kubectl rollout status deployment/personal-website -n personal-website

# Rollback if needed
kubectl rollout undo deployment/personal-website -n personal-website
```

## 🔐 Security Best Practices

1. **Use non-root user** ✅ (Already configured in Dockerfile)
2. **Resource limits** ✅ (Configured in deployment)
3. **Health checks** ✅ (Liveness and readiness probes)
4. **SSL/TLS** ✅ (cert-manager integration)
5. **Image scanning** (Consider adding to GitHub Actions)
6. **Network policies** (Optional, add if needed)
7. **Pod security policies** (Optional, add if needed)

## 📈 Performance Optimization

1. **Multi-stage Docker build** ✅ (Reduces image size)
2. **Layer caching** ✅ (GitHub Actions cache)
3. **Horizontal Pod Autoscaling** ✅ (HPA configured)
4. **Resource requests/limits** ✅ (Prevents resource starvation)
5. **CDN** (Consider adding CloudFlare or similar)

## 🎯 Next Steps

1. ✅ Set up GitHub secrets
2. ✅ Install Kubernetes components
3. ✅ Update domain in ingress
4. ✅ Configure DNS
5. ✅ Push code to trigger deployment
6. 📊 Set up monitoring (Prometheus/Grafana)
7. 📧 Configure alerting
8. 🔄 Set up backup strategy

## 📞 Support

For issues or questions:
- Check Kubernetes events: `kubectl get events -n personal-website`
- Review pod logs: `kubectl logs -f deployment/personal-website -n personal-website`
- Check GitHub Actions logs in your repository

---

**Happy Deploying! 🚀**
