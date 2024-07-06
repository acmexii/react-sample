import { Link } from "react-router-dom";
import useFetch from "../hooks/userFetch";

export default function DayList() {
    const days = useFetch('https://3001-acmexii-reactsample-0jw6vcwv2it.ws-us115.gitpod.io/days');
    // const days = useFetch('http://localhost:3001/days');

    if (days.length === 0) {
        return <span>로딩중입니다...</span>
    }
    
    return (
     <ul className="list_day">
            {days && days.map(day => ( // days가 undefined가 아닌지 확인합니다.
                <li key={day.id}>   
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
     </ul>
    );
}
