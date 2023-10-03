import React from 'react';
import "../styles/SomeList.css";


const SomeList = ({ values }) => {
  return (
    <div>
      <h2 class="head-list">List of Values</h2>
      <ul class="item-ul">
        {values.map((value, index) => (
          <li class="item-li" key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default SomeList;
