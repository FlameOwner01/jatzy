
const scoreOne = (GetData)=> {
        let sum = 0;
        GetData.map(({Roll}) =>{
            if(Roll === 1){
                sum+=1;
            }
        })
    return sum;
}

const scoreTwo = (GetData)=> {
    let sum = 0;
    GetData.map(({Roll}) =>{
        if(Roll === 2){
            sum+=2;
        }
    })
return sum;
}

const scoreThree = (GetData)=> {
    let sum = 0;
    GetData.map(({Roll}) =>{
        if(Roll === 3){
            sum+=3;
        }
    })
return sum;
}

const scoreFour = (GetData)=> {
    let sum = 0;
    GetData.map(({Roll}) =>{
        if(Roll === 4){
            sum+=4;
        }
    })
return sum;
}

const scoreFive = (GetData)=> {
    let sum = 0;
    GetData.map(({Roll}) =>{
        if(Roll === 5){
            sum+=5;
        }
    })
return sum;
}

const scoreSix = (GetData)=> {
    let sum = 0;
    GetData.map(({Roll}) =>{
        if(Roll === 6){
            sum+=6;
        }
    })
return sum;
}

const trilling = (GetData)=> {
    let sum = 0;
    let temp = [];
    GetData.map(({Roll}) =>{
        temp.push(Roll);
    })

    const duplicates = temp => temp.filter((item, index) =>  temp.indexOf(item) !== index);
    const elem = duplicates(temp);
   
    if(elem.length >= 2){
        temp.forEach(elem =>{
            sum+=elem;
        })
    }
 
return sum;
}

const poker = (GetData)=> {
    let sum = 0;
    let temp = [];
    GetData.map(({Roll}) =>{
        temp.push(Roll);
    })

    const duplicates = temp => temp.filter((item, index) =>  temp.indexOf(item) !== index);
    const elem = duplicates(temp);
   
    if(elem.length >= 3){
        temp.forEach(elem =>{
            sum+=elem;
        })
    }
 
return sum;
}

const house = (GetData)=> {
    let sum = 0;
    let temp = [];
    GetData.map(({Roll}) =>{
        temp.push(Roll);
    })

    const duplicates = temp => temp.filter((item, index) =>  temp.indexOf(item) !== index);
    const elem = duplicates(temp);

    if(elem.length > 2 && elem.length <= 3){
        for(let i = 0; i< elem.length-1; i++){
            if(elem[i] != elem[i+1]){
                sum = 25;
            }
        }
    }
 
return sum;
}

const smstr = (GetData)=> {
    let sum = 0;
    let temp = [];
    let its = false;
    GetData.map(({Roll}) =>{
        temp.push(Roll);
    })

    let newTemp = temp.filter((c, ind) =>{
        return temp.indexOf(c) === ind;
    })
    newTemp.sort();

    for(let i = 0; i < 4; i++){
        if(i === 3) return sum;
        
        if(newTemp[i] === newTemp[i+1]-1) its = true;
        else {
            its= false;
             return sum = 0;
        }
        if(its) sum = 30;
    }
    
}


const bigstr = (GetData)=> {
    let sum = 0;
    let temp = [];
    let its = false;
    GetData.map(({Roll}) =>{
        temp.push(Roll);
    })

temp.sort();
    for(let i = 0; i < 5; i++){
        if(i === 4) return sum;
        if(temp[i] === temp[i+1]-1) its = true;
        else {

            its= false;
             return sum = 0;
        }
        if(its) sum = 40;
    }
    
}
const yatzy = (GetData)=> {
    let sum = 0;
    let temp = [];
    GetData.map(({Roll}) =>{
        temp.push(Roll);
    })

    const duplicates = temp => temp.filter((item, index) =>  temp.indexOf(item) !== index);
    const elem = duplicates(temp);
   
    if(elem.length === 4){
        sum = 50;
    }
 
return sum;
}
const chance = (GetData)=> {
    let sum = 0;
    let temp = [];
    GetData.map(({Roll}) =>{
        temp.push(Roll);
    });

    temp.forEach(element => {
        sum+=element;
    });
    
return sum;
}


export {scoreOne, scoreTwo, scoreThree, scoreFour, scoreFive, scoreSix, trilling, poker, house, smstr,bigstr, yatzy, chance};

