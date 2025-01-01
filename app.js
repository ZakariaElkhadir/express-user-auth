import express from 'express'
import bcrypt from 'bcrypt'

const app = express()
const port = 5000;

// In-memory
const users = [];

app.use(express.json());

app.listen(port, () => {
    console.log('Server is started on', port)
})