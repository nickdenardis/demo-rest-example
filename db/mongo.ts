import { init, MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const env = config();
const client = new MongoClient();
client.connectWithUri(env.MONGO_DB);

const db = client.database("example");

export default db;
