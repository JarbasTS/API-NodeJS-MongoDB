import mongoose from "mongoose";
import "dotenv/config";

const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const cluster = process.env.DB_HOST;
const dbname = process.env.DB_NAME;

async function db() {
  await mongoose.connect(
    `mongodb://${username}:${password}@${cluster}-shard-00-00.laxn0bd.mongodb.net:27017,ac-zf8e4wb-shard-00-01.laxn0bd.mongodb.net:27017,ac-zf8e4wb-shard-00-02.laxn0bd.mongodb.net:27017/${dbname}?ssl=true&replicaSet=atlas-sunwao-shard-0&authSource=admin&retryWrites=true&w=majority`
  );
}

export default db;
