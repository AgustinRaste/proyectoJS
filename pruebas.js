let array = [{id:"12", nom:"Pewdro", edad:20},{id:"12", nom:"Cesar", edad:23},{id:"13", nom:"Pdro", edad:12}]



console.log(array);

array.sort(function (a, b){a.edad-b.edad});

console.log();
console.log(array);