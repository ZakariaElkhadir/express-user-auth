
# Express User Authentication

![Project Logo](https://camo.githubusercontent.com/86f61f7d4367c71a580e11af0bcd4f333d1b967225a679a12998657db1307dd3/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67)

This project is an example of user authentication using Express.js. It demonstrates how to register and log in users with hashed passwords using bcrypt.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ZakariaElkhadir/express-user-auth.git
    ```
2. Navigate to the project directory:
    ```sh
    cd express-user-auth
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    npm run dev
    ```
2. Use a tool like Postman or Thunder Client(vscode extension) to interact with the API endpoints:
    - Register a new user:
        ```sh
        POST /register
        {
          "email": "user@example.com",
          "password": "yourpassword"
        }
        ```
    - Log in with an existing user:
        ```sh
        POST /login
        {
          "email": "user@example.com",
          "password": "yourpassword"
        }
        ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.