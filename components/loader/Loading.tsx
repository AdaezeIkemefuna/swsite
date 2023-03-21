import { Circles } from "react-loader-spinner";

export default function Loading() {
  return (
    <div style={{ height: "70vh", paddingTop: "15rem", paddingLeft: "50%" }}>
      <Circles
        height="80"
        width="80"
        color="#e7992a"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
