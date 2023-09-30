import React from "react";
import "../styles/StudentInfo.css";

const StudentInfo = () => {
  return (
    <div id="student-info" class="section student-info">
      <h1 class="style-text">Student Information</h1>
      <img src="sheritsh.png" alt="sheritsh avatar" width="300px" style={{ borderRadius: '50%' }} />
      <div class="discription-my">
        <p>Oleg Polovinko</p>
        <p>sheritsh</p>
        <p>Age: 26 years</p>
      </div>
    </div>
  );
};

export default StudentInfo;
