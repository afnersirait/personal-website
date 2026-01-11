"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, Database, Cloud, Code, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

interface ProjectCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  projects: Project[];
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories: ProjectCategory[] = [
    {
      id: "data",
      name: "Data Analytics & Engineering",
      icon: <Database className="h-5 w-5" />,
      projects: [
        {
          title: "Real-Time Data Pipeline & Analytics",
          description:
            "End-to-end data pipeline processing millions of events daily. Features real-time ETL, data warehousing, automated ML model training, and interactive dashboards.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
          tags: ["Apache Kafka", "Spark", "Airflow", "BigQuery", "Python", "dbt"],
          github: "https://github.com/afnersirait/data-pipeline",
        },
        {
          title: "AI-Powered Business Intelligence",
          description:
            "Intelligent BI platform with natural language queries, automated insights generation, anomaly detection, and predictive forecasting using custom ML models.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
          tags: ["Python", "TensorFlow", "Power BI", "SQL", "scikit-learn"],
          github: "https://github.com/afnersirait/ai-bi-platform",
        },
        {
          title: "Customer Churn Prediction System",
          description:
            "Machine learning system predicting customer churn with 92% accuracy. Features automated feature engineering, model retraining pipeline, and explainable AI.",
          image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
          tags: ["Python", "XGBoost", "MLflow", "FastAPI", "PostgreSQL"],
          github: "https://github.com/afnersirait/churn-prediction",
        },
      ],
    },
    {
      id: "devops",
      name: "DevOps & Automation",
      icon: <Wrench className="h-5 w-5" />,
      projects: [
        {
          title: "Production-Grade Kubernetes Platform",
          description:
            "Self-healing Kubernetes cluster with auto-scaling, service mesh, centralized logging (ELK), monitoring (Prometheus/Grafana), and CI/CD pipeline using ArgoCD.",
          image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
          tags: ["Kubernetes", "Docker", "Terraform", "ArgoCD", "Prometheus"],
          github: "https://github.com/afnersirait/k8s-platform",
        },
        {
          title: "Enterprise CI/CD Pipeline with GitOps",
          description:
            "Complete CI/CD pipeline using Jenkins, ArgoCD, and GitHub Actions. Automated testing, security scanning, container builds, and deployment with rollback capabilities.",
          image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop",
          tags: ["Jenkins", "ArgoCD", "Kubernetes", "Docker", "GitHub Actions"],
          github: "https://github.com/afnersirait/cicd-pipeline",
        },
        {
          title: "DevSecOps Security Automation",
          description:
            "Automated security scanning pipeline for containers and infrastructure. Includes vulnerability scanning, compliance checks, secret management, and remediation workflows.",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
          tags: ["Trivy", "SonarQube", "Vault", "OWASP", "Falco"],
          github: "https://github.com/afnersirait/devsecops",
        },
      ],
    },
    {
      id: "cloud",
      name: "Cloud & Infrastructure",
      icon: <Cloud className="h-5 w-5" />,
      projects: [
        {
          title: "Multi-Cloud Infrastructure Automation",
          description:
            "Automated infrastructure provisioning across AWS, Azure, and GCP using Terraform. Includes auto-scaling, disaster recovery, and cost optimization with monitoring.",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
          tags: ["Terraform", "Ansible", "AWS", "Azure", "Prometheus", "Grafana"],
          github: "https://github.com/afnersirait/multi-cloud-infra",
        },
        {
          title: "Cloud Cost Optimization Platform",
          description:
            "Automated cloud cost analysis and optimization tool. Identifies unused resources, right-sizing opportunities, and implements auto-shutdown policies with detailed reports.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
          tags: ["Python", "AWS Cost Explorer", "Terraform", "Lambda"],
          github: "https://github.com/afnersirait/cost-optimizer",
        },
        {
          title: "Automated Disaster Recovery System",
          description:
            "Cross-region disaster recovery solution with automated failover, backup orchestration, and RTO/RPO monitoring. Includes regular DR testing automation.",
          image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
          tags: ["AWS", "Terraform", "Lambda", "CloudFormation", "Python"],
          github: "https://github.com/afnersirait/disaster-recovery",
        },
      ],
    },
    {
      id: "web",
      name: "Web Development",
      icon: <Code className="h-5 w-5" />,
      projects: [
        {
          title: "Personal Portfolio Website",
          description:
            "Modern portfolio website with AI chatbot, dark mode, smooth animations, and production-grade Kubernetes deployment. Features Google Gemini AI integration.",
          image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&h=600&fit=crop",
          tags: ["Next.js", "TailwindCSS", "TypeScript", "Gemini AI", "Kubernetes"],
          github: "https://github.com/afnersirait/personal-website",
        },
        {
          title: "AI Content Generator",
          description:
            "AI-powered content generation platform with multi-model support (GPT-4, Claude, Gemini), content quality scoring, usage analytics, and A/B testing for prompts.",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
          tags: ["React", "OpenAI", "LangChain", "FastAPI", "Docker"],
          github: "https://github.com/afnersirait/ai-content-generator",
        },
        {
          title: "E-Commerce Platform",
          description:
            "Full-featured e-commerce platform with product management, shopping cart, secure payment integration, and real-time inventory tracking.",
          image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
          tags: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
          github: "https://github.com/afnersirait/ecommerce-platform",
        },
      ],
    },
  ];

  const allProjects = categories.flatMap((cat) => cat.projects);
  const displayProjects = activeCategory === "all" 
    ? allProjects 
    : categories.find((cat) => cat.id === activeCategory)?.projects || [];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Portfolio
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-cyan-500 to-teal-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my projects showcasing expertise across data, DevOps, cloud, and web development.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up">
            <Button
              variant={activeCategory === "all" ? "default" : "outline"}
              onClick={() => setActiveCategory("all")}
              className="transition-all duration-300"
            >
              All Projects
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="transition-all duration-300 flex items-center gap-2"
              >
                {category.icon}
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(" ")[0]}</span>
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-none hover:-translate-y-2 bg-gradient-to-br from-background to-secondary/20"
              >
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                    {project.github && (
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
