"use client";

import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfilePicture from "@/components/ProfilePicture";
import DownloadResumeButton from "@/components/DownloadResumeButton";
import TypingAnimation from "@/components/TypingAnimation";

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-950 dark:via-blue-950/50 dark:to-teal-950/30"
    >
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-12">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-5 animate-fade-in">
          {/* Profile Picture */}
          <div className="flex justify-center mb-6 sm:mb-4">
            <ProfilePicture size="lg" animated={true} />
          </div>

          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight min-h-[1.2em]">
              <TypingAnimation 
                text="Hi, I'm Afner Sirait" 
                className="text-foreground"
                speed={5}
                delay={8}
                highlightText="Afner Sirait"
                highlightClassName="text-primary"
              />
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-muted-foreground">
              Data and DevOps Engineer
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
              2+ years of experience in Data Architecture, ETL pipelines, Analytics, and DevOps. Engineering graduate from Universitas Gadjah Mada. 
              Currently working as AI & Data Analyst at Feedloop.ai.
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
        {/* Large gradient orb - top left */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-400/20 via-cyan-400/15 to-transparent dark:from-blue-500/10 dark:via-cyan-500/8 dark:to-transparent rounded-full blur-3xl animate-pulse"></div>
        
        {/* Large gradient orb - bottom right */}
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-gradient-to-tl from-teal-400/20 via-cyan-400/15 to-transparent dark:from-teal-500/10 dark:via-cyan-500/8 dark:to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Medium gradient orb - center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-cyan-300/15 via-blue-300/10 to-transparent dark:from-cyan-400/8 dark:via-blue-400/6 dark:to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Small accent orbs */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-blue-300/20 to-transparent dark:from-blue-400/10 dark:to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-gradient-to-br from-teal-300/20 to-transparent dark:from-teal-400/10 dark:to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
