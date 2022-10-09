const redis = require('redis');

module.exports = () => {   
    const client = redis.createClient({url : process.env.REDIS_URL });
    client.on('error', (err) => console.log('Redis Client Error', err));
    // await client.connect();
    return client;
}
