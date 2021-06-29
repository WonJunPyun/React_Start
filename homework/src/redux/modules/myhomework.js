// myhomework.js

// Actions
const LOAD   = "myhomework/LOAD";
const CREATE = "myhomework/CREATE";

const initialState = {
    list: [        
        {
          word: "ㅎ1ㅎ1",
          mean: '히히를 변형한 단어 숫자 1을  " ㅣ " 로 쓴다',
          desc: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
        },
        {
          word: "네넴띤",
          mean: '얼핏 보면 비빔면으로 보인다',
          desc: "나 오늘 네넴띤 먹었어",
        },
        {
          word: "머박",
          mean: '얼핏보면 대박으로 보인다',
          desc: "오늘 머박 힘들었어 ㅠㅠ",
        },
      ],
};

// Action Creators
export const loadMylist = (list) => {
    return {type: LOAD , list};
}

export const createMylist = (create) => {
    return {type: CREATE , create}
}


  
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "myhomework/LOAD" :{
        return state;
    }
    case "myhomework/CREATE" :{
        const new_my_list = [...state.list, action.create];
        return {list: new_my_list};
    }
    default: return state;
  }
}


