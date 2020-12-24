import classes from "./Content.module.css";
import Avatar from "./Avatar/Avatar";
import Topic from "./Topic/Topic";
import Background from "./Background/Background";

const Content = () => {
  return (
    <div className={classes.Content}>
      <Background />
      <Avatar />
      <Topic />
    </div>
  );
};

export default Content;
