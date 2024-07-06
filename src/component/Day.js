import { useParams } from "react-router-dom";
import Word from "./Word"; // Word 컴포넌트를 import
import useFetch from "../hooks/userFetch";

export default function Day() {
    const { day } = useParams();
    const words = useFetch(`https://3001-acmexii-reactsample-0jw6vcwv2it.ws-us115.gitpod.io/words?day=${day}`);
    return (
      <>
        <h2>Day {day}</h2>
        {words.length === 0 && <span>로딩중입니다...</span>}
        <table>
        <tbody>
                {words.length === 0 ? (
                    <tr>
                        <td colSpan="2">등록된 단어가 없습니다.</td>
                    </tr>
                ) : (
                    words.map(word => (
                        <Word word={word} key={word.id} />
                    ))
                )}
            </tbody>
        </table>
      </>        
        );
}