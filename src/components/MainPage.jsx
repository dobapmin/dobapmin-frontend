import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DetailModal from "./DetailModal";
import SnackModal from "./SnackModal";

function MainPage() {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isSnackModalOpen, setIsSnackModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();

  const posts = [
    { id: "1", title: "밥메이트 제목1", date: "24.11.04", author: "문종근" },
    { id: "2", title: "밥메이트 제목2", date: "24.11.04", author: "이유진" },
    { id: "3", title: "간식 내기", date: "24.11.06", author: "박고은" },
  ];

  const handlePostClick = (post) => {
    if (post.title === "간식 내기") {
      setIsSnackModalOpen(true);
    } else {
      setSelectedPost(post);
      setIsDetailModalOpen(true);
      navigate(`/api/main/${post.id}`);
    }
  };

  const handleCloseModal = () => {
    setIsDetailModalOpen(false);
    setIsSnackModalOpen(false);
    setSelectedPost(null);
    navigate("/api/main");
  };

  return (
    <div>
      <h1>메인 페이지 (임시)</h1>
      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            onClick={() => handlePostClick(post)}
            className="cursor-pointer"
          >
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.author}</p>
          </div>
        ))}
      </div>

      {isDetailModalOpen && selectedPost && (
        <DetailModal
          post={selectedPost}
          show={isDetailModalOpen}
          onHide={handleCloseModal}
        />
      )}

      {isSnackModalOpen && (
        <SnackModal
          post={{
            title: "소프트콘빵 10명 구합니다",
            date: "24.11.06",
            author: "박고은",
            content: "롯데리아 소프트콘빵 10명 구합니다 나만 안 걸리면 돼",
            currentParticipants: 9,
            maxParticipants: 10,
          }}
          show={isSnackModalOpen}
          onHide={handleCloseModal}
        />
      )}
    </div>
  );
}

export default MainPage;
