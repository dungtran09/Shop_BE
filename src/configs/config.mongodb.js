import "dotenv/config";

const dev = {
  server: {
    port: process.env.SERVER_DEV_PORT,
  },
  db: {
    localhost: process.env.HOST_DEV,
    port: process.env.PORT_DEV,
    dbName: process.env.DB_NAME_DEV,
  },
};

const prod = {
  server: {
    port: process.env.SERVER_PROD_PORT,
  },
  db: {
    localhost: process.env.HOST_PROD,
    port: process.env.PORT_PROD,
    dbName: process.env.DB_NAME_PROD,
  },
};

const config = { dev, prod };
const env = process.env.NODE_ENV || "dev";
export default config[env];
