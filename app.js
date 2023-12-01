// 1
function addition(num1, num2){
    sum = num1 + num2;
    return sum;
}

console.log(addition (-3,-6));

// 2

function timeConverter(minute){
    convert = minute*60;
    return convert;
}
console.log(timeConverter(5));

// 3
function nextNumber(number){
    forward = number + 1;
    return forward;
}
console.log(nextNumber(3))


// 4

function triArea(base, height){
    area = 0.5*base*height;
    return area;
}

console.log(triArea(7,4));


// 5
arr = [11,2,3,4,5,6]

function getFirstValue(arr){
    if (Array.isArray(arr) && arr.length>0);

    return arr[0];

}
console.log(getFirstValue(arr))

// 6

age = parseInt(prompt("Enter a positive number: "))


function calcAge(age){
    if(age >= 0){
        ageDays = age* 365;
        return ageDays;
    }
    else{
        return "Invalid"
    }

}
console.log(calcAge(age))


// 7

function circuitPower(voltage, current){
    power = voltage * current;
    return power
}
console.log(circuitPower(480,20))

// 8

function nextEdge(firstEdge,secondEdge){
    if (firstEdge >0 && secondEdge>0)
        {thirdEdge =(firstEdge + secondEdge)-1
        return thirdEdge
    }
    else{
        return "Not positive numbers"
    }
    
}
console.log(nextEdge(9,2))

// 9

function remainder(numm1,numm2){
    re = numm1 % numm2;
    return re;
 }
console.log(remainder(-9,45))


//10
function giveMeSomething(str){
    return "Something" + str;

}
console.log(giveMeSomething(" is better than nothing"))


//11
function squared(s) {
    return s * s;
  }
 
console.log(squared(5));


//12
function lessThanEqualZero(num){
    if (num <= 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(lessThanEqualZero(3));


//13
function internalangle(n){
    if (n > 2){
        angle = (n-2) * 180;
        return angle
    }
    else{
        return "No Angle Exist"
    }
}
console.log(internalangle(2));



//14
  function nameString(q){
    return q + "Coder" ;

}
console.log(nameString("ADNAN"))



//15
function lessthan100(num,l){
    if(num+l<100){
        return "True";
    }
    else{
        return "False";
    }
}
console.log(lessthan100(50,10));