import { forwardRef } from "react";

const ImageSelectBox = forwardRef(
  ({ image, index, isSelect, handleSelect, ...props }, ref) => {
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
          className={`${index === 0 ? "large_image" : "normal_image"} `}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export default ImageSelectBox;
