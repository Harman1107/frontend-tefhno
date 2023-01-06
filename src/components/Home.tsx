import React from 'react'
import Table from "./Table"

const Home = (props:any, setUser) => {
    const users = props.users;
    console.log(users);
  return (
    <div className="ml-2 mx-auto max-w-9xl py-6 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Company Settings</h2>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Table</h2>
            <Table users = {users} setUser = {setUser} />
    </div>
  )
}

export default Home