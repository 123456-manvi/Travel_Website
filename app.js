const express = require("express");
const app = express();
const mongoose = require("mongoose");
const place = require("./models/place.js");
const path = require("path");
const MONGO_URL = "mongodb://127.0.0.1:27017/Hotel";

// Connect to MongoDB
main().then(() => {
    console.log("Connected to DB");
}).catch(err => console.log(err));

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }


async function main() {
    console.log("Attempting to connect to MongoDB");
    await mongoose.connect(MONGO_URL);
    console.log("Connection to MongoDB successful");
}
// Set up view engine and views directory
app.set("view engine", "ejs");  // Corrected this line
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

// Route to display all places
app.get("/place", async (req, res) => {
    try {
        const allPlace = await place.find({});
        console.log("any comment");
        res.render("places/index.ejs", { allPlace });  // Adjusted to match ejs convention
    } catch (error) {
        res.status(500).send("An error occurred");
    }
});

// Uncomment and use if needed
// Route to create a demo place
// app.get("/demoPlace", async (req, res) => {
//     try {
//         let samplePlace = new place({
//             title: "My New Hotel",
//             description: "It is very awesome",
//             price: 1200,
//             location: "Goa",
//             country: "India"
//         });
//         await samplePlace.save();
//         console.log("Sample was saved");
//         res.send("Successful testing");
//     } catch (err) {
//         console.error("Error in /demoPlace route:", err);
//         res.status(500).send("Internal Server Error");
//     }
// });

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
