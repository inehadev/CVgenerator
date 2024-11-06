const Groq = require("groq-sdk");
import { NextResponse } from 'next/server';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });


export  async function  POST(req, res)  {
    try {
        
   
  const { name, jobTitle, skills, workExperience, projects } = await req.json();
  let messages = [];

  messages = [
    {
      role: "system",
      content: `  You are an AI assistant specialized in creating professional CV summaries based on user input. Your task is to generate a polished, engaging, and concise CV summary that highlights the individual’s most valuable qualifications, key achievements, and core competencies.
                     Based on the details provided below, craft a CV summary suitable for a professional resume. If the user has no work experience, focus instead on notable projects that demonstrate relevant skills and knowledge.
                     Details:
                  - Full Name: ${name}
                  - Job Title and/or Professional Designation: ${jobTitle}
                  - Key Skills and Areas of Expertise: ${skills} (present these as valuable strengths in a professional setting)
                  - Work Experience: ${
                    workExperience ? workExperience : "N/A"
                  } (if unavailable, ask for notable ${projects} that highlight relevant skills and achievements)
                
                  If work experience is provided, summarize to showcase specific accomplishments, roles, and measurable results that demonstrate the individual’s impact and contributions in previous positions. If no work experience is available, instead highlight significant projects that demonstrate the individual’s expertise, problem-solving abilities, and commitment.
                 Please format the output into the following sections with suitable content for each:
                  
                  - **Summary**: A brief, impactful paragraph that introduces the candidate, highlighting key strengths, objectives, and professional focus. Ensure this summary is around 50-60 words and conveys professionalism.
                  
                  - **Skills**: A bullet-point list of the candidate’s key skills, using phrases that present these as strengths relevant in a professional setting. Each skill should appear as a single bullet point.
                  
                  - **Work Experience** (if available): For each job, include:
                    - **Position Title**: Company Name, Date Range
                    - Bullet points for each role’s key accomplishments, specific contributions, and measurable results (e.g., "Led a team of 5 to increase revenue by 20% over six months").
                    - Limit work experience to the last 3 roles if possible.
                  
                  - **Projects** (if no work experience is available): List notable projects with:
                    - **Project Title**: Date
                    - Bullet points for each project that highlight relevant skills, achievements, or technologies used (e.g., "Developed a full-stack web application using React and Node.js, reaching over 1,000 active users within 3 months").


                  Please use a tone that reflects professionalism, ambition, and reliability, as typically expected in high-quality CVs. Emphasize transferable skills, relevant achievements, and industry knowledge to present the candidate’s potential contributions to a future employer. `,
    },
  ];

  const response = await groq.chat.completions.create({
    messages: messages,
    model: "llama3-8b-8192",
  });

  const messageContent =
    response.choices?.[0]?.message?.content || "No message generated";
    return NextResponse.json({ message: messageContent });
} catch (error) {
  console.error(error);
  return NextResponse.error();
}
}


