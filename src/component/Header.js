import { Link } from 'react-router-dom'; // Link 컴포넌트 추가
import { useNavigate } from 'react-router-dom'; // useNavigate를 react-router-dom에서 가져옵니다.

export default function Header() {
    const navigate = useNavigate();
    return (
        <div className="header">
            <h1>
                <Link to="/">
                    <img src="/images/home.png" alt="Home" style={{ width: '30px', height: '30px' }} />
                </Link>
                <Link to="/"> 토익 영단어(고급)</Link>
            </h1>
            <div className="menu">
                <a href="#x" className="link" onClick={() => navigate('/create_word')}>단어 추가</a>
                <a href="#x" className="link" onClick={() => navigate('/create_day')}>Day 추가</a>
            </div>
        </div>
    );
}