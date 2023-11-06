import { useSortable } from "@dnd-kit/sortable";
import ImageSelectBox from "./ImageSelectBox";

export const SortableImage = (props) => {
  const sortable = useSortable({ id: props.image });
  const { attributes, listeners, setNodeRef } = sortable;

  return (
    <ImageSelectBox
      ref={setNodeRef}
      {...props}
      {...attributes}
      {...listeners}
    />
  );
};
