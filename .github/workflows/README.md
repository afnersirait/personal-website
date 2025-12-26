# GitHub Actions Workflows

This directory contains CI/CD workflows for automated building and deployment.

## 📋 Workflows

### 1. Build and Push Docker Image
**File**: `docker-build-push.yml`

Automatically builds and pushes Docker images to GitHub Container Registry.

**Triggers**:
- Push to `main` branch
- Pull requests
- Git tags (e.g., `v1.0.0`)

**Outputs**:
- Docker image: `ghcr.io/afnersirait/personal-website:latest`
- Tagged versions for releases

### 2. Deploy to Kubernetes
**File**: `deploy-k8s.yml`

Automatically deploys the application to Kubernetes cluster.

**Triggers**:
- After successful Docker build
- Manual trigger (workflow_dispatch)

**Requirements**:
- `KUBECONFIG` secret must be configured
- Kubernetes cluster must be accessible

## 🔧 Setup

### Required Secrets

Go to: Repository → Settings → Secrets and variables → Actions

Add these secrets:

1. **`KUBECONFIG`** (Required)
   ```bash
   # Generate base64 encoded kubeconfig
   cat ~/.kube/config | base64 | tr -d '\n'
   ```

2. **`GITHUB_TOKEN`** (Automatic)
   - Automatically provided by GitHub
   - No manual setup needed

## 🚀 Usage

### Automatic Deployment
1. Push code to `main` branch
2. GitHub Actions will:
   - Build Docker image
   - Push to GHCR
   - Deploy to Kubernetes
   - Verify deployment

### Manual Deployment
1. Go to Actions tab
2. Select "Deploy to Kubernetes"
3. Click "Run workflow"
4. Choose environment (production/staging)
5. Click "Run workflow"

## 📊 Monitoring

### View Workflow Runs
- Go to repository → Actions tab
- Click on workflow name
- View logs and status

### Check Deployment Status
```bash
# After deployment completes
kubectl get pods -n personal-website
kubectl get svc -n personal-website
kubectl get ingress -n personal-website
```

## 🐛 Troubleshooting

### Build Fails
- Check Docker syntax in Dockerfile
- Verify dependencies in package.json
- Review build logs in Actions tab

### Deployment Fails
- Verify `KUBECONFIG` secret is correct
- Check cluster connectivity
- Review Kubernetes events:
  ```bash
  kubectl get events -n personal-website
  ```

### Image Pull Fails
- Ensure image exists in GHCR
- Check image pull secret:
  ```bash
  kubectl get secret ghcr-secret -n personal-website
  ```

## 🔐 Security

- Workflows use least-privilege permissions
- Secrets are encrypted by GitHub
- Images are scanned for vulnerabilities
- Non-root user in containers

## 📚 More Information

See [KUBERNETES_DEPLOYMENT.md](../../KUBERNETES_DEPLOYMENT.md) for complete documentation.
