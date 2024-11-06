import React from 'react';
import CategoryButton from '../components/post/categoryBoard/CategoryButton';
import './PostPage.css';
import { useState } from 'react';

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

  return (
    <div className="root">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: '80px',
        }}
      >
        {TITLE_CATEGORY_LIST.map((elem, i) => {
          return (
            <>
              <CategoryButton
                text={elem}
                style={{ width: '137px', height: '44px' }}
                isSelected={selectedCategory === elem}
                onClick={() => handleCategoryClick(elem)}
              />
            </>
          );
        })}
      </div>

      {!isGamePage() ? (
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
              />
            </Form.Group>
          </div>
          <div>
            <div className="board-list-wrapper">
              <div>카테고리</div>
              <div className="board-card-wrapper">
                <Swiper
                  slidesPerView={4.5}
                  spaceBetween={20}
                  freeMode={true}
                  modules={[FreeMode, Pagination]}
                  grabCursor={true}
                  style={{ overflowX: 'auto' }}
                  className="mySwiper"
                >
                  {CATEGORY_LIST.map((elem, i) => {
                    return (
                      <>
                        <SwiperSlide>
                          <CategoryButton
                            key={i}
                            text={elem}
                            style={{
                              width: '107px',
                              height: '35px',
                              fontSize: '15px',
                            }}
                            isSelected={selectedFoodCategory === elem}
                            onClick={() => setSelectedFoodCategory(elem)}
                          />
                        </SwiperSlide>
                      </>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
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
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>총 인원</Form.Label>
              <Form.Control type="number" autoFocus />
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
      ) : (
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
                className="asd"
              />
            </Form.Group>
          </div>
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
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>총 인원</Form.Label>
              <Form.Control type="number" autoFocus />
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
      )}
    </div>
  );
}
