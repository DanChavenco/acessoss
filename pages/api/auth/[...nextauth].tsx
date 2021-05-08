import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'

import Models from '../../../models'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "usuário" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        console.log(credentials.username + ' ' + credentials.password)
        console.log(credentials)
        const user = { id: 1, name: 'John Smith', email: 'jsmith@example.com', project: 'A001', role: 'acessoss' }
        
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          //return Promise.resolve(user)
          console.log(user)
          return user
        } else {
          // If you return null or false then the credentials will be rejected
          return null
          // You can also Reject this callback with an Error or with a URL:
          // throw new Error('error message') // Redirect to error page
          // throw '/path/to/redirect'        // Redirect to a URL
        }
      }
    }),
    // ...add more providers here
  ],

  // @link https://next-auth.js.org/tutorials/typeorm-custom-models
  // @link https://github.com/nextauthjs/next-auth/discussions/805
  adapter: Adapters.TypeORM.Adapter(
    process.env.DATABASE_URL,
    {
      models: {
        User: Models.User
      }
    }
  ),

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,

  secret: process.env.JWT_SECRET,

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    jwt: true, 
    ///signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
    
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days
    
    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens 
    ///updateAge: 24 * 60 * 60, // 24 hours
  },

  //jwt: {
    // A secret to use for key generation - you should set this explicitly
    // Defaults to NextAuth.js secret if not explicitly specified.
    // secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
    
    // Set to true to use encryption. Defaults to false (signing only).
    // encryption: true,
  
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // async encode({ secret, token, maxAge }) {},
    // async decode({ secret, token, maxAge }) {},
  //},
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken
      }
      if (user?.project) {
        token.project = user.project
      }
      if (user?.role) {
        token.role = user.role
      }
      return token
    },
    async session(session, token) {
      if(token?.accessToken) {
        session.accessToken = token.accessToken
      }
      if (token?.project) {
        session.user.project = token.project
      }
      if (token?.role) {
        session.user.role = token.role
      }
      return session
    }
  }
})