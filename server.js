require("express-async-errors");
const app = require("express")();
const { PORT } = process.env ?? 8080;


// Pre-route middlewares
require("./src/middlewares/pre-route.middleware")(app);

// API routes
app.use("", require("./src/routes"));

// Ping route for testing connection

// Error middlewares
require("./src/middlewares/error.middleware")(app);

// Listen to server port
app.listen(PORT, async () => {
});

// On  server error
app.on("error", (error) => {
     console.error(`<::: An error occurred on the server: \n ${error}`);
});


module.exports = app