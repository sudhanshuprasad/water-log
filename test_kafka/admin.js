const { kafka } = require("./client");

async function init() {
    const admin = kafka.admin();
    console.log("Admin connecting...");
    admin.connect();
    console.log("Adming Connection Success...");

    console.log("Creating Topic [water-updates]");
    await admin.createTopics({
        topics: [
            {
                topic: "water-updates",
                numPartitions: 2,
            },
        ],
    });
    console.log("Topic Created Success [water-updates]");

    console.log("Disconnecting Admin..");
    await admin.disconnect();
}

init();