var radio1 = document.querySelector('#radio_a');
var radio2 = document.querySelector('#radio_b');
var str1 = document.querySelector('#str-a');
var str2 = document.querySelector('#str-b');
var num1 = document.querySelector('#num_a');
var num2 = document.querySelector('#num_b');
var para = document.querySelector('#result1');
function aLength() {
  if(radio1.checked){
    var nn=str1.value.length;
    para.innerHTML="当前的内容长度："+nn;
  }
  else if(radio2.checked){
    var nn=str2.value.length;
    para.innerHTML="当前的内容长度："+nn;
  }
  else {
    para.innerHTML="请输入内容";
  }
}
function aChar(){
  if(radio1.checked){
    if(str1.value!=='' && str1.value.length>=3){
      var nn=str1.value[2];
      para.innerHTML="当前选中输入中的第3个字符："+nn;
    }else {
      para.innerHTML="不能为空且不能少于3个字符！";
    }
  }
  else if(radio2.checked){
    if(str1.value!==''){
    var nn=str2.value[2];
    para.innerHTML="当前选中输入中的第3个字符："+nn;
  }else {
      para.innerHTML="不能为空！";
    }
  }
  else {
    para.innerHTML="请输入内容";
  }
}
function aLength() {
  if(radio1.checked){
    var nn=str1.value.length;
    para.innerHTML="当前的内容长度："+nn;
  }
  else if(radio2.checked){
    var nn=str2.value.length;
    para.innerHTML="当前的内容长度："+nn;
  }
  else {
    para.innerHTML="请输入内容";
  }
}