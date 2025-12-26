"use client";

import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfilePicture from "@/components/ProfilePicture";
import DownloadResumeButton from "@/components/DownloadResumeButton";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20"
    >
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-5 animate-fade-in">
          {/* Profile Picture */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <ProfilePicture size="lg" animated={true} />
          </div>

          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Hi, I'm <span className="text-primary">Afner Sirait</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-muted-foreground">
              Data and DevOps Engineer
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
              Data & DevOps Engineer with 2+ years of experience in data architecture, ETL pipelines, analytics, and DevOps. Engineering graduate from Universitas Gadjah Mada. Currently AI & Data Analyst at Feedloop.ai, focused on solving problems and creating impactful data solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-2">
            <Button
              size="default"
              onClick={() => scrollToSection("#portfolio")}
              className="group text-sm sm:text-base w-full sm:w-auto"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <DownloadResumeButton size="default" variant="default" className="w-full sm:w-auto text-sm sm:text-base" />
            <Button
              size="default"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="text-sm sm:text-base w-full sm:w-auto"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-3 pt-3 sm:pt-4">
            <a
              href="https://github.com/afnersirait"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/afnersirait/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            {/* <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
            </a> */}
            <a
              href="mailto:afnersirait@gmail.com"
              className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Email"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/10 to-cyan-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-200/10 to-teal-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-slate-200/8 to-blue-200/8 rounded-full blur-2xl animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
