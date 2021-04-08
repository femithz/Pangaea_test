const  express  = require('express');
const redis = require('redis');

const subscriber = redis.createClient();


const app = express();

// Pub and sub section start
subscriber.on("message",(channel,message) => {
    console.log("Received data :"+message);
    console.log("Channel to get data:" + channel);
})

subscriber.subscribe("Topic-message");

app.get('/topic1',(req,res) => {
    res.send("Subscriber One");
})
// Pub and Sub section ends


// set port, listen for requests
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
