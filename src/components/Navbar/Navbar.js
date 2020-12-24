import classes from "./Navbar.module.css";
import NavigationItems from "./NavigationItems/NavigationItems";

const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <a>GM</a>
      <NavigationItems />
    </div>
  );
};

export default Navbar;
