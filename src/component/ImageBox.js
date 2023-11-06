import ImageBoxWithInput from "./ImageBoxWithInput";
import ImageSelectBox from "./ImageSelectBox";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableImage } from "./SortableImage";

const ImageBox = ({
  items,
  setItems,
  activeId,
  setActiveId,
  handleImageUpload,
  isSelect,
  handleSelect,
}) => {
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active && over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }

  function handleDragCancel() {
    setActiveId(null);
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <div className="imageBox_container">
          <ImageBoxWithInput handleImageUpload={handleImageUpload}>
            {items?.map((image, index) => (
              <SortableImage
                key={image}
                image={image}
                index={index}
                isSelect={isSelect}
                handleSelect={handleSelect}
              />
            ))}
          </ImageBoxWithInput>
        </div>
      </SortableContext>
      <DragOverlay className="DragOverlay" adjustScale={true}>
        {activeId ? (
          <ImageSelectBox image={activeId} index={items.indexOf(activeId)} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default ImageBox;
