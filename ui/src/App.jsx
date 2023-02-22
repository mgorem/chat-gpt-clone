import { useState } from "react";
import send from "./assets/send.svg";
import user from "./assets/user.png";
import bot from "./assets/bot.png";
import loadingIcon from "./assets/loader.svg";

// let arr = [
//   { type: "user", post: "fafafafafafaf" },
//   { type: "bot", post: "babababababa" },
// ];

function App() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  const onSubmit = () => {
    if (input.trim() === "") return;
    upDatePosts(input);
  };

  const upDatePosts = (post) => {
    setPosts((prevState) => {
      return [...prevState, { type: "user", post: post }];
    });
  };

  const onKeyUp = (e) => {
    if (e.key === "Enter" || e.which === 13) {
      onSubmit();
    }
  };

  return (
    <main className="chatGPT-app">
      <section className="chat-container">
        <div className="layout">
          {/* User Question */}

          {posts.map((post, index) => (
            <div
              key={index}
              className={`chat-bubble ${
                post.type === "bot" || post.type === "loading" ? "bot" : ""
              }`}
            >
              <div className="avatar">
                <img
                  src={
                    post.type === "bot" || post.type === "loading" ? bot : user
                  }
                  alt="user"
                />
              </div>
              {post.type === "loading" ? (
                <div className="loader">
                  <img src={loadingIcon} alt="loading" />
                </div>
              ) : (
                <div className="post">{post.post}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 
      Where the user inputs questions */}

      <footer>
        <input
          type="text"
          placeholder="Ask Anything..."
          className="composebar"
          autoFocus
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={onKeyUp}
        />
        <div className="sendbutton" onClick={onSubmit}>
          <img src={send} alt="send" />
        </div>
      </footer>
    </main>
  );
}

export default App;
