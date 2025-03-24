"use strict";

const { default: mongoose } = require("mongoose");

const connectString = `mongodb://localhost:27017/Ecommerce`;

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    console.log("🔥 Connecting to MongoDB...");
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectString)
      .then(() => {
        console.log(`✅ DB connect success!`);
      })
      .catch((err) => {
        console.error(`❌ DB can not connected!`, err);
      });
  }

  static getInstance() {
    // console.log("⚡ getInstance() is being called...");
    if (!Database.instance) {
      console.log("✨ Creating new Database instance...");
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
