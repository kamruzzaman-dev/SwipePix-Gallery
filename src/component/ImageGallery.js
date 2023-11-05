import ImageGalleryHeader from "./ImageGalleryHeader";
import ImageBox from "./ImageBox";
import { useState } from "react";

const allImages = [
  "./image/image-1.webp",
  "./image/image-2.webp",
  "./image/image-3.webp",
  "./image/image-4.webp",
  "./image/image-5.webp",
  "./image/image-6.webp",
  "./image/image-7.webp",
  "./image/image-8.webp",
  "./image/image-9.webp",
  "./image/image-10.jpeg",
  "./image/image-11.jpeg",
];

export default function ImageGallery() {
  /* logic */
  const [images, setImages] = useState(allImages);
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="imageGallery_container">
      <div className="imageGallery_layout">
        <div className="imageGallery_header">
          <ImageGalleryHeader />
        </div>
        <div className="imageGallery">
          <ImageBox
            images={images}
            setImages={setImages}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        </div>
      </div>
    </div>
  );
}
