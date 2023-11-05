import ImageGalleryHeader from "./ImageGalleryHeader";
import ImageBox from "./ImageBox";

export default function ImageGallery() {
  /* logic */

  return (
    <div className="imageGallery_container">
      <div className="imageGallery_layout">
        <div className="imageGallery_header">
          <ImageGalleryHeader />
        </div>
        <div className="imageGallery">
          <ImageBox />
        </div>
      </div>
    </div>
  );
}
