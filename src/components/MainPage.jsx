import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DetailModal from "./DetailModal";

function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();

  const posts = [
    { id: "1", title: "밥메이트 제목1", date: "24.11.04", author: "문종근" },
    { id: "2", title: "밥메이트 제목2", date: "24.11.04", author: "이유진" },
  ];

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    navigate(`/api/main/${post.id}`);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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

      {isModalOpen && selectedPost && (
        <DetailModal
          post={selectedPost}
          show={isModalOpen}
          onHide={handleCloseModal}
        />
      )}
    </div>
  );
}

export default MainPage;
