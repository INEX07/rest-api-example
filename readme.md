# REST API EXAMPLE
Simple and easy to use rest api example.

# Methods
- GET
- POST

# Setup
- Download this project
- Open `powershell` or `cmd` on the project location
- run `npm install`
- run `npm start`
- Open browser
- Go to `https://localhost:3000`

# Examples [ Fetching ]

- GET
```js
const fetch = require("node-fetch");

fetch("https://localhost:3000/api/ping")
    .then(res => res.json())
    .then(body => console.log(body));
```

- POST
```js
const fetch = require("node-fetch");

fetch("https://localhost:3000/api/something", {
        method: "POST"
    })
    .then(res => res.json())
    .then(body => console.log(body));
```

- Headers
```js
const fetch = require("node-fetch");

fetch("https://localhost:3000/api/something", {
        method: "POST",
        headers: {
            "authorization": "abcABC123"
        }
    })
    .then(res => res.json())
    .then(body => console.log(body));
```

# Website Preview
[Click Me](https://restapiexample.glitch.me)