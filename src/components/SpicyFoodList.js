import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState('All')

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });


  function handleAddFood() {
    const newFood = [...foods, getNewSpicyFood()]
    setFoods(newFood);
  }

  function handleLiClick(id){
  
  setFoods(updateFoodList)
  const incrementFoodHeat = food.map((food)=> {
    if (food.id === id) {
      return {
        ...food,
        heatLevel: food.heatLevel
      }
    }
  })
  
  }

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));
function handleFilterChange(event){
setFilterBy(event.target.value)

}





  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>

      <select name="filter" onChange={handleFilterChange}>
  <option value="All">All</option>
  <option value="American">American</option>
  <option value="Sichuan">Sichuan</option>
  <option value="Thai">Thai</option>
  <option value="Mexican">Mexican</option>
</select>
    </div>

    
  );
}

export default SpicyFoodList;
