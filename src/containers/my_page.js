import React from 'react';
import { Basic_info, Detail_info, Vow, Complete } from "../components";
import styles from "../css/my_page.css";
import { makeStyles } from '@material-ui/core/styles';
import '../css/index.css';

//다음 버튼 누르면 phase state 1 증가 하고 다시 렌더링
// 기본정보 >> 상세정보 >> 이것도 렌더링 다시 하고
// phase에 따라 렌더링 되는 컴포넌트가 다름

const useStyles = makeStyles((theme) => ({
  phase : {
    fontFamily : 'GmarketBold',
    fontSize : '15px',
    fontWeight : 'bold',
    color : 'gray'
  },
  choose_phase : {
    fontFamily : 'GmarketBold',
  }
}));


class my_page extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      phase : 1
    };

    this.chooseCompo = this.chooseCompo.bind(this);
    this.plusPhase = this.plusPhase.bind(this);
  }

  choosePhrase(){
    switch(this.state.phase){
      case 1:
        return (<p>
          <span className="choose_phase">기본 정보 > </span><span className="phase">상세 정보 > </span><span className="phase">약관동의 > </span><span className="phase">입점신청</span>
        </p>);
      case 2:
        return (<p>
          <span className="phase">기본 정보 > </span><span className="choose_phase">상세 정보 > </span><span className="phase">약관동의 > </span><span className="phase">입점신청</span>
        </p>);
      case 3:
        return (<p>
          <span className="phase">기본 정보 > </span><span className="phase">상세 정보 > </span><span className="choose_phase">약관동의 > </span><span className="phase">입점신청</span>
        </p>);
      case 4:
      return (<p>
        <span className="phase">기본 정보 > </span><span className="phase">상세 정보 > </span><span className="phase">약관동의 > </span><span className="choose_phase">입점신청</span>
      </p>);

      default:
        return(<undefined></undefined>);
    }
  }
  chooseCompo(){
    switch(this.state.phase){
      case 1:
        return <Basic_info onNext={this.plusPhase}/>;
      case 2:
        return <Detail_info onNext={this.plusPhase}/>;
      case 3:
        return <Vow onNext={this.plusPhase}/>;
      case 4:
        return <Complete/>
      default:
        return(<undefined></undefined>);
    }
  }
  plusPhase(){
    this.setState({
      phase : this.state.phase + 1
    });
  }


  render(){
    return(
      <div className="body">
        {this.chooseCompo()}
      </div>
    )
  }
}

export default my_page;
