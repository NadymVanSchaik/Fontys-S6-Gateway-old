#!/usr/bin/env node

// var amqp = require('amqplib/callback_api');
// const amqpUrl = process.env.AMQP_URL || 'amqp://localhost:5673';

// amqp.connect(amqpUrl, function(error0, connection) {
//     if (error0) {
//         throw error0;
//     }
//     connection.createChannel(function(error1, channel) {
//         console.log(amqpUrl)
//         if (error1) {
//             throw error1;
//         }

//         var queue = 'hello';
//         var msg = 'Hello World!';

//         channel.assertQueue(queue, {
//             durable: false
//         });
//         channel.sendToQueue(queue, Buffer.from(msg));

//         console.log(" [x] Sent %s", msg);
//     });
//     setTimeout(function() {
//         connection.close();
//         process.exit(0);
//     }, 500);
// });