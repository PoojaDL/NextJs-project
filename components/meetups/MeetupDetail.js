import Layout from "../layout/Layout";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupDetail(props) {
  return (
    <Card>
      <div className={classes.image}>
        <img src={props.data.image} alt={props.data.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.data.title}</h3>
        <address>{props.data.address}</address>
      </div>
      <div className={classes.actions}>
        <p>{props.data.description}</p>
      </div>
    </Card>
  );
}

export default MeetupDetail;
