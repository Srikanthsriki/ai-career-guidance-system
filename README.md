AI Career Guidance System Using Generative AI

An intelligent AI-powered career guidance platform designed to help students discover suitable career paths based on their education, skills, interests, programming knowledge and career goals.

🚀 Project Overview

The AI Career Guidance System provides personalized career recommendations using Generative AI. It analyzes student profiles, identifies skill gaps and generates learning roadmaps to help students achieve their career goals.

The system integrates Retrieval-Augmented Generation (RAG) and Model Context Protocol (MCP) to enhance AI-powered career assistance.

✨ Key Features

- Student Profile: Store and analyze student education, skills, interests and experience.
- AI Career Recommendations: Personalized career suggestions with AI match scores.
- Alternative Careers: Explore other suitable career opportunities.
- Career Explanation: Understand recommended career paths and job opportunities.
- Skill Analysis: Identify existing skills and skills to improve.
- Learning Roadmap: Personalized step-by-step learning plans.
- Project Recommendations: Practical projects to develop technical skills.
- Career Comparison: Compare different career paths.
- AI Skill-Gap Analysis: Identify missing skills and improvement areas.
- Progress Tracking: Monitor learning progress.
- Analytics Dashboard: Visualize career and learning insights.
- RAG Knowledge Base: Retrieve relevant career information.
- MCP Integration: Connect AI agents with external tools.
- AI Career Agent: Interactive career guidance assistance.
- AI Resume Analyzer: Analyze resumes and identify improvements.
- AI Interview Simulator: Practice interview questions.
- Career Report: Generate downloadable career guidance reports.

🛠️ Technologies Used

Category| Technologies
Frontend| React.js, HTML, CSS, JavaScript
Backend| Node.js, Express.js
Database| MongoDB
Generative AI| Google Gemini API
AI Architecture| RAG
Tool Integration| MCP
Data Visualization| Recharts
Development Tools| VS Code, Git, GitHub

🏗️ Project Structure

AI-Career-Guidance-System/
│
├── client/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── mcp/
│   ├── models/
│   ├── services/
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md

⚙️ Installation and Setup

1. Clone the repository

git clone https://github.com/The-solo-man/AI-Career-Guidance-System.git

2. Open the project

cd AI-Career-Guidance-System

3. Install frontend dependencies

cd client
npm install

4. Install backend dependencies

cd ../server
npm install

5. Configure environment variables

Copy `server/.env.example` to `server/.env` and set your MongoDB connection string,
Gemini API key, and a long random JWT secret there. Keep `server/.env` private;
it is ignored by Git. Do not paste API keys into chat or commit them.

6. Configure the deployed frontend

The root `vercel.json` installs and builds the frontend from `client`. In the
Vercel project settings, add the environment variable `VITE_API_URL` with the
public URL of your deployed backend, for example
`https://your-backend.onrender.com` (do not add `/api`). Redeploy after setting
the variable so it is included in the frontend build. The local frontend defaults
to `http://localhost:5000`; a missing production URL is reported as a
configuration error instead of sending requests to the visitor's computer.

7. Run the application

Start the backend from the `server` folder with `npm run dev`, then start the
frontend from the `client` folder with `npm run dev`. By default, the backend is
available at `http://localhost:5000` and the frontend at `http://localhost:5173`.

Never upload your actual `.env` file or API keys to GitHub.

🎯 Project Objective

The main objective is to make career guidance more accessible, personalized and data-driven through Artificial Intelligence.

The platform aims to help students make informed career decisions and develop the skills required for their desired professions.

👨‍💻 Developer

The-solo-man

GitHub: https://github.com/The-solo-man

📌 Future Enhancements

- More career datasets and learning resources.
- Advanced AI career recommendations.
- Additional external learning platform integrations.
- Improved career analytics and reporting.
- Enhanced AI agent capabilities.

---

AI Career Guidance System — Discover Your Skills. Explore Your Future.
