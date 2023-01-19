import { Fragment } from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <div className={classes.header}>
        <h2>ReadyMeal</h2>
        <button>Hello</button>
      </div>
      <div className={classes["main-image"]}>
        <img
          src="https://www.pnas.org/cms/10.1073/pnas.1913308116/asset/053e8f99-6de4-4c07-b7fc-64424aff27b7/assets/graphic/pnas.1913308116fig01.jpeg"
          alt=""
        />
      </div>
    </Fragment>
  );
};

export default Header;
