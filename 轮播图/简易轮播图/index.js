var imgs = [
    'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=867763555,3368538948&fm=200&gp=0.jpg',
    'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3227881778,1024920219&fm=200&gp=0.jpg',
    'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=401698397,2488925180&fm=200&gp=0.jpg',
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1297268239,2246224922&fm=200&gp=0.jpg'
];
var oImg = document.getElementsByTagName('img')[0];
//设置设置第一张图片
oImg.src = imgs[0];
//信号量
var index = 0;
//得到左按钮
var oLeftBtn = document.getElementsByTagName('input')[0];
//得到右按钮
var oRightBtn = document.getElementsByTagName('input')[1];
oLeftBtn.onclick = function() {
    index--;
    if (index < 0) {
        index = 3;
    }
    gabain();
}
oRightBtn.onclick = function() {
    index++;
    if (index > imgs.length - 1) {
        index = 0;
    }
    gabain();
}

function gabain() {
    oImg.src = imgs[index]
}