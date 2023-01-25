// Write your solution in this file!
const employee = {
    Amanda: "67 6th Ave",
    Paris: "45 4th Ave",
    Jess: "56 7th Ave",
}

function updateEmployeeWithKeyAndValue(obj,key,value){
    let newEmployee = {...obj}
    newEmployee[key] = value
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    employee[key]=value
    return employee
}

function deleteFromEmployeeByKey(obj,key){
    let newEmployee = {...obj};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}

