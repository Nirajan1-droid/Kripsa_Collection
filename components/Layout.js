import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useSession, signIn, signOut } from "next-auth/react"
import Nav from '@/components/Nav.js'


const inter = Inter({ subsets: ['latin'] })

export default function Layout({children}) {
  const { data: session } = useSession()
  if(!session) {
    return(


<div className='bg-red-900 w-screen h-screen flex justify-center items-center'>
{/* css for button */}
<button className='bg-white p-2 px-4 rounded-lg' onClick={() => signIn('google')}>
  Login with google
</button>


</div>
)  }
  return (
  

<>
{/* 1st background  */}
<div className='bg-black min-h-screen flex'>
  <Nav/>
{/* flex-grow all the way to the right side */}
{/* background for right side of the window */}
{/* <div className='bg-white flex flex-col-reverse flex-grow  mt-1 mr-1 mb-100 rounded-lg p-4'> */}
<div className='bg-white  flex-grow  mt-1 mr-1 mb-100 rounded-lg p-4'>
looged in as {children} <br/>
<button onClick={() => signOut()}>Sign out</button>
</div>
</div>
</>
  )
}
