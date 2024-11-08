import BoardCard from '../boardCard/BoardCard';
import BoardTitle from '../boardTitle/BoardTitle';
import './style.css';

// swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

// 게시물 없습니다 아이콘
import NoIcon from '../../../assets/no.png';

export default function BoardList(props) {
  return (
    <div className="board-list-wrapper">
      <BoardTitle title={props.title} />
      <div className="board-card-wrapper">
        <Swiper
          slidesPerView={6.5}
          spaceBetween={20}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          style={{ overflowX: 'auto', padding: '0px 10px' }}
        >
          {props.data.length !== 0 ? (
            <>
              {props.data.map((item, idx) => {
                return (
                  <SwiperSlide style={{ padding: '10px' }}>
                    <BoardCard data={item} />
                  </SwiperSlide>
                );
              })}
            </>
          ) : (
            <>
              <div className="dm-no-list">
                <img src={NoIcon} className="dm-no-list-img" />
                <div className="dm-no-list-text">게시물이 없습니다</div>
              </div>
            </>
          )}
        </Swiper>
      </div>
    </div>
  );
}
