const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/bebidasRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/bebidas', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
