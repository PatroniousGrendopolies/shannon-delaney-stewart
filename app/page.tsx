"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import Link from "next/link";

function ProjectSection({ project, index }: { project: typeof projects[0]; index: number }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((i) => (i + 1) % project.images.length);
  const prevImage = () => setCurrentImage((i) => (i - 1 + project.images.length) % project.images.length);

  return (
    <div className="flex min-h-screen border-b border-neutral-100 last:border-b-0">
      {/* Left column - project info */}
      <div className="w-[30%] flex flex-col justify-center px-8 lg:px-12">
        <h2 className="text-[15px] lg:text-[17px] leading-snug mb-1">
          {project.name}
        </h2>
        {project.collaborator && (
          <p className="text-[13px] text-neutral-400 mb-2">{project.collaborator}</p>
        )}
        <p className="text-[13px] text-neutral-400">
          {currentImage + 1} / {project.images.length}
        </p>
      </div>

      {/* Right column - image */}
      <div className="w-[70%] flex items-center justify-center py-8 pr-8 lg:pr-12 relative">
        <div className="relative w-full h-[85vh] cursor-pointer" onClick={nextImage}>
          {/* Left click zone */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1/3 z-10 cursor-w-resize"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.images[currentImage]}
            alt={`${project.name} ${currentImage + 1}`}
            className="w-full h-full object-contain"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative">
      {/* Fixed name - top left */}
      <div className="fixed top-8 left-8 lg:left-12 z-50 text-[15px] tracking-wide">
        <Link href="/" className="hover:opacity-60 transition-opacity">
          Shannon Delaney Stewart
        </Link>
      </div>

      {/* Fixed links - bottom left */}
      <div className="fixed bottom-8 left-8 lg:left-12 z-50 flex flex-col gap-1 text-[13px]">
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

      {/* Scrollable project feed */}
      <div>
        {projects.map((project, i) => (
          <ProjectSection key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
