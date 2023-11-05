import { useSortable } from "@dnd-kit/sortable";

export default function ImageSelectBox({ image, index }) {
  const sortable = useSortable({ id: image });

  const { attributes, listeners, setNodeRef } = sortable;
  
  return (
    <div
      ref={setNodeRef}
      className={`${index === 0 ? "large_image_div" : " normal_image_div"}`}
    >
      <img
        src={image}
        alt={`Image ${index + 1}`}
        className={`${index === 0 ? "large_image" : "normal_image"} `}
      />
    </div>
  );
}
