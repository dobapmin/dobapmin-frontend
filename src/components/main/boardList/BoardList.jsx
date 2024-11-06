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

export default function BoardList(props) {
  return (
    <div className="board-list-wrapper">
      <BoardTitle title={props.title} />
      <div className="board-card-wrapper">
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          style={{ overflowX: 'auto' }}
        >
          <SwiperSlide style={{ padding: '10px' }}>
            <BoardCard />
          </SwiperSlide>
          <SwiperSlide style={{ padding: '10px 0px' }}>
            <BoardCard />
          </SwiperSlide>
          <SwiperSlide style={{ padding: '10px 0px' }}>
            <BoardCard />
          </SwiperSlide>
          <SwiperSlide style={{ padding: '10px' }}>
            <BoardCard />
          </SwiperSlide>
          <SwiperSlide style={{ padding: '10px 0px' }}>
            <BoardCard />
          </SwiperSlide>
          <SwiperSlide style={{ padding: '10px 0px' }}>
            <BoardCard />
          </SwiperSlide>
          <SwiperSlide style={{ padding: '10px' }}>
            <BoardCard />
          </SwiperSlide>
          <SwiperSlide style={{ padding: '10px 0px' }}>
            <BoardCard />
          </SwiperSlide>
          <SwiperSlide style={{ padding: '10px 0px' }}>
            <BoardCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
