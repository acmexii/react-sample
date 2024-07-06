import useFetch from "../hooks/userFetch";
import { useRef } from 'react'; // useRef를 react에서 가져옵니다.
import { useNavigate } from 'react-router-dom'; // useNavigate를 react-router-dom에서 가져옵니다.
import { useState } from 'react';

export default function CreateWord() {
    const days = useFetch('http://localhost:3001/days');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(e) {
        e.preventDefault();

        if (!isLoading) {
            setIsLoading(true);

            fetch(`http://localhost:3001/words/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    day : dayRef.current.value,
                    eng : engRef.current.value,
                    kor : korRef.current.value,
                    isDone : false
                }),
                }).then(response => {
                    if (response.ok) {
                        alert('생성이 완료되었습니다.')
                        navigate(`/day/${dayRef.current.value}`);
                        setIsLoading(false);
                    }
            });
        }
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <form onSubmit={onSubmit}>
        <div className="input_area">
            <label>Eng</label>
            <input type="text" placeholder="computer" ref={engRef}/>
        </div>
        <div className="input_area">
            <label>Kor</label>
            <input type="text" placeholder="컴퓨터" ref={korRef}/>
        </div>
        <div className="input_area">
            <label>Day</label>
            <select ref={dayRef}>
                {
                    days.map(day => (
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))
                }
            </select>
        </div>
            <button
                style={{
                    opacity: isLoading ? 0.3 : 1,
                }}
            >{isLoading ? '추가중...' : '추가'}</button>
        </form>
    );
}