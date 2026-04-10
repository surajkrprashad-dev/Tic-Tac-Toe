import logo from './logo.svg';
import './App.css';

const Card = ({ imageSrc, thumbSrc, title, status, description }) => (
  <li>
    <a className="card" href="#">
      <img alt="" className="card__image" src={imageSrc} />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <img alt="" className="card__thumb" src={thumbSrc} />
          <div className="card__header-text">
            <h3 className="card__title">{title}</h3>
            <span className="card__status">{status}</span>
          </div>
        </div>
        <p className="card__description">{description}</p>
      </div>
    </a>
  </li>
);

const CardList = ({ cards }) => (
  <ul className="cards">
    {cards.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </ul>
);

const cardsData = [
  {
    imageSrc: "https://i.imgur.com/oYiTqum.jpg",
    thumbSrc: "https://i.imgur.com/7D7I6dI.png",
    title: "Jessica Parker",
    status: "1 hour ago",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?"
  },
  {
    imageSrc: "https://i.imgur.com/2DhmtJ4.jpg",
    thumbSrc: "https://i.imgur.com/sjLMNDM.png",
    title: "Kim Cattrall",
    status: "3 hours ago",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?"
  },
  {
    imageSrc: "https://i.imgur.com/oYiTqum.jpg",
    thumbSrc: "https://i.imgur.com/7D7I6dI.png",
    title: "Jessica Parker",
    status: "1 hour ago",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?"
  },
  {
    imageSrc: "https://i.imgur.com/2DhmtJ4.jpg",
    thumbSrc: "https://i.imgur.com/sjLMNDM.png",
    title: "Kim Cattrall",
    status: "3 hours ago",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?"
  }
];

const App = () => (
  <CardList cards={cardsData} />
);

export default App;
