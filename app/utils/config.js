import Image from "next/image";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import methodImg from "../../public/images/kid-and-woman.png";
import goalsImg from "../../public/images/kids-studying.png";
import appImg from "../../public/images/video-preview.png";

const MethodImage = () => (
  <Image
    style={{ height: "100%", objectFit: "contain", objectPosition: "center" }}
    alt=""
    src={methodImg}
  ></Image>
);

const GoalsImage = () => (
  <Image
    style={{ height: "100%", objectFit: "contain", objectPosition: "center" }}
    alt=""
    src={goalsImg}
  ></Image>
);

const MethodCta = () => (
  <Link variant="yellowBg" as={NextLink} href="/metodologia">
    Descubre más
  </Link>
);

const AppPreview = () => (
  <Image
    style={{ height: "100%", objectFit: "contain", objectPosition: "center" }}
    alt=""
    src={appImg}
  ></Image>
);

export const books = [
  {
    id: "nos-conocemos",
    title: "¿Nos conocemos?",
    description: "This is the description",
  },
  {
    id: "prueba",
    title: "¿Nos conocemos?",
    description: "This is the description",
  },
];

export const methodologyTitles = (current) => {
  const data = {
    doman: "Explora nuestro método de enseñanza: Aprende sobre el Método Doman",
    reality: "Lectura que cobra vida: Descubre la Realidad Aumentada",
  };
  return data[current];
};

export const appNavigation = [
  { href: "/", text: "Inicio" },
  { href: "/nosotros", text: "Sobre Nosotros" },
  { href: "/metodologia", text: "Metodología" },
  { href: "/contacto", text: "Contacto" },
  { href: "/libros/nos-conocemos", text: "¿Nos Conocemos?" },
];

export const contactData = [
  { title: "instagram", link: "https://www.instagram.com/cortezamarillo_cr/" },
  { title: "phone", link: "tel:88381532" },
  { title: "email", link: "mailto:hola@cortezamarillo-cr.com" },
];

export const pagesData = {
  home: {
    about: {
      title: "¿Quiénes somos?",
      description:
        "CortezAmarillo es una empresa costarricense de innovación en el ámbito de la educación, específicamente para brindar alternativas de lectura en etapas tempranas de aprendizaje, que combine lectura tradicional con herramientas tecnológicas para lograr un vínculo emocional y una experiencia más placentera.",
    },
    learningMethod: {
      title: "Explora nuestro método de enseñanza",
      description:
        "La Etapa 4 del Método Doman se enfoca en enseñar la lectura a través de tarjetas de palabras, ayudando a reconocer y leer palabras y frases temprano en el desarrollo.",
      media: <MethodImage />,
      cta: [<MethodCta key={1} />],
    },
  },
  about: {
    history: {
      title: "Nuestra historia",
      description:
        "Una editorial encantada. Un equipo creativo, historias y recursos educativos. Acceso universal, imaginación sin fronteras. Compromiso, sonrisas, aprendizaje. Cada página, mundo de posibilidades. Niños, lectura, grandeza.",
    },
    goals: {
      title: "Objetivos",
      description:
        "Buscar constantemente nuevas formas creativas de enseñar a leer, ya sea a través de libros, juegos interactivos, aplicaciones o programas educativos adaptados a las necesidades y preferencias de los niños.",
      media: <GoalsImage />,
    },
  },
  app: {
    title: "Descarga nuestra app",
    media: <AppPreview />,
    description:
      "Sumérgete en el mundo colorido de los animales costarricenses con nuestra aplicación, la cual fusiona la lectura con innovación tecnológica para una experiencia educativa única.",
  },
};
