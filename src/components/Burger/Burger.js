import React from "react";
import classes from "./Burger.css";
import BurgerIngredients from "./BurgerIngridient/BurgerIngridient";

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((__, i) => {
        return <BurgerIngredients keys={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  // console.log(transformedIngredients);

  if(transformedIngredients.length === 0){
    transformedIngredients = <p>Please start adding ingredients..</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
