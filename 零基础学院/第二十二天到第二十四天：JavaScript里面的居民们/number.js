var radio1 = document.querySelector('#radio-a');
var radio2 = document.querySelector('#radio-b');
var num1 = document.querySelector('#num-a');
var num2 = document.querySelector('#num-b');
var para = document.querySelector('#result');
function isNum(){
  if(radio1.checked){
    if(num1.value===""){
      console.error("请输入A的数值");
      para.innerHTML="请输入A的数值";
    }else if(!isNaN(num1.value)){
      para.innerHTML="Number A:"+'&nbsp;&nbsp;'+num1.value+'&nbsp;&nbsp;'+"是一个数字";
    } else{
      para.innerHTML="Number A:"+'&nbsp;&nbsp;'+num1.value+'&nbsp;&nbsp;'+"不是一个数字";
    }
  }else if(radio2.checked){
    if(num2.value===""){
      console.log("请输入B的数值");
      para.innerHTML="请输入B的数值";
    }else if(!isNaN(num2.value)){
      para.innerHTML="Number B:"+'&nbsp;&nbsp;'+num2.value+'&nbsp;&nbsp;'+"是一个数字";
    } else{
      para.innerHTML="Number B:"+'&nbsp;&nbsp;'+num2.value+'&nbsp;&nbsp;'+"不是一个数字";
      console.log(para.innerHTML);
    }
  }else{
    console.log("请选择要判断的数字Number A或者Number B");
    para.innerHTML="请选择要判断的数字Number A或者Number B";
  }
}
function toFixed() {
  if(num1.value===""||num2.value===""||isNaN(num1.value)||isNaN(num2.value)){
    para.innerHTML='请输入Number A:跟Number B:的值且不能为空';
    console.log('请输入Number A:跟Number B:的值且不能为空');
  }else {
    var nn=Number(num1.value);
    var ss=nn.toFixed(num2.value);
    para.innerHTML='把 A 四舍五入为 B 个小数位数的数字:'+ss;
  }
}
function mathAbs() {
  if(radio1.checked){
    if(num1.value===""||isNaN(num1.value)){
      para.innerHTML='请输入Number A:的值不能为空且值为数字';
      console.log('请输入Number A:的值不能为空且值为数字');
    }else {
      var math=Math.abs(num1.value);
      para.innerHTML='Number A的绝对值:'+math;
    }
  }
  else if(radio2.checked){
    if(num2.value===""||isNaN(num2.value)){
      para.innerHTML='请输入Number B:的值不能为空且值为数字';
      console.log('请输入Number B:的值不能为空且值为数字');
    }else {
      var math=Math.abs(num2.value);
      para.innerHTML='Number A的绝对值:'+math;
    }
  }
  else {
    console.log("请选中要判断的数字Number A或者Number B");
    para.innerHTML="请选中要判断的数字Number A或者Number B";
  }
}
function aCeil() {
if (radio1.checked){
if(num1.value===""||isNaN(num1.value)){
  para.innerHTML='请输入Number A:的值不能为空且值为数字';
  console.log('请输入Number A:的值不能为空且值为数字');
}else {
  var nn=Math.ceil(num1.value);
  para.innerHTML='Number A数字进行上舍入:'+nn;
}
}else if(radio2.checked){
  if(num2.value===""||isNaN(num2.value)){
    para.innerHTML='请输入Number B:的值不能为空且值为数字';
    console.log('请输入Number B:的值不能为空且值为数字');
  }else {
    var nn=Math.ceil(num2.value);
    para.innerHTML='Number B数字进行上舍入:'+nn;
  }
}else {
  console.log("请选中要判断的数字Number A或者Number B");
  para.innerHTML="请选中要判断的数字Number A或者Number B";
}}
  function aFloor() {
    if (radio1.checked){
      if(num1.value===""||isNaN(num1.value)){
        para.innerHTML='请输入Number A:的值不能为空且值为数字';
        console.log('请输入Number A:的值不能为空且值为数字');
      }else {
        var nn=Math.floor(num1.value);
        para.innerHTML='Number A数字进行上舍入:'+nn;
      }
    }else if(radio2.checked){
      if(num2.value===""||isNaN(num2.value)){
        para.innerHTML='请输入Number B:的值不能为空且值为数字';
        console.log('请输入Number B:的值不能为空且值为数字');
      }else {
        var nn=Math.floor(num2.value);
        para.innerHTML='Number B数字进行上舍入:'+nn;
      }
    }else {
      console.log("请选中要判断的数字Number A或者Number B");
      para.innerHTML="请选中要判断的数字Number A或者Number B";
    }
}
function aRound() {
  if (radio1.checked){
    if(num1.value===""||isNaN(num1.value)){
      para.innerHTML='请输入Number A:的值不能为空且值为数字';
      console.log('请输入Number A:的值不能为空且值为数字');
    }else {
      var nn=Math.round(num1.value);
      para.innerHTML='Number A数字进行上舍入:'+nn;
    }
  }else if(radio2.checked){
    if(num2.value===""||isNaN(num2.value)){
      para.innerHTML='请输入Number B:的值不能为空且值为数字';
      console.log('请输入Number B:的值不能为空且值为数字');
    }else {
      var nn=Math.round(num2.value);
      para.innerHTML='Number B数字进行上舍入:'+nn;
    }
  }else {
    console.log("请选中要判断的数字Number A或者Number B");
    para.innerHTML="请选中要判断的数字Number A或者Number B";
  }
}
function aMax() {
    if(num1.value===""|| isNaN(num1.value)||num2.value===""||isNaN(num2.value)){
      para.innerHTML='请输入Number A:跟Number B:的值不能为空且值为数字';
      console.log('请输入Number A:跟Number B:的值不能为空且值为数字');
    }else {
      var nn=Math.max(num1.value,num2.value);
      para.innerHTML='Number A数字进行上舍入:'+nn;
    }
}
function aMin() {
  if(num1.value===""||isNaN(num1.value)||num2.value===""||isNaN(num2.value)){
    para.innerHTML='请输入Number A:跟Number B:的值不能为空且值为数字';
    console.log('请输入Number A:跟Number B:的值不能为空且值为数字');
  }else {
    var nn=Math.min(num1.value,num2.value);
    para.innerHTML='Number A跟Number B最大值为：'+nn;
  }
}
