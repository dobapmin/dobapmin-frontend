import React from "react";
import mainLogo from "../../assets/mainLogo.png";
import userImg from "../../assets/userImg.png";
import { postLogout } from "../../lib/apis/login";
import { useLogin } from "../../lib/hooks/useLogin";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { loggedIn, setLoggedIn } = useLogin();
  const navigate = useNavigate();
  const handleLogout = () => {
    postLogout().then(setLoggedIn(""));
    navigate("/login");
  };
  return (
    <div
      style={{
        height: "10vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: "100px",
        paddingRight: "100px",
      }}
    >
      <img src={mainLogo} style={{ objectFit: "cover", height: "100%" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "30px",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "5px",
            backgroundColor: "white",
          }}
        >
          <img
            src={userImg}
            style={{
              width: "25px",
              height: "25px",
              backgroundColor: "white",
              border: "none",
            }}
          />
          <div
            style={{
              fontFamily: "Jalnan",
              backgroundColor: "white",
              border: "none",
            }}
          >
            {loggedIn}
          </div>
        </div>

        <button
          style={{
            backgroundColor: "#002DA7",
            color: "white",
            height: "45px",
            width: "120px",
            fontFamily: "Jalnan",
            borderRadius: "15px",
            border: "none",
          }}
          onClick={handleLogout}
        >
          {" "}
          로그아웃
        </button>
      </div>
    </div>
  );
}
