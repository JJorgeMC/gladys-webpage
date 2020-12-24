import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <a
        href=""
        onClick={() =>
          alert("Creado por Jorge Maquera con mucho cariño para su tía")
        }
      >
        {props.children}
      </a>
    </li>
  );
};
export default NavigationItem;
