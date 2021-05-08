import {NextApiRequest, NextApiResponse} from 'next';
import connect from '../../utils/database'; 

interface ErrorResponseType {
  error: string
}

interface SuccessResponseType {
  _id: string,
  username: string,
  fullname: string, 
  email: string, 
  password: string, 
  project: string, 
  role: string
}

//req: NextApiRequest
export default async(req: NextApiRequest, res: NextApiResponse<ErrorResponseType|SuccessResponseType>): Promise<void> => {

  if (req.method === 'POST') {
    // desestruturando a função:
    const { username, fullname, email, password, project, role } = req.body;

    // validações
    if (!username || !fullname || !email || !password || !project || !role) {
      res.status(400).json({error: 'Missing body parameter'})
      return //impede continuacao do codigo abaixo
    }

    // conexão ao db
    const { db } = await connect();
    const response = await db.collection('users').insertOne({
      username,
      fullname, 
      email, 
      password, 
      project, 
      role
    })
    res.status(200).json(response.ops[0]);

  } else if (req.method === 'GET') {
    const { username, email, password} = req.query //req.body;

    // validações
    if ((!username && !email) || !password) {
      res.status(400).json({error: 'Missing body parameter'})
      return //impede continuacao do codigo abaixo
    }
  
    // conexão ao db
    const { db } = await connect();

    // buscar usuario
    const response = await db.collection('users').findOne({username}) //depois tem que verificar se username existe antes de criar user

    if (response.password !== password) {
      res.status(400).json({error: 'Wrong password'})
      return
    }
    res.status(200).json(response);

  } else {
    res.status(400).json({error: 'Wrong request method'})
  }
  
}