#! /usr/bin/env node
import inquirer from "inquirer";
//todos array.done
//funtion.done
//operation.done
let todos = [];
async function createtodo(todos) {
    do {
        let ans = await inquirer.prompt([
            {
                type: "list",
                message: "Select an operation",
                name: "Select",
                choices: ["add todo", "update todo", "view todo", "Delete todo"]
            }
        ]);
        if (ans.Select == "add todo") {
            let addTodo = await inquirer.prompt([
                {
                    type: "input",
                    message: "add todo:",
                    name: "todo"
                }
            ]);
            todos.push(addTodo.todo);
            console.log(todos);
        }
        if (ans.Select == "update todo") {
            let updatetodo = await inquirer.prompt([
                {
                    type: "list",
                    message: "Select item to update",
                    name: "todo",
                    choices: todos.map(item => item)
                }
            ]);
            let addTodo = await inquirer.prompt([
                {
                    type: "input",
                    message: "add todo:",
                    name: "todo"
                }
            ]);
            let newtodos = todos.filter(val => val !== updatetodo.todo);
            todos = [...newtodos, addTodo.todo];
            console.log(todos);
        }
        if (ans.Select == "view todo") {
            console.log(todos);
        }
        if (ans.Select == "Delete todo") {
            let Deletetodo = await inquirer.prompt([
                {
                    type: "list",
                    message: "Select item to update",
                    name: "todo",
                    choices: todos.map(item => item)
                }
            ]);
            let newtodos = todos.filter(val => val !== Deletetodo.todo);
            todos = [...newtodos];
            console.log(todos);
        }
    } while (true);
}
createtodo(todos);
