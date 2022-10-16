import { useState, useEffect } from "react";
import * as THREE from "three";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  useEffect(() => {
    /** 创建场景 */
    const scene = new THREE.Scene();

    /** 相机设置 */
    const width = window.innerWidth; //窗口宽度
    const height = window.innerHeight; //窗口高度
    const k = width / height; //窗口宽高比
    const s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大

    //创建相机对象
    const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    camera.position.set(400, 200, 300); //设置相机位置
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)

    /** 创建渲染器对象 */
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height); //设置渲染区域尺寸
    // renderer.setClearColor(0x888888, 1); //设置背景颜色
    document.body.appendChild(renderer.domElement); //body元素中插入canvas对象

    renderer.render(scene, camera); //执行渲染操作
  }, []);

  return <div className="App"></div>;
}

export default App;
