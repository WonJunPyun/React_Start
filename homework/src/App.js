import React from "react";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

import styled from "styled-components";

import Main from './Main';
import Create from "./Create";
import NotFound from "./NotFound";


import { connect } from 'react-redux';
import { loadMylist, createMylist } from './redux/modules/myhomework';


const mapStateToProps = (state) => {
  return { my_list: state.myhomework.list };
}

// 이 함수는 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수예요.
const mapDispatchToProps = (dispatch) => ({
  load: () => {
    dispatch(loadMylist());
  },
  create: (new_list) => {
    dispatch(createMylist(new_list));
  }
});

function App(props) {

  return (
    <div className="App">
      <Container>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/create" component={Create} />
          <Route path="/notfound" component={NotFound} />
        </Switch>
      </Container>
    </div>
  );

}


const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));