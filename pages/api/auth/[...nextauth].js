import NextAuth from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../lib/mongo"

export default NextAuth({
  providers: [
    
    
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    
  ],
  
    // first checks the wrapper data if it is availabe in the cache.if it is not then re asks the login credentials
    adapter: MongoDBAdapter(clientPromise),
})

// 5Shift
// nirajan
// add ip address for production 