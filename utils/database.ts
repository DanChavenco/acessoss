import { Db, MongoClient } from 'mongodb';

interface ConnectType {
  db: Db,
  client: MongoClient,
}
// como a aplicação se conecta ao db
const client = new MongoClient(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})



// função que conecta cada api route ao db
export default async function connect(): Promise<ConnectType> {
  if (!client.isConnected()) {
    await client.connect();
  }

  const db = client.db('acessoss');
  return {db, client}
}
