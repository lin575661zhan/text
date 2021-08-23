const factories = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
  ];
//console.log(factories.length);

//1. Count Employees Number by Factory // => [ {name: 'BR1', count: 4}, ... ]

function CountEmployeesNumber (theObject){
  const a=[];
  for(n=0;n<theObject.length;n++){
    a.push("{name:"+theObject[n].name+",count:"+theObject[n].employees.length+"}");
  } 
  console.log(a);
}

//2. Count Factories Number by Employee // => [ {employee: 'John', count: 2}, ... ]
function CountFactoriesNumber(theObject){
  var result = new Set();
  var repeat = new Set();
  
  for(n=0;n<theObject.length;n++){
    theObject[n].employees.forEach(item => {
        result.has(item) ? repeat.add(item) : result.add(item);
    })
  
  }
  var a= Array.from(result);
  const b=[];
  
  for(n=0;n<a.length;n++){
    g=0;
    for(s=0;s<theObject.length;s++){
      for(y=0;y<theObject[s].employees.length;y++){
        if(a[n]==theObject[s].employees[y])g++;
      }
      
    }
    b.push("{employee:"+a[n] +", count:"+g+"}");
  }
  console.log(b);
}

//3. Order employees list by alphabetical order // =>   { name: "BR2", employees: ["Jessie", "John", "Karen"] }
function alphabetical(theObject){
  const a=[];
  for(n=0;n<theObject.length;n++){
    theObject[n].employees.sort();
    a.push("{name:"+theObject[n].name+",employees:"+theObject[n].employees+"}");
  }
  console.log(a);
  return a;
}
//4. Count total hours worked in 1 day ?
const employeeType = [
  {id: 1, name: "FullTime", work_begin: "09:00:00", work_end: "17:00:00"},
  {id: 2, name: "MidTime", work_begin: "12:00:00", work_end: "21:00:00"},
  {id: 3, name: "HalfTime", work_begin: "20:00:00", work_end: "00:00:00"},
];

function Count(theObject){
  const a=[];

  for(n=0;n<theObject.length;n++){
    if(theObject[n].work_end.substr(0,2)==0){
      a.push("{name:"+theObject[n].name+",count:"+
      (24-theObject[n].work_begin.substr(0,2))+"}");
    }else{
      a.push("{name:"+theObject[n].name+",count:"+
      (theObject[n].work_end.substr(0,2)-theObject[n].work_begin.substr(0,2))
      +"}");
    }
    
  }
  console.log(a);
  return a;
}

//5. Make a function that take as parameters dayTime and return number of employee working // howManyEmployeeByTime(time) => int
const employees = [
    {id: 1, name: "Alice", type: 2},
    {id: 2, name: "Bob", type: 3},
    {id: 3, name: "John", type: 2},
    {id: 4, name: "Karen", type: 1},
    {id: 5, name: "Miles", type: 3},
    {id: 6, name: "Henry", type: 1}
];
function howManyEmployeeByTime(time){
  a=0;
  for(n=0;n<employees.length;n++){
    if(employees[n].type==time)a++;
  }
  console.log(a);
  return a;
}
//6. How many days of work needed to done all tasks ? // => 1 day = 9:00 to 00:00 between 00:00 and 09:00 doesnt count.
const tasks = [
  {id: 1, title: "task01", duration: 60 },
  {id: 2, title: "task02", duration: 120},
  {id: 3, title: "task03", duration: 180},
  {id: 4, title: "task04", duration: 360},
  {id: 5, title: "task05", duration: 30},
  {id: 6, title: "task06", duration: 220},
  {id: 7, title: "task07", duration: 640},
  {id: 8, title: "task08", duration: 250},
  {id: 9, title: "task09", duration: 119},
  {id: 10, title: "task10", duration: 560},
  {id: 11, title: "task11", duration: 340},
  {id: 12, title: "task12", duration: 45},
  {id: 13, title: "task13", duration: 86},
  {id: 14, title: "task14", duration: 480},
  {id: 15, title: "task15", duration: 900}
];
function CountDay(){
  a=0;
  for(n=0;n<tasks.length;n++){
    a+=tasks[n].duration;
  }
  console.log(Math.ceil(a/15/60));
  return Math.ceil(a/15/60);
}