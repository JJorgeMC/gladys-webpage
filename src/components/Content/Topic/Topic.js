import Message from "./Message/Message";
import Picture from "./Picture/Picture";
import classes from "./Topic.module.css";

const Topic = () => {
  return (
    <div className={classes.Topic}>
      <Message />
      <Picture />
    </div>
  );
};

export default Topic;
