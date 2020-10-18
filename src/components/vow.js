import React from 'react';

class vow extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    //console.log("handleClick 호출됨");
    this.props.onNext();
  }
  render(){
    return(
      <div>
        <div>
          서약
        </div>
        <hr/>
        <div>
          체크박스
        </div>
        <div>
          체크박스
        </div>
        <hr/>
        <div>
          {"<판매자 주의사항>"}
        </div>
        <div>
          1) 전자책 첫 페이지에 저작권자에 대한 소유권을 명시를 비롯한 저작권 안내를 반드시 삽입해주세요.
        </div>
        <div>
          2) 페이지마다 판매자임을 알 수 있는 고유 워터마크사입을 해주세요 (에시 : 셀스토리 로고와 판매자 닉네임)
        </div>
        <div>
          3) 해당 전자책의 불법 유토으 배포, 공유 방지를 위해서 구매자가 파일을 다운로드하면 해당자료에 구매자의 닉네임과 전화번호가 워터파크로 삽입되어 다운로드 됩니다.
        </div>
        <div>
          4) 판매자료는 판매자의 더 많은 수익 창출을 위한 홍보 목적에 한하여 향 후 셍스토리의 홍보 채널(블로그, 포트스, 유튜브, SNS 등)에 게시될 수 있습니다. 잠재 고객들을
          대상으로 홍보하여 더 많은 판매를 발생시키는 목적입니다. 단, 파일 자체가 업로드 되는 것은 절대 아니며, 판매자의 셀스토리 닉네임과 판매 페이지 링크가 명확히 표기됩니다. 판매자료는
          홍보 채널에 등록한 내용에 대한 편집, 수정, 삭제를 요청 할 수 있습니다.
        </div>
        <button onClick={this.handleClick}>저장하고 다음</button>
      </div>
    );
  }
}

export default vow;
