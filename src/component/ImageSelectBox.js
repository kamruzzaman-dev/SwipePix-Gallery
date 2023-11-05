/* eslint-disable react/display-name */
export default function ImageSelectBox({ image, index }) {
  return (
    <div className={`${index === 0 ? "large_image_div" : " normal_image_div"}`}>
      <img
        src={image}
        alt={`Image ${index + 1}`}
        className={`${index === 0 ? "large_image" : "normal_image"} `}
      />
    </div>
  );
}
