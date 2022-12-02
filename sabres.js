function howManyLightsabersDoYouOwn(name) {
  let sabres = 18;
  
  if(typeof name === "undefined" || name !== "Zack"){
    sabres -= 18;
    console.log(sabres);
    return;
  }
  console.log(sabres)
  return sabres;
}

howManyLightsabersDoYouOwn();
howManyLightsabersDoYouOwn("Adam");
howManyLightsabersDoYouOwn("Zack");



// ////////////////////////////////////

// function howManyLightsabersDoYouOwn(name) {
//   return name === 'Zach' ? 18 : 0;
// }