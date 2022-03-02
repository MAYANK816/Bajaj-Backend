import express from "express";
import Cors from 'cors';
import bodyParser from "body-parser";
const app = express();
const port = process.env.PORT || 8001;
app.use(express.json());
app.use(Cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.status(200).send("Hello Programmers"));

app.post('/bfhl', (req, res) => {
    const data = [...req.body.data]

    let numbers = data.filter((value) => !isNaN(value))

    let alphabets = data.filter((value) => (/[a-zA-Z]/).test(value));
    res.status(200).send({
        'is_success': 'true',
        'user_id': 'chirag_1910990520',
        'email': 'chirag0520.cse19@chitkara.edu.in',
        'roll_number': '1910990520',
        'numbers': numbers,
        'alphabet': alphabets
    })
})

app.listen(port, () => console.log(`listening :${port}`));