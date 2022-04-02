import React, { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      const response = await fetch(
        "https://react-http-1745a-default-rtdb.firebaseio.com/meals.jso"
      );

      if (!response.ok) {
        throw new Error("Somenthing went wrong!");
      }

      const data = await response.json();
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          descrition: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
      setLoading(false);
    };

    fetchMeals().catch((error) => {
      setLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (loading) {
    return (
      <section className={classes.MealsLoading}>
        <p>...Loading</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
