import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch("https://ready-meals-default-rtdb.firebaseio.com/meals.json");
      const data = await res.json();

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      const loadMeals = [];

      for (const key in data) {
        loadMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadMeals);
      setIsLoading(false);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <h4 className={classes.loading__meals}>Loading...</h4>
      </section>
    );
  }
  if (httpError) {
    return (
      <section>
        <h4 className={classes.meals__error}>{httpError}</h4>
      </section>
    );
  }

  return (
    <Card>
      {meals.map((meal) => (
        <MealItem
          key={meal.id}
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ))}
    </Card>
  );
};

export default AvailableMeals;
