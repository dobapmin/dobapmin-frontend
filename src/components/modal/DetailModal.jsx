import React, { useState } from "react";
import profileImage from "../../src/assets/profileImage.png";
import "./index.css";

function DetailModal({ post, show, onHide }) {
  if (!show) return null;

  const [isParticipating, setIsParticipating] = useState(false);
  const [currentParticipants, setCurrentParticipants] = useState(13); // 현재 참여 인원
  const maxParticipants = 15; // 총 인원

  const handleJoinClick = () => {
    if (isParticipating) {
      // 참여 중이면 참여 취소, 현재 인원 감소
      setIsParticipating(false);
      setCurrentParticipants(currentParticipants - 1);
    } else if (currentParticipants < maxParticipants - 1) {
      // 참여 인원이 최대 인원 - 1 미만이면 참여하기 가능
      setIsParticipating(true);
      setCurrentParticipants(currentParticipants + 1);
    } else if (currentParticipants === maxParticipants - 1) {
      // 참여 인원이 최대 인원 - 1일 때 마지막 참여로 마감
      setIsParticipating(true);
      setCurrentParticipants(maxParticipants);
    }
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
    top: "32.06%",
    height: "200px",
    overflowY: "auto",
    fontFamily: "Noto Sans KR, sans-serif",
    fontSize: "16px",
    lineHeight: "23px",
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
    border: currentParticipants === maxParticipants ? "1px solid #022DA6" : "none",
    cursor: currentParticipants === maxParticipants ? "default" : "pointer",
    minWidth: "80px",
  };

  const participantsStyle = {
    position: "absolute",
    left: "50%",
    top: "75.73%",
    transform: "translateX(-50%)", // 가운데 정렬
    fontFamily: "Jalnan, sans-serif",
    fontSize: "16px",
    color: "#000000",
    textAlign: "center",
    whiteSpace: "nowrap", // 텍스트가 한 줄에 나오도록 설정
  };

  const tagStyle = {
    position: "absolute",
    left: "21.89%",
    top: "80.69%",
    padding: "2px 13px",
    background: "#FFFFFF",
    border: "1.5px solid #022DA6",
    borderRadius: "10px",
    fontFamily: "Jalnan, sans-serif",
    fontSize: "12px",
    color: "#000000",
  };

  return (
    <div style={modalOverlayStyle} onClick={onHide}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <button style={closeButtonStyle} onClick={onHide} aria-label="닫기">
          &times;
        </button>
        <h5 style={titleStyle}>밥메이트</h5>
        <img src={profileImage} alt="프로필 이미지" style={profileImageStyle} />
        <span style={authorStyle}>{post.author}</span>
        <span style={dateStyle}>{post.date}</span>
        <div style={titleLineStyle}></div>
        <h5 style={postTitleStyle}>{post.title}</h5>
        <div style={contentStyle}>
          <p>
            오늘 점심 맛보래 가서 점심 아무거나 드실 3분 구합니다. 김치두루치기
            2인에 다가 제육 하나 시켜서 나눠먹어요 ~~
          </p>
        </div>
        <div style={contentLineStyle}></div>
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
          현재 참여 인원: <span style={{ color: "#022DA6" }}>{currentParticipants}명</span>/{maxParticipants}명
        </p>
        <span style={{ ...tagStyle, left: "21.89%", top: "80%" }}>
          문종근
        </span>
        <span style={{ ...tagStyle, left: "43.49%", top: "80%" }}>
          이유진
        </span>
      </div>
    </div>
  );
}

export default DetailModal;
