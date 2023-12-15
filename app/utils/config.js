import Image from "next/image";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import methodImg from "../../public/images/method-img.webp";
import objectivesImg from "../../public/images/objectives.webp";
import appImg from "../../public/images/download-app.webp";
import visionImg from "../../public/images/vision-img.webp";
import missionImg from "../../public/images/mission-img.webp";
import domanFirstImg from "../../public/images/doman-first-img.webp";
import domanSecondImg from "../../public/images/doman-second-img.webp";
import nosConocemosBook from "../../public/images/book-crAnimals.png";
import { AppStoreLink, GooglePlayLink } from "../components/StoreLink";

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

const BuyBtn = () => (
  <Link variant="yellowBg" as={NextLink} href="/checkout">
    ¡compralo ahora!
  </Link>
);

export const books = [
  {
    id: "nos-conocemos",
    title: "¿Nos conocemos?",
    subtitle: "Sobre el libro",
    description:
      "Con este libro creás una conexión emocional a través de la lectura.\n\
    Descubre cómo combinamos lo tradicional y lo tecnológico para crear un vínculo único en las etapas tempranas del aprendizaje. Únete a nosotros en este viaje lleno de historias y descubrimientos.",
    price: "Ordénalo a tan solo: ₡21.000",
    media: <ImageComponent source={nosConocemosBook} />,
    cta: [<BuyBtn key={2} />],
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
        "CortezAmarillo es una empresa costarricense de innovación en el ámbito de la educación, específicamente para brindar alternativas de lectura en etapas tempranas de aprendizaje, que combine lectura tradicional con herramientas tecnológicas para lograr un vínculo emocional y una experiencia más divertida.",
    },
    learningMethod: {
      title: "Explora nuestro método de enseñanza",
      description:
        "El libro está diseñado en su totalidad para que se construya una experiencia positiva y divertida alrededor de la incursión en la lectura.  El uso de frases cortas y sencillas, la rima y la temática, fueron escogidos y probados con grupos de niños en etapas iniciales de aprendizaje de lectura con resultados muy positivos.",
      media: <ImageComponent source={methodImg} />,
      cta: [<MethodCta key={1} />],
    },
  },
  about: {
    history: {
      title: "Nuestra historia",
      description:
        "Durante la pandemia del 2020, al presenciar el desafío de mi hija en aprender a leer desde casa, noté la falta de interés de los niños por la lectura. Descubrí que el 75% de los alumnos de primaria en Costa Rica enfrenta dificultades en comprensión lectora, una estadística preocupante. Estudios del MIT revelan la efectividad de combinar imagen, texto y audio, siendo un 80% más memorable que solo texto. Estas reflexiones me motivaron a crear un libro que haga la lectura emocionante. Planeo usar realidad aumentada para explorar frases, rimas y un vasto mundo de conocimiento."
    },
    goals: {
      title: "Objetivos",
      description:
        "Buscar constantemente nuevas formas creativas de enseñar a leer, ya sea a través de libros, juegos interactivos, aplicaciones o programas educativos adaptados a las necesidades y preferencias de los niños.",
      media: <ImageComponent source={objectivesImg} />,
    },
    mission: {
      title: "Misión",
      description:
        "Nuestra misión es apoyar a los papás, mamás, tíos y tías, y encargados de los niños/as para que el proceso de aprender a leer sea lúdico, divertido y eficiente.  ",
      media: <ImageComponent source={missionImg} />,
    },
    vision: {
      title: "Visión",
      description:
        "Nuestra visión  es incentivar la lectura como pilar del aprendizaje, a partir del uso de nuevas tecnologías, que conecten y vinculen a los niños, de manera lúdica, con el deseo de leer.",
      media: <ImageComponent source={visionImg} />,
    },
  },
  methodology: {
    augmented_reality: {
      title: "Lectura que Cobre Vida: Descubre la Realidad Aumentada",
      description:
        "La Realidad Aumentada (RA) fusiona ambientes virtuales con el mundo físico mediante dispositivos como teléfonos móviles y tabletas. Sus características clave incluyen la fusión entre el mundo real y virtual. Al escanear las páginas de los libros de CortezAmarillo con un dispositivo móvil, aparecen elementos ilustrados con animaciones, música y sonidos que complementan el texto. La experiencia contribuye a que los niños recuerden mejor lo que leen y los motiva a seguir el proceso de lectura.",
    },
    doman: {
      title: "Explora nuestro método de enseñanza: Aprende sobre el Método Doman",
      description: [
        "Nuestra redacción se inspira en el método DOMAN para la enseñanza de la lectura. Creado por el médico Glenn Doman, este método busca aprovechar al máximo las capacidades del niño al leer una palabra y comprender su significado. A diferencia del enfoque fonético, común en muchos centros educativos, este método asegura la comprensión al leer, evitando una lectura mecánica y lenta a largo plazo, algo ineficiente para aquellos que leen sin comprensión.",
        "El libro está diseñado para crear una experiencia positiva y divertida en torno a la lectura. Frases simples de SUJETO+VERBO+COMPLEMENTO, cortas, rima y temática fueron seleccionadas y probadas con niños en etapas iniciales de aprendizaje, con resultados muy positivos. El uso de la experiencia interactiva se añade como un factor divertido que involucre las emociones de los niños y les invite a volver al libro."
      ],
      media: [<ImageComponent key={0} source={domanFirstImg} />, <ImageComponent key={1} source={domanSecondImg} />]
    },
  },
  app: {
    title: "Descarga nuestra app",
    media: <ImageComponent source={appImg} />,
    description:
      "Sumérgete en el mundo colorido de los animales costarricenses con nuestra aplicación, la cual fusiona la lectura con innovación tecnológica para una experiencia educativa única.",
    cta: [<AppStoreLink key={0} />, <GooglePlayLink key={1} />],
  },
};
