const express = require("express");
const { 
    
    getCodedDoujin, 
    
    getRandomCode,
    
    getMainPageContentNoPopular 

} = require('nhentai-websrcrapping-api');

let app = express();
let port = 3066;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port, () => console.log(`running server!! on port ${port}`));

app.get('/getCode', (req, res) => {
    getRandomCode(177013)
    .then(x => res.send(x));

});

app.get('/getMain', (req, res) => {
    getMainPageContentNoPopular()
    .then(x => res.send(x));

});

