let id = localStorage.getItem("id")
let resOnaTili = JSON.parse(localStorage.getItem('OnaTili'))
let metematika = JSON.parse(localStorage.getItem('metematika'))
let tarx = JSON.parse(localStorage.getItem('tarx'))
let question = document.getElementById("question")
let a = document.getElementById("a")
let b = document.getElementById("b")
let d = document.getElementById("d")
let radioA = document.getElementById("radioA")
let radioB = document.getElementById("radioB")
let radioD = document.getElementById("radioD")
let total = 0;
let counter = 0
let answer;
let time = document.getElementById("time")
let min = 14
let sec = 60
let number = document.getElementById("number")
let science = localStorage.getItem("science")
const test = () => {
    if(science == "OnaTili"){
        question.innerHTML = resOnaTili[id][counter].name
        a.innerHTML = resOnaTili[id][counter].inputA
        b.innerHTML = resOnaTili[id][counter].inputB
        d.innerHTML = resOnaTili[id][counter].inputD
    }else if (science == "tarx") {
        question.innerHTML = tarx[id][counter].name
        a.innerHTML = tarx[id][counter].inputA
        b.innerHTML = tarx[id][counter].inputB
        d.innerHTML = tarx[id][counter].inputD
    }else if (science == "metematika") {
        question.innerHTML = metematika[id][counter].name
        a.innerHTML = metematika[id][counter].inputA
        b.innerHTML = metematika[id][counter].inputB
        d.innerHTML = metematika[id][counter].inputD
    }
   
}
test()
const check = () => {
    if (radioA.checked) {
        answer = radioA.value

    } else if (radioB.checked) {
        answer = radioB.value

    } else if (radioD.checked) {
        answer = radioD.value
    }
}
const next = () => {

    counter++

    if(science == "OnaTili"){
        if (resOnaTili[id].length == counter) {
            alert(resOnaTili[id].length + " ta savoldan " + total + " tasini topdingiz")
            min = 0
            sec = 0
        } else {
            test()
            resOnaTili[id][counter - 1].answer == answer ? total++ : "";
            radioA.checked = false
            radioB.checked = false
            radioD.checked = false
    
        }
    }else if (science == "tarx") {
        if (tarx[id].length == counter) {
            alert(tarx[id].length + " ta savoldan " + total + " tasini topdingiz")
            min = 0
            sec = 0
        } else {
            test()
            tarx[id][counter - 1].answer == answer ? total++ : "";
            radioA.checked = false
            radioB.checked = false
            radioD.checked = false
    
        }
    }else if (science = "metematika") {
        if (metematika[id].length == counter) {
            alert(metematika[id].length + " ta savoldan " + total + " tasini topdingiz")
            min = 0
            sec = 0
        } else {
            test()
            metematika[id][counter - 1].answer == answer ? total++ : "";
            radioA.checked = false
            radioB.checked = false
            radioD.checked = false
    
        }
    }

 
    number.innerHTML = counter+1
}
const first = () => {
    counter--
    if (-1 == counter) {
        counter = 0
        alert(22)
    } else {
        console.log(counter);
        test()
    }
    number.innerHTML = counter--

}
setTimeout(sayHi, 1000);

function sayHi() {
    sec --
    if (sec == 0) {
        sec = 60
        min  --
    }
    min == 0 ?alert("tugasin"):setTimeout(sayHi, 1000);
    time.innerHTML =min + ":" + sec
}





  