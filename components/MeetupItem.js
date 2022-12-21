import { useRouter } from "next/router";
import newsItemCss from "../styles/MeetupItem.module.css";
import Image from "next/image";
const MeetupItem = ({ id, title, content, imgUrl, published }) => {
  const router = useRouter();

  const showDetailHandler = () => {
    router.push(`/meetup/${id}`);
  };
  return (
    <div className={newsItemCss.card}>
      <h2>{title}</h2>
      <Image src={imgUrl} width="240" height="150" alt="image of ..." />
      <p>
        {content}
        <span>{published}</span>
      </p>
      <div className={newsItemCss.action}>
        <button onClick={showDetailHandler}>Show detail</button>
      </div>
    </div>
  );
};

export default MeetupItem;
