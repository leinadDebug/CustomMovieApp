import React from "react";
import Friends from "./Friend";

const initialfriends = [
  {
    id: 1,
    $name: 'Favor',
    image: "src\assets\images\favor.webp",
    balance: 14,
  },
  {
    id: 2,
    $name: 'Nzu',
    image: "src\assets\images\nzu.jfif",
    balance: 8,
  },
  {
    id: 3,
    $name: 'Gift',
    image: "",
    balance: 24,
  },
  {
    id: 4,
    $name: 'willams',
    image: "src\assets\images\willams.jpg",
    balance: 7,
  },
];

function ListofFriends() {
  const friends = initialfriends;

  return (
    <div>
      <ul>
        {friends.map((friend) => {
          return <Friends friend={friend} />;
        })}
      </ul>
    </div>
  );
}

export default ListofFriends;
