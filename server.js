/** @format */
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors')
const User = require("./usermodel.js");
const Mentor = require("./mentor.js");
async function createUser(body, res) {
	await User.create(body);
}
async function createMentor(body, res) {
	await Mentor.create(body);
}
mongoose
	.connect(
		"connection url",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		}
	)
	.then(() => console.log("connected to db"));

app.use(express.json());
app.use(cors())
app.use(express.json());
app.post("/", (req, res) => {
	if (req.body.student === false || req.body.student === true) {
		if (
			req.body.lang &&
			req.body.place &&
			req.body.name &&
			req.body.email &&
			req.body.number
		) {
			if (!req.body.student) {
				createMentor(req.body);
				res.status(200).send({
					message: "Форма отправлена ",
				});
			} else {
				createUser(req.body);
				res.status(200).send({
					message: "Форма отправлена ",
				});
			}
		} else {
			res.status(200).send({ message: "Пожалуйста заполните все поля " });
		}
	} else {
		res.send({ message: "Пожалуйста заполните все поля " });
	}
});
app.get("/", (req, res) => {
	res.status(200).send({
		message: "the api is working",
		url:req.url
	});
});
app.listen(8080, (req, res) => {
	console.log("server is listening");
});
