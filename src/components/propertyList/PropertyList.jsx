import { useNavigate } from "react-router-dom";
import "./propertyList.css";

const PropertyList = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/CardMotel");
  };
  return (
    <div className="pList" onClick={handleSearch}>
      <div className="pListItem">
        <img src="./images/hotels.jpg" alt="Nashik" className="pListImg" />

        <div className="pListTitles">
          <h1>MOTELS</h1>
          <h2>
            9 <sup>+</sup> MOTELS
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
