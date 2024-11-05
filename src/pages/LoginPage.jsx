import React from "react";
import SolImg from "../assets/solImg.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "13vh",
      }}
    >
      <div style={{ fontFamily: "Jalnan", fontSize: "48px" }}>도밥민</div>
      <div style={{ fontFamily: "Jalnan", fontSize: "24px" }}>
        도파민 가득한 밥 시간
      </div>
      <img src={SolImg} style={{ width: "580px" }}></img>
      <input
        type="text"
        style={{
          width: "560px",
          height: "76px",
          borderRadius: "20px",
          border: "1px solid #CACACA",
          marginBottom: "28px",
          fontSize: "24px",

          paddingLeft: "20px",
        }}
        placeholder:style={{ color: "#CACACA" }}
        placeholder="닉네임"
        onClick={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={handleLogin}
        style={{
          width: "580px",
          height: "76px",
          backgroundColor: "#022DA6",
          color: "white",
          borderRadius: "20px",
          border: "none",
          fontSize: "24px",
          fontFamily: "Jalnan",
        }}
      >
        로그인
      </button>
    </div>
  );
}
