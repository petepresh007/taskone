require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000 || process.env.PORT;

app.use(express.json());

/**CREATING AN END POINT */
app.get("/api", (req, res) => {
    const { slack_name, track } = req.query;
    /**FIXING DATE*/
    const date = new Date();
    /**WEEK DAYS ARRAY */
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = weekday[date.getDay()];


    return res.json({
        slack_name: slack_name,
        current_day: day,
        utc_time: date.toISOString().slice(0, 19) + "Z",
        track: track,
        github_file_url: "https://github.com/petepresh007/taskone/blob/main/app.js",
        github_repo_url: "https://github.com/petepresh007/taskone",
        status_code: 200
    })

});

app.listen(port, () => console.log(`server listening on port ${port}`))


