import './style.css';
import PinIcon from '../../../assets/pin.png';

export default function BoardTitle(props) {
  return (
    <div className="board-title">
      {props.title === '내가 참여한 게시글' ? (
        <>
          <img className="pin-icon" src={PinIcon} />
        </>
      ) : null}
      {props.title}
    </div>
  );
}
