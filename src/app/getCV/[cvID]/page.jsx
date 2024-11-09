"use client"
import { useEffect, useState } from 'react'
import { useParams  , useRouter} from 'next/navigation';
import { LinkedinIcon, MailIcon, PhoneIcon, BriefcaseIcon, GraduationCapIcon, WrenchIcon, FolderIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import axios from "axios"



export default function CvPage() {
  const params=useParams();
   const[cvData , setcvData]=useState()
  // const [isSkillsOpen, setIsSkillsOpen] = useState(true)
  // const [isWorkExperienceOpen, setIsWorkExperienceOpen] = useState(true)
  const [isProjectsOpen, setIsProjectsOpen] = useState(true)

  const router = useRouter();
  const { query } = router;
  console.log(query)



const  cvId  =  params.cvID;
console.log("cvId",cvId)

  
useEffect(() => {
  const handleResponse = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/getCV/${cvId}`);
     
      console.log(response.data);
      setcvData(response.data);
    } catch (error) {
      console.log("Error in fetching cvData", error);
    }
  };

  handleResponse(); 
}, [cvId]);

if (!cvData) {
  return <div>Loading...</div>;
}

  return (
    // <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800">
    //   {/* Header Section */}
    //   <Card>
    //   <header className="text-center mb-8">
    //     <h1 className="text-4xl font-bold text-primary mb-2">JOHN DOE</h1>
    //     <div className="flex justify-center items-center space-x-4 text-sm text-muted-foreground">
    //       <Link href={"https://www.linkedin.com/in/neha5055/"} className="flex items-center hover:text-primary transition-colors">
    //         <LinkedinIcon className="w-4 h-4 mr-1" />
    //         <span>LinkedIn</span>
    //       </Link>
    //       <Link href={`mailto:${cvData.email}`} className="flex items-center hover:text-primary transition-colors">
    //         <MailIcon className="w-4 h-4 mr-1" />
    //         <span>{cvData.email}</span>
    //       </Link>
    //       <span className="flex items-center">
    //         <PhoneIcon className="w-4 h-4 mr-1" />
    //         <span>{cvData.phone}</span>
    //       </span>
    //     </div>
    //   </header>

    //   {/* Skills Section */}
    //   {cvData.skills && cvData.skills.length > 0 && (
    //     <Collapsible
    //       open={isSkillsOpen}
    //       onOpenChange={setIsSkillsOpen}
    //       className="mb-8"
    //     >
          
    //         <CardHeader>
    //           <CollapsibleTrigger asChild>
    //             <Button variant="ghost" className="w-full flex justify-between items-center">
    //               <CardTitle className="flex items-center text-2xl font-semibold text-primary">
    //                 <WrenchIcon className="w-6 h-6 mr-2" />
    //                 Skills
    //               </CardTitle>
    //               <span>{isSkillsOpen ? '−' : '+'}</span>
    //             </Button>
    //           </CollapsibleTrigger>
    //         </CardHeader>
    //         <CollapsibleContent>
    //           <CardContent>
    //             <div className="flex flex-wrap gap-2">
    //               {cvData.skills.map((skill, index) => (
    //                 <Badge key={index} variant="secondary">{skill}</Badge>
    //               ))}
    //             </div>
    //           </CardContent>
    //         </CollapsibleContent>
          
    //     </Collapsible>
    //   )}

    //   {/* Work Experience Section */}
    //   {/* {hasWorkExperience && (
    //     <Collapsible
    //       open={isWorkExperienceOpen}
    //       onOpenChange={setIsWorkExperienceOpen}
    //       className="mb-8"
    //     >
         
    //         <CardHeader>
    //           <CollapsibleTrigger asChild>
    //             <Button variant="ghost" className="w-full flex justify-between items-center">
    //               <CardTitle className="flex items-center text-2xl font-semibold text-primary">
    //                 <BriefcaseIcon className="w-6 h-6 mr-2" />
    //                 Work Experience
    //               </CardTitle>
    //               <span>{isWorkExperienceOpen ? '−' : '+'}</span>
    //             </Button>
    //           </CollapsibleTrigger>
    //         </CardHeader>
    //         <CollapsibleContent>
    //           <CardContent>
    //             <div className="space-y-6">
    //               {cvData.workExperience.map((job, index) => (
    //                 <div key={index} className="bg-muted p-4 rounded-lg">
    //                   <div className="flex flex-col md:flex-row justify-between items-start mb-2">
    //                     <div>
    //                       <h3 className="text-lg font-semibold">{job.title}</h3>
    //                       <p className="text-sm text-muted-foreground">{job.company}</p>
    //                     </div>
    //                     <div className="text-sm text-muted-foreground mt-1 md:mt-0 md:text-right">
    //                       <p>{job.location}</p>
    //                       <p>{job.dateRange}</p>
    //                     </div>
    //                   </div>
    //                   <ul className="list-disc list-inside text-sm space-y-1">
    //                     {job.responsibilities.map((resp, idx) => (
    //                       <li key={idx}>{resp}</li>
    //                     ))}
    //                   </ul>
    //                 </div>
    //               ))}
    //             </div>
    //           </CardContent>
    //         </CollapsibleContent>
          
    //     </Collapsible>
    //   )} */}

    //   {/* Projects Section */}
    //   {(!hasWorkExperience || hasProjects) && (
    //     <Collapsible
    //       open={isProjectsOpen}
    //       onOpenChange={setIsProjectsOpen}
    //       className="mb-8"
    //     >
         
    //         <CardHeader>
    //           <CollapsibleTrigger asChild>
    //             <Button variant="ghost" className="w-full flex justify-between items-center">
    //               <CardTitle className="flex items-center text-2xl font-semibold text-primary">
    //                 <FolderIcon className="w-6 h-6 mr-2" />
    //                 Projects
    //               </CardTitle>
    //               <span>{isProjectsOpen ? '−' : '+'}</span>
    //             </Button>
    //           </CollapsibleTrigger>
    //         </CardHeader>
    //         <CollapsibleContent>
    //           <CardContent>
    //             <div className="space-y-6">
    //               {cvData.projects.map((project, index) => (
    //                 <div key={index} className="bg-muted p-4 rounded-lg">
    //                   <div className="flex justify-between items-start mb-2">
    //                     <h3 className="text-lg font-semibold">{project.title}</h3>
    //                     <p className="text-sm text-muted-foreground">{project.date}</p>
    //                   </div>
    //                   <ul className="list-disc list-inside text-sm space-y-1">
    //                     {project.description.map((desc, idx) => (
    //                       <li key={idx}>{desc}</li>
    //                     ))}
    //                   </ul>
    //                 </div>
    //               ))}
    //             </div>
    //           </CardContent>
    //         </CollapsibleContent>
         
    //     </Collapsible>
    //   )}

    //   {/* Education Section */}
    
    //     <CardHeader>
    //       <CardTitle className="flex items-center text-2xl font-semibold text-primary">
    //         <GraduationCapIcon className="w-6 h-6 mr-2" />
    //         Education
    //       </CardTitle>
    //     </CardHeader>
    //     <CardContent>
    //       {cvData.education.map((edu, index) => (
    //         <div key={index} className="bg-muted p-4 rounded-lg mb-4 last:mb-0">
    //           <div className="flex flex-col md:flex-row justify-between items-start mb-2">
    //             <div>
    //               <h3 className="text-lg font-semibold">{edu.degree}</h3>
    //               <p className="text-sm text-muted-foreground">{edu.institution}</p>
    //             </div>
    //             <div className="text-sm text-muted-foreground mt-1 md:mt-0 md:text-right">
    //               <p>{edu.location}</p>
    //               <p>{edu.dateRange}</p>
    //             </div>
    //           </div>
    //           <p className="text-sm">{edu.details}</p>
    //           <p className="text-sm mt-1"><span className="font-semibold">Key Modules:</span> {edu.modules}</p>
    //         </div>
    //       ))}
    //     </CardContent>
    
    //   </Card>
    // </div>


    <div>
      {cvData.message}
    </div>
  )
}