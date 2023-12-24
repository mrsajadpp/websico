# Websico - A Modern Node.js Web Framework

Welcome to Websico, a versatile and lightweight web framework inspired by the simplicity and expressiveness of Express.js. Websico is designed to streamline your Node.js web development experience, providing a simple yet powerful foundation for building web applications, APIs, and more.

[![GitHub license](https://img.shields.io/github/license/mrsajadpp/websico.svg)](https://github.com/mrsajadpp/websico/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/mrsajadpp/websico.svg)](https://github.com/mrsajadpp/websico/issues)
[![GitHub stars](https://img.shields.io/github/stars/mrsajadpp/websico.svg)](https://github.com/mrsajadpp/websico/stargazers)

## Table of Contents

1. [Installation](#installation)
2. [Getting Started](#getting-started)
3. [Features](#features)
4. [Middleware](#middleware)
5. [Routing](#routing)
6. [Extensibility](#extensibility)
7. [Error Handling](#error-handling)
8. [Expressive API](#expressive-api)
9. [Developer Note](#developer-note)
10. [Documentation](#documentation)
11. [Contributing](#contributing)
12. [License](#license)
13. [Contact](#contact)

## 1. Installation

To add Websico to your project, run the following npm command:

```bash
npm install websico
```

## 2. Getting Started

Initialize Websico in your project with the following code:

```javascript
const websico = require('websico');
const app = websico();

app.listen(3000, () => {
    console.log("Server started: 3000");
});

app.get('/', (req, res) => {
    res.send("Hello, Websico!");
});
```

## 3. Features

### 3.1 Lightweight

Websico is designed to be a minimalistic framework, ensuring your codebase remains clean and efficient.

### 3.2 Routing

Define routes effortlessly and handle various HTTP methods such as GET, POST, PUT, DELETE, etc.

### 3.3 Middleware

Enhance your application's functionality with middleware, allowing for custom processing of requests and responses.

### 3.4 Extensibility

Easily extend Websico's capabilities through middleware or by creating custom plugins tailored to your project's needs.

## 4. Middleware

```javascript
// Example middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`Received request at ${req.url}`);
    next();
});
```

## 5. Routing

```javascript
// Handling GET request at the root endpoint
app.get('/', (req, res) => {
    res.send("Welcome to Websico!");
});

// Handling POST request at /api
app.post('/api', (req, res) => {
    res.json({ message: "Data received successfully" });
});
```

## 6. Extensibility

Websico provides a robust architecture for extending functionality. Consider creating custom plugins for your specific use cases.

## 7. Error Handling

```javascript
// Handling 404 errors
app.use((req, res) => {
    res.status(404).send("Page not found");
});

// Handling other errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});
```

## 8. Expressive API

Websico's API is designed to be clear and expressive, making it easy to understand and work with.

## 9. Developer Note

Websico is inspired by the developer-friendly nature of Express.js. We aim to provide a similar experience, making it easy for developers familiar with Express.js to transition seamlessly to Websico.

## 10. Documentation

For detailed documentation and examples, visit [Websico Documentation](https://yourdocumentationlink.com).

## 11. Contributing

We welcome contributions! Feel free to open issues or submit pull requests. Please follow our [Contribution Guidelines](CONTRIBUTING.md).

## 12. License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 13. Contact

For inquiries or support, reach out to us at [hello@thintry.com](mailto:hello@thintry.com).

Happy coding with Websico! 🚀

<b>Technical Support by https://thintry.com/</b>

<img src="https://thintry.com/wp-content/uploads/2023/12/nobnr2-1.png" alt="Thintry Logo" width="400">