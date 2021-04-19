const fs = require('fs')
const fetch = require("node-fetch");
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.json())
  .then(data => {
    fs.writeFile('posts.json', JSON.stringify(data), (err) => {
        if(err) throw err
    })
  })
  .catch(function (err) {
    console.log(err);
  });

