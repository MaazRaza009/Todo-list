#! /usr/bin/env node
import inquirer from "inquirer";
//todos array.done
//funtion.done
//operation.done
let todos = ["Reading", "Writing", "Drawing", "Crafting"];
async function createtodo(todos) {
    do {
        let ans = await inquirer.prompt([
            {
                type: "list",
                message: "Select an operation",
                name: "Select",
                choices: ["add todo", "update todo", "view todo", "Delete todo", "Exit"]
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
                    message: "Select item to update:",
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
                    message: "Select item to delete:",
                    name: "todo",
                    choices: todos.map(item => item)
                }
            ]);
            let newtodos = todos.filter(val => val !== Deletetodo.todo);
            todos = [...newtodos];
            console.log(todos);
        }
        if (ans.Select == "Exit") {
            console.log("Thank you for using Todo list");
            break;
        }
    } while (true);
}
createtodo(todos);
