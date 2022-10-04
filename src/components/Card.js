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
            <p className="card-info-author-details-date">{props.date}</p>
          </div>
          <button
            onClick={props.handlePopup}
            className="card-info-author-details-btn "
          >
            <div className="card-info-author-details-btn-icon"></div>
          </button>
        </div>
      </div>
    </article>
  );
}
