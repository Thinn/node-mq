/** MQ Topic */
const config = require ("./app-config")
const mqClient = require("./mq");

const topic = config.mq.topic;
const queue = config.mq.queue;

function onMessageReceived(message) {
    //To Do
    //add action after message is received from mq
  console.log("receiving..",message);
}

module.exports = {
  start: () => {
    mqClient.listen(topic, onMessageReceived);
    mqClient.listen(queue, onMessageReceived);
  },
};
