export type Project = {
  name: string;
  slug: string;
  collaborator?: string;
  images: string[];
};

export const projects: Project[] = [
  {
    name: "Color Card",
    slug: "color-card",
    images: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&h=800&fit=crop",
    ],
  },
  {
    name: "Sebastian in 360 lighting",
    slug: "sebastian-in-360-lighting",
    images: [
      "/images/sebastian/01.jpg",
      "/images/sebastian/02.jpg",
      "/images/sebastian/03.jpg",
      "/images/sebastian/04.jpg",
    ],
  },
];
