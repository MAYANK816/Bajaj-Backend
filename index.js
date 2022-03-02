var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})
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

app.listen(3001, () => {
    console.log('server is up on port ' + 3001);
});