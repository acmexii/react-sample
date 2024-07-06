import { useParams } from "react-router-dom";
import Word from "./Word"; // Word 컴포넌트를 import
import useFetch from "../hooks/userFetch";

export default function Day() {
    const { day } = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`);
    return (
      <>
        <h2>Day {day}</h2>
        {words.length === 0 && <span>등록된 단어가 없습니다.</span>}
        <table>
            <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id} />
                ))}
            </tbody>
        </table>
      </>        
        );
}