import { MEETUPS_DUMMY } from "../data";
import detailClasses from "../styles/MeetupDetail.module.css";
import Image from "next/image";
const MeetupDetail = (props) => {
  const { title, content, imgUrl } = props.meetup;
  return (
    <div className={detailClasses.container}>
      <h1>{title}</h1>
      <Image src={imgUrl} alt="image of the news" width="700" height="400" />
      <p>{content}</p>
    </div>
  );
};

export default MeetupDetail;
