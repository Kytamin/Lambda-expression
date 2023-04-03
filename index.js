let arr = [2, 3, 4, 5, 6, 7, 8];

let squard = item=>item*item

function doublevalue(func,arr){
    let arr1=[]
    arr.forEach((index)=>arr1.push(squard(index))
    )
    return arr1
}

console.log(doublevalue(squard,arr))


