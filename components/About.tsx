"use client";

import { Code, Palette, Rocket, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "DevOps",
      description: "Ensuring smooth deployment, automation, and system reliability through CI/CD and scalable infrastructure.",
    },
    {
      icon: Palette,
      title: "Data Analytics",
      description: "Turning raw data into meaningful insights through analysis, visualization, and actionable reporting.",
    },
    {
      icon: Rocket,
      title: "Fast Performance",
      description: "Optimizing applications for speed and excellent user experience.",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively with cross-functional teams to deliver results.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary/10 via-secondary/5 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-cyan-500 to-teal-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I&apos;m a passionate engineer with a keen eye for data and a love for
              creating impactful solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 2+ years of experience in software engineering (AI, Data, & DevOps), I specialize in
                building modern, and reliable data analytics system. My journey
                in tech started with a curiosity about how things work, which evolved
                into a passion for creating solutions that make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in continuous learning and staying up-to-date with the latest
                technologies and best practices. When I&apos;m not coding, you can find me
                exploring new data technology trends, contributing to open-source projects, or
                sharing knowledge with others.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">What I Do</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Data Engineering and Analytics</span>
                    <span className="text-muted-foreground">90%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[90%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">DevOps & Infrastructure</span>
                    <span className="text-muted-foreground">85%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Analyst</span>
                    <span className="text-muted-foreground">80%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[80%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Project Management</span>
                    <span className="text-muted-foreground">75%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[75%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-background to-secondary/20 hover:-translate-y-2 group animate-scale-in stagger-${index + 1}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-cyan-500/20 text-primary mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
