import React from 'react';
import BoardList from '../components/main/boardList/BoardList';
import PostButton from '../components/main/postButton/PostButton';

export default function MainPage() {
  const dummyData = [
    {
      category: '게임',
      title: '멘츠루',
      personCount: '1/3',
      description: '멘츠루 먹을 사람 3명 더 구합니다. 햄버거 냠냠',
      name: '박준승',
      date: '2024.11.04',
      isAnonymous: true,
      isEnd: false,
    },
    {
      category: '일식',
      title: '사쿠라',
      personCount: '2/4',
      description: '사쿠라에서 회 한 점 하실 분 찾습니다.',
      name: '김지수',
      date: '2024.11.05',
      isAnonymous: false,
      isEnd: false,
    },
    {
      category: '양식',
      title: '김밥천국',
      personCount: '1/2',
      description: '간단히 김밥 드실 분 구합니다!',
      name: '이영훈',
      date: '2024.11.06',
      isAnonymous: true,
      isEnd: true,
    },
    {
      category: '한식',
      title: '김밥천국',
      personCount: '1/2',
      description: '간단히 김밥 드실 분 구합니다!',
      name: '이영훈',
      date: '2024.11.06',
      isAnonymous: false,
      isEnd: true,
    },
    {
      category: '중식',
      title: '김밥천국',
      personCount: '1/2',
      description: '간단히 김밥 드실 분 구합니다!',
      name: '이영훈',
      date: '2024.11.06',
      isAnonymous: false,
      isEnd: true,
      isEnd: false,
    },
    {
      category: '분식',
      title: '김밥천국',
      personCount: '1/2',
      description: '간단히 김밥 드실 분 구합니다!',
      name: '이영훈',
      date: '2024.11.06',
      isAnonymous: false,
      isEnd: false,
    },
    {
      category: '아시안',
      title: '김밥천국',
      personCount: '1/2',
      description: '간단히 김밥 드실 분 구합니다!',
      name: '이영훈',
      date: '2024.11.06',
      isAnonymous: false,
      isEnd: false,
    },
    {
      category: '다이어트식',
      title: '김밥천국',
      personCount: '1/2',
      description: '간단히 김밥 드실 분 구합니다!',
      name: '이영훈',
      date: '2024.11.06',
      isAnonymous: false,
      isEnd: false,
    },
    {
      category: '디저트',
      title: '김밥천국',
      personCount: '1/2',
      description: '간단히 김밥 드실 분 구합니다!',
      name: '이영훈',
      date: '2024.11.06',
      isAnonymous: false,
      isEnd: false,
    },
    {
      category: '기타',
      title: '김밥천국',
      personCount: '1/2',
      description: '간단히 김밥 드실 분 구합니다!',
      name: '이영훈',
      date: '2024.11.06',
      isAnonymous: false,
      isEnd: false,
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
        padding: '60px 0px',
      }}
    >
      <BoardList title={'내가 참여한 게시글'} data={dummyData} />
      <BoardList title={'밥 게시글'} />
      <BoardList title={'내기 게시글'} />
      <BoardList title={'마감된 게시글'} />

      {/* 게시물 포스트 버튼 */}
      <PostButton />
    </div>
  );
}