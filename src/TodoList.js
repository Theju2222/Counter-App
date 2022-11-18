import React, { useState } from "react";

const TodoList = () => {
  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      setNum(0);
    }
  };
  const increNum =() => {
    setNum(num+5);
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <div className="h1"> {num} </div>
          <div className="btn_div">
            <div className="up" onClick={incNum}><div className="alig"> 1 <br/> Increment by </div></div>
            <div className="down" onClick={decNum}><div className="align">Decrement by <br/> 1</div> </div>
          </div>
          <button
            onClick={() => parseInt(document.getElementById("incrementby").value)?setNum(num + parseInt(document.getElementById("incrementby").value)):setNum(num)}
          >
            Increment by
          </button>
          <input type="number" id="incrementby" />
        </div>
      </div>
    </>
  );
};

export default TodoList;
