import React from 'react';
import CategoryButton from '../components/post/categoryBoard/CategoryButton';
import './PostPage.css';
import { useState } from 'react';
import axios from 'axios';

import { postBap, postGame } from '../lib/apis/post';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const CATEGORY_LIST = [
  '한식',
  '중식',
  '양식',
  '일식',
  '분식',
  '아시안',
  '다이어트식',
  '디저트',
  '기타',
];

const TITLE_CATEGORY_LIST = ['밥 메이트', '익명 메이트', '간식 내기'];

export default function PostPage() {
  const [selectedCategory, setSelectedCategory] = useState('밥 메이트');
  const [selectedFoodCategory, setSelectedFoodCategory] = useState('한식');
  const [userInputTitle, setUserInputTitle] = useState('');
  const [userInputContent, setUserInputContent] = useState('');
  const [userInputTotalCount, setUserInputTotalCount] = useState(2);

  const navigate = useNavigate();


  // 밥 메이트 선택 후 확인 버튼 클릭 시
  const babConfirmClick = () => {
    let isAnonymous = false;
    if (selectedCategory === '익명 메이트') isAnonymous=true;
    postBap(userInputTitle, userInputContent, selectedFoodCategory, isAnonymous, userInputTotalCount)
    .then((status) => {
      if (status === 201) {
        window.alert("등록 완료 😛");
        navigate('/');
      }
      else {
        window.alert("다시 시도해주세요 🥲");
        console.log("서버 응답 코드: ", status);
      }
    }).catch((err) => {
      window.alert("다시 시도해주세요 🥲");
      console.log(err);
    });
  };

  // 간식 내기 선택 후 확인 버튼 클릭 시
  const snackConfirmClick = () => {
    postGame(userInputTitle, userInputContent, userInputTotalCount)
    .then((status) => {
      if (status === 201) {
        window.alert("등록 완료 😛");
        navigate('/');
      }
      else {
        window.alert("다시 시도해주세요 🥲");
        console.log("서버 응답 코드: ", status);
      }
    }).catch((err) => {
      window.alert("다시 시도해주세요 🥲");
      console.log(err);
    })
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleFoodCategoryClick = (category) => {
    setSelectedFoodCategory(category);
  };

  const isGamePage = () => {
    if (selectedCategory === '밥 메이트' || selectedCategory === '익명 메이트')
      return false;
    return true;
  };

  const checkFilledInput = () => {
    if (userInputTitle === '' || userInputContent === '') return false;
    else return true;
  }

  return (
    <div className="root">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: '80px',
        }}
      >
        {TITLE_CATEGORY_LIST.map((elem, index) => {
          return (
            <>
              <CategoryButton
                key={index}
                text={elem}
                style={{ width: '137px', height: '44px' }}
                isSelected={selectedCategory === elem}
                onClick={() => handleCategoryClick(elem)}
              />
            </>
          );
        })}
      </div>
        <div
          style={{
            marginTop: '25px',
            fontSize: '15px',
            fontFamily: 'Jalnan',
            color: '#000000',
          }}
        >
          <div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>제목</Form.Label>
              <Form.Control
                as="input"
                type="text"
                placeholder="장소, 시간 등을 포함해주세요"
                autoFocus
                onChange={(e) => {
                  setUserInputTitle(e.target.value);
                }}
              />
            </Form.Group>
          </div>
          {!isGamePage() ? (
          <div>
            <div className="dm-board-list-wrapper">
              <div>카테고리</div>
              <div className="dm-board-card-wrapper">
                <Swiper
                  slidesPerView={4.3}
                  spaceBetween={0}
                  freeMode={true}
                  modules={[FreeMode, Pagination]}
                  grabCursor={true}
                  style={{ overflowX: 'auto' }}
                  className="dm-mySwiper"
                >
                  {CATEGORY_LIST.map((elem, i) => {
                    return (
                      <>
                        <SwiperSlide key={i}>
                          <CategoryButton
                            // key={i}
                            text={elem}
                            style={{
                              width: '107px',
                              height: '35px',
                              fontSize: '15px',
                            }}
                            isSelected={selectedFoodCategory === elem}
                            onClick={() => handleFoodCategoryClick(elem)}
                          />
                        </SwiperSlide>
                      </>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>) : (<></>)}
          <div>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>내용</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="장소, 시간 등을 포함해주세요"
                onChange={(e) => {
                  setUserInputContent(e.target.value);
                }}
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>총 인원</Form.Label>
              <Form.Control type="number" min="2" max="30" value={userInputTotalCount}
              onChange={(e) => {
                let value = parseInt(e.target.value, 10);

                if (value < 2) value = 2;
                if (value > 30) value = 30;

                setUserInputTotalCount(value);
              }} />
            </Form.Group>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              style={{
                backgroundColor: '#002DA7',
                color: '#FFFFFF',
                border: '1px solid #0B04D9',
                fontFamily: 'Jalnan',
                fontSize: '20px',
                borderRadius: '10px',
                width: '173px',
                height: '49px',
                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
              }}
            onClick={()=> {
              if (checkFilledInput()) {
                if (selectedCategory === '밥 메이트' || selectedCategory === '익명 메이트') babConfirmClick();
                else snackConfirmClick();
              } else {
                window.alert("제목 및 내용을 모두 입력해주세요.");
              }
            }}
            
            >
              <div
                style={{
                  marginTop: '3px',
                }}
              >
                등록
              </div>
            </Button>
          </div>
        </div>
    </div>
  );
}
