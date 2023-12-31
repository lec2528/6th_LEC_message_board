const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./routes/posts.js");
const commentRouter = require("./routes/comment.js");
const connect = require("./schema/index.js");

connect();
// 전역객체 body parser에 사용

// 미들웨어
app.use(express.json());
app.use("/api", [postsRouter, commentRouter]);


app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
