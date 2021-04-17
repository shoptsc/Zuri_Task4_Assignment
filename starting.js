const fs = require("fs");
const fetch = require('node-fetch');
const url = "https://jsonplaceholder.typicode.com/posts"


fs.mkdir('result', { recursive: true }, (err) => {
    if (err) throw err;
});

let posts;

fetch(url)
    .then(res=>res.json())
        .then(data=>posts = data)
            .then(()=>
                fs.writeFile(
                    "./result/posts.json", 
                    JSON.stringify(posts, null, '\t'), 
                    (err)=>console.log(err))
                )
    .catch(err=>console.log(err));
