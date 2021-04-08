const  express =  require('express');
const redis = require('redis');

const publisher = redis.createClient();

const app = express();

// Pub and sub section start
app.get('/publish/topic1',(req,res) => {
  const publishBody = {
      message : "Hello, how are you doing oh he subcriber of the world? "
  }

  publisher.publish("Topic-message",JSON.stringify(publishBody));

  res.send("Publishing an Event using Redis");
})
// Pub and Sub section ends

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
