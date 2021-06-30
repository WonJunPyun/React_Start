import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import {addDictListFB} from "./redux/modules/myhomework";

const Create = (props) => {
    const wordAdd = React.useRef(null);
    const meanAdd = React.useRef(null);
    const descAdd = React.useRef(null);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <h1>단어 추가화면</h1>
            </div>
            <div>
                <p>단어</p>
                <input type="text" id="word" ref={wordAdd}/>
            </div>
            <div>
                <p>설명</p>
                <input type="text" id="word" ref={meanAdd} />
            </div>
            <div>
                <p>예시</p>
                <input type="text" id="word" ref={descAdd} />
            </div>
            <button onClick={() =>{
                dispatch(
                    addDictListFB({
                        word : wordAdd.current.value,
                        mean : meanAdd.current.value,
                        desc : descAdd.current.value,
                    })
                );
                props.history.push("/")
            }} >
                단어 추가하기</button>
        </div>
    );
};

export default Create;