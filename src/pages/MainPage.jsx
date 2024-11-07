import React from 'react';
import BoardList from '../components/main/boardList/BoardList';
import PostButton from '../components/main/postButton/PostButton';
import { useState, useEffect } from 'react';
import { fetchMainData } from '../lib/apis/main';

export default function MainPage() {
  const [boardList, setBoardList] = useState([]);
  const [gameBoardList, setGameBoardList] = useState([]);
  const [endList, setEndList] = useState([]);

  useEffect(() => {
    fetchMainData().then((data) => {
      setBoardList(data.boards);
      setGameBoardList(data.gameBoards);

      // 마감된 게시글만 추출
      const endedBoards = data.boards.filter((board) => board.isEnd);
      const endedGameBoards = data.gameBoards.filter(
        (gameBoard) => gameBoard.isEnd
      );
      setEndList([...endedBoards, ...endedGameBoards]);
    });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
        padding: '60px 0px',
      }}
    >
      <BoardList title={'내가 참여한 게시글'} />
      <BoardList title={'밥 게시글'} data={boardList} />
      <BoardList title={'내기 게시글'} data={gameBoardList} />
      <BoardList title={'마감된 게시글'} data={endList} />

      {/* 게시물 포스트 버튼 */}
      <PostButton />
    </div>
  );
}
