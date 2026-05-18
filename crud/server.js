const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/studentdb")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

const Student = mongoose.model("Student", studentSchema);


// CREATE API
app.post("/students", async (req, res) => {
    try {
        const student = new Student(req.body);
        const savedStudent = await student.save();

        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// READ API
app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();

        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// UPDATE API
app.put("/students/:id", async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updatedStudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// DELETE API
app.delete("/students/:id", async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);

        res.json({ message: "Student Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});