import { forwardRef } from "react";

const ImageSelectBox = forwardRef(({ image, index, ...props }, ref) => {
  return (
    <div
      className={`${index === 0 ? "large_image_div" : " normal_image_div"}`}
      {...props}
      ref={ref}
    >
      <img
        src={image}
        alt={`Image-${index + 1}`}
        className={`${index === 0 ? "large_image" : "normal_image"} `}
      />
    </div>
  );
});

export default ImageSelectBox;
