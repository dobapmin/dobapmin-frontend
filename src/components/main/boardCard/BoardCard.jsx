import './style.css';
import FoodJapan from '../../../assets/food_category/japan.png';
import FoodAmerican from '../../../assets/food_category/american.png';
import FoodAsian from '../../../assets/food_category/asian.png';
import FoodChinese from '../../../assets/food_category/chinese.png';
import FoodDessert from '../../../assets/food_category/dessert.png';
import FoodDiet from '../../../assets/food_category/diet.png';
import FoodKorean from '../../../assets/food_category/korean.png';
import FoodSchool from '../../../assets/food_category/school.png';
import FoodETC from '../../../assets/food_category/etc.png';
import Game from '../../../assets/food_category/game.png';
import UserImg from '../../../assets/userImg.png';
import { useState } from 'react';

export default function BoardCard({ data }) {
  let CardImg = FoodETC;
  let CardColor = '#85BCFF';
  switch (data.category) {
    case '일식':
      CardImg = FoodJapan;
      CardColor = '#C2C7D0';
      break;
    case '양식':
      CardImg = FoodAmerican;
      CardColor = '#FF8E25';
      break;
    case '한식':
      CardImg = FoodKorean;
      CardColor = '#00326F';
      break;
    case '중식':
      CardImg = FoodChinese;
      CardColor = 'rgba(169, 40, 43, 0.94)';
      break;
    case '분식':
      CardImg = FoodSchool;
      CardColor = '#FF7477';
      break;
    case '아시안':
      CardImg = FoodAsian;
      CardColor = '#FFD028';
      break;
    case '다이어트식':
      CardImg = FoodDiet;
      CardColor = '#076E00';
      break;
    case '디저트':
      CardImg = FoodDessert;
      CardColor = '#FFC9CA';
      break;
    case '기타':
      CardImg = FoodETC;
      CardColor = '#C2C7D0';
      break;
    case '게임':
      CardImg = Game;
      CardColor = '#000';
      break;
    default:
      CardImg = FoodETC;
      CardColor = '#C2C7D0';
  }

  return (
    <div className="dm-card-wrapper">
      {data.isEnd ? (
        <>
          <div className="dm-card-end">마감되었습니다.</div>
        </>
      ) : null}

      <div className="dm-card-img-bg" style={{ backgroundColor: CardColor }}>
        {data.category !== '게임' && (
          <div className="dm-card-food-category">{data.category}</div>
        )}
        <img className="dm-card-img" src={CardImg} />
      </div>
      <div className="dm-card-content-wrapper">
        <div className="dm-card-content-top">
          <div className="dm-card-content-top-title">멘츠루</div>
          <div className="dm-card-content-top-person">
            <img className="dm-card-content-top-person-img" src={UserImg} />
            <div className="dm-card-content-top-person-count">1/3</div>
          </div>
        </div>
        <div className="dm-card-content">
          멘츠루 먹을 사람 3명 더 구합니다. 햄버거 냠냠
        </div>
        <div className="dm-card-content-bottom">
          {data.isAnonymous ? (
            <>
              <div className="dm-card-content-bottom-no-name">익명</div>
            </>
          ) : (
            <>
              <div className="dm-card-content-bottom-name">박준승</div>
            </>
          )}

          <div className="dm-card-content-bottom-date">2024.11.04</div>
        </div>
      </div>
    </div>
  );
}
