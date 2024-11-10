import React, { useState, useEffect } from 'react';
import profileImage from '../../assets/profileImage.png';
import './index.css';
import { useLogin } from '../../lib/hooks/useLogin';

function DetailModal({ postId, show, onHide }) {
  const { loggedIn } = useLogin();
  console.log(loggedIn);
  const [post, setPost] = useState(null);
  const [isParticipating, setIsParticipating] = useState(false);
  const [currentParticipants, setCurrentParticipants] = useState(0);

  // API 요청을 통해 데이터 불러오기
  useEffect(() => {
    if (postId) {
      fetch(`http://localhost:3000/api/board/${postId}`, {
        method: 'GET',
        credentials: 'include',
      })
        .then((res) => res.json())
        .then((data) => {
          setPost(data);
          setCurrentParticipants(data.currentCount || 0);

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
  }, [postId]);

  if (!show || !post) return null;

  const maxParticipants = post.totalCount || 0;

  const handleJoinClick = () => {
    if (isParticipating) {
      // 참여 취소 요청
      fetch(`http://localhost:3000/api/board/party/${postId}`, {
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
      fetch(`http://localhost:3000/api/board/party/${postId}`, {
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

  // createdAt 날짜 형식을 "YY.MM.DD"로 변환
  const formattedDate = post.createdAt
    ? post.createdAt.slice(2, 4) +
      '.' +
      post.createdAt.slice(5, 7) +
      '.' +
      post.createdAt.slice(8, 10)
    : '';

  // 카테고리 제목 설정
  const categoryTitle = post.isAnonymous ? '익명메이트' : '밥메이트';

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
    justifyContent: 'space-between', // 양쪽 정렬
    marginBottom: '10px',
  };

  const profileImageStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '25px',
  };

  const authorDateContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
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
    textAlign: 'right', // 오른쪽 정렬
  };

  const postTitleStyle = {
    fontFamily: 'Jalnan, sans-serif',
    fontSize: '18px',
    color: '#000000',
    marginTop: '20px',
    marginBottom: '10px',
  };

  const contentStyle = {
    minHeight: '180px', // 최소 높이 설정
    maxHeight: '180px',
    overflowY: 'auto',
    fontFamily: 'Noto Sans KR, sans-serif',
    fontSize: '14px',
    color: '#000000',
    marginTop: '20px',
    marginBottom: '10px',
  };

  const separatorStyle = {
    width: '100%',
    height: '1px',
    backgroundColor: '#E5E5E5',
    margin: '10px 0',
  };

  const joinButtonStyle = {
    display: 'block',
    margin: '20px auto',
    padding: '7px 15px',
    background: currentParticipants === maxParticipants ? '#FFFFFF' : '#022DA6',
    borderRadius: '10px',
    fontFamily: 'Jalnan, sans-serif',
    fontSize: '12px',
    color: currentParticipants === maxParticipants ? '#022DA6' : '#FFFFFF',
    border:
      currentParticipants === maxParticipants ? '1px solid #022DA6' : 'none',
    cursor: currentParticipants === maxParticipants ? 'default' : 'pointer',
    minWidth: '80px',
  };

  const participantsStyle = {
    textAlign: 'center',
    fontFamily: 'Jalnan, sans-serif',
    fontSize: '14px',
    color: '#000000',
    marginBottom: '10px',
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
            <span style={authorStyle}>
              {post.isAnonymous ? '익명' : post.name}
            </span>
          </div>
          <span style={dateStyle}>{formattedDate}</span>{' '}
          {/* 날짜 오른쪽 정렬 */}
        </div>

        <h5 style={postTitleStyle}>{post.title}</h5>
        <div style={separatorStyle}></div>

        <div style={contentStyle}>
          <p>{post.content}</p>
        </div>

        <div style={separatorStyle}></div>

        <button
          style={joinButtonStyle}
          onClick={handleJoinClick}
          disabled={currentParticipants >= maxParticipants}
        >
            {/* 1. 마감된 경우(post.isEnd == true): 마감됨
            2. 마감되지 않음(post.isEnd == false), 내가 포함됨: 참여취소
            3. 마감되지 않음(post.isEnd == false), 내가 포함되지 않음: 참여하기 */}
            {post.isEnd ? '마감됨' : isParticipating ? '참여취소' : '참여하기'}
        </button>
        <p style={participantsStyle}>
          현재 참여 인원:{' '}
          <span style={{ color: '#022DA6' }}>{currentParticipants}명</span>/
          {maxParticipants}명
        </p>

        <div style={tagContainerStyle}>
          {!post.isAnonymous &&
            post.participate &&
            post.participate.map((participant) => (
              <div style={tagStyle} key={participant}>
                {participant}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default DetailModal;
