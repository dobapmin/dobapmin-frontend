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
  const { loggedIn } = useLogin();

  useEffect(() => {
    fetchMainData().then((data) => {
      setBoardList(data.boards);
      setGameBoardList(data.gameBoards);

      const myBoards = data.boards.filter((board) =>
        board.participate.includes(loggedIn?.name)
      );
      const myGameBoards = data.gameBoards.filter((gameBoard) =>
        gameBoard.participate.includes(loggedIn?.name)
      );
      setMyList([...myBoards, ...myGameBoards]);

      const endedBoards = data.boards.filter((board) => board.isEnd);
      const endedGameBoards = data.gameBoards.filter(
        (gameBoard) => gameBoard.isEnd
      );
      setEndList([...endedBoards, ...endedGameBoards]);
    });
  }, [loggedIn]);

  const handlePostClick = (post) => {
    setSelectedPostId(post._id);
    if (post.category === '내기 게시글' || post.title === '간식 내기') {
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
        />
      )}

      {/* SnackModal */}
      {isSnackModalOpen && selectedPostId && (
        <SnackModal
          postId={selectedPostId}
          show={isSnackModalOpen}
          onHide={handleCloseModal}
        />
      )}
    </div>
  );
}
