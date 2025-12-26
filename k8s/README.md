# Kubernetes Manifests

This directory contains all Kubernetes manifests for deploying the personal website.

## 📁 Files

- **`deployment.yaml`** - Deployment and Service configuration
- **`ingress.yaml`** - Ingress configuration with SSL/TLS
- **`hpa.yaml`** - Horizontal Pod Autoscaler configuration

## 🚀 Quick Deploy

### Prerequisites
```bash
# Ensure you have kubectl configured
kubectl cluster-info

# Create namespace
kubectl create namespace personal-website
```

### Deploy All Resources
```bash
# Apply all manifests
kubectl apply -f k8s/ -n personal-website

# Check status
kubectl get all -n personal-website
```

## 📝 Configuration

### Update Image
Edit `deployment.yaml` line 19:
```yaml
image: ghcr.io/afnersirait/personal-website:latest
```

### Update Domain
Edit `ingress.yaml` lines 20-21 and 25-38:
```yaml
- hosts:
  - yourdomain.com  # Your domain
  - www.yourdomain.com
```

### Adjust Resources
Edit `deployment.yaml` lines 28-33:
```yaml
resources:
  requests:
    memory: "256Mi"
    cpu: "250m"
  limits:
    memory: "512Mi"
    cpu: "500m"
```

### Adjust Scaling
Edit `hpa.yaml` lines 10-11:
```yaml
minReplicas: 2
maxReplicas: 10
```

## 🔍 Monitoring

```bash
# Watch pods
kubectl get pods -n personal-website -w

# View logs
kubectl logs -f deployment/personal-website -n personal-website

# Check HPA
kubectl get hpa -n personal-website

# Check ingress
kubectl get ingress -n personal-website
```

## 🗑️ Cleanup

```bash
# Delete all resources
kubectl delete -f k8s/ -n personal-website

# Delete namespace
kubectl delete namespace personal-website
```

## 📚 More Information

See [KUBERNETES_DEPLOYMENT.md](../KUBERNETES_DEPLOYMENT.md) for complete documentation.
