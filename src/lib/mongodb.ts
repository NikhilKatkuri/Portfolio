import { MongoClient } from "mongodb";

if (!process.env.DATABASE_URL) {
  throw new Error(
    process.env.NODE_ENV === "development"
      ? 'Invalid/Missing environment variable: "DATABASE_URL"'
      : "Internal Server Error",
  );
}

const uri = process.env.DATABASE_URL;

const client = new MongoClient(uri);
const clientPromise = client.connect();

export default clientPromise;
