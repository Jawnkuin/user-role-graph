import bodyParser from 'body-parser';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import schema from './graphql';

const app = express();
const port = 3000;
mongoose.Promise = global.Promise;
const db = mongoose.connect('mongodb://localhost/userrole');
app.use(bodyParser.urlencoded({extnded: false}));
app.use(bodyParser.json({limit: 100000000}));

app.use('/graphql', graphqlHTTP({
  schema: schema.getSchema(),
  rootValue: {
    data: db
  },
  graphiql: true
}));

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`start at localhost:${port}`);
});

export default app;
