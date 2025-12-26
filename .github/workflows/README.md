# GitHub Actions Workflows

This directory contains CI/CD workflows for automated building and deployment.

## 📋 Workflows

### 1. Build and Push Docker Image
**File**: `docker-build-push.yml`

Automatically builds and pushes Docker images to GitHub Container Registry when a new release is created.

**Triggers**:
- **Release created/published** (primary trigger)
- **Manual trigger** via workflow_dispatch

**Outputs**:
- Docker image: `ghcr.io/afnersirait/personal-website:latest`
- Semantic versioned tags (e.g., `v1.0.0`, `v1.0`, `v1`)
- Multi-platform support (linux/amd64, linux/arm64)

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

### Creating a Release (Triggers Build)
1. **Create a new release on GitHub**:
   ```bash
   # Via GitHub CLI
   gh release create v1.0.0 --title "Release v1.0.0" --notes "Release notes"
   
   # Or via GitHub web interface:
   # Repository → Releases → Draft a new release
   # - Tag: v1.0.0
   # - Title: Release v1.0.0
   # - Description: Release notes
   # - Click "Publish release"
   ```

2. **GitHub Actions will automatically**:
   - Build Docker image
   - Tag with semantic versions (v1.0.0, v1.0, v1, latest)
   - Push to GitHub Container Registry
   - Generate build attestation

### Manual Build (Without Release)
1. Go to Actions tab
2. Select "Build and Push Docker Image"
3. Click "Run workflow"
4. Select branch
5. Click "Run workflow"

### Manual Kubernetes Deployment
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
