export type Project = {
  name: string;
  slug: string;
  collaborator?: string;
  collaborator2?: string;
  images: string[];
};

export const projects: Project[] = [
  {
    name: "Color Card",
    slug: "color-card",
    images: [
      "/images/color-card/01.jpg",
      "/images/color-card/02.jpg",
      "/images/color-card/03.jpg",
      "/images/color-card/04.jpg",
    ],
  },
  {
    name: "Lighting Map",
    slug: "lighting-map",
    collaborator: "Softbox at 30° up, 5° increments",
    collaborator2: "in collaboration with Aabid Youssef",
    images: [
      "/images/sebastian/01.jpg",
      "/images/sebastian/02.jpg",
      "/images/sebastian/03.jpg",
      "/images/sebastian/04.jpg",
      "/images/sebastian/05.jpg",
      "/images/sebastian/06.jpg",
      "/images/sebastian/07.jpg",
      "/images/sebastian/08.jpg",
      "/images/sebastian/09.jpg",
      "/images/sebastian/10.jpg",
      "/images/sebastian/11.jpg",
    ],
  },
];
