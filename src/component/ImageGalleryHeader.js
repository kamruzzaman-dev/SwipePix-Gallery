export default function ImageGalleryHeader({ totalSelect }) {
  return (
    <div className="imageGalleryHeader_section">
      {totalSelect.length > 0 ? (
        <>
          <label htmlFor="selectAll">{totalSelect.length} Image selected</label>
        </>
      ) : (
        <>
          <div className="imageGalleryHeader_left">File Manager</div>
          <div className="imageGalleryHeader_right">
            Upload images on this gallery
          </div>
        </>
      )}
    </div>
  );
}
