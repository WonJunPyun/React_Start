import React from "react";
import styled from "styled-components";

const NotFound = (props) => {  
    return (
    <div>
      <h1>잘못 입력한 주소 입니다</h1>
      <button onClick={ () => {
          props.history.push("/");
          }
        }>
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default NotFound;