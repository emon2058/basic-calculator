let res = document.getElementById('res');

function btn0(){
  return res.innerHTML+="0";
}
function btn1(){
  return res.innerHTML+='1';
}
function btnClr(){
  return res.innerHTML='';
}
function btnSum(){
  if(res.innerHTML.includes('+')==false&&res.innerHTML.includes('-')==false&&res.innerHTML.includes('*')==false&&res.innerHTML.includes('/')==false)
  {
    return res.innerHTML+='+';
  }
}
function btnSub(){
  if(res.innerHTML.includes('+')==false&&res.innerHTML.includes('-')==false&&res.innerHTML.includes('*')==false&&res.innerHTML.includes('/')==false)
  {
    return res.innerHTML+='-';
  }
}
function btnMul(){
  if(res.innerHTML.includes('+')==false&&res.innerHTML.includes('-')==false&&res.innerHTML.includes('*')==false&&res.innerHTML.includes('/')==false)
  {
    return res.innerHTML+='*';
  }
}
function btnDiv(){
  if(res.innerHTML.includes('+')==false&&res.innerHTML.includes('-')==false&&res.innerHTML.includes('*')==false&&res.innerHTML.includes('/')==false)
  {
  return res.innerHTML+='/';
  }
}

function btnEql(){
  let takeValue=res.innerHTML;
    for(let i=0;i<takeValue.length;i++){
      let findNumbers=/\d+/g
      let allNumbers=takeValue.match(findNumbers);

      let operand1=allNumbers[0];
      let operand2=allNumbers[1];

      let binToDecOp1=parseInt(operand1,2)
      let binToDecOp2=parseInt(operand2,2)
      if(takeValue[i]=='+'){
    let binarySum=(binToDecOp1+binToDecOp2).toString(2);
    res.innerHTML=binarySum
  }
    else if (takeValue[i]=='-') {
      let binarySub=(binToDecOp1-binToDecOp2).toString(2)
      res.innerHTML=binarySub
    }
    else if(takeValue[i]=='*'){
      let binaryMul=(binToDecOp1*binToDecOp2).toString(2)
      res.innerHTML=binaryMul
    }
    else if(takeValue[i]=='/'){
      let binaryDiv=Math.floor(operand1/operand2)
      res.innerHTML=binaryDiv
    }
  }
}

                        // shortest way
  // function btnEql () {
    //   let binaryToDecimal = Math.floor(eval(res.innerHTML.replace(/\d+/g, function(str) {return parseInt(str, 2)})))
    //   let decimalToBinary = binaryToDecimal.toString(2);
    //   res.innerHTML = decimalToBinary;
    // }
