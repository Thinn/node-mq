const config = require("./app-config");
const stompit = require("stompit");


function listen(channel, callback) {
  const connectionOptions = config.mq;
  const subscribeHeaders = {
    destination: channel,
    ack: "client-individual",
  };

  //Connect to MQ Service
  stompit.connect(connectionOptions, (error, client) => {
    if (error) {
      console.log("connect error " + error.message);
      throw {
        message: "Unable to connect to application",
        reason: error.message,
      };
    }
    client.subscribe(subscribeHeaders, (error, message) => {
      if (error) {
        console.error("subscribe error " + error.message);
        throw {
          message: `Unable to subscribe to Channel ${channel}`,
          reason: error.message,
        };
      }

      /// Attempt to read for any incoming messages
      message.readString("utf-8", (error, body) => {
        if (error) {
          console.error("read message error " + error.message);
        }
        ///Called to inform Client that the Message is received...
        client.ack(message);

        //Send the Message to Callback
        callback(body);
      });
      console.log("listen...")
    });
  });
}


module.exports = {
  listen,
};
