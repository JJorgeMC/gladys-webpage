import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem>Home</NavigationItem>
      <NavigationItem>About Us</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
