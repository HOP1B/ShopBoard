
import dotenv from "dotenv";
import { expirationQueue } from "./services/expiration-queue.service";
import { createBullBoard } from "@bull-board/api";
import { BullAdapter } from "@bull-board/api/bullAdapter";


dotenv.config();

console.clear();

import { ExpressAdapter } from "@bull-board/express";

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath("/admin/queues");

createBullBoard({
  queues: [new BullAdapter(expirationQueue)],
  serverAdapter: serverAdapter,
});


  // start processing the jobs
  expirationQueue.on("completed", async (job) => {
    console.log("Job completed:", job.data);
  });
  expirationQueue.on("failed", async (job, error) => {
    console.log("Job failed:", job.data);
    console.log(error);
  });

  console.log("Server is running on port:", process.env.PORT);

