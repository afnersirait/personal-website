#!/bin/bash

# Personal Website Kubernetes Deployment Script
# This script helps you deploy the website to Kubernetes

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
NAMESPACE="personal-website"
IMAGE="ghcr.io/afnersirait/personal-website:latest"

echo -e "${GREEN}=== Personal Website Kubernetes Deployment ===${NC}\n"

# Check if kubectl is installed
if ! command -v kubectl &> /dev/null; then
    echo -e "${RED}Error: kubectl is not installed${NC}"
    echo "Please install kubectl: https://kubernetes.io/docs/tasks/tools/"
    exit 1
fi

# Check cluster connection
echo -e "${YELLOW}Checking cluster connection...${NC}"
if ! kubectl cluster-info &> /dev/null; then
    echo -e "${RED}Error: Cannot connect to Kubernetes cluster${NC}"
    echo "Please configure kubectl with: kubectl config use-context <your-context>"
    exit 1
fi
echo -e "${GREEN}✓ Connected to cluster${NC}\n"

# Create namespace
echo -e "${YELLOW}Creating namespace: $NAMESPACE...${NC}"
kubectl create namespace $NAMESPACE --dry-run=client -o yaml | kubectl apply -f -
echo -e "${GREEN}✓ Namespace ready${NC}\n"

# Create image pull secret
echo -e "${YELLOW}Creating image pull secret...${NC}"
if [ -z "$GITHUB_TOKEN" ]; then
    echo -e "${RED}Warning: GITHUB_TOKEN not set${NC}"
    echo "Please set GITHUB_TOKEN environment variable:"
    echo "  export GITHUB_TOKEN=your_github_token"
    echo ""
    read -p "Do you want to continue without image pull secret? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
else
    kubectl create secret docker-registry ghcr-secret \
        --docker-server=ghcr.io \
        --docker-username=afnersirait \
        --docker-password=$GITHUB_TOKEN \
        --namespace=$NAMESPACE \
        --dry-run=client -o yaml | kubectl apply -f -
    echo -e "${GREEN}✓ Image pull secret created${NC}\n"
fi

# Apply Kubernetes manifests
echo -e "${YELLOW}Applying Kubernetes manifests...${NC}"
kubectl apply -f k8s/deployment.yaml -n $NAMESPACE
kubectl apply -f k8s/ingress.yaml -n $NAMESPACE
kubectl apply -f k8s/hpa.yaml -n $NAMESPACE
echo -e "${GREEN}✓ Manifests applied${NC}\n"

# Wait for deployment
echo -e "${YELLOW}Waiting for deployment to be ready...${NC}"
kubectl rollout status deployment/personal-website -n $NAMESPACE --timeout=5m
echo -e "${GREEN}✓ Deployment ready${NC}\n"

# Show deployment info
echo -e "${GREEN}=== Deployment Information ===${NC}\n"

echo -e "${YELLOW}Pods:${NC}"
kubectl get pods -n $NAMESPACE -l app=personal-website

echo -e "\n${YELLOW}Services:${NC}"
kubectl get svc -n $NAMESPACE

echo -e "\n${YELLOW}Ingress:${NC}"
kubectl get ingress -n $NAMESPACE

echo -e "\n${YELLOW}HPA:${NC}"
kubectl get hpa -n $NAMESPACE

echo -e "\n${GREEN}=== Deployment Complete! ===${NC}"
echo -e "View logs with: ${YELLOW}kubectl logs -f deployment/personal-website -n $NAMESPACE${NC}"
echo -e "Check status with: ${YELLOW}kubectl get all -n $NAMESPACE${NC}"
