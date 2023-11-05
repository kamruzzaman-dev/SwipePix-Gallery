import ImageBoxWithInput from "./ImageBoxWithInput";
import ImageSelectBox from "./ImageSelectBox";

export default function ImageBox() {
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

  return (
    <main className="imageBox_container">
      <ImageBoxWithInput>
        {allImages?.map((image, index) => (
          <ImageSelectBox key={index} image={image} index={index} />
        ))}
      </ImageBoxWithInput>
    </main>
  );
}
