[GraphQL](http://graphql.org/) is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

**Install packages**
```shell
npm install
```

**Start server**
```
npm start
```

**A graphql request**
```shell
curl --data "query={user(id:2){id,name,roles{id,name}}}" localhost:3000/graphql
```
