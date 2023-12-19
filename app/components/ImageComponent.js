import Image from "next/image";

export const ImageComponent = ({ cursorPointer, source, onClickEvent }) => (
  <Image
    style={{
      borderRadius: "10px",
      height: "100%",
      width: "100%",
      objectFit: "cover",
      objectPosition: "center",
      cursor: cursorPointer ? "pointer" : "initial"
    }}
    alt=""
    onClick={onClickEvent ? onClickEvent : null}
    src={source}
  ></Image>
);
