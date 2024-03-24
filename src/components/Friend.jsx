import React from "react";

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.img} alt={friend.$name}></img>
      <h3 key={friend.id}>{friend.$name}</h3>
      {friend.balance < 0 && <p className= 'red'> you owe {friend.$name} {friend.balance}</p>  }
    </li>
    
  );
}

export default Friend;
