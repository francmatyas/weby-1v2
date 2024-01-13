export default function GalleryGrid(props) {
  const { src } = props;

  return (
    <div className="galleryGrid">
      {src.map((item, index) => (
        <div key={index} className="galleryGridItem">
          <img src={item.img} alt={item.alt} />
        </div>
      ))}
    </div>
  );
}
