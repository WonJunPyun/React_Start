import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { addDictListFB } from "./redux/modules/myhomework";

const Create = (props) => {
    const wordAdd = React.useRef(null);
    const meanAdd = React.useRef(null);
    const descAdd = React.useRef(null);
    const dispatch = useDispatch();

    return (
        <CreateContainer>
            <TitleWrap>
            <Title>단어 추가화면</Title>
            </TitleWrap>
            <InputWrapper>
                <div>
                    <InputP>단어</InputP>
                    <InputI type="text" id="word" ref={wordAdd} />
                </div>

                <div>
                    <InputP>설명</InputP>
                    <InputI type="text" id="word" ref={meanAdd} />
                </div>

                <div>
                    <InputP>예시</InputP>
                    <InputI type="text" id="word" ref={descAdd} />
                </div>
            </InputWrapper>
            <AddButton onClick={() => {
                dispatch(
                    addDictListFB({
                        word: wordAdd.current.value,
                        mean: meanAdd.current.value,
                        desc: descAdd.current.value,
                    })
                );
                props.history.push("/")
            }} >
                추가하기</AddButton>
        </CreateContainer>
    );
};

const CreateContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100%;
`;

const InputWrapper = styled.div`
    width: 100%;
    height: auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    & > div {
        background-color: #434343;
        color : white;
        flex-direction: column;
        display: flex;
        margin-bottom: 20px;
        padding: 10px;
        width: 90%;
        border-radius: 15px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
`;

const InputP = styled.p`
    margin : 12px 0;
    font-size: 15px;
    font-weight: 600;
`;

const InputI = styled.input`
    width: 100%;
    padding: 5px 20px;
    margin: 5px 0;
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    background-color: #000000;
    color : white;
`;

const TitleWrap = styled.div`
    margin: 8px auto;
`;


const Title = styled.h1`
  font-size: 36px;
  margin: 8px auto;
  text-shadow: 2px 2px 6px gray;
`;

const AddButton = styled.button`
    position: absolute;
    background-color: #434343;
    bottom: -80px;
    padding: 20px 100px;
    font-size: 20px;
    font-weight: 600;
    color: white;
    border-radius: 10px;
    border: none;
    hover: box-shadow:200px 0 0 0 rgba(0,0,0,0.5) inset;

`;

export default Create;