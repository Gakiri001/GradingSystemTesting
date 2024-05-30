function gradeMathScience(marks) {
  if (marks >= 70 && marks <= 100 ) {
    return `Grade A`
  }
  else if(marks >= 60 && marks <= 69){
    return `Grade B`
  }
  else if(marks >= 50 && marks <= 59){
    return `Grade C`
  }
  else if(marks >= 40 && marks <= 49){
    return `Pass`
  }
  else if(marks < 40){
    return `Sup`
  }
}


function gradeReligios(marks) {
  if (marks >= 80 && marks <= 100 ) {
    return `Grade A`
  }
  else if(marks >= 70 && marks <= 79){
    return `Grade B`
  }
  else if(marks >= 60 && marks <= 69){
    return `Grade C`
  }
  else if(marks >= 50 && marks <= 59){
    return `Pass`
  }
  else if(marks < 50){
    return `Sup`
  }
}

function gradeLangComp(marks) {
  if (marks >= 75 && marks <= 100 ) {
    return `Grade A`
  }
  else if(marks >= 65 && marks <= 74){
    return `Grade B`
  }
  else if(marks >= 55 && marks <= 64){
    return `Grade C`
  }
  else if(marks >= 45 && marks <= 54){
    return `Pass`
  }
  else if(marks < 45){
    return `Sup`
  }
}

function average(math,eng,kis,phy,chem,re,comp){
  return Math.round((math+eng+kis+phy+chem+re+comp)/7)
}

function calculateGradeAndAverage(name,math,eng,kis,phy,chem,re,comp) {
  const details = { 
    "name" : name,
    "Mathematics" : gradeMathScience(math),
    "English" : gradeReligios(eng),
    "Kiswahili" : gradeLangComp(kis),
    "Physics": gradeMathScience(phy),
    "Chemisty": gradeMathScience(chem),
    "Religious Studies": gradeReligios(re),
    "Computer Studies": gradeLangComp(comp),
    "Average Points": average(math,eng,kis,phy,chem,re,comp)
  }
  return details
}

console.log(calculateGradeAndAverage("Julius",55,45,50,66,99,55,32))
console.log(calculateGradeAndAverage("Jasper",60,45,33,45,66,77,88))

module.exports = {gradeLangComp,gradeMathScience,gradeReligios,average,calculateGradeAndAverage}
