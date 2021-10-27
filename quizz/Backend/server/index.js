const express = require("express");
const app = express();
var cors = require('cors')

app.use(cors())

const PORT = process.env.PORT || 5000;
const limit = 10;


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});



const connectionString = `mongodb+srv://ibrahim:13.11.97ibra90H@cluster0.qaqqj.mongodb.net/Quizz?retryWrites=true&w=majority`;



const MongoClient = require('mongodb').MongoClient

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('Quizz')
    app.get('/questions', (req, res) => {
        db.collection('questions').find().toArray()
          .then(results => {
            res.send(results)
            console.log(results);
          })
          .catch(error => console.error(error))
  })

  })
  .catch(error => console.error(error))


    
