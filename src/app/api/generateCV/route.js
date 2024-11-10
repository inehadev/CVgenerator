const Groq = require("groq-sdk");
const { OpenAI } = require("openai");
import { NextResponse } from "next/server";
const dbConnect = require("../../../lib/db");
const CV = require("../../models/cvModel");


const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req, res) {

  console.log("Worked hetre")
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
  projects
    } = await req.json();


    console.log("data got");
    let messages = [];
    messages = [
      {
        role: "system",
        content: `You are an AI assistant designed to craft professional CV summaries of  from user-provided details. Your goal is to generate a concise, engaging, and polished summary that emphasizes the individual’s key qualifications, significant achievements, and core competencies.
Based on the information below, create a CV summary that is suitable for a professional resume. If the user has no work experience, focus on highlighting relevant projects that showcase their skills and expertise`,
      },
      {
        role: "user",
        content: `you have to create a well written cv for the given user details`,
      },
      {
        role: "assistant",
        content: `okhay understood , can you provide me the user detail`,
      },
      {
        role: "user",
        content: `Here is the user detail:
      
                    Details:
                    - Full Name: ${fullname}
                    - Job Title and/or Professional Designation: ${jobTitle}
                    - Email: ${email}
                    - Phone Number: ${phoneNo}
                    - Location: ${location || "Not Provided"}
                    - LinkedIn: ${linkedIn || "Not Provided"}
                    - Key Skills and Areas of Expertise: ${skills}
                    - Education: ${education}
                    - Work Experience: ${workExperience}
                    - Projects: ${projects}
                    - Achievements: ${achievements}
                    -courseName : ${courseName}
                    - educationStartDate:${educationStartDate}
                    - educationEndDate:${educationEndDate}
                    - employer:${employer}
                    - jobSummary:${jobSummary}
                    - workStartDate:${workStartDate}
                    - workEndDate:${workEndDate}
                    - projectTitle:${projectTitle}
                    - projectSummary:${projectSummary}
                    - projectStartDate:${projectStartDate}
                    - projectEndDat:${projectEndDat}
                `,
      },
      {
        role: "assistant",
        content: `I have understand the client detail , how do you want me to enhance the user details`,
      },
      {
        role: "user",
        content: `
                    Please format the output into the following sections with suitable content for each:
                    
                    - **Summary**: A brief, impactful paragraph that introduces the candidate, highlighting key strengths, objectives, and professional focus. Ensure this summary is around 50-60 words and conveys professionalism.
                    
                    - **Skills**: A bullet-point list of the candidate’s key skills, using phrases that present these as strengths relevant in a professional setting. Each skill should appear as a single bullet point and 15 words fort he skills.
                    
                    - **Work Experience** (if available): For each job, include:
                        - Position Title: Company Name, Date Range
                        - Bullet points for each role’s key accomplishments, specific contributions, and measurable results (e.g., "Led a team of 5 to increase revenue by 20% over six months").
                        - Limit work experience to the last 3 roles if possible.
                    
                    - **Projects** (if no work experience is available): List notable projects with:
                        - Project Title: Date Range
                        - Bullet points for each project that highlight relevant skills, achievements,  or technologies used (e.g., "Developed a full-stack web application using React and Node.js, reaching over 1,000 active users within 3 months") and enhance project with 20 to 30 words.
                    Please ensure the content is professional and ready to be used in a CV.`,
      },
    ];

    const response = await openai.chat.completions.create({
      messages: messages,
      model: "gpt-3.5-turbo",
    });

    const cvSummary =
      response.choices?.[0]?.message?.content || "No message generated";

    const htmlConverterMessageArray = [
      {
        role: "system",
        content: `You are an AI assistant specialized in converting user-provided details into a professional CV format using HTML. Your task is to generate a well-structured and visually appealing CV in HTML format, incorporating the user's information into predefined sections such as personal details, skills, work experience, education, and projects. Ensure the HTML is clean, accessible, and properly formatted with appropriate headings, lists, and tables.

Based on the details below, create a CV that includes the following sections:

Personal Information: Full name, email, phone number, etc.
Skills: Key technical and soft skills.
Work Experience: Job titles, company names, and job descriptions.
Education: Degrees, institutions, and dates.
Projects: Relevant projects with descriptions and technologies used.
Ensure the HTML is well-structured, with clear sections, and include inline CSS to ensure readability and presentation.`,
      },
      {
        role: "user",
        content: `Here is the user cv details ${cvSummary}`,
      },
      {
        role: "assistant",
        content:
          "I understood the user cv details , now i will start generating rhe cv formatted html output , any more information do you want me to consider",
      },
      {
        role: "user",
        content:
          "Make sure to user purely html format into cv format and make sure it should eye apealing to the user , for styling you can use inline css you can use divider for the header , workexperience  , project or skilll section , you can highlight the title of workexperience ,skills or education and make sure the ui will clean use gray background and poppins font, And Make sure don't try to add any inital like ```html , dont add ```html in ending too ",
      },
    ];

  

    const htmlFormattedOutput = await openai.chat.completions.create({
      messages: htmlConverterMessageArray,
      model: "gpt-3.5-turbo",
    });

    console.log(htmlConverterMessageArray);

    console.log(htmlFormattedOutput);
    const formattedOutput = htmlFormattedOutput.choices?.[0]?.message?.content;
    console.log(formattedOutput, ">>>>>>>.this is formatted oytput");

    


    return NextResponse.json({ message: formattedOutput });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
