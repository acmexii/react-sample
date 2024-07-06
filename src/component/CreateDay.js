import useFetch from "../hooks/userFetch";  
import { useNavigate } from 'react-router-dom'; // useNavigate를 react-router-dom에서 가져옵니다.

export default function CreateDay() {
    const navigate = useNavigate();
    const days = useFetch('http://localhost:3001/days');

    function addDay() {
        fetch(`http://localhost:3001/days/`, {
            method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            day : days.length + 1
        }),
    }).then(response => {
        if (response.ok) {
            alert('생성이 완료되었습니다.')
            navigate(`/`);
        }
    });
}

    return (
        <div>
            <h3> 현재 일수 : {days.length}일</h3>
            <button onClick={addDay}>일수 추가</button>
        </div>
    );
}