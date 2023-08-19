document.getElementById('btn-deposit').addEventListener('click', function(){




const depositAmout = document.getElementById('deposit-box');
const depositAmoutString = depositAmout.value;
const deposit = parseFloat(depositAmoutString);
console.log(deposit);



// we have got the value of deposit input box


const d = document.getElementById('doneDeposit');

const d1 = d.innerHTML;
const d2 = parseFloat(d1);


d.innerHTML = d2 + deposit;
 const d3 = d.innerHTML;
const d4 = parseFloat(d3);
//deposit is done



const b = document.getElementById("balance");


const b1 = b.innerHTML;

const b3 = parseFloat(b1);

b.innerHTML = deposit + d2;

//balance a depoit secttion isdone;.

});



document.getElementById("btn-withdraw").addEventListener("click", function(){

//console.log("this is a wiftnbtll;");
const m = document.getElementById("w");

const m1 = m.value;

//console.log(m1);
const m2 = parseFloat(m1);
//console.log(m2);



const n = document.getElementById("r");
const n1 = n.innerHTML;
const n3 = parseFloat(n1);


n.innerHTML = m2 + n3;

const b = document.getElementById("balance");
const b1 = b.innerHTML;
const b2 = parseFloat(b1);

b.innerHTML = b2 -m2;
//console.log(b2);



});
