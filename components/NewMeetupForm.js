import { server } from "../config";
import newMeetupStyle from "../styles/NewMeetupForm.module.css";
import { useState } from "react";
import { MEETUPS_DUMMY } from "../data";
import { useRouter } from "next/router";
const NewMeetupForm = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const date = new Date().getDate().toString();
    const data = { title, imgUrl, content, published: date };
    const res = await fetch(`${server}/api/new-meetup`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      resetState();
    } else {
      console.log(res.statusText);
      alert(res.statusText);
    }

    //router.push("/");
  };
  function resetState() {
    setTitle("");
    setImgUrl("");
    setContent("");
  }
  return (
    <div className={newMeetupStyle.container}>
      <form className={newMeetupStyle.form}>
        <label>Meetup Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />

        <label>URL for image:</label>
        <input
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          type="text"
        />

        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
        />
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
};

export default NewMeetupForm;
