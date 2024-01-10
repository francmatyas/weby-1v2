export default function PageCover(props) {
  const { src, label } = props;
  return (
    <>
      <div className={"pageCover"}>
        <img src={src} alt={label} className={"pageCoverImage"} />
      </div>
      <div className={"pageCoverOffset"}>
        <div className={"pageCoverLabel"}>
          <h1 className={"pageCoverTitle"}>{label}</h1>
        </div>
      </div>
    </>
  );
}
