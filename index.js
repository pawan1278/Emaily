const express = require('express'); // here we are calling express library to ge access (sharing code different fiels common js moduels)
const app = express(); // we using express to use in our app

app.get('/', (req,res) =>{ //arrow functon which takes two values
    res.send({ hi: 'there' });
}); // route handler asociated to given route

const PORT = process.env.PORT || 5000; // dynamically figure out what port to be used (env environment variables)

app.listen(5000);// tells node to listen to incomming traffic on port 5000