import "./styles.css";
import { useRef, useState } from "react";

export default function App() {
  const addStyles = [
    {
      id: 1,
      value: "font-weight",
      change: "font-nomal",
      defaultClass: "default"
    },
    {
      id: 2,
      value: "text-align",
      defaultClass: "default"
    },
    {
      id: 3,
      value: "color",
      defaultClass: "default"
    },
    {
      id: 4,
      value: "font-style",
      defaultClass: "default"
    },
    {
      id: 5,
      value: "text-decoration",
      defaultClass: "default"
    },
    {
      id: 6,
      value: "background-color",
      defaultClass: "default"
    },
    {
      id: 7,
      value: "line-height",
      defaultClass: "default"
    },
    {
      id: 8,
      value: "letter-spacing",
      defaultClass: "default"
    },
    {
      id: 9,
      value: "writing-mode",
      defaultClass: "default"
    },
    {
      id: 10,
      value: "link",
      defaultClass: "default"
    }
  ];

  //クラス付与用のstate
  const [AddClass01, setAddClass01] = useState(false);
  const [AddClass02, setAddClass02] = useState(false);
  const [AddClass03, setAddClass03] = useState(false);
  const [AddClass04, setAddClass04] = useState(false);
  const [AddClass05, setAddClass05] = useState(false);
  const [AddClass06, setAddClass06] = useState(false);
  const [AddClass07, setAddClass07] = useState(false);
  const [AddClass08, setAddClass08] = useState(false);
  const [AddClass09, setAddClass09] = useState(false);
  const [AddClass10, setAddClass10] = useState(false);

  // const handleMouseUp = () => {
  //   const select = window.getSelection().toString();
  //   // console.log(select);
  //   setSelectedText(select);
  //   console.log(select);
  // };

  //要素取得
  const eleRef = useRef(null);

  //ドラックした要素を保存するためのやつです。
  const [selectedText, setSelectedText] = useState("");
  // この関数でドラックした要素のテキストを取得
  const handleMouseUp = () => {
    let selectedText = window.getSelection().toString();
    setSelectedText(selectedText);
    console.log(selectedText);
  };

  // ★課題
  // クリックしたときにクラス付きspanを挿入するため、stateが更新が一度選択すると
  // 更新されない

  // const addSpan = (e) => {
  //   //usestateに情報が格納してたら処理を実行
  //   let newText = eleRef.current.innerHTML;
  //   if (selectedText) {
  //     const defaultClass = eleRef.current.querySelector(".default");
  //     if (defaultClass) {
  //       console.log(defaultClass);
  //       return;
  //     }
  //     //既にspanが入ってたら生成何もかえさない
  //     if (
  //       newText.includes(
  //         `<span class="${addStyles[0].value}">${selectedText}</span>`
  //       )
  //     ) {
  //       return;
  //     }

  //     //spanがなかったら生成
  //     newText = newText.replace(
  //       selectedText,
  //       `<span class="default ${addStyles[0].value} ${addStyles[1].value}">${selectedText}</span>`
  //     );
  //   }
  //   eleRef.current.innerHTML = newText;
  //   console.log(eleRef.current.innerHTML);
  // };

  // 課題解決用

  // 選択した範囲を取得して範囲のテキストを削除して、spanを挿入

  const addSpan = (e) => {
    if (selectedText) {
      const defaultClass = eleRef.current.querySelector(".default");
      //  defaultクラスが存在したらspanを生成しないようにする
      if (defaultClass) {
        console.log("hello");
        return;
      }
      const range = window.getSelection().getRangeAt(0);

      const span = document.createElement("span");
      span.classList.add("default", addStyles[0].value, addStyles[1].value);
      span.textContent = `${selectedText}`;

      range.deleteContents();
      range.insertNode(span);
      console.log(eleRef.current.innerHTML);
    }

    if (e.currentTarget.id === "1") {
      const span = eleRef.current.querySelector(".default");
      span.classList.replace("font-nomal", "font-weight");
      if (eleRef.current.querySelector("font-weight")) {
        span.classList.replace("font-weight", "font-nomal");
      }
      console.log("id 1だよ！");
    }
  };

  return (
    <>
      <div className="App" ref={eleRef} onMouseUp={handleMouseUp}>
        {/* <p contentEditable="true">あいうえお</p> */}
        <p>あいうえお</p>
        <span>カキクケコ</span>
      </div>
      {addStyles.map((item, i) => {
        return (
          <button
            key={item.id}
            // onClick={item.click}
            onClick={addSpan}
            id={item.id}
          >
            {item.value}
          </button>
        );
      })}
    </>
  );
}
