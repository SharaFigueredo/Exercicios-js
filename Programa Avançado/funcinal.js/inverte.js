function inverte(str){
  if(str.length===0){
    return ""
  }else{
  return inverte(str.slice(1)) + str[0] 
  }
}
function string(array){
  return array.map( e => inverte (e))

}
const arr=["iza","shara","pai"]
console.log(string(arr))

