import React, { useRef } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === !5;

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const formHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPOstalCodeIsValid = !isFiveChars(enteredPostalCode);

    const formIsValid =
      enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPOstalCodeIsValid;

    if (!formIsValid) {
      return;
    }
  };

  return (
    <form onSubmit={formHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
