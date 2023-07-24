import Layout from "bcrypt cookie jsonwebtoken mongoose react react-dom reat-hot-toast sass/components/Layout";
import { useSession } from "next-auth/react";

export default function Home(){

  const {data:session}= useSession();
  
      // console.log({session})
  return <Layout>
    <div className="text-blue-800  flex justify-between items-center">
      <h2>
    hello, {session?.user?.name}
        </h2>
     
      <div className="flex  gap-1 p-2 rounded-xl items-center bg-yellow-500 ">

    <img className='rounded-xl w-6 h-6' src={session?.user?.image}  alt=""/>
    {session?.user?.name} 
           </div>
      </div>
  </Layout>
  
    
};
