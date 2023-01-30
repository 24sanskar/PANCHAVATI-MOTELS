import "./featuredproperties.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src="./images/fp1.jpg" alt="review" className="fpImg" />
        <span className="fpName">
          PANCHAVTI <br /> SINNAR
        </span>
        <span className="fpCity">NASHIK</span>
        <span className="fpPrice">Starting from 1500Rs.</span>
        <div className="fpRating">
          <button>4.5</button>
          <span>
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStarHalfStroke} />
          </span>
        </div>
      </div>

      <div className="fpItem">
        <img src="./images/fp2.jpg" alt="review" className="fpImg" />
        <span className="fpName">
          PANCHAVTI <br /> SANGAMNER
        </span>
        <span className="fpCity">SANGAMNER</span>
        <span className="fpPrice">Starting from 1500Rs.</span>
        <div className="fpRating">
          <button>4.5</button>
          <span>
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStarHalfStroke} />
          </span>
        </div>
      </div>

      <div className="fpItem">
        <img src="./images/fp3.jpg" alt="review" className="fpImg" />
        <span className="fpName">
          PANCHAVTI <br /> PUNE
        </span>
        <span className="fpCity">PUNE</span>
        <span className="fpPrice">Starting from 5500Rs.</span>
        <div className="fpRating">
          <button>4.5</button>
          <span>
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStarHalfStroke} />
          </span>
        </div>
      </div>

      <div className="fpItem">
        <img src="./images/fp4.jpg" alt="review" className="fpImg" />
        <span className="fpName">
          PANCHAVTI <br /> MUMBAI
        </span>
        <span className="fpCity">MUMBAI</span>
        <span className="fpPrice">Starting from 1500Rs.</span>
        <div className="fpRating">
          <button>4.5</button>
          <span>
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStarHalfStroke} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
