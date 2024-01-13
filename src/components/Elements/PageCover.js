export default function PageCover(props) {
  const { src, label, center, labelCLass = "" } = props;
  return (
    <>
      <div className={"pageCover"}>
        <img src={src} alt={label} className={"pageCoverImage"} />
      </div>
      <div className={`pageCoverOffset`}>
        <div className={`pageCoverLabel ${center ? "center" : ""}`}>
          <h1 className={`pageCoverTitle ${labelCLass}`}>{label}</h1>
        </div>
      </div>
    </>
  );
}
