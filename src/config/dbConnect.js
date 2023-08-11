import mongoose from "mongoose";
import "dotenv/config";

const cluster = process.env.DB_CLUSTER;

async function db() {
  await mongoose.connect(`${cluster}`);
}

export default db;
