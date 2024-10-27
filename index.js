const { GoogleGenerativeAI } = require("@google/generative-ai");

const dotenv = require("dotenv")
dotenv.config()

async function run() {
    const genAI = new GoogleGenerativeAI(`${process.env.API_KEY}`);
    // const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    

const prompt = "dime la raiz cuadrada de 1000 ";

const result = await model.generateContent(prompt);
console.log(result.response.text());
}

 run()

