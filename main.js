const fs = require('fs');

const todoList = fs.readFileSync('./todos.csv', 'utf-8');
console.log(todoList)

const seperateLines = todoList.split('\n');
console.log(seperateLines)
// const seperatedByCommas = seperateLines.split(',');
// console.log(seperatedByCommas)
let userTodos = [];

for(const item of seperateLines) {
    const splitItems = item.split(',');
    userTodos.push(splitItems)
    console.log(userTodos)
    console.log(splitItems)
}

const displayTodos = () => {
    for (const items of userTodos) {
        console.log(items[0] + ' - ' + items[1])
    } 
}
displayTodos()





// const loadTodos = (todo, todoStatus) => {
//     for (const item of seperateLines) {
//         console.log(item)

//     }

// }
// console.log(loadTodos())
