module.exports = {
  apps : [{
    name   : "ineedheadphones",
    script : "./server.js",
    env: {
      NODE_ENV: "production",
      PORT: 8080
    }
  }]
}
