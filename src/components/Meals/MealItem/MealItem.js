import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <section className={classes.meal}>
      <div>
        <h3>{props.meals.name}</h3>
        <div className={classes.description}>{props.meals.description}</div>
        <div className={classes.price}>${props.meals.price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </section>
  );
};

export default MealItem;
