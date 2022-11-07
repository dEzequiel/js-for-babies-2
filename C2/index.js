const marks = {
    Excelent: 10,
    Notable: 9,
    Good: 8,
    Suficient: 5,
    Insuficient: 4
}

function getMarkAsText(mark) {
    if(Object.values(marks).includes(mark)) {
        return Object.keys(marks).includes(mark)
    }

    return false
}

console.log(getMarkAsText(9))