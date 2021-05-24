
const isArray=(arr)=>{
    if(arr !== undefined && arr !== null && arr.Length>0){
        return false;
    }
    else{
    return true;
}
}


const checkCards = (message)=>{console.log(message)}

export {isArray,checkCards}