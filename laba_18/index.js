
const CONTAINER = document.querySelector(".container");

let text = "text atrea";
let textArea = CONTAINER.querySelector("textarea");
let btnButton = CONTAINER.querySelector("button");
let btn2Button = CONTAINER.querySelector(".btn2");
let btnReset = CONTAINER.querySelector(".reset");
let btnSubmit = CONTAINER.querySelector(".sub");
let secondTextarea = CONTAINER.querySelectorAll("textarea")[1];
let input = CONTAINER.querySelectorAll(".query");
let input1 = CONTAINER.querySelectorAll(".query1");
let btnPressCount = 0;
let color = "red";

btnReset.addEventListener("click", ()=>{
  compareText(textArea.value,secondTextarea.value)
});

btn2Button.addEventListener("click", ()=>{
  document.getElementById('trig').click();
});

btnSubmit.addEventListener("dblclick", ()=>{
  getRadioValue(input.value)
  getCheckboxValue(input1.value)
});

btnButton.addEventListener("click", ()=>{
    writeText(textArea, "text area")
    setColor(color, textArea, btnPressCount)
    btnPressCount++;
});

function writeText(elem, txt){
    elem.value = txt;
}

function setColor (color, elem, flag){
    if (flag === 0){
        return;
    }

    if (flag !== 1){
        color = `rgba(${Math.floor(255 * Math.random())}, ${Math.floor(255 * Math.random())}, ${Math.floor(255 * Math.random())})`
    }
    elem.style.color = color;
}

function compareText (textOne, textTwo){
if (textOne === textTwo){
  alert ("same text");
  return;
} else if (textOne.indexOf(textTwo)!==-1){
  alert("text2 in text1");
} else {
  alert("texts is not same")}
}

function getRadioValue (radio){
if (input[0].checked) {
    let radio = input[0].value;
    alert(radio);
  } else if (input[1].checked){
      alert(input[1].value);
    } else {
      alert("check some radio");
    }
}

function getCheckboxValue (checkbox){
  if (input1[0].checked && input1[1].checked) {
      alert(input1[0].value + ", " + input1[1].value);
    } else if (input1[0].checked) {
    let checkbox = input1[0].value;
    alert(checkbox);
  } else if (input1[1].checked){
      alert(input1[1].value);
    } else {
      alert("check some checkbox");
    }
}

