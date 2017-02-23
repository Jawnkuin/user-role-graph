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
