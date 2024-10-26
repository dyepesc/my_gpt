const { GoogleGenerativeAI } = require("@google/generative-ai");

const dotenv = require("dotenv")
dotenv.config()

const genAI = new GoogleGenerativeAI(`${process.env.API_KEY}`);


async function run() {
    // const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "hay un tren con 40 vagones, y cada vagon tiene 10 personas, y ";

const result = await model.generateContent(prompt);
console.log(result.response.text());
}
run()