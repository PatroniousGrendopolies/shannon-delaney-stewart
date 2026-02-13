"use client";

import { useState, useCallback } from "react";
import { projects } from "@/lib/projects";
import Link from "next/link";

export default function Home() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const project = projects[projectIndex];
  const image = project.images[imageIndex];

  const nextImage = useCallback(() => {
    setImageIndex((i) => (i + 1) % project.images.length);
  }, [project.images.length]);

  const prevImage = useCallback(() => {
    setImageIndex((i) => (i - 1 + project.images.length) % project.images.length);
  }, [project.images.length]);

  const nextProject = useCallback(() => {
    setProjectIndex((i) => (i + 1) % projects.length);
    setImageIndex(0);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col relative select-none">
      {/* Top bar */}
      <div className="flex items-start justify-between px-8 pt-8 z-10">
        {/* Name - top left */}
        <div className="text-[15px] tracking-wide">
          <Link href="/" className="hover:opacity-60 transition-opacity">
            Shannon Delaney Stewart
          </Link>
        </div>

        {/* Project name - top center */}
        <div
          className="absolute left-1/2 -translate-x-1/2 text-center cursor-pointer hover:opacity-60 transition-opacity"
          onClick={nextProject}
        >
          <div className="text-[15px] tracking-wide">{project.name}</div>
          <div className="text-[12px] text-neutral-400 mt-0.5">
            {project.images.length} images
          </div>
        </div>

        {/* Image counter - top right */}
        <div className="text-[12px] text-neutral-400 tracking-wide">
          {imageIndex + 1} / {project.images.length}
        </div>
      </div>

      {/* Main image area */}
      <div className="flex-1 flex items-center justify-end px-8 relative">
        {/* Left arrow zone */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1/3 z-20 cursor-w-resize"
          onClick={prevImage}
        />
        {/* Right arrow zone */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 z-20 cursor-e-resize"
          onClick={nextImage}
        />

        {/* Image */}
        <div className="w-[58%] h-[75vh] relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={`${project.name} ${imageIndex + 1}`}
            className="w-full h-full object-contain"
            draggable={false}
          />
        </div>
      </div>

      {/* Bottom left links */}
      <div className="absolute bottom-8 left-8 flex flex-col gap-1 text-[15px] z-10">
        <Link
          href="/about"
          className="hover:opacity-60 transition-opacity"
          style={{ color: "var(--accent)" }}
        >
          about
        </Link>
        <a
          href="mailto:shannondelaneystewart@gmail.com"
          className="hover:opacity-60 transition-opacity"
          style={{ color: "var(--accent)" }}
        >
          email
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-60 transition-opacity"
          style={{ color: "var(--accent)" }}
        >
          instagram
        </a>
      </div>
    </div>
  );
}
