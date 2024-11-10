import React, { useState, useEffect } from 'react';
import profileImage from '../../assets/profileImage.png';
import './index.css';
import { useLogin } from '../../lib/hooks/useLogin';
import CanvasConfetti from './confetti/CanvasConfetti';

function SnackModal({
  postId,
  show,
  onHide,
  isParticipating,
  setIsParticipating,
}) {
  const [post, setPost] = useState(null);
  const [currentParticipants, setCurrentParticipants] = useState(0);
  const [winner, setWinner] = useState(''); // 당첨자 상태 추가
  const [isDrawn, setIsDrawn] = useState(false); // 뽑기 완료 상태 추가
  const { loggedIn } = useLogin();
  // API 요청을 통해 데이터 불러오기
  useEffect(() => {
    if (postId) {
      fetch(`http://localhost:3000/api/gameBoard/${postId}`, {
        method: 'GET',
        credentials: 'include',
      })
        .then((res) => res.json())
        .then((data) => {
          setPost(data);
          setCurrentParticipants(data.currentCount || 0);
          setWinner(data.winner || ''); // 기존에 당첨자가 있으면 표시
          setIsDrawn(data.isEnd || false); // 기존에 마감 상태면 표시

          // 해당 글에 자신이 참여중인지 확인 후 반영
          for (let i = 0; i < data.participate.length; i++) {
            if (loggedIn.name === data.participate[i]) {
              setIsParticipating(true);
              break;
            }
          }
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [postId, isParticipating]);

  if (!show || !post) return null;

  const maxParticipants = post.totalCount || 0;

  const handleJoinClick = () => {
    // if (isParticipating) {
    //   if (post.name === loggedIn.name) return window.alert("글 작성자는 취소할 수 없습니다. 😭");
    //   setIsParticipating(false);
    //   setCurrentParticipants(currentParticipants - 1);
    // } else if (currentParticipants < maxParticipants) {
    //   setIsParticipating(true);
    //   setCurrentParticipants(currentParticipants + 1);
    // }
    if (isParticipating) {
      if (post.name === loggedIn.name) return window.alert("글 작성자는 취소할 수 없습니다. 😭");
      // 참여 취소 요청
      fetch(`http://localhost:3000/api/gameBoard/party/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: loggedIn.name }), // 현재 로그인한 사용자 이름 추가
        credentials: 'include',
      })
        .then((res) => res.json())
        .then((data) => {
          setIsParticipating(false);
          setCurrentParticipants(currentParticipants - 1);
          console.log(data.message);
        })
        .catch((error) =>
          console.error('Error cancelling participation:', error)
        );
    } else if (currentParticipants < maxParticipants) {
      // 참여 요청
      fetch(`http://localhost:3000/api/gameBoard/party/${postId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: loggedIn.name }), // 현재 로그인한 사용자 이름 추가
        credentials: 'include',
      })
        .then((res) => res.json())
        .then((data) => {
          setIsParticipating(true);
          setCurrentParticipants(currentParticipants + 1);
          console.log(data.message);
        })
        .catch((error) => console.error('Error joining:', error));
    }
  };

  const handleDrawClick = () => {
    if (!isDrawn && post.participate.length > 0) {
      const randomWinner =
        post.participate[Math.floor(Math.random() * post.participate.length)];
      setWinner(randomWinner);
      setIsDrawn(true);
    }
  };

  const formattedDate = post.createdAt
    ? post.createdAt.slice(2, 4) +
      '.' +
      post.createdAt.slice(5, 7) +
      '.' +
      post.createdAt.slice(8, 10)
    : '';

  const categoryTitle = '간식 내기';

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const modalStyle = {
    position: 'relative',
    width: '25%',
    height: '80%',
    maxWidth: '500px',
    background: '#FFFFFF',
    border: '3px solid #000000',
    borderRadius: '15px',
    boxSizing: 'border-box',
    padding: '20px',
  };

  const closeButtonStyle = {
    position: 'absolute',
    right: '10px',
    top: '10px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: '#000000',
    zIndex: 1001,
  };

  const titleStyle = {
    textAlign: 'center',
    fontFamily: 'Jalnan, sans-serif',
    fontSize: '20px',
    lineHeight: '24px',
    color: '#000000',
    marginBottom: '20px',
  };

  const profileContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
  };

  const profileImageStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '25px',
  };

  const authorStyle = {
    paddingLeft: '10px',
    fontFamily: 'Jalnan, sans-serif',
    fontSize: '14px',
    color: '#000000',
  };

  const dateStyle = {
    fontFamily: 'Jalnan, sans-serif',
    fontSize: '14px',
    color: '#000000',
    textAlign: 'right',
  };

  const postTitleStyle = {
    fontFamily: 'Jalnan, sans-serif',
    fontSize: '18px',
    color: '#000000',
    marginTop: '20px',
    marginBottom: '10px',
  };

  const contentStyle = {
    minHeight: '180px',
    maxHeight: '180px',
    overflowY: 'auto',
    fontFamily: 'Noto Sans KR, sans-serif',
    fontSize: isDrawn ? '30px' : '14px',
    color: isDrawn ? '#000000' : '#000000',
    textAlign: isDrawn ? 'center' : 'left',
    marginBottom: '10px',
    marginTop: '20px',
  };

  const separatorStyle = {
    width: '100%',
    height: '1px',
    backgroundColor: '#E5E5E5',
    margin: '10px 0',
  };

  const buttonStyle = {
    display: 'block',
    margin: '10px auto',
    padding: '7px 15px',
    background: '#022DA6',
    color: '#FFFFFF',
    fontFamily: 'Jalnan, sans-serif',
    fontSize: '12px',
    border: '1.5px solid #022DA6',
    borderRadius: '10px',
    cursor: 'pointer',
    minWidth: '80px',
  };

  const joinButtonStyle = {
    display: 'block',
    margin: '20px auto',
    padding: '7px 15px',
    // background: currentParticipants === maxParticipants ? '#FFFFFF' : '#022DA6',
    background: currentParticipants >= maxParticipants ? '#FFFFFF' : isParticipating ? '#E24444' : '#022DA6',
    borderRadius: '10px',
    fontFamily: 'Jalnan, sans-serif',
    fontSize: '12px',
    color: currentParticipants === maxParticipants ? '#022DA6' : '#FFFFFF',
    border:
      currentParticipants === maxParticipants ? '1px solid #022DA6' : 'none',
    cursor: currentParticipants === maxParticipants ? 'default' : 'pointer',
    minWidth: '80px',
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    background: '#474747',
    cursor: 'not-allowed',
    height: '170px',
    width: '310px',
    border: '1.5px solid #474747',
    borderRadius: '16px',
  };

  const participantsStyle = {
    textAlign: 'center',
    fontFamily: 'Jalnan, sans-serif',
    fontSize: '14px',
    color: '#000000',
    marginBottom: '10px',
  };

  const winnerStyle = {
    fontFamily: 'Jalnan, sans-serif',
    fontSize: '34px',
    color: '#000000',
    margin: '20px 0',
  };

  const tagContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    gap: '10px',
    marginTop: '10px',
    overflowX: 'auto',
  };

  const tagStyle = {
    display: 'inline-block',
    padding: '2px 13px',
    background: '#FFFFFF',
    border: '1.5px solid #022DA6',
    borderRadius: '10px',
    fontFamily: 'Jalnan, sans-serif',
    fontSize: '12px',
    color: '#000000',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  };

  return (
    <div style={modalOverlayStyle} onClick={onHide}>
      {isDrawn && (
        <>
          <CanvasConfetti />
        </>
      )}

      <div className="modalStyle" onClick={(e) => e.stopPropagation()}>
        <button style={closeButtonStyle} onClick={onHide} aria-label="닫기">
          &times;
        </button>
        <h5 style={titleStyle}>{categoryTitle}</h5>

        <div style={profileContainerStyle}>
          <div>
            <img
              src={profileImage}
              alt="프로필 이미지"
              style={profileImageStyle}
            />
            <span style={authorStyle}>{post.name}</span>
          </div>
          <span style={dateStyle}>{formattedDate}</span>
        </div>

        <h5 style={postTitleStyle}>{post.title}</h5>
        <div style={separatorStyle}></div>

        <div style={contentStyle}>
          {isDrawn ? (
            <p style={winnerStyle}>
              당첨자: {winner} <br></br> 🎉🎊🎉
            </p>
          ) : (
            <p>{post.content}</p>
          )}
        </div>

        <div style={separatorStyle}></div>

        {!isDrawn ? (
          <>
            <button
              style={joinButtonStyle}
              onClick={handleJoinClick}
              disabled={currentParticipants >= maxParticipants}
            >
              {/* {currentParticipants >= maxParticipants
                ? '마감됨'
                : isParticipating
                ? '참여취소'
                : '참여하기'} */}

              {/* 1. 마감된 경우(post.isEnd == true): 마감됨
              2. 마감되지 않음(post.isEnd == false), 내가 포함됨: 참여취소
              3. 마감되지 않음(post.isEnd == false), 내가 포함되지 않음: 참여하기 */}
              {currentParticipants >= maxParticipants ? '마감됨' : isParticipating ? '참여취소' : '참여하기'}

            </button>
            <p style={participantsStyle}>
              현재 참여 인원:{' '}
              <span style={{ color: '#022DA6' }}>{currentParticipants}명</span>/
              {maxParticipants}명
            </p>
            <button
              style={buttonStyle}
              onClick={handleDrawClick}
              disabled={isDrawn}
            >
              뽑기 시작
            </button>
            <div style={tagContainerStyle}>
              {post.participate.map((participant) => (
                <div style={tagStyle} key={participant}>
                  {participant}
                </div>
              ))}
            </div>
          </>
        ) : (
          <button
            style={{
              ...disabledButtonStyle,
              fontSize: '18px',
              padding: '15px 30px',
            }}
          >
            마감되었습니다
          </button>
        )}
      </div>
    </div>
  );
}

export default SnackModal;
