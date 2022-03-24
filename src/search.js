import React, { useContext } from "react";
import { Context } from "./Contexts/Context";

export const Search = () => {
  const [state, setState] = useContext(Context);

  const handleInputText = (value) => {
    setState((prev) => ({ ...prev, inputText: value }));
  };

  return (
    <div>
      <div style={{ marginBlock: "20px" }}>
        <div
          class="container"
          style={{
            display: "inline",
            padding: "2px 0px",
            border: "2px solid black",
          }}
        >
          <input
            placeholder=" Search..."
            value={state.inputText}
            onChange={(e) => handleInputText(e.target.value)}
            style={{ border: "none", outline: "none" }}
          ></input>
          <div
            style={{
              alignContent: "center",
              backgroundColor: "#0091C0",
              display: "inline",
              padding: "2px",
              paddingLeft: "8px",
              paddingRight: "8px",
              borderColor: "black",
              borderLeft: "2px solid black",
            }}
          >
            <i class="fa fa-search"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
