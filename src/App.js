import React from "react";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/sort";
import PizzaBlock from "./components/PizzaBlock";
import Skeleton from "./components/PizzaBlock/Skeleton";


import './scss/app.scss';






function App() {
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() =>{
    fetch('https://62c9ac58d9ead251e8bf2cf5.mockapi.io/items')
    .then((res) => res.json())
    .then((arr) => {
      setTimeout(() => {
        setItems(arr);
        setIsLoading(false);
      },1000);
      
    }); 
  }, []);


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">

            {
              isLoading
              ? [... new Array(6)].map((_, index) => <Skeleton key={index}/>)
              : items.map((obj) => <PizzaBlock key={obj.id} {... obj}/>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
