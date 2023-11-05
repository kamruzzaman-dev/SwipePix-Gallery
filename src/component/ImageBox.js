import ImageBoxWithInput from "./ImageBoxWithInput";
import ImageSelectBox from "./ImageSelectBox";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

export default function ImageBox({ images, setImages, activeId, setActiveId }) {
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active && over && active.id !== over.id) {
      setImages((images) => {
        const oldIndex = images.indexOf(active.id);
        const newIndex = images.indexOf(over.id);

        return arrayMove(images, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext images={images} strategy={rectSortingStrategy}>
        <main className="imageBox_container">
          <ImageBoxWithInput>
            {images?.map((image, index) => (
              <ImageSelectBox key={index} image={image} index={index} />
            ))}
          </ImageBoxWithInput>
        </main>
      </SortableContext>
    </DndContext>
  );
}
