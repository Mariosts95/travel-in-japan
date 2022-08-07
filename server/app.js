const express = require('express');

// initialize express
const app = express();

// initialize the server
app.listen(process.env.PORT || 3101, () => {
  console.log(`travel in japan server is listening on port: ${process.env.PORT || 3101}!`);
});
