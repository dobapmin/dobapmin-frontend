import './style.css';
import PlusIcon from '../../../assets/plus.png';
import { Link } from 'react-router-dom';

export default function PostButton() {
  return (
    <Link to="/post" className="post-button">
      <img src={PlusIcon} className="post-button-img" />
    </Link>
  );
}
