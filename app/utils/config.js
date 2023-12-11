import Image from "next/image";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import methodImg from "../../public/images/kid-and-woman.png";
import goalsImg from "../../public/images/kids-studying.png";
import appImg from "../../public/images/video-preview.png";

const ImageComponent = ({ source }) => (
  <Image
    style={{
      borderRadius: "10px",
      height: "100%",
      width: "100%",
      objectFit: "cover",
      objectPosition: "center",
    }}
    alt=""
    src={source}
  ></Image>
);

const MethodCta = () => (
  <Link variant="yellowBg" as={NextLink} href="/metodologia">
    Descubre más
  </Link>
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
      media: <ImageComponent source={methodImg} />,
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
      media: <ImageComponent source={goalsImg} />,
    },
    mission: {
      title: "Misión",
      description:
        "En Cortez Amarillo, inspiramos a los niños a través de recursos educativos innovadores, fomentando la pasión por la lectura y la alfabetización en todos los rincones.",
      media: <ImageComponent source={goalsImg} />,
    },
    vision: {
      title: "Visión",
      description:
        "Visualizamos un mundo donde cada niño, sin importar su origen, descubra la riqueza de las palabras, desarrollando una pasión duradera por la lectura, y buscamos expandir nuestro impacto educativo hacia nuevas audiencias",
    },
  },
  methodology: {
    augmented_reality: {
      title: "Lectura que Cobre Vida: Descubre la Realidad Aumentada",
      description:
        "La realidad aumentada (RA) redefine la interacción entre el mundo físico y digital al proporcionar una experiencia sensorial única. A través de dispositivos como smartphones y tabletas, la RA en Cortez Amarillo permite escanear las páginas para revelar animaciones cautivadoras de los elementos ilustrados. Además, se complementa con música y sonidos que dan vida al texto, creando una experiencia de lectura inmersiva y multisensorial. Esta tecnología lleva la narrativa y la educación a un nuevo nivel al transformar los libros en portales dinámicos durante la lectura.",
    },
    doman: {
      title:
        "Explora nuestro método de enseñanza: Aprende sobre el Método Doman",
      description: [
        "El método Doman, aboga por la estimulación temprana y el desarrollo cognitivo en niños, CortezAmarillo con esto ofrece una experiencia educativa que integra magistralmente la tradición con la innovación. Glenn Doman, pionero en el campo de la educación temprana, propuso un enfoque que destaca la importancia de estimular los sentidos desde una edad temprana para potenciar el aprendizaje. Este principio se refleja en la esencia de CortezAmarillo, donde las páginas no solo están bellamente ilustradas, sino que también se han diseñado con elementos interactivos para una mejor lectura",
        "La mezcla única entre el método Doman y las nuevas ideas en CortezAmarillo no es solo sobre enseñar cosas; está diseñada para hacer que a los niños les encante explorar y aprender. Queremos que descubran más allá de lo que aprenden en la escuela, ayudándolos a crecer de una manera que abarque todo, más allá de las aulas. Cada libro no es solo un libro, es como un amigo que te lleva en un viaje educativo, mostrándote un mundo donde aprender es mágico y descubrir es parte de la realidad.",
      ],
    },
  },
  app: {
    title: "Descarga nuestra app",
    media: <ImageComponent source={appImg} />,
    description:
      "Sumérgete en el mundo colorido de los animales costarricenses con nuestra aplicación, la cual fusiona la lectura con innovación tecnológica para una experiencia educativa única.",
  },
};
