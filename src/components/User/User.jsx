import React from "react";
import { Link, useNavigate } from "react-router-dom";

const User = ({ user }) => {
    const {name,email, phone, id} = user;
    const navigate = useNavigate();

    const handleUserBtn = () => {
        navigate(`/user/${id}`)
    }
  return (
    <div> 
      <div className="card card-side bg-base-100 shadow-xl w-60 mx-auto my-4">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{phone}</p>
          <p>{email}</p>
          <div className="card-actions justify-end"> 
            <Link className="btn btn-primary" to={`/user/${id}`}>See user with link</Link>
            <button onClick={handleUserBtn} className="btn btn-warning"> see user with btn</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
