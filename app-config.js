module.exports = {
    mq: {
      topic: "/topic/orders",
      queue: "/queue/emails",
      config: {
        host: "localhost",
        port: 61613,
        connectOptions: {
          host: "/",
          login: "admin",
          passcode: "admin",
          "heart-beat": "5000,5000",
        },
      },
    },
  };
  