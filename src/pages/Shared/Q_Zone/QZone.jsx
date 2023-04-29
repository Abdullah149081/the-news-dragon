import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import "./QZone.css";

const QZone = () => {
  return (
    <div className="mt-5 q-zone">
      <h4 className="q-title ">Q -zone</h4>
      <div className="text-center">
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default QZone;
