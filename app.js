const express = require("express");

// const PORT = 3000;
const PORT = process.env.PORT || 3000;
const app = express();

app.get("/api",  (req, res) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const current_day = weekday[new Date().getDay()];
  const current_utc_time = new Date().toISOString().split('.')[0] + 'Z';
  const github_file_url =
    "https://github.com/otimebhor/HNGX-Internship-Stage-One/blob/main/app.js";
  const github_repo_url =
    "https://github.com/otimebhor/HNGX-Internship-Stage-One";
const status_code = 200

    return res.json({
        "slack_name" : slack_name,
        "current_day" : current_day,
        "utc_time" : current_utc_time,
        "track" : track,
        "github_file_url": github_file_url,
        "github_repo_url": github_repo_url,
        "status_code": status_code
    })
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
