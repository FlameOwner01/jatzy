
const scoreOne = (GetData)=> {
        let sum = 0;
        GetData.map(({Roll}) =>{
            if(Roll === 1){
                sum+=1;
            }
        })
    return sum;
}


export {scoreOne};

