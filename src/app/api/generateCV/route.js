const Groq = require("groq-sdk");
const { OpenAI } = require("openai");
import { NextResponse } from "next/server";
const dbConnect = require("../../../lib/db");
const CV = require("../../models/cvModel");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
// const openai = new OpenAI({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req, res) {
  const body = await req.json();

  console.log("body", body);

  try {
    // await dbConnect();

    const {
      fullname,
      email,
      phoneNo,
      skills,
      jobTitle,
      location,
      linkedIn,
      courseName,
      educationStartDate,
      educationEndDate,
      employer,
      jobSummary,
      workStartDate,
      workEndDate,
      projectTitle,
      projectSummary,
      projectStartDate,
      projectEndDat,
      achievements,
      education,
      workExperience,
      projects,
    } = body;

    // let messages = [];

    const messages = [
      {
        role: "system",
        content: `You are an AI assistant specialized in generating professional CVs in HTML format. Please generate a visually appealing, structured CV directly in HTML using the provided user details. Format the content with inline CSS to make it readable, with a gray background, Poppins font, and clear section dividers. Use a clean layout with headings for each section, and style each section to be well-organized and easy to read.`,
      },
      {
        role: "user",
        content: `Here are the user details:
          - **Full Name**: ${fullname}
          - **Job Title**: ${jobTitle}
          - **Email**: ${email}
          - **Phone Number**: ${phoneNo}
          - **Location**: ${location || "Not Provided"}
          - **LinkedIn**: ${linkedIn || "Not Provided"}
          - **Skills**: ${skills}
          - **Education**: ${education}
          - **Work Experience**: ${workExperience}
          - **Projects**: ${projects}
          - **Achievements**: ${achievements}
          - **Course Name**: ${courseName}
          - **Education Dates**: ${educationStartDate} to ${educationEndDate}
          - **Employer**: ${employer}
          - **Job Summary**: ${jobSummary}
          - **Work Dates**: ${workStartDate} to ${workEndDate}
          - **Project Title**: ${projectTitle}
          - **Project Summary**: ${projectSummary}
          - **Project Dates**: ${projectStartDate} to ${projectEndDat}

          Please include these details in the following format:
          - **Summary**: A brief professional summary (50-60 words) summarizing key skills, career goals, and significant achievements.
          - **Personal Info**: Full name, email, phone number, LinkedIn, and location.
          - **Skills**: A bulleted list of key technical and soft skills.
          - **Work Experience**: For each job, include job title, company name, dates of employment, key responsibilities, and achievements.
          - **Projects**: List key projects with details on technologies used, challenges faced, and outcomes.
          - **Education**: Include course name, institution, and dates.
          - **Achievements**: Any awards, certifications, or special accomplishments.

          Ensure the HTML is properly structured with headings, lists, and tables as needed. Apply inline CSS for style, use Poppins font, gray background, and make section headers bold. Avoid any markdown or code block syntax (no \`\`\`).`,
      }
    ];

    const response = await openai.chat.completions.create({
      messages: messages,
      model: "gpt-3.5-turbo",
    });

    const formattedOutput = response.choices?.[0]?.message?.content || "No CV generated";

    return NextResponse.json({ message: formattedOutput });

  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
