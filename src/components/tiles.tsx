import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/tiles.scss";

type UsersData = {
  group_id: number;
  cost: number;
  id: number;
  keyword: string;
  lifetime: number;
};

type UsersResponse = UsersData[];
const Tiles: React.FC = () => {
  const [users, setUsers] = useState<UsersResponse>([]);

  useEffect(() => {
    axios.get<UsersResponse>("http://localhost:4000/").then((response) => {
      const newUsers = response.data;
      setUsers(newUsers);
    });
  }, []);

  return (
    <div className="tiles-container">
      {users.map((user, index) => {
        return (
          <div className={`tile tile-${index}`} key={user.id}>
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
      })}
    </div>
  );
};

export default Tiles;
