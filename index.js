// Code your solution here
function findMatching(arry, stringy){
    const matchingNames = arry.filter(function(name){
        return name.toLowerCase() == stringy.toLowerCase()
    })
    return matchingNames
}

function fuzzyMatch(arry, str){

    const n = str.length
    const matchingNames = arry.filter(function(name){
        return name.slice(0,n).toLowerCase() == str.toLowerCase()
    })
    return matchingNames

}

function matchName(arry, str){
    const matchingNames = arry.filter(function (user) {
        return user.name == str
      });
    return matchingNames
}