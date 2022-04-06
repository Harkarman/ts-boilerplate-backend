import { createClient } from 'redis';

const redisClient = createClient();

redisClient
    .on('connect', () => {
        console.log('Connected to Redis');
    })
    .on('error', (error) => {
        console.log('Redis not connected', error.message);
        process.exit(1);
    });

// v4 does not auto-reconnect on createClient().
// Needs to be called explicitly.
redisClient.connect();

export default redisClient;
