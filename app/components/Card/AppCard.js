import { MediaCard } from "./MediaCard";
import { pagesData } from "@/app/utils/config";

const { app } = pagesData;

export const AppCard = () => (
  <MediaCard
    direction="row-reverse"
    title={app.title}
    info={app.description}
    media={app.media}
    cta={app.cta}
  />
);
