import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from 'react-redux';



const Main = (props) => {
    const my_list = useSelector(state => state.myhomework.list);

    return(
        <div>
            <div>
                <h1>나만의 사전</h1>
            </div>
            <ListStyle>
            {my_list.map((l,idx) => {
                return(
                    <ItemStyle key={idx}>
                        <p>단어</p>
                        <dd>{l.word}</dd>
                        <p>설명</p>
                        <dd>{l.mean}</dd>
                        <p>예시</p>
                        <dd>{l.desc}</dd>
                    </ItemStyle>
                );
            })}
        </ListStyle>
        <button onClick={() => {
            props.history.push("/create");
        }} >+</button>
        </div>
    );

}


const ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: red;
`;

const ItemStyle = styled.div`
    padding : 10px;
    margin: 10px;
    width: 75%;
    text-align : left;
    & > dd {
        margin: 0;
    }
    background-color: aliceblue;
`;

export default Main;