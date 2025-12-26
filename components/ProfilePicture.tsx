"use client";

import Image from "next/image";
import { User } from "lucide-react";

interface ProfilePictureProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showBorder?: boolean;
  animated?: boolean;
}

const ProfilePicture = ({
  size = "md",
  className = "",
  showBorder = true,
  animated = true,
}: ProfilePictureProps) => {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32",
    lg: "w-48 h-48",
    xl: "w-64 h-64",
  };

  const iconSizes = {
    sm: 48,
    md: 64,
    lg: 96,
    xl: 128,
  };

  // Check if profile image exists, otherwise show placeholder
  const hasProfileImage = true; // Set to true when you add your image

  return (
    <div className={`relative ${className}`}>
      {/* Animated ring effect */}
      {animated && showBorder && (
        <div
          className={`absolute inset-0 ${sizeClasses[size]} rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-spin-slow opacity-75 blur-sm`}
        ></div>
      )}

      {/* Main container */}
      <div className="relative">
        {/* Border ring */}
        {showBorder && (
          <div
            className={`absolute inset-0 ${sizeClasses[size]} rounded-full bg-gradient-to-br from-primary to-purple-600 p-1`}
          >
            <div className="w-full h-full rounded-full bg-background"></div>
          </div>
        )}

        {/* Profile image container */}
        <div
          className={`relative ${sizeClasses[size]} ${
            showBorder ? "p-1" : ""
          } ${animated ? "hover:scale-105 transition-transform duration-300" : ""}`}
        >
          <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-purple-600/20 shadow-2xl">
            {hasProfileImage ? (
              <Image
                src="/images/profile.jpg" // Your profile image path
                alt="Afner Sirait"
                fill
                className="object-cover"
                priority
                sizes={`${iconSizes[size]}px`}
              />
            ) : (
              // Placeholder with elegant icon
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-purple-600/10">
                <User
                  className="text-primary/50"
                  size={iconSizes[size]}
                  strokeWidth={1.5}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      {animated && (
        <>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-300"></div>
        </>
      )}
    </div>
  );
};

export default ProfilePicture;
