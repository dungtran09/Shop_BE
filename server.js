import app from "./app.js";
import "dotenv/config";
import config from "./src/configs/config.mongodb.js";

const { port } = config.server;

const server = app.listen(port, () => {
  console.log(`=> ✅ Server start on PORT ${port}`);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log(`=> Server off!`);
  });
});
