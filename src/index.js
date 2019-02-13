
// console.log('hello, webpack')

// alert('hello, webpack')

import './style.css'

const div = document.createElement('div');

div.classList.add('home');

document.body.appendChild(div);

// image
import img from './home.png';

const image = new Image();

image.src = img;

document.body.appendChild(image);


// 导入资源文件 json
import data from '../package.json'

console.log(data) //data自动回转为js对象输出


// 导入xml文件
import msg from './data.xml'

console.log(msg) //将数据转为js 对象输出


// 导入say模块
import say from './say';

let btn = document.createElement('button')
btn.innerText  = 'click me'
btn.addEventListener('click', say);

document.body.appendChild(btn)







