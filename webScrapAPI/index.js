const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const app = express()
const PORT = 3000

// ----------------
// Database
// ----------------
// connectDB(); -- Add later when I add a database

// ----------------
// Middlewares
// ----------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// ----------------
// Routes
// ----------------
const scrapRoutes = require("./routes/scrapRoutes");

app.use("/api/scrap", scrapRoutes);

// Express Server Port 
app.listen(PORT, () => {
    console.log(`Welcoming to web scrapping server: Link access http://localhost:${PORT}/api/scrap`);
})