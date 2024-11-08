import React, { useState } from 'react';
import profileImage from '../../assets/profileImage.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './index.css';

function DetailModal({ post, show, setShow }) {
  const [isParticipating, setIsParticipating] = useState(false);
  const [currentParticipants, setCurrentParticipants] = useState(13); // 현재 참여 인원
  const maxParticipants = 15; // 총 인원

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

  const handleClose = (e) => {
    setShow(false);
    e.stopPropagation();
    console.log('close');
  };
  const joinButtonStyle = {
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
    fontFamily: 'Jalnan, sans-serif',
    fontSize: '16px',
    color: '#000000',
    textAlign: 'center',
  };

  const closeButtonStyle = {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: '#000000',
    zIndex: 1001,
  };
  const tagStyle = {
    padding: '2px 13px',
    background: '#FFFFFF',
    border: '1.5px solid #022DA6',
    borderRadius: '10px',
    fontFamily: 'Jalnan, sans-serif',
    fontSize: '12px',
    color: '#000000',
  };

  const fontStyle = {
    fontFamily: 'Jalnan, sans-serif',
    fontSize: '16px',
    lineHeight: '19px',
    color: '#000000',
  };
  return (
    <Modal show={show} onHide={handleClose} centered>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* <Modal.Body>
        <div style={{ textAlign: 'center' }}>
          <img
            src={profileImage}
            alt="프로필 이미지"
            style={{ borderRadius: '50%', width: '50px', marginBottom: '10px' }}
          />
          <p>{post.isAnonymous ? '익명' : post.author}</p>
          <p>{post.date}</p>
          <hr />
          <h5>{post.title}</h5>
          <p style={{ maxHeight: '200px', overflowY: 'auto' }}>
            오늘 점심 맛보래 가서 점심 아무거나 드실 3분 구합니다. 김치두루치기
            2인에 다가 제육 하나 시켜서 나눠먹어요 ~~
          </p>
          <hr />
          <Button
            style={joinButtonStyle}
            onClick={handleJoinClick}
            disabled={currentParticipants === maxParticipants}
          >
            {currentParticipants === maxParticipants
              ? '마감됨'
              : isParticipating
              ? '참여취소'
              : '참여하기'}
          </Button>

          <p style={participantsStyle}>
            현재 참여 인원:{' '}
            <span style={{ color: '#022DA6' }}>{currentParticipants}명</span>/
            {maxParticipants}명
          </p>
          {!post.isAnonymous && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '10px',
                marginTop: '10px',
              }}
            >
              {post.participate.map((participant) => (
                <div style={tagStyle} key={participant}>
                  {participant}
                </div>
              ))}
            </div>
          )}
        </div>
      </Modal.Body> */}{' '}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'Jalnan, sans-serif',
              fontSize: '20px',
              color: '#000000',
            }}
          >
            밥메이트
          </div>
          <button
            style={closeButtonStyle}
            onClick={handleClose}
            aria-label="닫기"
          >
            &times;
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <img
            src={profileImage}
            alt="프로필 이미지"
            style={{ width: '14.5%', height: 'auto', borderRadius: '90px' }}
          />

          <div style={fontStyle}>
            {post.isAnonymous == true ? '익명' : post.name}{' '}
          </div>
          <div style={fontStyle}>{post.createdAt}</div>
        </div>
        <h5>{post.title}</h5>
        <div>
          <p>
            오늘 점심 맛보래 가서 점심 아무거나 드실 3분 구합니다. 김치두루치기
            2인에 다가 제육 하나 시켜서 나눠먹어요 ~~
          </p>
        </div>
        <div></div>
        <button
          style={joinButtonStyle}
          onClick={handleJoinClick}
          disabled={currentParticipants === maxParticipants}
        >
          {currentParticipants === maxParticipants
            ? '마감됨'
            : isParticipating
            ? '참여취소'
            : '참여하기'}
        </button>
        <p style={participantsStyle}>
          현재 참여 인원:{' '}
          <span style={{ color: '#022DA6' }}>{currentParticipants}명</span>/
          {maxParticipants}명
        </p>
        <span
          style={{
            display: 'flex',
            position: 'relative',
            top: '80%',
            justifyContent: 'center',
          }}
        >
          {post.isAnonymous == true ? (
            <span></span>
          ) : (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                gap: '10px',
                height: '25px',
                width: '65%',
              }}
            >
              {post.participate.map((participant) => {
                return (
                  <div style={tagStyle} key={participant}>
                    {participant}
                  </div>
                );
              })}
            </div>
          )}
        </span>
        <Modal.Footer></Modal.Footer>
      </div>
    </Modal>
  );
}

export default DetailModal;
