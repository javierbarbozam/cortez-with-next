import Image from "next/image";
import methodImg from "../../public/images/kid-and-woman.png";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link"

const methodImage = () => (
  <Image
    style={{ height: "100%", objectFit: "contain", objectPosition: "center" }}
    alt=""
    src={methodImg}
  ></Image>
);

const MethodCta = () => {
  return (<Link variant='yellowBg' as={NextLink} href="/metodologia">Descubre más</Link>)
}

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
      media: methodImage(),
      cta: [<MethodCta key={1}/>]
    },
  },
};
