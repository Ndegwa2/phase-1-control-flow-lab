function scuberGreetingForFeet(){
  if(feet <= 400){
    return "Free Ride";
  }else if(feet > 400 && feet <= 2000){
    return "Twenty bucks please";
  }else if(feet >2000 && feet <=2500){
    return "Thirty bucks please";
  }else {
    return "Too Far"
  }
}

module.exports = {
  scuberGreetingForFeet
}

function ternaryCheckCity(){
  return city === "NYC"? "ok, that will do": "No can't do";

}

function switchOnCharmFromTip(tip){
  switch (tip){
    case "generous":
      return "Thank you.";
      case"not generous":
      return "Thank you";
      default:
        return "See you!";
  }
  
  
}
module.exports ={
  scuberGreetingForFeet,
  ternaryCheckCity,
  switchOnCharmFromTip
};