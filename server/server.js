import express from "express";
import { 
    
    getCodedDoujin, 
    getRandomCode,
    getMainPageContentNoPopular,
    getMainPageContentPopular,

} from "nhentai-websrcrapping-api";
import { port } from '../envs.js';

let app = express();
let localPort = port;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(localPort, () => console.log(`running server!! on port ${localPort}`));

console.log( new Date() );

app.get('/api/getIndexScreen', (req, res) => {

    console.log("Called")

    getMainPageContentPopular()
    .then(x => {
        let resp = {
            pop:x,
        }
        getMainPageContentNoPopular()
        .then(x => resp["noPop"] = x )
        .then(() => 
            res.send(resp)
        );
    
    });
});

app.post('/api/getDoujinFromCode', (r, rr) => {
    let { code } = r.body;
    console.log(code)

    getCodedDoujin(code).then(x =>{ 
    
    
        console.log(x)

        rr.send(x);
    
    });
});