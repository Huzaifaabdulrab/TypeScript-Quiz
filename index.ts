#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";



let message: string = ">>>>>>>>>>>>>>GIAIC QUIZ-PROJECT CREATED BY HUZAIFA ABDULRAB<<<<<<<<<<<<<<<<<<<<<";
console.log(chalk.magenta(message));


const quizQuestion = await inquirer.prompt([
    {
        name: "QuizNo1",
        type: "list",
        message: "What is full form of TS\n-------------------------------",
        choices: ["JavaScript", "Python", "TypeScript", "Tsconfig.jason"],
    },
    {
        name: "QuizNo2",
        type: "list",
        message:
            "let a: number = 1 \n ++a, a++, --a, a--, a -+ \n console.log(a);\n-------------------------------",
        choices: ["1", "4", "5", "6"],
    },
    {
        name: "QuizNo3",
        type: "list",
        message:"for of loop syntax\n-------------------------------",
        choices: [
            "for (const iterator of object) {}",
            "for (let object of iterator) {}",
            "for of(const iterator of object) {}",
            "for (of){}",
        ],
    },
    {
        name: "QuizNo4",
        type: "list",
        message: 
            "let arr : string[]=['true', 'false' , 'false' 'true'];\n arr.push(true); \n console.log(arr);\n-------------------------------",
        choices: [
            '["true","false","false","true","true]',
            "['true', 'false', 'false', 'true', ]",
            "[true, false, false, true, true ]",
            "Error",
        ],
    },
    {
        name: "QuizNo5",
        type: "list",
        message:
            'try{\n   let a = "Hello World"\n   console.log(t); \n } catch (error) {\n    console.log("Error");\n }\n-------------------------------',
        choices: ["Hello world", "Error", "syntax error", "Cannot find name 't'."],
    },
    {
        name: "QuizN6",
        type: "list",
        message:"What is the type of array\n-------------------------------",
        choices: ["object", "number", "none of these", "all of the above"],
    },
    {
        name: "QuizNo7",
        type: "list",
        message: "What does the 'tsc' command do in TypeScript?\n-------------------------------",
        choices: [
            "Transpiles TypeScript code to JavaScript",
            "Creates a new TypeScript file",
            "Installs TypeScript globally",
            "None of the above",
        ],
    },
    {
        name: "QuizNo8",
        type: "list",
        message:
            "Which keyword is used to declare a variable in TypeScript?\n-------------------------------",
        choices: ["let", "var", "const", "both let and var"],
    },
    {
        name: "QuizNo9",
        type: "list",
        message:
            "What is the output of the following TypeScript code?\n let x: string = '10';\n let y: number = 5;\n console.log(x + y);\n-------------------------------",
        choices: ["10", "15", "105", "Error"],
    },
    {
        name: "QuizNo10",
        type: "list",
        message:  "What is the purpose of 'strictNullChecks' in tsconfig.json file?\n-------------------------------",
        choices: [
            "Enforces strict null checking rules",
            "Disables strict mode in TypeScript",
            "Allows null values in TypeScript",
            "None of the above",
        ],
    },
]);

let score: number = 0;

const answers = [
    "TypeScript",
    "1",
    "for (const iterator of object) {}",
    "Error",
    "Error",
    "object",
    "Transpiles TypeScript code to JavaScript",
    "both let and var",
    "105",
    "Enforces strict null checking rules"
];

for (let i = 0; i < Object.keys(quizQuestion).length; i++) {
    const questionKey = `QuizNo${i + 1}`;
    if (quizQuestion[questionKey] === answers[i]) {
        console.log(`${i + 1}) ${chalk.greenBright("Answer is correct")}`);
        score++;
    } else {
        console.log(`${i + 1}) ${chalk.redBright("Answer is Wrong")}`);
    }
}
console.log(chalk.magenta(`Total Score: ${score}/10`));
