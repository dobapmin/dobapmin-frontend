import React from 'react';
import CategoryButton from '../components/post/categoryBoard/CategoryButton';
import './PostPage.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLogin } from '../lib/hooks/useLogin';

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
  const [isGame, setIsGame] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('밥 메이트'); // 글 종류
  const [selectedFoodCategory, setSelectedFoodCategory] = useState('한식'); //category
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const { loggedIn } = useLogin();
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleFoodCategoryClick = (category) => {
    setSelectedFoodCategory(category);
  };

  console.log('this', title, 'content', content, totalCount);
  const handleSubmit = async () => {
    let baseURL = '';
    let body = {};
    console.log('name', loggedIn.name);
    if (isGame === true) {
      // baseURL = 'http://54.180.251.176:3000/api/gameBoard';
      baseURL = 'http://localhost:3000/api/gameBoard';
      body = {
        name: loggedIn.name,
        title: title,
        content: content,
        totalCount: totalCount,
      };
    } else {
      // baseURL = 'http://54.180.251.176:3000/api/board';
      baseURL = 'http://localhost:3000/api/board';
      console.log('this is board', title, content, totalCount);
      body = {
        name: loggedIn.name,
        title: title,
        content: content,
        category: selectedFoodCategory,
        isAnonymous: isAnonymous,
        totalCount: totalCount,
      };
    }

    try {
      const res = await axios.post(baseURL, body);
      navigate('/');
      console.log(res);
    } catch (err) {
      return err;
    }
  };

  const isGamePage = () => {
    if (selectedCategory === '밥 메이트') {
      setIsAnonymous(false);
      return false;
    } else if (selectedCategory === '익명 메이트') {
      setIsAnonymous(true);
      return false;
    } else {
      setIsAnonymous(false);
      return true;
    }
  };

  useEffect(() => {
    setIsGame(isGamePage);
  }, [selectedCategory]);

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
                key={i}
                text={elem}
                style={{ width: '137px', height: '44px' }}
                isSelected={selectedCategory === elem}
                onClick={() => handleCategoryClick(elem)}
              />
            </>
          );
        })}
      </div>

      {!isGame ? (
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
                  setTitle(e.target.value);
                }}
              />
            </Form.Group>
          </div>
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
                            onClick={() => handleFoodCategoryClick(elem)}
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
                onChange={(e) => setContent(e.target.value)}
                as="textarea"
                rows={5}
                placeholder="장소, 시간 등을 포함해주세요"
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>총 인원</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => {
                  setTotalCount(Number(e.target.value));
                }}
              />
            </Form.Group>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={() => handleSubmit()}
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
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                as="input"
                type="text"
                placeholder="장소, 시간 등을 포함해주세요"
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
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                as="textarea"
                rows={5}
                placeholder="장소, 시간 등을 포함해주세요"
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>총 인원</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => {
                  setTotalCount(e.target.value);
                }}
              />
            </Form.Group>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={() => handleSubmit()}
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
