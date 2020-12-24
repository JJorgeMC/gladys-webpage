import Backdrop from "./Backdrop/Backdrop";
import Background from "./Background/Background";
import classes from "./Header.module.css";
import Titles from "./Titles/Titles";

const Header = () => {
  return (
    <div className={classes.Header}>
      <Background />
      <Backdrop />
      <Titles />
    </div>
  );
};

export default Header;
