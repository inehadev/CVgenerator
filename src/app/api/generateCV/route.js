const Groq = require("groq-sdk");
const { OpenAI } = require("openai");
import { NextResponse } from "next/server";
const dbConnect = require("../../../lib/db");
const CV = require("../../models/cvModel");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

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
//     messages = [
//       {
//         role: "system",
//         content: `You are an AI assistant designed to craft professional CV summaries of  from user-provided details. Your goal is to generate a concise, engaging, and polished summary that emphasizes the individual’s key qualifications, significant achievements, and core competencies.
// Based on the information below, create a CV summary that is suitable for a professional resume. If the user has no work experience, focus on highlighting relevant projects that showcase their skills and expertise`,
//       },
//       {
//         role: "user",
//         content: `you have to create a well written cv for the given user details`,
//       },
//       {
//         role: "assistant",
//         content: `okhay understood , can you provide me the user detail`,
//       },
//       {
//         role: "user",
//         content: `Here is the user detail:
      
//                     Details:
//                     - Full Name: ${fullname}
//                     - Job Title and/or Professional Designation: ${jobTitle}
//                     - Email: ${email}
//                     - Phone Number: ${phoneNo}
//                     - Location: ${location || "Not Provided"}
//                     - LinkedIn: ${linkedIn || "Not Provided"}
//                     - Key Skills and Areas of Expertise: ${skills}
//                     - Education: ${education}
//                     - Work Experience: ${workExperience}
//                     - Projects: ${projects}
//                     - Achievements: ${achievements}
//                     -courseName : ${courseName}
//                     - educationStartDate:${educationStartDate}
//                     - educationEndDate:${educationEndDate}
//                     - employer:${employer}
//                     - jobSummary:${jobSummary}
//                     - workStartDate:${workStartDate}
//                     - workEndDate:${workEndDate}
//                     - projectTitle:${projectTitle}
//                     - projectSummary:${projectSummary}
//                     - projectStartDate:${projectStartDate}
//                     - projectEndDat:${projectEndDat}
//                 `,
//       },
//       {
//         role: "assistant",
//         content: `I have understand the client detail , how do you want me to enhance the user details`,
//       },
//       {
//         role: "user",
//         content: `
//                    Please format the user’s details into the following sections with the provided guidelines:

//                   Please format the user’s details into a well-structured and professional CV, enhancing the input by adding relevant content where applicable, and ensuring it reads like a polished resume. The CV should be broken down into the following sections:

//                    - **Summary**: Craft a concise yet impactful professional summary of the candidate. Highlight their key strengths, core competencies, career goals, and significant achievements. This section should provide a snapshot of the candidate's professional journey, showcasing what they bring to the table. Make sure it’s about 50-60 words, emphasizing their most valuable skills and professional focus.
                   
//                    - **Personal Info**: Present essential personal details in a clean, easy-to-read format. Include:
//                      - **Full Name**: The candidate's complete name.
//                      - **Contact Information**: Include email and phone number for easy contact.
//                      - **LinkedIn Profile**: If available, provide the LinkedIn URL.
//                      - **Location**: City or country of residence (if available). If not, mention "Not Provided."
                   
//                    - **Skills**: Present a bulleted list of the candidate's most valuable skills. These should be a blend of **hard skills** (e.g., technical expertise, programming languages) and **soft skills** (e.g., leadership, communication). Include the following enhancements:
//                      - **Highlight the most marketable skills** based on the candidate’s experience and industry.
//                      - **Provide examples or context** where these skills were applied to drive success (e.g., "Proficient in React and Node.js, used to develop scalable web applications").
                   
//                    - **Work Experience**: If the candidate has relevant work experience, break it down by each role. For each job, include:
//                      - **Position Title**: Clearly specify the job title.
//                      - **Company Name**: The employer's name.
//                      - **Dates of Employment**: The duration of employment (start and end dates).
//                      - **Key Responsibilities and Achievements**: Highlight the candidate’s major responsibilities, specific contributions, and key accomplishments in bullet points. Use strong action verbs and quantifiable results (e.g., “Led a team of 5 engineers, driving a 30% increase in app performance”).
                   
//                    - **Projects**: If the candidate lacks formal work experience, focus on projects. For each project, include:
//                      - **Project Title**: The title or name of the project.
//                      - **Dates**: The duration of the project (start and end dates).
//                      - **Key Technologies Used**: Highlight the tech stack or methodologies used.
//                      - **Key Achievements and Results**: Describe the results, challenges overcome, and skills demonstrated. This could include measurable outcomes, such as user engagement or project completion rates. (e.g., “Developed a full-stack web application using React and Node.js, which gained over 1,000 active users within the first 3 months”).
                   
//                    - **Achievements**: Showcase the candidate’s notable accomplishments outside of work and projects. This could include:
//                      - **Awards**: Any recognition received (e.g., “Employee of the Month,” “Top Sales Performer”).
//                      - **Certifications**: Any relevant certifications or training.
//                      - **Special Accomplishments**: Include any special accomplishments that differentiate the candidate from others (e.g., “Completed a 6-month UX design course with distinction”).
//                      - **Additional Context**: Add any other notable achievements or volunteer work that add value to the candidate’s profile (e.g., “Organized a charity event that raised $10,000 for a local cause”).
                   
//                    Ensure the output is well-organized, visually appealing, and includes inline CSS to improve readability. Each section should be clearly defined with proper headings. The content should be written in a professional and polished manner, enhancing the input where necessary to create a compelling CV.


//                    Ensure that each section is well-structured and clear, with appropriate use of headings, bullet points, and concise content.

//                     Please ensure the content is professional and ready to be used in a CV.`,
//       },
//     ];

//     const response = await openai.chat.completions.create({
//       messages: messages,
//       model: "gpt-3.5-turbo",
//     });

//     const cvSummary =
//       response.choices?.[0]?.message?.content || "No message generated";

//     const htmlConverterMessageArray = [
//       {
//         role: "system",
//         content: `You are an AI assistant specialized in converting user-provided details into a professional CV format using HTML. Your task is to generate a well-structured and visually appealing CV in HTML format, incorporating the user's information into predefined sections such as personal details, skills, work experience, education, and projects. Ensure the HTML is clean, accessible, and properly formatted with appropriate headings, lists, and tables.

// Based on the details below, create a CV that includes the following sections:

// Personal Information: Full name, email, phone number, etc.
// Skills: Key technical and soft skills.
// Work Experience: Job titles, company names, and job descriptions.
// Education: Degrees, institutions, and dates.
// Projects: Relevant projects with descriptions and technologies used.
// Ensure the HTML is well-structured, with clear sections, and include inline CSS to ensure readability and presentation.`,
//       },
//       {
//         role: "user",
//         content: `Here is the user cv details ${cvSummary}`,
//       },
//       {
//         role: "assistant",
//         content:
//           "I understood the user cv details , now i will start generating rhe cv formatted html output , any more information do you want me to consider",
//       },
//       {
//         role: "user",
//         content:
//           "Make sure to user purely html format into cv format and make sure it should eye apealing to the user , for styling you can use inline css you can use divider for the header , workexperience  , project or skilll section , you can highlight the title of workexperience ,skills or education and make sure the ui will clean use gray background and poppins font, And Make sure don't try to add any inital like ```html , dont add ```html in ending too ",
//       },
//     ];

//     const htmlFormattedOutput = await openai.chat.completions.create({
//       messages: htmlConverterMessageArray,
//       model: "gpt-3.5-turbo",
//     });

//     console.log(htmlConverterMessageArray);

//     console.log(htmlFormattedOutput);
//     const formattedOutput = htmlFormattedOutput.choices?.[0]?.message?.content;
//     console.log(formattedOutput, ">>>>>>>.this is formatted oytput");

//     return NextResponse.json({ message: formattedOutput });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
