import bodyParser from 'body-parser';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import sysData from './data';
import schema from './graphql';

const app = express();

app.use(bodyParser.urlencoded({extnded: false}));
app.use(bodyParser.json({limit: 100000000}));

app.use('/graphql', graphqlHTTP({
  schema: schema.getSchema(),
  rootValue: {
    data: sysData
  },
  graphiql: true
}));

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('start at localhost:3000');
});

export default app;
