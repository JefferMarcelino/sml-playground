const { unlink, writeFileSync, readFileSync, unlinkSync } = require("fs");
const { exec } = require("child_process");
const redis = require("redis");
const { stdout, stdin } = require("process");

const redisClient = redis.createClient();

(async () => {
  redisClient.on("error", (error) => {
    console.error(error)
    return;
  });

  await redisClient.connect();
})()

console.log("Worker waiting for tasks...");

const processTask = async () => {
  try {
    const task = await redisClient.rPop("code_execution_tasks");

    if (!task) {
      setTimeout(processTask, 1000); // Wait for tasks if the queue is empty
      return;
    }

    const { code, taskId } = JSON.parse(task);

    console.log(`Executing task: ${taskId}`);

    const pathToTempFile = "/app/runtime/code.sml"

    writeFileSync(pathToTempFile, code);

    exec("/app/runtime/samora " + pathToTempFile, (err, stdoutF, stderrF) => {
      unlinkSync(pathToTempFile);

      const tempSwap = stdoutF;
      const stdout = stderrF;
      const stderr = tempSwap;

      if (err) {
        console.error("Execution error:", stderr);

        saveResult(taskId, "Error executing Samora-Lang: " + stderr);
      } else {
        console.log("Execution result:", stdout);
        saveResult(taskId, stdout);
      }

      // Process the next task
      setTimeout(processTask, 0);
    });
  } catch (error) {
    console.error(error);
  };
};

const saveResult = (taskId, result) => {
  redisClient.hSet("code_execution_results", taskId, result, (err, reply) => {
    if (err) {
      console.error(err);
    }
  });
};

processTask();
