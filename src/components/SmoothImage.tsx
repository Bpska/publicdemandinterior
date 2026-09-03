"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

export default function SmoothImage({
  className = "",
  onLoad,
  ...props
}: ImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      className={`transition-all duration-700 ease-out ${
        isLoading
          ? "scale-[1.03] blur-md opacity-80"
          : "scale-100 blur-0 opacity-100"
      } ${className}`}
      onLoad={(e) => {
        setLoading(false);
        if (onLoad) onLoad(e);
      }}
      {...props}
    />
  );
}
