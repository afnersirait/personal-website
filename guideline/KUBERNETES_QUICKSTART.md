# Kubernetes Deployment - Quick Start Guide

Get your website deployed to Kubernetes in 5 minutes! 🚀

## ⚡ Prerequisites

- ✅ Kubernetes cluster (Minikube, GKE, EKS, AKS, etc.)
- ✅ kubectl installed and configured
- ✅ GitHub account with repository access

## 🚀 Quick Deploy (3 Steps)

### Step 1: Set Up GitHub Secrets

1. Go to your repository on GitHub
2. Navigate to: **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add `KUBECONFIG`:

```bash
# Generate the secret value
cat ~/.kube/config | base64 | tr -d '\n'
```

Copy the output and paste it as the secret value.

### Step 2: Install Kubernetes Components

```bash
# Install NGINX Ingress Controller
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.9.4/deploy/static/provider/cloud/deploy.yaml

# Install cert-manager (for SSL)
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.13.0/cert-manager.yaml

# Create Let's Encrypt ClusterIssuer
cat <<EOF | kubectl apply -f -
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: afnersirait@gmail.com
    privateKeySecretRef:
      name: letsencrypt-prod
    solvers:
    - http01:
        ingress:
          class: nginx
EOF

# Install Metrics Server (for autoscaling)
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
```

### Step 3: Push to GitHub

```bash
# Commit and push your code
git add .
git commit -m "Add Kubernetes deployment"
git push origin main
```

**That's it!** GitHub Actions will automatically:
1. Build Docker image
2. Push to GitHub Container Registry
3. Deploy to your Kubernetes cluster

## 📊 Monitor Deployment

### Watch GitHub Actions

1. Go to your repository → **Actions** tab
2. Watch the workflows run:
   - "Build and Push Docker Image"
   - "Deploy to Kubernetes"

### Check Kubernetes Status

```bash
# Watch pods being created
kubectl get pods -n personal-website -w

# Check all resources
kubectl get all -n personal-website

# View logs
kubectl logs -f deployment/personal-website -n personal-website
```

## 🌐 Access Your Website

### Get Ingress IP

```bash
kubectl get ingress -n personal-website
```

### Configure DNS

Point your domain to the ingress IP:

```
A Record: yourdomain.com → <INGRESS_IP>
A Record: www.yourdomain.com → <INGRESS_IP>
```

### Wait for SSL Certificate

```bash
# Check certificate status
kubectl get certificate -n personal-website

# Should show "Ready: True" after a few minutes
```

## 🎯 Manual Deployment (Alternative)

If you prefer to deploy manually without GitHub Actions:

```bash
# Set your GitHub token
export GITHUB_TOKEN=your_github_personal_access_token

# Run deployment script
./scripts/deploy.sh
```

## 🔧 Customize Before Deploy

### Update Domain

Edit `k8s/ingress.yaml`:

```yaml
spec:
  tls:
  - hosts:
    - yourdomain.com  # Change this
    - www.yourdomain.com  # Change this
```

### Update Email for SSL

Edit the ClusterIssuer (Step 2 above):

```yaml
email: your-email@example.com  # Change this
```

### Adjust Resources

Edit `k8s/deployment.yaml`:

```yaml
resources:
  requests:
    memory: "256Mi"  # Adjust as needed
    cpu: "250m"
  limits:
    memory: "512Mi"  # Adjust as needed
    cpu: "500m"
```

## 🐛 Troubleshooting

### Pods Not Starting?

```bash
# Check pod status
kubectl describe pod -n personal-website -l app=personal-website

# Check logs
kubectl logs -n personal-website -l app=personal-website
```

### Image Pull Error?

```bash
# Recreate image pull secret
kubectl delete secret ghcr-secret -n personal-website
kubectl create secret docker-registry ghcr-secret \
  --docker-server=ghcr.io \
  --docker-username=afnersirait \
  --docker-password=$GITHUB_TOKEN \
  --namespace=personal-website
```

### SSL Certificate Not Working?

```bash
# Check certificate status
kubectl describe certificate personal-website-tls -n personal-website

# Check cert-manager logs
kubectl logs -n cert-manager deployment/cert-manager
```

### Ingress Not Working?

```bash
# Check ingress controller
kubectl get pods -n ingress-nginx

# Check ingress logs
kubectl logs -n ingress-nginx deployment/ingress-nginx-controller
```

## 📝 Useful Commands

```bash
# Scale manually
kubectl scale deployment personal-website --replicas=5 -n personal-website

# Update image
kubectl set image deployment/personal-website \
  personal-website=ghcr.io/afnersirait/personal-website:v2.0.0 \
  -n personal-website

# Rollback deployment
kubectl rollout undo deployment/personal-website -n personal-website

# View events
kubectl get events -n personal-website --sort-by='.lastTimestamp'

# Delete everything
./scripts/cleanup.sh
```

## 🎓 Next Steps

1. ✅ Set up monitoring (Prometheus/Grafana)
2. ✅ Configure backup strategy
3. ✅ Set up alerting
4. ✅ Add custom domain
5. ✅ Configure CDN (optional)

## 📚 Full Documentation

For complete documentation, see:
- [KUBERNETES_DEPLOYMENT.md](KUBERNETES_DEPLOYMENT.md) - Complete guide
- [k8s/README.md](k8s/README.md) - Kubernetes manifests
- [.github/workflows/README.md](.github/workflows/README.md) - CI/CD workflows

## 🆘 Need Help?

- Check logs: `kubectl logs -f deployment/personal-website -n personal-website`
- Check events: `kubectl get events -n personal-website`
- Review GitHub Actions logs in your repository
- See full documentation: [KUBERNETES_DEPLOYMENT.md](KUBERNETES_DEPLOYMENT.md)

---

**Happy Deploying! 🚀**
