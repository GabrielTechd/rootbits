import { Code2, Eye, Layers, LayoutTemplate, Target, Zap } from "lucide-react";

// Importando ícones oficiais de marcas
import {
  SiAmazonaws,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiGo,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
export const aboutContent = {
  tag: "Sobre nós",
  title: "Criamos soluções digitais que resolvem problemas reais",
  cta: {
    label: "Veja nossos serviços",
    href: "/services",
  },
  description:
    "Somos focados em desenvolvimento de sites, sistemas e automações que realmente funcionam no mundo real. Nada de solução bonita e inútil. Aqui a prioridade é performance, clareza e resultado.",

  highlights: [
    {
      title: "Foco em negócio",
      description:
        "Cada linha de código tem um motivo claro: gerar valor e retorno financeiro.",
      icon: Target,
    },
    {
      title: "Soluções sob medida",
      description:
        "Nada de template genérico que não resolve seu problema específico.",
      icon: LayoutTemplate,
    },
    {
      title: "Código limpo",
      description:
        "Arquitetura organizada, fácil de manter e escalar no futuro.",
      icon: Code2,
    },
    {
      title: "Performance obsessiva",
      description:
        "Otimização extrema. Sites lentos perdem clientes, os nossos voam.",
      icon: Zap,
    },
    {
      title: "Transparência total",
      description:
        "Sem 'technobabble'. Você entende o que está pagando e acompanha o processo.",
      icon: Eye,
    },
    {
      title: "Design funcional",
      description:
        "Beleza orientada à conversão. Interfaces que transformam visitantes em clientes.",
      icon: Layers,
    },
  ],

  technologies: [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Go", icon: SiGo, color: "#00ADD8" },
    { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
    { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
  ],
};
