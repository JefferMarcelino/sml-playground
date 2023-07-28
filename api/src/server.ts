import Fastify, { FastifyRequest } from "fastify";
import dotenv from 'dotenv';
import cors from "@fastify/cors";
import { v4 as uuidv4 } from "uuid";
import * as Redis from "redis";
import waitForResult from "./wait";

dotenv.config();

interface RunRequestBody {
  code: string;
};

const PORT = 3000;

const app = Fastify();
app.register(cors);
const redisClient = Redis.createClient({ url: process.env.REDIS_URL });

(async () => {
  redisClient.on("error", (error: Error) => {
    console.error(error)
    return;
  });

  await redisClient.connect();
})()

app.get("/", (req, res) => {
  return { "message": "working correctly!!!" }
});

app.post("/execute", async (req: FastifyRequest<{ Body: RunRequestBody }>, res) => {
  const code = req.body.code;
  const taskId = uuidv4();

  try {
    await redisClient.lPush('code_execution_tasks', JSON.stringify({ code, taskId }), );

    const result = await waitForResult(taskId, redisClient);

    return { "result": result };
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Internal server error" });
  };
});

app.listen({
  host: "0.0.0.0",
  port: PORT
}).then((url) => {
  console.log("HTTP Server listening on " + url);
});
