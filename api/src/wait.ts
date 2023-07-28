async function waitForResult(taskId: string, redisClient: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const interval = setInterval(async () => {
      try {
        const result = await redisClient.hGet('code_execution_results', taskId);

        if (result !== null && result !== undefined) {
          clearInterval(interval);

          console.log(result);

          resolve(result);
        }
      } catch (err) {
        clearInterval(interval);
        reject(err);
      }
    }, 500);
  });
};

export default waitForResult;