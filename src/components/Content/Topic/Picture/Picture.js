import classes from "./Picture.module.css";
import image from "../../../../assets/images/F05.png";

const Picture = () => {
  return (
    <div className={classes.Picture}>
      <img src={image} alt="Img" />
      <h4>Tía y abuelita</h4>
    </div>
  );
};

export default Picture;
