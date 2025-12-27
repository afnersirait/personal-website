"use client";

import { Briefcase, GraduationCap, Award, BadgeCheck, Cloud, Database, Container, Users, Languages } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import DownloadResumeButton from "@/components/DownloadResumeButton";

const Resume = () => {
  const experiences = [
    {
      title: "AI & Data Analyst",
      company: "Feedloop.ai",
      period: "Sep 2025 - Present",
      description:
        "Responsible for designing data architecture, developing data pipelines, building data models, and performing analytical workflows to support data-driven decision-making. Ensure data quality, security, and compliance across data processes and systems.",
      achievements: [
        "Designed and implemented data architecture aligned with business requirements and best practices.",
        "Collected, cleaned, and analyzed datasets to generate actionable insights for product and business decision-making.",
        "Designed and developed data models to support analytical needs and reporting.",
        "Developed end-to-end data pipelines for automated extraction, transformation, and loading processes.",
        "Implemented and maintained data quality standards, ensuring integrity, security, and compliance with organizational and regulatory requirements.",
      ],
    },
    {
      title: "DevOps Engineer",
      company: "Feedloop.ai",
      period: "Jun 2025 - Oct 2025",
      description:
        "Responsible for managing and optimizing cloud infrastructure and deployment workflows, ensuring system reliability, scalability, and security. Supported development teams through automation and CI/CD implementation to streamline product delivery and operational efficiency.",
      achievements: [
        "Troubleshot and resolved infrastructure and application issues to maintain system performance and stability.",
        "Managed containerized applications using Docker and Kubernetes (GKE/EKS/AKS), ensuring high availability and scalability.",
        "Collaborated with development teams to optimize build, test, and release workflows, improving deployment velocity.",
        "Managed secrets and security policies, ensuring safe and compliant operations in production environments.",
        "Designed, implemented, and maintained CI/CD pipelines using modern automation tools to enhance deployment efficiency.",
      ],
    },
    {
      title: "AI & Data Analyst",
      company: "Deloitte Consulting SEA",
      period: "Jan 2023 - Jun 2025",
      description:
        "Worked across multiple enterprise-level projects as a Data Engineer, Business Analyst, and DevOps Engineer. Involved in building large-scale data pipelines, developing ELT frameworks, designing analytical systems, and supporting cloud/on-premise infrastructure. Delivered solutions for major property, credit scoring, and banking companies in Indonesia.",
      achievements: [
        "Conducted reverse engineering of the existing Customer-360 Dashboard pipeline built on Azure Synapse & Azure Data Factory.",
        "Designed target-state end-to-end data pipeline architecture to modernize the analytical ecosystem.",
        "Developed new end-to-end ELT pipelines in Microsoft Fabric utilizing multi-layer architecture: Bronze: Raw ingestion, Silver: Cleansed & standardized data, Gold: Data warehouse & data mart",
        "Built and implemented orchestration system & data quality framework to maintain data reliability.",
        "Conducted data transformation and pipeline testing for accuracy and performance validation.",
        "Performed data & system exploration for new scoring engine development.",
        "Analyzed business logic requirements for integration into the scoring engine.",
        "Designed Entity Relationship Diagram (ERD) for the new scoring engine database.",
        "Conducted data preparation, validation, and test execution to ensure correctness & business alignment.",
        "Configured servers based on new scoring engine specifications.",
        "Installed on-premise Kubernetes cluster including Container-D, Docker, ETCD, NFS, HA PostgreSQL+Patroni, and HA Proxy.",
        "Deployed SAS Viya 4 on Kubernetes and integrated supporting components.",
        "Implemented logging & monitoring platform using Prometheus, Grafana & OpenSearch.",
        "Designed & implemented CI/CD pipelines using Jenkins, Docker, and GitLab.",
        "Provided troubleshooting support for Kubernetes and SAS Viya backend systems.",
        "Developed ETL pipelines in SAP HANA using Stored Procedures, Flow Graphs & Calculation Views to support business analytics dashboards.",
      ],
    },
    {
      title: "AI & Data Analyst Intern",
      company: "Deloitte Consulting SEA",
      period: "May 2022 - Jul 2022",
      description:
        "Supported data migration and validation activities for enterprise systems, focusing on database migration from on-premise to cloud environments. Learned and applied data analysis techniques using Excel, Python, and SQL.",
      achievements: [
        "Utilized Microsoft Excel and Python for data cleansing, preprocessing, and exploratory analysis.",
        "Learned and assisted in Stored Procedure migration from PostgreSQL (AWS) to Snowflake environment.",
        "Performed data validation using SQL to compare and synchronize logic between on-premise SQL Server and Snowflake migrated databases.",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Electrical Engineering",
      institution: "Universitas Gadjah Mada",
      period: "2018 - 2022",
      description: "Graduated with Cum Laude. Focus on Control and Instrumentation engineering, AI&Data Analytics Engineering.",
    },
  ];

  const skills = {
    "Programming Languages": ["SQL", "Python", "YAML", "Bash/Shell"],
    "Data:": ["Azure Data Factory", "Microsoft Fabric", "Prefect", "DLT Hub", "SAP HANA DB", "PostgreDB", "MySQLDB", "AWS Redshift", "PowerBI"],
    "DevOps": ["Kubernetes", "Docker", "Container-D", "Jenkins", "GitLab", "Github", "Azure DevOps"],
    "Analysis": ["Ms. Excel", "Google Collab", "PowerBI", "Ms. Power Point", "Ms. Word"],
    "Project Management": ["Notion", "Ms. Teams", "Azure DevOps"],
  };

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-CSA-123456",
      url: "https://aws.amazon.com/certification/",
      icon: Cloud,
    },
    {
      name: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      credentialId: "CKA-345678",
      url: "https://www.cncf.io/certification/cka/",
      icon: Container,
    },
    {
      name: "Google Cloud Generative AI Specialist",
      issuer: "Google",
      date: "2024",
      credentialId: "PSM-901234",
      url: "https://www.scrum.org/",
      icon: Users,
    },
  ];

  const languages = [
    {
      name: "English",
      proficiency: "Professional Working Proficiency",
      level: 85,
    },
    {
      name: "Indonesian",
      proficiency: "Native or Bilingual Proficiency",
      level: 100,
    },
    {
      name: "Japan",
      proficiency: "Elementary Proficiency",
      level: 40,
    },
  ];

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Resume
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-cyan-500 to-teal-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              My professional journey, education, and technical expertise.
            </p>
            <DownloadResumeButton size="lg" variant="default" />
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold">Work Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-l-4 border-l-primary hover:shadow-xl transition-all duration-300 hover:-translate-x-1 bg-gradient-to-r from-background to-secondary/10 group">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                      <Badge variant="secondary" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">▸</span>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <p className="text-primary font-semibold">{edu.institution}</p>
                      </div>
                      <Badge variant="secondary" className="w-fit">
                        {edu.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Award className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold">Skills & Technologies</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle className="text-lg">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <BadgeCheck className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{cert.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Issued:</span>
                          <span className="font-medium">{cert.date}</span>
                        </div>
                        {cert.credentialId && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">ID:</span>
                            <span className="font-mono text-xs">{cert.credentialId}</span>
                          </div>
                        )}
                        {cert.url && (
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-primary hover:underline mt-2"
                          >
                            View Certificate →
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Languages Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Languages className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold">Languages</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {languages.map((language, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{language.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{language.proficiency}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Proficiency</span>
                        <span className="font-semibold text-primary">{language.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-primary h-full rounded-full transition-all duration-500"
                          style={{ width: `${language.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
