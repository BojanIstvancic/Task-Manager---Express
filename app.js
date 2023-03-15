require("./db/connect");
// if function is executed in module then we just need to require the module, we don't need to assign it
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

// middleware
// express.json() - to get a payload in request body (post)
app.use([express.json()]);

// routes
app.use("/api/v1/tasks", tasks);

const port = 3000;
app.listen(port, console.log(`Server is listening on port: ${port}`));
