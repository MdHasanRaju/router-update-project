import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
  const user = useLoaderData();
  const navigate = useNavigate();

  //   const params = useParams();
  //   console.log(params)

  //   const [user, setUser] = useState({});
  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/users/${params?.userId}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data)
  //       });
  //   }, []);

  const handleUserBackBtn = () => {
    navigate(-1)
  }

  return (
    <div className="text-center">
      this is user details:
      <h1>{user.id}</h1>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={handleUserBackBtn} className="btn btn-error"> go back btn</button>

    </div>
  );
};

export default UserDetail;
