import express from "express";
import Cors from 'cors';
const app = express();
const port = process.env.PORT || 8001;
app.use(express.json());
app.use(Cors());

app.get('/', (req, res) => res.status(200).send("Hello Programmers"));
app.post('/bfhl', (req, res) => {
    const data = [...req.body.data]

    let numbers = data.filter((value) => !isNaN(value))

    let alphabets = data.filter((value) => (/[a-zA-Z]/).test(value));
    res.status(200).send({
        'is_success': 'true',
        'user_id': 'name_dob',
        'email': 'your email',
        'roll_number': 'your roll number',
        'numbers': numbers,
        'alphabet': alphabets
    })
})

app.listen(port, () => console.log(`listening :${port}`));