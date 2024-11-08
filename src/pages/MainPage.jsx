import React from 'react';
import BoardList from '../components/main/boardList/BoardList';
import PostButton from '../components/main/postButton/PostButton';
import { useState, useEffect } from 'react';
import { fetchMainData } from '../lib/apis/main';
import { useLogin } from '../lib/hooks/useLogin';

export default function MainPage() {
  const [myList, setMyList] = useState([]);
  const [boardList, setBoardList] = useState([]);
  const [gameBoardList, setGameBoardList] = useState([]);
  const [endList, setEndList] = useState([]);

  const { loggedIn } = useLogin();

  useEffect(() => {
    fetchMainData().then((data) => {
      setBoardList(data.boards);
      setGameBoardList(data.gameBoards);

      // 내가 참여한 게시글만 추출
      const myBoards = data.boards.filter((board) =>
        board.participate.includes(loggedIn?.name)
      );
      const myGameBoards = data.gameBoards.filter((gameBoard) =>
        gameBoard.participate.includes(loggedIn?.name)
      );
      setMyList([...myBoards, ...myGameBoards]);

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
      <BoardList title={'내가 참여한 게시글'} data={myList} />
      <BoardList title={'밥 게시글'} data={boardList} />
      <BoardList title={'내기 게시글'} data={gameBoardList} />
      <BoardList title={'마감된 게시글'} data={endList} />

      {/* 게시물 포스트 버튼 */}
      <PostButton />
    </div>
  );
}
