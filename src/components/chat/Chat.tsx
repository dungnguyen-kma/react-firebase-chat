import React, { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef<any>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  console.log(text);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="/phone.png" alt="" />
          <img src="/video.png" alt="" />
          <img src="/info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui saepe
              atque dolorum amet magni, cumque iusto blanditiis accusamus,
              repellat officiis quos dignissimos esse odio maiores quam
              perspiciatis? Ipsa, expedita officiis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/432738296_3801507353412855_1940033459778751965_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGHCjhbum31eVbHokSv3ATWnLcOmJSeZzuctw6YlJ5nOxTZPnMJPscC1Mg4L1_Z3QMk8oPk3S6Az424HXILB7Ke&_nc_ohc=GH8wrZ_sJzYQ7kNvgFrEJyW&_nc_ht=scontent.fhan5-2.fna&oh=00_AYA0b5mEGccx_MHYSwnkgMMWMt9wAri83w6SJFuPoSw6nw&oe=66806E29"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui saepe
              atque dolorum amet magni, cumque iusto blanditiis accusamus,
              repellat officiis quos dignissimos esse odio maiores quam
              perspiciatis? Ipsa, expedita officiis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>{" "}
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui saepe
              atque dolorum amet magni, cumque iusto blanditiis accusamus,
              repellat officiis quos dignissimos esse odio maiores quam
              perspiciatis? Ipsa, expedita officiis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>{" "}
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui saepe
              atque dolorum amet magni, cumque iusto blanditiis accusamus,
              repellat officiis quos dignissimos esse odio maiores quam
              perspiciatis? Ipsa, expedita officiis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>{" "}
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui saepe
              atque dolorum amet magni, cumque iusto blanditiis accusamus,
              repellat officiis quos dignissimos esse odio maiores quam
              perspiciatis? Ipsa, expedita officiis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="/img.png" alt="" />
          <img src="/camera.png" alt="" />
          <img src="/mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <div className="emoji">
          <img src="/emoji.png" alt="" onClick={() => setOpen(!open)} />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}
export default Chat;
