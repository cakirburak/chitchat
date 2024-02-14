# ChitChat

ChitChat is a real-time chat application built with Node.js, Express, MongoDB, React, and Socket.io.

- [Demo](https://chitchat-f8bx.onrender.com/) (give it a time to load)
- [System Design Document](https://woolly-society-a2b.notion.site/System-Design-Document-ChitChat-21d81cc6c0d94d0192a02e249fd7a5fa?pvs=4)

## Features

- **Real-time messaging:** Instantly send and receive messages with other users.
- **User authentication:** Securely authenticate users with JWT(JSON Web Tokens).
- **Multiple chat rooms:** Create and join different chat rooms for group conversations.
- **User presence:** See who's online and active in each chat room.
- **Responsive UI:** Built with React and Tailwind CSS for a modern and intuitive user experience.

## Technologies Used

- **Backend**: Node.js, Express, MongoDB, Socket.io
- **Frontend**: React, Context API, Socket.io Client, Tailwind CSS
- **Authentication**: JWT (JSON Web Tokens)

## Installation

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/cakirburak/chitchat.git

# Go into the repository
$ cd chitchat

# Install dependencies
$ npm install && npm install --prefix client

# Run the app for api
$ npm run dev

# Run the app for client
$ cd client/
$ npm run dev
```
> **Note**
> Make sure you set enviromental variables; `MONGO_DB_URI`, `JWT_SECRET`, `NODE_ENV`, `PORT`.

## Contributing

🙌 Contributions are welcome! If you'd like to contribute to this project, feel free to open a pull request or submit an issue with any suggestions or improvements.

## License

📄 This project is licensed under the [MIT License](LICENSE).
