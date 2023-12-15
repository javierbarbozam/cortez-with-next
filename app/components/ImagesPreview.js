"use client";

import {
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { ImageComponent } from "./ImageComponent";
import previewImg1 from "../../public/images/book-preview1.webp";
import previewImg2 from "../../public/images/book-preview2.webp";
import previewImg3 from "../../public/images/book-preview3.webp";
import previewImg4 from "../../public/images/book-preview4.webp";
import { useState } from "react";

const images = [previewImg1, previewImg2, previewImg3, previewImg4];

export const ImagesPreview = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [currentImage, setcurrentImage] = useState(null);
  return (
    <>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        gap="20px"
      >
        {images.map((element, index) => (
          <ImageComponent
            cursorPointer={true}
            onClickEvent={() => {
              onOpen();
              setcurrentImage(element);
            }}
            key={index}
            source={element}
          />
        ))}
      </Grid>
      <Modal size={{base: "xs", sm: "md", md: "2xl"}} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <ImageComponent source={currentImage}></ImageComponent>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
