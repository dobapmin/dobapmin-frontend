import React from 'react';
import BoardList from '../components/main/boardList/BoardList';
import PostButton from '../components/main/postButton/PostButton';

export default function MainPage() {
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
      <BoardList title={'밥 게시글'} />
      <BoardList title={'내기 게시글'} />
      <BoardList title={'마감된 게시글'} />

      {/* 게시물 포스트 버튼 */}
      <PostButton />
    </div>
  );
}
