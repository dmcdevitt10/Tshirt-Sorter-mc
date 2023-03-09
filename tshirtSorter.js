function sorter(str){
    let small = []
    let medium = []
    let large = []
    for(let i = 0; i < str.length; i++){
        if(str[i] === 's'){
            small.push(str[i])
        }else if(str[i] === 'm'){
            medium.push(str[i])
        }else{
            large.push(str[i])
        }
    }
    small = small.join('')
    medium = medium.join('')
    large = large.join('')
    return small + medium + large
}

console.log(sorter('smlsmslslsmslsmls'))