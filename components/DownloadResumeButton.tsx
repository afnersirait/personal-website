"use client";

import { Download, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface DownloadResumeButtonProps {
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  showIcon?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const DownloadResumeButton = ({
  variant = "default",
  size = "lg",
  showIcon = true,
  className = "",
  fullWidth = false,
}: DownloadResumeButtonProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  // Resume file path - update this with your actual resume filename
  const resumePath = "/resume/Afner_Sirait_Resume.pdf";

  const handleDownload = async () => {
    try {
      setIsDownloading(true);

      // Create a temporary anchor element to trigger download
      const link = document.createElement("a");
      link.href = resumePath;
      link.download = "Afner_Sirait_Resume.pdf"; // Filename for download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show success state
      setIsDownloaded(true);
      setTimeout(() => {
        setIsDownloaded(false);
      }, 3000);
    } catch (error) {
      console.error("Error downloading resume:", error);
      alert("Failed to download resume. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const getButtonContent = () => {
    if (isDownloaded) {
      return (
        <>
          {showIcon && <CheckCircle className="mr-2 h-5 w-5" />}
          Downloaded!
        </>
      );
    }

    if (isDownloading) {
      return (
        <>
          {showIcon && (
            <Download className="mr-2 h-5 w-5 animate-bounce" />
          )}
          Downloading...
        </>
      );
    }

    return (
      <>
        {showIcon && <Download className="mr-2 h-5 w-5" />}
        Download Resume
      </>
    );
  };

  return (
    <Button
      size={size}
      variant={variant}
      onClick={handleDownload}
      disabled={isDownloading}
      className={`group transition-all duration-300 ${
        fullWidth ? "w-full" : ""
      } ${
        isDownloaded
          ? "bg-green-600 hover:bg-green-700"
          : ""
      } ${className}`}
    >
      {getButtonContent()}
    </Button>
  );
};

export default DownloadResumeButton;
