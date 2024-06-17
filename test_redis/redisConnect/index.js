
const redis = require("redis");
const redisclient = redis.createClient({
    url: process.env.REDIS_URL
});

(async () => {
    await redisclient.connect();
})();

console.log("Connecting to the Redis");

redisclient.on("ready", () => {
    console.log("Connected to Redis");
});

redisclient.on("error", (err) => {
    console.log("Error in the Connection");
});

module.exports = redisclient