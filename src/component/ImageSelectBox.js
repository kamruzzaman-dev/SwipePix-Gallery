import { forwardRef } from "react";

const ImageSelectBox = forwardRef(
  ({ image, index, isSelect, handleSelect, ...props }, ref) => {
    const elementStyle = { height: index === 0 ? "19rem" : "9rem" };
    return (
      <div
        className={`${index === 0 ? "large_image_div" : " normal_image_div"}`}
      >
        <input
          className="select_box"
          id={index}
          name={image}
          type="checkbox"
          onChange={(e) => handleSelect(image)}
          checked={
            isSelect &&
            Array.isArray(isSelect) &&
            (image ? isSelect.includes(image) : isSelect.includes(0))
          }
          ref={ref}
        />
        <img
          src={image}
          alt={`Image-${index + 1}`}
          style={elementStyle}
          className="image"
          ref={ref}
          {...props}
          onChange={(e) => handleSelect(image)}
        />
      </div>
    );
  }
);

export default ImageSelectBox;
