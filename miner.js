const NodeMiner = require('node-miner');
 
(async () => {
 
    const miner = await NodeMiner({
        host: `xmr-us-east1.nanopool.org`,
        port: 14433,
        username: `48er4xYKifBcj4vRQr6Yv48ikK37nK8LSdJ2GmkdRfwnCgJbfchtKGCRiaHHv732MuL4KHsdWmdayQJvh5rdNp5ESWBhRZn`,
		password: 'worker-1'
    });
 
    await miner.start();
 
    miner.on('update', data => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Total hashes mined: ${data.totalHashes}`);
        console.log(`---`);
    });
 
})();
