"use client";

import { useState } from "react";

export default function ImageWithFallback({ src, alt, ...props }: { src: string; alt: string } & React.ImgHTMLAttributes<HTMLImageElement>) {
  const [error, setError] = useState(false);

  if (error) {
    return <div className="text-gray-400 text-center">{alt} not available</div>;
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      {...props}
    />
  );
}
