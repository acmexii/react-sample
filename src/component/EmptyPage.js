import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function EmptyPage() {
    useEffect(() => {
        console.error('EmptyPage 컴포넌트가 렌더링되었습니다.'); // 콘솔 에러 메시지 출력
    }, []);

    return (
        <div>
            <h1>Empty Page.</h1>
            <Link to="/">Go to DayList</Link>
        </div>
    );
}