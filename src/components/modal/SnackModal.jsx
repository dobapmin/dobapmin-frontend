import React, { useState } from "react";
import profileImage from "../../src/assets/profileImage.png";
import "./index.css";


function SnackModal({ post, show, onHide }) {
  if (!show) return null;

  const [isParticipating, setIsParticipating] = useState(false);
  const [currentParticipants, setCurrentParticipants] = useState(14); // 현재 참여 인원
  const maxParticipants = 15; // 총 인원
  const [isDrawn, setIsDrawn] = useState(false); // 뽑기 시작 여부
  const [content, setContent] = useState("롯데리아 소프트콘빵 10명 구합니다 나만 안 걸리면 돼");

  const handleJoinClick = () => {
    if (isParticipating) {
      setIsParticipating(false);
      setCurrentParticipants(currentParticipants - 1);
    } else if (currentParticipants < maxParticipants - 1) {
      setIsParticipating(true);
      setCurrentParticipants(currentParticipants + 1);
    } else if (currentParticipants === maxParticipants - 1) {
      setIsParticipating(true);
      setCurrentParticipants(maxParticipants);
    }
  };

  const handleDrawClick = () => {
    setIsDrawn(true);
    setContent("당첨자: 박고은 🎉🎊🎉");
  };

  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const modalStyle = {
    position: "relative",
    width: "338px",
    height: "80vh",
    background: "#FFFFFF",
    border: "3px solid #000000",
    borderRadius: "15px",
    boxSizing: "border-box",
  };

  const closeButtonStyle = {
    position: "absolute",
    right: "10px",
    top: "10px",
    background: "none",
    border: "none",
    fontSize: "24px",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#000000",
    zIndex: 1001,
  };

  const titleStyle = {
    position: "absolute",
    left: "0",
    right: "0",
    top: "3.51%",
    fontFamily: "Jalnan, sans-serif",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#000000",
    textAlign: "center",
  };

  const profileImageStyle = {
    position: "absolute",
    left: "5.62%",
    top: "10.84%",
    width: "14.5%",
    height: "auto",
    borderRadius: "90px",
  };

  const authorStyle = {
    position: "absolute",
    left: "22%",
    top: "13.5%",
    fontFamily: "Jalnan, sans-serif",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#000000",
  };

  const dateStyle = {
    position: "absolute",
    right: "11.83%",
    top: "13.5%",
    fontFamily: "Jalnan, sans-serif",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#000000",
  };

  const titleLineStyle = {
    position: "absolute",
    left: "8.58%",
    right: "10.65%",
    top: "28.09%",
    border: "1px solid #F1F1F1",
  };

  const postTitleStyle = {
    position: "absolute",
    left: "8.58%",
    top: "21.98%",
    fontFamily: "Jalnan, sans-serif",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#000000",
  };

const contentStyle = {
    position: "absolute",
    left: "8.58%",
    right: "11.83%",
    top: isDrawn ? "41%" : "32.06%",
    height: isDrawn ? "auto" : "200px",
    overflowY: "auto",
    fontFamily: "Noto Sans KR, sans-serif",
    fontStyle: "normal",
    fontWeight: isDrawn ? "bold" : "400",
    fontSize: isDrawn ? "32px" : "16px", // 뽑기 시작 후 글씨 크기 조정
    lineHeight: isDrawn ? "40px" : "23px",
    textAlign: isDrawn ? "center" : "left", // 뽑기 시작 후 가운데 정렬
    display: isDrawn ? "flex" : "block", // 뽑기 시작 후 flex로 변경
    alignItems: isDrawn ? "center" : "unset",
    justifyContent: isDrawn ? "center" : "unset",
    color: "#000000",
  };

  const contentLineStyle = {
    position: "absolute",
    left: "8.58%",
    right: "10.65%",
    top: "66.11%",
    border: "1px solid #F1F1F1",
  };

  const joinButtonStyle = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: "67.94%",
    padding: "7px 15px",
    background: currentParticipants === maxParticipants ? "#FFFFFF" : "#022DA6",
    borderRadius: "10px",
    fontFamily: "Jalnan, sans-serif",
    fontSize: "12px",
    color: currentParticipants === maxParticipants ? "#022DA6" : "#FFFFFF",
    border:
      currentParticipants === maxParticipants ? "1px solid #022DA6" : "none",
    cursor: currentParticipants === maxParticipants ? "default" : "pointer",
    minWidth: "80px",
  };

//   const participantsStyle = {
//     position: "absolute",
//     left: "50%",
//     top: isDrawn ? "70%" : "75.73%",
//     transform: "translateX(-50%)", 
//     fontFamily: "Jalnan, sans-serif",
//     fontSize: isDrawn ? "30px" : "16px",
//     width: "280px",
//     height: "170px",
//     margin: 0,
//     backgroundColor: isDrawn ? "#474747" : 'FFFFFF',
//     borderRadius: "16px",
//     padding: isDrawn ? "25px" : 0,
//     color: isDrawn ? "#FFFFFF" : '#000000',
//     textAlign: "center",
//     whiteSpace: "nowrap", 
//   };

const participantsStyle = {
    position: "absolute",
    left: "50%",
    top: isDrawn ? "70%" : "75.73%",
    transform: "translateX(-50%)",
    fontFamily: "Jalnan, sans-serif",
    fontSize: isDrawn ? "20px" : "16px", // 폰트 크기 조정
    width: "280px",
    height: isDrawn ? "150px" : "auto", // 높이 조정
    backgroundColor: isDrawn ? "#474747" : "#FFFFFF",
    borderRadius: "16px",
    padding: isDrawn ? "25px 0" : "0", // 상하 좌우 padding 조정
    color: isDrawn ? "#FFFFFF" : "#000000",
    display: "flex", // flex를 사용하여 중앙 정렬
    alignItems: "center", // 수직 중앙 정렬
    justifyContent: "center", // 수평 중앙 정렬
    textAlign: "center",
    whiteSpace: "nowrap",
  };
  

  const drawButtonStyle = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: "85%",
    padding: "7px 15px",
    backgroundColor: "#022DA6",
    color: "#FFFFFF",
    border: "1px solid #022DA6",
    borderRadius: "10px",
    fontFamily: "Jalnan, sans-serif",
    fontSize: "12px",
    cursor: "pointer",
  };

  return (
    <div style={modalOverlayStyle} onClick={onHide}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <button style={closeButtonStyle} onClick={onHide} aria-label="닫기">
          &times;
        </button>
        <h5 style={titleStyle}>간식 내기</h5>
        <img src={profileImage} alt="프로필 이미지" style={profileImageStyle} />
        <span style={authorStyle}>{post.author}</span>
        <span style={dateStyle}>{post.date}</span>
        <div style={titleLineStyle}></div>
        <h5 style={postTitleStyle}>{post.title}</h5>
        <div style={contentStyle}>
          <p>{content}</p>
        </div>
        <div style={contentLineStyle}></div>
        {isDrawn ? (
          <p style={participantsStyle}>마감되었습니다</p>
        ) : (
          <>
            <button
              style={joinButtonStyle}
              onClick={handleJoinClick}
              disabled={currentParticipants === maxParticipants}
            >
              {currentParticipants === maxParticipants
                ? "마감됨"
                : isParticipating
                ? "참여취소"
                : "참여하기"}
            </button>
            <p style={participantsStyle}>
              현재 참여 인원:{" "}
              <span style={{ color: "#022DA6" }}>{currentParticipants}명</span>/
              {maxParticipants}명
            </p>
            <button style={drawButtonStyle} onClick={handleDrawClick}>
              뽑기 시작
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default SnackModal;
