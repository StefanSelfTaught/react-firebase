import React, { useState, useEffect } from "react";
import { Heading } from "evergreen-ui";
import { db } from "../firebase.utils.js";

const UsersData = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const getUsersData = async () => {
      const users = await db.collection("users").get();
      setUsersData(
        users.docs.map((document) => {
          return document.data();
        })
      );
    };
    getUsersData();
  }, []);

  return (
    <div>
      <ul>
        {usersData.map((user) => {
          return (
            <li style={{ marginBottom: '50px' }} key={user.name}>
              <Heading>{user.name}</Heading>
              {user.files.length ? (
                user.files.map((file, i) => (
                  <img key={i} width="200" height="auto" src={file} />
                ))
              ) : (
                <p>No files uploaded</p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersData;
