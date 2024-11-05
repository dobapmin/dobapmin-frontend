import React from 'react';
import BoardList from '../components/main/boardList/BoardList';

export default function MainPage() {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
        <BoardList title={'내가 참여한 게시글'} />
        <BoardList title={'밥 게시글'} />
        <BoardList title={'내기 게시글'} />
        <BoardList title={'마감된 게시글'} />
      </div>
    </div>
  );
}
