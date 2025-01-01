import express from "express";
import bcrypt from "bcrypt";

const app = express();
const port = 5000;
app.use(express.json());

// In-memory
const users = [];

app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find user
    const findUser = users.find((data) => email == data.email);
    if (findUser) {
      res.status(400).send("wrong email or password !");
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // push email and password into users array
    users.push({ email, password: hashedPassword });
    console.log(users);
    res.status(201).send("Account created successfuly!");
    return;
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = users.find((data) => email == data.email);
    if (!findUser) {
      res.status(400).send("Wrong password or email !");
    }
    const passwordMatch = await bcrypt.compare(password, findUser.password);
    if (passwordMatch) {
      res.status(200).send("logged in successfully!");
    } else {
      res.status(400).send("invalid email or password");
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.listen(port, () => {
  console.log("Server is started on", port);
});
