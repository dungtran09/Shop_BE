"use strict";
import mongoose from "mongoose";

const os = require("os");
const process = require("process");
const _SECOND = 5000;

const countConnect = () => {
  const numberConnect = mongoose.connections.length;
  console.log(`Nunber connecttion: ${numberConnect}`);
};

const checkOverload = () => {
  setInterval(() => {
    const numberConnect = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsege = process.memoryUsage().rss;

    const maxConnecttion = numCores * 5;
    console.log(`Active connection ${numberConnect}`);
    console.log(`Memory use: ${memoryUsege / 1024 / 1024}MB`);

    if (numberConnect > maxConnecttion) {
      console.log(`Connection overload deteched!`);
    }
  }, _SECOND);
};

export default { countConnect, checkOverload };
