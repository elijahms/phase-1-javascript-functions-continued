// Your code here
const mondayWork = function(activity = "go to the office") {
    if (activity != "go to the office") {
        return `This Monday, I will ${activity}.`
    }
    else {
        return `This Monday, I will ${activity}.`
    }    
}

function wrapAdjective(thang = "*") {
    return function(thing = "special") {
        return `You are ${thang}${thing}${thang}!`
    }
}
wrapAdjective("%")("a dedicated programmer");
 
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}