const express = require('express');

const PORT = 3000
const app = express();


app.get('/api', (req, res) => {
    const slack_name = req.query.slack_name;
    const track = req.query.track;
 const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 const current_day = weekday[new Date().getDay()];
 const current_utc_time = new Date().toISOString();
 
 
    

})

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`)
});