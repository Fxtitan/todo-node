const fs = require('fs');

const todoList = fs.readFileSync('./todos.csv', 'utf-8');
console.log(todoList)

const seperateLines = todoList.split('\n');
console.log(seperateLines)
// const seperatedByCommas = seperateLines.split(',');
// console.log(seperatedByCommas)
let userTodos = [];

const loadTodos = () => {
for(const item of seperateLines) {
    const splitItems = item.split(',');
    userTodos.push(splitItems)
    console.log(userTodos)
    console.log(splitItems)
}
}
loadTodos()


const displayTodos = () => {
    for (const items of userTodos) {
        console.log(items[0] + ' - ' + items[1])
    } 
}
displayTodos()


const readline = require('readline')

const interface = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});


//two parameters: a string and the question we ask user... 
//and a function for `node` to call once the user enters their answer. 
//The func will be a "callback" func 

const menu = `
Your options are:
1. Add a todo.
2. Remove a todo.
3. Mark a todo completed.
4. Mark a todo uncompleted.
5. Quit.
`

const handleMenu = (response) => {
if (response === '1') {
    console.log(response)
    interface.question('What do you want to add?', add)
} else {
    console.log('You are now quitting!!')
    interface.close();
}
}


interface.question(menu, handleMenu)

const add = () => {
    if ( === '1') {
        interface.question()


    }
interface.close();
}

//the add function
//adds todos the user puts in 
//if user types '1'// in the if logic run the question again 
//




