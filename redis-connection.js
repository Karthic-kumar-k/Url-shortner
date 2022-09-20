const redis = require('redis');
const client = redis.createClient();

client.on("error", (err)=>{
    console.error("Redis Error : ",err);
});

client.on("connect", (err)=>{
    console.log("Redis connection established");
})

client.set("keyFromNode", "Hello World",redis.print);