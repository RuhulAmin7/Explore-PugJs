const users = [
  {
    name: 'Ruhul',
    age: 31,
  },
  {
    name: 'Amin',
    age: 32,
  },
];
// 1. dependencies
const express = require('express');
const path = require('path');
const { errorHandler } = require('./middleware/errorHandler');
const { notFoundHandler } = require('./middleware/notFoundHandler');

// 2. app initialization
const app = express();

// 3. express settings
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// port
const port = process.env.PORT || 3000;

// 4. middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// 4. routers
app.get('/', (req, res) => {
  //   res.send('Hello World!');
  res.render('index', { title: 'Explore-PugJs', users });
});

// 5. not found handler
app.use(notFoundHandler);

// 6. error handler
app.use(errorHandler);
// 7. listener
app.listen(port, () => {
  console.log('Server listening on port https://localhost:' + port);
});
