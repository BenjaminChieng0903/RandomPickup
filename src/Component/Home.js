import "./Home.scss";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
let elementsName = [
  "李祥",
  "张顺哲",
  "刘知言",
  "廖荣成",
  "李忻怡",
  "李峻熙",
  "宋维特",
  "席哲宇",
  "陶泽恩",
  "陆宇泽",
  "周茂升",
  "周龙一",
  "黄树涛",
  "李昊轩",
  "陈翟浩轩",
  "王思桐",
  "许浩辰",
  "陈木子",
  "周雨菲",
  "吴梓萌",
  "蔡泽轩",
  "缪乐瑶",
  "邱可昕",
  "李博雅",
  "纪浩轩",
  "陈诗蕊",
  "王奕珊",
  "董芷馨",
  "李思蓉",
  "牛文奇",
  "庞晨曦",
  "张雨熙",
  "姚柔伊",
];
let elementsClass = ["五(1)班", "五(3)班", "五(4)班"];
const Home = () => {
  const [isScrollingName, setIsScrollingName] = useState(false);
  const [isScrollingClass, setIsScrollingClass] = useState(false);
  const [currentName, setCurrentName] = useState("");
  const [currentClass, setCurrentClass] = useState("");
  const [currentClassOneCount, setCurrentClassOneCount] = useState(0);
  const [currentClassTwoCount, setCurrentClassTwoCount] = useState(0);
  const [currentClassThreeCount, setCurrentClassThreeCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isScrollingName) {
      intervalRef.current = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * elementsName.length);
        setCurrentName(elementsName[randomIndex]);
      }, 100);
    } else {
      clearInterval(intervalRef.current);
      elementsName = elementsName.filter((e) => e != currentName);
    }
    return () => clearInterval(intervalRef.current);
  }, [isScrollingName]);

  useEffect(() => {
    if (isScrollingClass) {
      intervalRef.current = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * elementsClass.length);
        setCurrentClass(elementsClass[randomIndex]);
      }, 100);
    } else {
      clearInterval(intervalRef.current);
      if (currentClass == elementsClass[0]) {
        if (currentClassOneCount < 11) {
          setCurrentClassOneCount(currentClassOneCount + 1);
        } else {
          elementsClass = elementsClass.filter((e) => e != currentClass);
        }
      }
      if (currentClass == elementsClass[1]) {
        if (currentClassTwoCount < 11) {
          setCurrentClassTwoCount(currentClassTwoCount + 1);
        } else {
          elementsClass = elementsClass.filter((e) => e != currentClass);
        }
      }

      if (currentClass == elementsClass[2]) {
        if (currentClassThreeCount < 11) {
          setCurrentClassThreeCount(currentClassThreeCount + 1);
        } else {
          elementsClass = elementsClass.filter((e) => e != currentClass);
        }
      }
    }
    console.log(elementsName.length / elementsClass.length);
    return () => clearInterval(intervalRef.current);
  }, [isScrollingClass]);
  const handleClickName = () => {
    setIsScrollingName(!isScrollingName);
  };
  const handleClickClass = () => {
    setIsScrollingClass(!isScrollingClass);
  };

  return (
    <div className="MainPageContainer">
      <div className="generateContainer">
        <span className="child">{currentName}</span>
        <div
          className={`button ${isScrollingName ? "stop" : ""}`}
          onClick={handleClickName}
        >
          {isScrollingName ? "停止" : "点击开始随机姓名"}
        </div>
      </div>
      <div className="generateContainer">
        <span className="child">{currentClass}</span>
        <div
          className={`button ${isScrollingClass ? "stop" : ""}`}
          onClick={handleClickClass}
        >
          {isScrollingClass ? "停止" : "点击开始随机班级"}
        </div>
      </div>
    </div>
  );
};

export default Home;
