import React, { useState, useEffect } from 'react';
import BoardList from '../components/main/boardList/BoardList';
import PostButton from '../components/main/postButton/PostButton';
import DetailModal from '../components/modal/DetailModal';
import SnackModal from '../components/modal/SnackModal';
import { fetchMainData } from '../lib/apis/main';
import { useLogin } from '../lib/hooks/useLogin';

export default function MainPage() {
  const [myList, setMyList] = useState([]);
  const [boardList, setBoardList] = useState([]);
  const [gameBoardList, setGameBoardList] = useState([]);
  const [endList, setEndList] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isSnackModalOpen, setIsSnackModalOpen] = useState(false);
  const [isParticipatingRendering, setIsParticipatingRendering] =
    useState(false);

  useState(false);
  const { loggedIn } = useLogin();

  // 게시글 조회 GET
  useEffect(() => {
    fetchMainData().then((data) => {
      const reversedBoards = [...data.boards].reverse();
      const reversedGameBoards = [...data.gameBoards].reverse();

      setBoardList(reversedBoards);
      setGameBoardList(reversedGameBoards);

      const myBoards = reversedBoards.filter((board) =>
        board.participate.includes(loggedIn?.name)
      );
      const myGameBoards = reversedGameBoards.filter((gameBoard) =>
        gameBoard.participate.includes(loggedIn?.name)
      );
      setMyList([...myBoards, ...myGameBoards]);

      const endedBoards = reversedBoards.filter((board) => board.isEnd);
      const endedGameBoards = reversedGameBoards.filter(
        (gameBoard) => gameBoard.isEnd
      );
      setEndList([...endedBoards, ...endedGameBoards]);
    });
  }, [loggedIn, isParticipatingRendering]);

  const handlePostClick = (post) => {
    setSelectedPostId(post._id);
    if (post.hasOwnProperty('winner')) {
      // 바뀐 부분: winner 속성을 기준으로 SnackModal 열기
      setIsSnackModalOpen(true);
    } else {
      setIsDetailModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsDetailModalOpen(false);
    setIsSnackModalOpen(false);
    setSelectedPostId(null);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
        padding: '60px 0px',
      }}
    >
      <BoardList
        title={'내가 참여한 게시글'}
        data={myList}
        onCardClick={handlePostClick}
      />
      <BoardList
        title={'밥 게시글'}
        data={boardList}
        onCardClick={handlePostClick}
      />
      <BoardList
        title={'내기 게시글'}
        data={gameBoardList}
        onCardClick={handlePostClick}
      />
      <BoardList
        title={'마감된 게시글'}
        data={endList}
        onCardClick={handlePostClick}
      />

      <PostButton />

      {/* DetailModal */}
      {isDetailModalOpen && selectedPostId && (
        <DetailModal
          postId={selectedPostId}
          show={isDetailModalOpen}
          onHide={handleCloseModal}
          isParticipatingRendering={isParticipatingRendering}
          setIsParticipatingRendering={setIsParticipatingRendering}
        />
      )}

      {/* SnackModal */}
      {isSnackModalOpen && selectedPostId && (
        <SnackModal
          postId={selectedPostId}
          show={isSnackModalOpen}
          onHide={handleCloseModal}
          isParticipatingRendering={isParticipatingRendering}
          setIsParticipatingRendering={setIsParticipatingRendering}
        />
      )}
    </div>
  );
}
