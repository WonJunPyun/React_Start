import React from 'react';
import styled from "styled-components";
import { useSelector } from 'react-redux';



const Main = (props) => {
    const my_list = useSelector(state => state.myhomework.list);

    return (
        <div>
        <CreateContainer>
            <Title>나만의 사전</Title>
            <ListStyle>
                {my_list.map((l, idx) => {
                    return (
                        <ItemStyle key={idx}>
                            <ListP>단어</ListP>
                            <dd>{l.word}</dd>
                            <ListP>설명</ListP>
                            <dd>{l.mean}</dd>
                            <ListP>예시</ListP>
                            <dd>{l.desc}</dd>
                        </ItemStyle>
                    );
                })}
            </ListStyle>
            <AddButton onClick={() => {
                props.history.push("/create");
            }} >+</AddButton>
        </CreateContainer>
        </div>
    );

}

const CreateContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
`;

const ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const ItemStyle = styled.div`
    border-radius: 10px;
    border: none;
    padding : 10px;
    margin: 10px;
    width: 90%;
    text-align : left;
    & > dd {
        margin: 0;
        color: white;
    }
    background-color: #434343;
`;

const ListP = styled.p`
    width: 20px;
    border-bottom: 1px solid black;
    font-size: 9px;
    font-weight: 600;
    color: white;
    background-color: #000000;
`;

const Title = styled.h1`
  text-align: left;
  font-size: 36px;
  text-shadow: 2px 2px 6px gray;
`;

const AddButton = styled.button`
    position: absolute;
    right :1px;
    padding: 15px 20px;
    border-radius: 10px;
    border: none;
    font-size: 18px;
    font-weight: 60;
    color: white;
    background-color: #434343;
`;

export default Main;