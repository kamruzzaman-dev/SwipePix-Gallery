import { Fragment } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";

export default function ImageGalleryHeader({
  totalSelect,
  handleDeleteImage,
  handleSelectAll,
  isSelectAll,
}) {
  return (
    <div className="imageGalleryHeader_section">
      <input
        className="select_all_box"
        id={"select-all"}
        name={"select-all"}
        type="checkbox"
        onChange={handleSelectAll}
        checked={isSelectAll}
      />
      <div className="imageGalleryHeader">
        {totalSelect.length > 0 ? (
          <Fragment>
            <label className="select_message" htmlFor="selectAll">
              {totalSelect.length} {totalSelect.length > 1 ? "Images selected" : "Image selected"}
            </label>
            <div>
              <button onClick={handleDeleteImage} className="delete_button">
                Delete Files
                <MdOutlineDeleteOutline className="delete_icon" />
              </button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="imageGalleryHeader_left">File Manager</div>
            <div className="imageGalleryHeader_right">
              Upload images on this gallery
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}
