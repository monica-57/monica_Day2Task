import React from 'react';
import CardComponent from './components/CardComponent/CardComponent';
import './App.css';
import img1 from './assets/images/pizza.jpg';
import img2 from './assets/images/sushi.jpeg';
import img3 from './assets/images/burger.jpg';

const App = () => {
  const cardData = [
    {
      title: "Classic Pepperoni Pizza",
      description: "Delicious thin-crust pizza topped with premium pepperoni and melted mozzarella.",
      imageUrl: img1,
      location: "Naples, Italy",
      price: "12.99"
    },
    {
      title: "Authentic Sushi Platter",
      description: "An assortment of fresh sushi rolls crafted with the finest seafood and ingredients.",
      imageUrl: img2,
      location: "Tokyo, Japan",
      price: "25.99"
    },
    {
      title: "Gourmet Cheeseburger",
      description: "Juicy beef patty with cheddar cheese, lettuce, tomato, and our signature sauce.",
      imageUrl: img3,
      location: "New York, USA",
      price: "10.99"
    }
  ];

  return (
    <div className="app">
      <h1 className="app-title">Food Delights</h1>
      <div className="cards-container">
        {cardData.map((card, index) => (
          <CardComponent
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            location={card.location}
            price={card.price}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
