import { useEffect, useRef, useState } from "react";
import styles from "./imageCard.module.css";

interface Props {
  imageUrl: string;
}

export const ImageCard = ({ imageUrl }: Props) => {
  const [error, setError] = useState<string | undefined>();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    drawImageOnCanvas(imageUrl);
  }, []);

  const onError = (e: unknown) => {
    const error = e as Error;
    setError(error.message);
  };

  const drawImageOnCanvas = (imageUrl: string) => {
    try {
      setError(undefined);
      if (!imageUrl) {
        throw new Error("Cannot draw image: image url not found");
      }
      const canvas = canvasRef.current;

      if (canvas) {
        const ctx = canvas.getContext("2d");

        if (ctx) {
          const image = new Image();
          image.src = imageUrl;

          image.onload = () => {
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);
          };
        }
      }
    } catch (e) {
      onError(e);
    }
  };

  const onSaveImage = () => {
    try {
      setError(undefined);
      const canvas = canvasRef.current;
      if (canvas) {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        const name = imageUrl.split("/").pop();
        if (!name) {
          throw new Error("Cannot same image: file name not found");
        }
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (e) {
      onError(e);
    }
  };

  return (
    <div className={styles.imageCard}>
      {error && <p className={styles.error}>{error}</p>}
      <canvas className={styles.canvas} ref={canvasRef} />
      <button onClick={onSaveImage}>Save Image</button>
    </div>
  );
};
