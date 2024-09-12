let stop = false;
let arrData = document.querySelectorAll('.cell');
let arr = [null,null,null,null,null,null,null,null,null];


let concat = function(a,b,c){
    let result = arr[a] + arr[b] + arr[c];

    if(result === 'xxx' || result === 'ooo'){
        return result;
    }

    switch(result){
        case 'xxnull':
            return ['x', c];
        
        case 'xnullx':
            return ['x', b];

        case 'nullxx':
            return ['x', a];

        case 'oonull':
            return ['o', c];
            
        case 'onullo':
            return ['o', b];
    
        case 'nulloo':
            return ['x', a];    
    }
}


let changeColorAndStop = function(a,b,c){
    arrData[a].style.color = 'red';
    arrData[b].style.color = 'red';
    arrData[c].style.color = 'red';

    stop = true;
}

function checkWin(){
    for(let i = 0; i <= 6; i += 3){
        let result = concat(i, i + 1, i + 2);

        if(result === 'xxx' || result === 'ooo'){
            changeColorAndStop(i, i + 1, i + 2);
        }
    }

    for(let i = 0; i < 3; i++){
        let result = concat(i, i + 3, i + 6);

        if(result === 'xxx' || result === 'ooo'){
            changeColorAndStop(i, i + 3, i + 6);
        }
    }

    result = concat(0,4,8);
    if(result === 'xxx' || result === 'ooo'){
        changeColorAndStop(0,4,8);
    }

    result = concat(2,4,6);
    if(result === 'xxx' || result === 'ooo'){
        changeColorAndStop(2,4,6);
    }
}


function computerMove(){
    for(let i = 0; i <= 6; i += 3){
        let result = concat(i, i + 1, i + 2);

        if(typeof(result) === 'object' && result[0] === 'x'){
            arrData[result[1]].innerHTML = 'o';
            arr[result[1]] = 'o';
            return;
        }
    }

    for(let i = 0; i < 3; i++){
        let result = concat(i, i + 3, i + 6);

        if(typeof(result) === 'object' && result[0] === 'x'){
            arrData[result[1]].innerHTML = 'o';
            arr[result[1]] = 'o';
            return;
        }
    }

    result = concat(0,4,8);
    if(typeof(result) === 'object' && result[0] === 'x'){
        arrData[result[1]].innerHTML = 'o';
        arr[result[1]] = 'o';
        return;
    }

    result = concat(2,4,6);
    if(typeof(result) === 'object' && result[0] === 'x'){
        arrData[result[1]].innerHTML = 'o';
        arr[result[1]] = 'o';
        return;
    }








    for(let i = 0; i <= 6; i += 3){
        let result = concat(i, i + 1, i + 2);

        if(typeof(result) === 'object' && result[0] === 'o'){
            arrData[result[1]].innerHTML = 'o';
            arr[result[1]] = 'o';
            return;
        }
    }

    for(let i = 0; i < 3; i++){
        let result = concat(i, i + 3, i + 6);

        if(typeof(result) === 'object' && result[0] === 'o'){
            arrData[result[1]].innerHTML = 'o';
            arr[result[1]] = 'o';
            return;
        }
    }

    result = concat(0,4,8);
    if(typeof(result) === 'object' && result[0] === 'o'){
        arrData[result[1]].innerHTML = 'o';
        arr[result[1]] = 'o';
        return;
    }

    result = concat(2,4,6);
    if(typeof(result) === 'object' && result[0] === 'o'){
        arrData[result[1]].innerHTML = 'o';
        arr[result[1]] = 'o';
        return;
    }


    let tempArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === null){
            tempArr.push(i);
        }
    }

    let randomIndex = Math.floor(Math.random() * tempArr.length);
    let randomNull = tempArr[randomIndex];

    arrData[randomNull].innerHTML = 'o';
    arr[randomNull] = 'o';
}

addEventListener('click', function(event){

    if(stop === true){ return; }

    if(event.target.className === 'cell' && event.target.textContent === ''){
        event.target.style.color = 'blue';
        event.target.innerHTML = 'x';
        let index = event.target.getAttribute('indexCell');
        arr[index] = 'x';
        
    }else{
        return;
    }

    checkWin();

    if(stop === true){ return; }

    computerMove();

    checkWin();

    
});