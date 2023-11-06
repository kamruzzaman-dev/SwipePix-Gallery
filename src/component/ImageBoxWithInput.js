import { BiSolidImageAdd } from "react-icons/bi";

export default function ImageBoxWithInput({ children, handleImageUpload }) {
  return (
    <div className="imageBoxWithInput">
      {children}
      <div className="input_box">
        <input
          className="input_box_input"
          type="file"
          id="file"
          onChange={handleImageUpload}
        />
        <label className="input_box_label" htmlFor="file" accept="image/*">
          <BiSolidImageAdd className="label_icon" />
          <div className="label_text">Upload single Image</div>
        </label>
      </div>
    </div>
  );
}
