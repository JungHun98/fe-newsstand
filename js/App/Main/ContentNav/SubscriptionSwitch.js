/* 
Main 컴포넌트의 컨텐츠를 변경하는 네비게이션 컴포넌트
*/
import Button from "./Button.js";

const allButtonInner = "전체 언론사";
const myButtonInner = "내가 구독한 언론사";

export default function SubscriptionSwitch($target, props, onClick) {
  //   this.state = mode;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const $div = document.createElement("div");
    $div.setAttribute("class", "news-navbar_newspaper");

    new Button(
      $div,
      {
        ...props,
        type: "list-all",
        inner: allButtonInner,
        changeState: "renderContent",
      },
      "news-navbar_newspaper",
      onClick
    );

    new Button(
      $div,
      {
        ...props,
        type: "list-my",
        inner: myButtonInner,
        changeState: "renderContent",
      },
      "news-navbar_newspaper",
      onClick
    );

    $target.appendChild($div);
  };

  this.render();
}
