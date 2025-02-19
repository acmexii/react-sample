import { useState } from 'react';

export default function Word({ word: w }) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow() {
        setIsShow(!isShow);
    }
 
    function toggleDone() {
        // setIsDone(!isDone);
        fetch(`https://3001-acmexii-reactsample-0jw6vcwv2it.ws-us115.gitpod.io/words/${word.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...word, isDone: !isDone }),
        }).then(response => {
            if (response.ok) {
                setIsDone(!isDone);
            }
        });
    }

    function del() {
        if (window.confirm('삭제하시겠습니까?')) {
            fetch(`https://3001-acmexii-reactsample-0jw6vcwv2it.ws-us115.gitpod.io/words/${word.id}`, {
                method: 'DELETE',
            }).then(response => {
                if (response.ok) {
                    setWord({ id:0, eng: '', kor: '', isDone: false });
                    window.location.reload(); // 삭제 후 페이지를 다시 호출
                }
            });
        }
    }

    if (word.id === 0) {
        return null;
    }

    return (
        <tr className={isDone ? "off" : ""}>
        <td>
            <input type="checkbox" checked={isDone} onChange={toggleDone} />
        </td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
            <button onClick={toggleShow}>뜻{isShow ? "숨기기":"보기"}</button>
            <button className="btn_del" onClick={del}>삭제</button>
        </td>
    </tr>
    );
}