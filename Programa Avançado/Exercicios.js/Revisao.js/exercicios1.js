function umOuOutro(a,b){
if(a === true &&b===false){
  return true
}
if(a=== false && b===true){
  return true
}
if(a=== true && b===true){
  return false 
}
if(a=== false && b===false){
  return false 
}
return false
}

function umOuOutro(a,b){
if (a===b){
  return false
}
return true 
}

console.log(umOuOutro(true, true))

function umOuOutro(a,b,c){
return((a && !b && !c))||(!a && b && !c)||(!a && !b && c)
}
console.log(umOuOutro(true,false,true));
function contrarioDoE(a,b){
 return !(a&&b)
}
console.log(contrarioDoE(false,false))

function contrarioDoE1(c,d){
  if(a&&b){
    return false 
  }
  return true 
}
console.log(contrarioDoE(true,false))

let num = 10**1000
console.log(num)
