import BoardCard from '../boardCard/BoardCard';
import BoardTitle from '../boardTitle/BoardTitle';
import './style.css';

export default function BoardList(props) {
  return (
    <div className="board-list-wrapper">
      <BoardTitle title={props.title} />
      <div className="board-card-wrapper">
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
      </div>
    </div>
  );
}
