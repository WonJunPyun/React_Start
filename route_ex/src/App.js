import React from "react";
import { render } from "react-dom";

import { withRouter } from "react-router";
import {Route ,Link} from "react-router-dom";

import Home from "./Home";
import Cat from "./Cat";
import Dog from "./Dog";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {};
  }

  componentDidMount(){

  }

  render(){
    return(
    <div className="App">
      <div>
        <Link to="/">Home 으로 가기</Link>
        <Link to="/cat/nabi">Cat 으로 가기</Link>
        <Link to="/dog">Dog 으로 가기</Link>
      </div>
      <Route exact path="/" component={Home}/>
      <Route path="/cat/:cat_name" component={Cat}/>
      <Route path="/dog" component={Dog}/>

      <button onClick={() => {
        this.props.history.push('/cat/nabi');
      }}>/cat 으로 가기</button>
      <button onClick={() => {
        this.props.history.goBack();
      }}>뒤로가기</button>
      
    </div>
    );
  }
}

export default withRouter(App);