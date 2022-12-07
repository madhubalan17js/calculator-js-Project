let result =document.getElementById("inputext")

let calculate=(num)=>{
    result.value+=num;
}

let Result=()=>{
    try{
    result.value=eval(result.value)
    }
    catch(err){
      result.value= "Not  valid "

    }
}

let clr=()=>{
    result.value=" ";

}
 let Dlt=()=>{
    result.value=result.value.slice(0,-1);

}