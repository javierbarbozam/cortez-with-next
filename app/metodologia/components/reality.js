import { AppCard } from "@/app/components/Card/AppCard";
import { AspectRatio, Text } from "@chakra-ui/react";

export const Reality = () => {
  return (
    <>
      <Text>
        La realidad aumentada (RA) redefine la interacción entre el mundo físico
        y digital al proporcionar una experiencia sensorial única. A través de
        dispositivos como smartphones y tabletas, la RA permite escanear las
        páginas para revelar animaciones cautivadoras de los elementos
        ilustrados. Además, se complementa con música y sonidos que dan vida al
        texto, creando una experiencia de lectura inmersiva y multisensorial.
        Esta tecnología lleva la narrativa y la educación a un nuevo nivel al
        transformar los libros en portales dinámicos durante la lectura.{" "}
      </Text>
      <AspectRatio maxW="560px" ratio={16/9}>
        <iframe
          title="naruto"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          allowFullScreen
        />
      </AspectRatio>
      <AppCard />
    </>
  );
};
