/* 
Main 컴포넌트의 컨텐츠를 변경하는 네비게이션 컴포넌트
*/
import Component from "../../utils/Component.js";
import Button from "./Button.js";
import {
  ALL,
  MY,
  SET_PRESS,
  mainStore,
  setPress,
} from "../../store/MainStore.js";

const types = [ALL, MY];
const buttonInners = ["전체 언론사", "내가 구독한 언론사"];

const createButton = (button, index) => {
  const buttonProps = {
    selected: mainStore.getState().pressType === types[index],
    inner: buttonInners[index],
    actionType: SET_PRESS,
    onClick: () => {
      const newPressType = setPress(types[index]);
      mainStore.dispatch(newPressType);
    },
  };

  new Button(button, buttonProps);
};
function PressType($target, props) {
  Component.call(this, $target, props);
}

Object.setPrototypeOf(PressType.prototype, Component.prototype);

PressType.prototype.template = function () {
  return `
  <button class="news-navbar_newspaper-list-all"></button>
  <button class="news-navbar_newspaper-list-my"></button>
  `;
};

PressType.prototype.mounted = function () {
  const buttons = this.$el.querySelectorAll("button");
  buttons.forEach(createButton);
};

export default PressType;
