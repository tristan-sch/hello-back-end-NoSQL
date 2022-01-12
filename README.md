# hello-back-end-NoSQL

Project for my assignment for Module 5: **Back-end - NoSQL in the cloud**

- Go to the [guide](https://io.tskoli.dev/guides/61d321e7ef0b55000925bc5b)
- Go to the [live demo](https://hello-back-end-no-sql.vercel.app/)

## Notes

I wanted deploy on Vercel the backend from this [tutorial](https://ellertsmarik.medium.com/). It did not work at first, after some research (and help!) I found the solution. to add two things:

`On the backend repository` ->
I created a **vercel.json** file like so:

```
{
    "builds": [
      {
        "src": "server.js",
        "use": "@vercel/node"
      }
    ],

    "routes": [
      {
        "src": "/.*",
        "dest": "/server.js"
      }
    ]

  }
```

`In the Build and Output Settings on Vercel` ->
I ovverided the **Build command** with "node server.js"

## Stack

- MERN -> MongoDB, Express, React, Node
- Deployment on [Vercel](https://vercel.com)

## Resources

- [The MERN stack for beginners](https://ellertsmarik.medium.com/)
