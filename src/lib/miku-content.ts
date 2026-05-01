import { CalendarDays, Mic2, Music2, Sparkles } from "lucide-react";

type Accent = "cyan" | "pink" | "yellow";

type RouteInfo = {
  href: string;
  label: string;
  title: string;
  eyebrow: string;
  description: string;
  accent: Accent;
  icon: typeof Mic2;
  highlights: string[];
  sections: {
    title: string;
    body: string;
  }[];
};

export const routes: RouteInfo[] = [
  {
    href: "/hatsune-miku",
    label: "Hatsune Miku",
    title: "Hatsune Miku",
    eyebrow: "Virtual singer",
    description:
      "A character voice software and digital pop icon known for turquoise twin tails, fan-created songs, live concerts, games, artwork, and a worldwide creative community.",
    accent: "cyan",
    icon: Mic2,
    highlights: ["Voice synthesis", "Fan-made music", "Virtual concerts"],
    sections: [
      {
        title: "Who she is",
        body:
          "Hatsune Miku is a virtual singer developed by Crypton Future Media. Instead of being a traditional celebrity, she works as a creative platform: producers, illustrators, animators, and fans build songs, visuals, stories, and performances around her.",
      },
      {
        title: "Why she matters",
        body:
          "Miku became a symbol of participatory pop culture. Many of her most famous songs started as independent online projects, then moved into concerts, rhythm games, merchandise, and global events.",
      },
      {
        title: "Signature style",
        body:
          "Her futuristic design, bright cyan palette, and twin-tail silhouette make her instantly recognizable. The visual language around Miku often mixes electronic music, stage lights, city pop, arcade energy, and fan art.",
      },
    ],
  },
  {
    href: "/magical-mirai",
    label: "Magical Mirai",
    title: "Magical Mirai",
    eyebrow: "Concert and exhibition",
    description:
      "An annual event that combines Hatsune Miku concerts, exhibitions, creative booths, goods, art, music announcements, and community celebration.",
    accent: "pink",
    icon: Sparkles,
    highlights: ["Concert shows", "Exhibition booths", "New visuals"],
    sections: [
      {
        title: "Event format",
        body:
          "Magical Mirai usually blends a live concert with an exhibition area. The concert focuses on music and performance, while the exhibition highlights artwork, products, collaborations, and fan culture.",
      },
      {
        title: "Main visual",
        body:
          "Each edition has a main visual and theme direction. That identity shapes the event website, stage mood, merchandise, promotional images, and the feeling of the yearly celebration.",
      },
      {
        title: "Community energy",
        body:
          "Fans attend for the music, but also for the shared ritual: penlights, costumes, collectibles, artist booths, and the excitement of seeing online creativity become a physical event.",
      },
    ],
  },
  {
    href: "/vocaloid-culture",
    label: "Vocaloid Culture",
    title: "Vocaloid Culture",
    eyebrow: "Music ecosystem",
    description:
      "A creative scene built around voice synthesis, independent producers, online collaboration, remix culture, rhythm games, covers, illustrations, and character-driven storytelling.",
    accent: "yellow",
    icon: Music2,
    highlights: ["Producers", "Rhythm games", "Online fandom"],
    sections: [
      {
        title: "Producer-driven music",
        body:
          "The culture is strongly shaped by independent producers. A song can begin as a simple upload and later grow through covers, remixes, illustrations, videos, live sets, and game appearances.",
      },
      {
        title: "Characters as instruments",
        body:
          "Virtual singers are not only mascots. They are also musical instruments with recognizable voices, visual identities, and fan interpretations that change from song to song.",
      },
      {
        title: "A remix-friendly world",
        body:
          "The scene encourages reinterpretation. Fans make covers, dances, PVs, fan art, translations, playlists, and live reactions, turning each release into a shared creative conversation.",
      },
    ],
  },
];

export const timeline = [
  {
    year: "2007",
    title: "Miku debuts",
    body: "Hatsune Miku appears as a character voice product and quickly becomes a creative icon online.",
  },
  {
    year: "2010s",
    title: "Concert culture grows",
    body: "Live events and rhythm games help introduce Miku and related virtual singers to global audiences.",
  },
  {
    year: "Today",
    title: "A living fandom",
    body: "New songs, illustrations, covers, games, figures, and events continue to expand the culture.",
  },
];

export const stats = [
  { label: "Creative focus", value: "Music + Art", icon: Music2 },
  { label: "Event mood", value: "Live Stage", icon: CalendarDays },
  { label: "Fandom style", value: "Collaborative", icon: Sparkles },
];
