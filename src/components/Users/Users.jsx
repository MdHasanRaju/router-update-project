import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();

  //     const [users, setUsers] = useState([]);
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(res => (res.json()))
  //     .then(data => setUsers(data))
  //   }, []);

  return <div > <h1 className="text-center text-primary">these are my users:{users.length}</h1> 
    <div>
        {
            users.map(user => <User user={user} key={user.id}/>)
        }
    </div>
  </div>;
};

export default Users;
