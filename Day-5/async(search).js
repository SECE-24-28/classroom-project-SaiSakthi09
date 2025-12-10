let employee=[{id:101,name:"valar",age:18},
{id:102,name:"sowmya",age:19},
{id:103,name:"visalini",age:20},
{id:104,name:"sugatha",age:8},
{id:105,name:"sangamitra",age:9},
{id:106,name:"shristi",age:21}
];

let newEmp=employee.filter((emp)=>{
return emp.name.includes("s");
});

console.log(newEmp);