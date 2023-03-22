"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let numPatients;
let currentPatient = 0;
rl.question("Welcome Doctor! How many patients would you like to see today? ", (num) => {
    numPatients = parseInt(num);
    promptUser();
});
function promptUser() {
    if (currentPatient < numPatients) {
        rl.question("Enter your name: ", (name) => {
            rl.question("Enter your age: ", (age) => {
                rl.question("Enter your weight in kg: ", (weight) => {
                    rl.question("Enter your height in meters: ", (height) => {
                        const data = {
                            name: name,
                            age: parseInt(age),
                            weight: parseFloat(weight),
                            height: parseFloat(height),
                        };
                        if (data.age < 18) {
                            console.log(`Sorry ${data.name}, you are too young`);
                        }
                        else {
                            console.log(`Welcome ${data.name}, you are old enough`);
                            const bmi = calculateBMI(data.weight, data.height);
                            console.log(`Your BMI is ${bmi.toFixed(2)}`);
                        }
                        currentPatient++;
                        promptUser();
                    });
                });
            });
        });
    }
    else {
        console.log(`The maximum number of patients has been reached. Sorry, we cannot see any more patients.`);
        rl.close();
    }
}
function calculateBMI(weight, height) {
    return weight / (height * height);
}
