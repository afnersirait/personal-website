#!/bin/bash

# Personal Website Kubernetes Cleanup Script
# This script removes all Kubernetes resources

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
NAMESPACE="personal-website"

echo -e "${YELLOW}=== Personal Website Kubernetes Cleanup ===${NC}\n"

# Check if kubectl is installed
if ! command -v kubectl &> /dev/null; then
    echo -e "${RED}Error: kubectl is not installed${NC}"
    exit 1
fi

# Check if namespace exists
if ! kubectl get namespace $NAMESPACE &> /dev/null; then
    echo -e "${YELLOW}Namespace $NAMESPACE does not exist. Nothing to clean up.${NC}"
    exit 0
fi

# Show current resources
echo -e "${YELLOW}Current resources in namespace $NAMESPACE:${NC}"
kubectl get all -n $NAMESPACE
echo ""

# Confirm deletion
read -p "Are you sure you want to delete all resources? (yes/no) " -r
echo
if [[ ! $REPLY =~ ^[Yy][Ee][Ss]$ ]]; then
    echo -e "${YELLOW}Cleanup cancelled${NC}"
    exit 0
fi

# Delete resources
echo -e "${YELLOW}Deleting Kubernetes resources...${NC}"
kubectl delete -f k8s/ -n $NAMESPACE --ignore-not-found=true
echo -e "${GREEN}✓ Resources deleted${NC}\n"

# Ask about namespace deletion
read -p "Do you want to delete the namespace as well? (yes/no) " -r
echo
if [[ $REPLY =~ ^[Yy][Ee][Ss]$ ]]; then
    kubectl delete namespace $NAMESPACE
    echo -e "${GREEN}✓ Namespace deleted${NC}"
else
    echo -e "${YELLOW}Namespace preserved${NC}"
fi

echo -e "\n${GREEN}=== Cleanup Complete! ===${NC}"
