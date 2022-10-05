import fb from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import "./Card.scss";

export default function Card(props) {
  return (
    <article className="card">
      <img
        className="card-hero"
        src={props.hero}
        alt="Green table with drawers and a gold vase and some portirate on it next to a yellow couch"
      />
      <div className="card-info">
        <h1 className="card-info-heading">{props.heading}</h1>
        <p className="card-info-description">{props.description}</p>
        <div className="card-info-author">
          <img
            className="card-info-author-img"
            src={props.avatar}
            alt="Blonde lady"
          />
          <div className="card-info-author-details">
            <h2 className="card-info-author-details-name">{props.fullName}</h2>
            <time
              dateTime={props.date}
              className="card-info-author-details-date"
            >
              {props.date}
            </time>
          </div>
          <button
            onClick={props.handlePopup}
            className="card-info-author-details-btn "
          >
            <div className="card-info-author-details-btn-icon"></div>
          </button>
          <div className="popup">
            <p>share</p>
            <ul>
              <li>
                <a href="#">
                  <img src={fb} alt="facebook logo" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitter} alt="twitter logo" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={pinterest} alt="pinterest logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
