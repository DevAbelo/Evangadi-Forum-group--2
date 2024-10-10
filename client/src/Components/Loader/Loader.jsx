import Loading from "../../assets/img/10001.gif"
function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <img src={Loading} alt="" />
    </div>
  );
}

export default Loader;