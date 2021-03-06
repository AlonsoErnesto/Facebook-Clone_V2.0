import {getSession} from 'next-auth/react'

import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'


export default function Home({session}) {

  if(!session) return <Login/>;

  return (
    <div className="h-screen bg-red-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      {/* header */}
      <Header/>

      <main className="flex">
        {/*sidebar*/}
        <Sidebar/>
        {/* feed */}
        <Feed/>
        {/* widgets */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props:{
      session
    }
  }
}



