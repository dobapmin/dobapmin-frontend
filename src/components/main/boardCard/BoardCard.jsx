import './style.css';
import FoodJapan from '../../../assets/food_category/japan.png';
import UserImg from '../../../assets/userImg.png';

export default function BoardCard() {
  return (
    <div className="card-wrapper">
      <div className="card-img-bg">
        <div className="card-food-category">일식</div>
        <img className="card-img" src={FoodJapan} />
      </div>
      <div className="card-content-wrapper">
        <div className="card-content-top">
          <div className="card-content-top-title">멘츠루</div>
          <div className="card-content-top-person">
            <img className="card-content-top-person-img" src={UserImg} />
            <div className="card-content-top-person-count">1/3</div>
          </div>
        </div>
        <div className="card-content">
          멘츠루 먹을 사람 3명 더 구합니다. 햄버거 냠냠
        </div>
        <div className="card-content-bottom">
          <div className="card-content-bottom-name">박준승</div>
          <div className="card-content-bottom-date">2024.11.04</div>
        </div>
      </div>
    </div>
  );
}
