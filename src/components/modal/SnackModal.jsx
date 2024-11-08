import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import profileImage from '../../assets/profileImage.png';
import './index.css';

function SnackModal({ post, show, onHide }) {
  const [isParticipating, setIsParticipating] = useState(false);
  const [currentParticipants, setCurrentParticipants] = useState(14);
  const maxParticipants = 15;
  const [isDrawn, setIsDrawn] = useState(false);
  const [content, setContent] = useState(
    '롯데리아 소프트콘빵 10명 구합니다 나만 안 걸리면 돼'
  );

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
    setContent('당첨자: 박고은 🎉🎊🎉');
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>간식 내기</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex align-items-center mb-3">
          <img
            src={profileImage}
            alt="프로필 이미지"
            className="rounded-circle me-3"
            width="50"
            height="50"
          />
          <div>
            <p className="mb-0 fw-bold">{post.author}</p>
            <p className="mb-0 text-muted">{post.date}</p>
          </div>
        </div>
        <h5 className="fw-bold">{post.title}</h5>
        <hr />
        <div style={{ textAlign: isDrawn ? 'center' : 'left' }}>
          <p
            className={`fs-${isDrawn ? '3' : '6'} ${isDrawn ? 'fw-bold' : ''}`}
            style={{ lineHeight: isDrawn ? '1.5' : '1.2' }}
          >
            {content}
          </p>
        </div>
        <hr />
        {isDrawn ? (
          <p className="text-center fw-bold">마감되었습니다</p>
        ) : (
          <>
            <Button
              variant={
                currentParticipants === maxParticipants
                  ? 'outline-primary'
                  : 'primary'
              }
              onClick={handleJoinClick}
              disabled={currentParticipants === maxParticipants}
              className="w-100 mb-3"
            >
              {currentParticipants === maxParticipants
                ? '마감됨'
                : isParticipating
                ? '참여취소'
                : '참여하기'}
            </Button>
            <p className="text-center">
              현재 참여 인원:{' '}
              <span className="text-primary">{currentParticipants}명</span>/
              {maxParticipants}명
            </p>
            <Button
              variant="success"
              onClick={handleDrawClick}
              className="w-100"
            >
              뽑기 시작
            </Button>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default SnackModal;
