let salaries = {
    John: 100,
    Ann: 160,
    Pete: "Babken"
  }
  let sum = 0;
for(salary in salaries){
    if(Number.isInteger(salaries[salary])){
        salaries[salary]*=2
    }
}
for(salary in salaries){
    console.log(salary + " : "+ salaries[salary])
}

