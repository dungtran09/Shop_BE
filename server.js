import app from "./app.js";

const PORT = 3055;

const server = app.listen(PORT, () => {
  console.log(`Server start on PORT ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log(`Server off!`);
  });
});
