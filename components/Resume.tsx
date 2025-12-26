"use client";

import { Briefcase, GraduationCap, Award, BadgeCheck, Cloud, Database, Container, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import DownloadResumeButton from "@/components/DownloadResumeButton";

const Resume = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description:
        "Leading development of enterprise-scale web applications using React, Node.js, and cloud technologies. Mentoring junior developers and establishing best practices.",
      achievements: [
        "Improved application performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client projects using modern web technologies. Collaborated with designers and product managers to deliver high-quality solutions.",
      achievements: [
        "Delivered 15+ successful projects",
        "Reduced bug reports by 60%",
        "Introduced automated testing",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Startup Ventures",
      period: "2018 - 2020",
      description:
        "Built responsive and interactive user interfaces for various web applications. Focused on creating exceptional user experiences.",
      achievements: [
        "Increased user engagement by 35%",
        "Optimized load times by 50%",
        "Implemented responsive design system",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      period: "2014 - 2018",
      description: "Graduated with honors. Focus on software engineering and web technologies.",
    },
  ];

  const skills = {
    "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    "Backend": ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    "DevOps": ["Docker", "AWS", "CI/CD", "Kubernetes", "Git"],
    "Tools": ["Figma", "VS Code", "Postman", "Jira", "Slack"],
  };

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-CSA-123456",
      url: "https://aws.amazon.com/certification/",
      icon: Cloud,
    },
    {
      name: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-PDE-789012",
      url: "https://cloud.google.com/certification",
      icon: Database,
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-345678",
      url: "https://www.cncf.io/certification/cka/",
      icon: Container,
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2022",
      credentialId: "PSM-901234",
      url: "https://www.scrum.org/",
      icon: Users,
    },
  ];

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Resume</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
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
                <Card key={index} className="border-l-4 border-l-primary">
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
        </div>
      </div>
    </section>
  );
};

export default Resume;
