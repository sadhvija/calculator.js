let res=document.getElementById("result")

function validate(value){
    res.textContent=res.textContent === "0"?value:res.textContent + value;
}

function clearResult(){
    res.textContent='0'
    console.log(res.textContent);
}

function calculate(){
    res.textContent=eval(res.textContent)
    console.log(res.textContent);
}