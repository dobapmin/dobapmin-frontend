import BoardCard from '../boardCard/BoardCard';
import BoardTitle from '../boardTitle/BoardTitle';
import './style.css';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';

import NoIcon from '../../../assets/no.png';

export default function BoardList({ title, data, onCardClick }) { // 바뀐 부분: onCardClick prop 추가
  return (
    <div className="board-list-wrapper">
      <BoardTitle title={title} />
      <div className="board-card-wrapper">
        <Swiper
          slidesPerView={6.5}
          spaceBetween={20}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          style={{ overflowX: 'auto', padding: '0px 10px' }}
        >
          {data.length !== 0 ? (
            data.map((item, idx) => (
              <SwiperSlide style={{ padding: '10px' }} key={idx}>
                <BoardCard data={item} onClick={() => onCardClick(item)} /> {/* 바뀐 부분: onClick 핸들러 추가 */}
              </SwiperSlide>
            ))
          ) : (
            <div className="dm-no-list">
              <img src={NoIcon} className="dm-no-list-img" />
              <div className="dm-no-list-text">게시물이 없습니다</div>
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );
}
