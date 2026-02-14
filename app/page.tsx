"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import Link from "next/link";

const textStyle = { fontFamily: '"EB Garamond", serif', fontSize: '0.95rem', fontWeight: 400 };

function ProjectSection({ project }: { project: typeof projects[0] }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((i) => (i + 1) % project.images.length);
  const prevImage = () => setCurrentImage((i) => (i - 1 + project.images.length) % project.images.length);

  return (
    <div className="desktop-layout" style={{ display: 'flex', minHeight: '100vh', padding: '0 1.5rem' }}>
      <div className="col-spacer" style={{ width: '25%' }} />
      <div className="col-project-info" style={{ width: '22%', paddingTop: '1.5rem' }}>
        <div style={{ ...textStyle, lineHeight: '1.25' }}>
          <p><a href="#" style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '1px' }}>{project.name}</a></p>
          {project.collaborator && <p>{project.collaborator}</p>}
          {project.collaborator2 && <p>{project.collaborator2}</p>}
          <p>{project.images.length} images</p>
        </div>
      </div>
      <div className="col-image" style={{ width: '53%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', paddingTop: '1.5rem', minHeight: '100vh' }}>
        <div className="img-container" style={{ position: 'relative', height: '85vh' }}>
          <div
            style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '33%', zIndex: 10, cursor: 'w-resize' }}
            onClick={prevImage}
          />
          <div
            style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '67%', zIndex: 10, cursor: 'e-resize' }}
            onClick={nextImage}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.images[currentImage]}
            alt={`${project.name} ${currentImage + 1}`}
            style={{ height: '100%', width: 'auto', maxWidth: '100%', objectFit: 'contain' }}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

function InfoToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ ...textStyle, marginTop: '-0.15rem' }}>
      <span
        onClick={() => setOpen(!open)}
        style={{ color: '#000', cursor: 'pointer' }}
      >
        info
      </span>
      {open && (
        <div className="info-content" style={{ marginTop: '3rem', lineHeight: '1.35', maxWidth: '280px', textAlign: 'justify' as const }}>
          <p style={{ marginBottom: '0.4rem' }}>
            Shannon Delaney Stewart is a photographer based in Tiohtià:ke, the territory of the
            Kanien&apos;keha:ka (Montréal, Québec). She specializes in portraiture, editorial, and
            e-commerce imagery.
          </p>
          <p style={{ fontStyle: 'italic', marginBottom: '0.15rem', marginTop: '1.2rem' }}>Education</p>
          <p style={{ marginBottom: '0.4rem' }}>Photography BFA, Emily Carr University of Art and Design 2016</p>
          <p style={{ fontStyle: 'italic', marginBottom: '0.15rem', marginTop: '1.2rem' }}>Features&amp;Commissions&amp;Press&amp;Clients</p>
          <p style={{ marginBottom: '0.4rem' }}>
            VOGUE ITALIA, VICE, THE FADER, Lululemon, SSENSE (- Bottega Veneta, Prada, Gucci,
            Diesel, Eckhaus Latta, ERL, Jacquemus, Jil Sander, Maison Margiela, Mowalola, Raf Simons,
            Rick Owens, Vivienne Westwood + more), Rudsak, Porn Hub, Bench, Strawberry Western,
            L&apos;Oeuvre, INDIE, IRL, SNUFF, Curves by Sean Brown....
          </p>
          <p style={{ marginBottom: '0.4rem', marginTop: '1.8rem', textAlign: 'left' as const }}>
            For commissions contact{' '}
            <a href="mailto:shannondelaneystewart@gmail.com" style={{ fontStyle: 'italic' }}>
              shannondelaneystewart@gmail.com
            </a>
          </p>
          <p style={{ marginBottom: '0.4rem', marginTop: '1.5rem' }}>
            <a href="https://www.instagram.com/shannondelaneystewart/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', textUnderlineOffset: '1px' }}>
              Instagram
            </a>
          </p>
          <p style={{ fontWeight: 500, marginTop: '1.5rem' }}>
            Commercial portfolio available upon request
          </p>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Name + info - fixed on desktop, relative on mobile */}
      <div className="fixed-header" style={{ position: 'fixed', top: 0, left: 0, padding: '1.5rem', zIndex: 50 }}>
        <Link href="/" style={{ ...textStyle, color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '1px' }}>
          Shannon Delaney Stewart
        </Link>
        <InfoToggle />
      </div>

      {/* Scrollable project feed */}
      <div>
        {projects.map((project) => (
          <ProjectSection key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
