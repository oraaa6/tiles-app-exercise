import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/tiles.scss";

type UsersDataTypes = {
  group_id: number;
  cost: number;
  id: number;
  keyword: string;
  lifetime: number;
};

const Tiles: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/").then((response) => {
      let newUsers = response.data;
      setUsers(newUsers);
    });
  }, []);
  const elements: JSX.Element[] = users.map((user: UsersDataTypes) => {
    return (
      <div className="tile" key={user.id}>
        <p className="tile__keyword">{user.keyword}</p>
        <div className="data-container tile__data-container">
          <div className="data">
            <p className="data__keyword">{user.id}</p>
            <p className="data__keyword">{user.lifetime}</p>
          </div>
          <div className="data">
            <p className="data__keyword">{user.cost}</p>
            <p className="data__keyword">Expenses</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="tiles-container">{elements}</div>
    </>
  );
};

export default Tiles;
