import React from "react";
import { ImageDTO } from "../../types/test";
import { ImageCard } from "../ImageCard";
import styles from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images?: ImageDTO[];
}

const renderItem = ({ image_url }: ImageDTO) => (
  <ImageCard key={image_url} imageUrl={image_url} />
);

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
}: ImageGalleryProps) => {
  return (
    <>
      <h1>Image Gallery</h1>
      <div className={styles.container}>
        {images ? images.map(renderItem) : <div>No image to display</div>}
      </div>
    </>
  );
};
