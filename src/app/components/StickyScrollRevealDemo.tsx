// "use client";
// import React from "react";
// import { StickyScroll } from "./ui/sticky-scroll-reveal";

// const content = [
//   {
//     title: "Collaborative Editing",
//     description:
//       "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
//     content: (
//       <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
//         Collaborative Editing
//       </div>
//     ),
//   },
//   {
//     title: "Real time changes",
//     description:
//       "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
//     content: (
//       <div className="flex h-full w-full items-center justify-center text-white">
//         <img
//           src="/linear.webp"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
//   {
//     title: "Version control",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
//         Version control
//       </div>
//     ),
//   },
//   {
//     title: "Running out of content",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
//         Running out of content
//       </div>
//     ),
//   },
// ];

// export function StickyScrollRevealDemo() {
//   return (
//     <div className="w-full py-4 bg-[#0B0D10]">
//       {/* Set the background of the StickyScroll section to the same color */}
//       <StickyScroll content={content} />
//     </div>
//   );
// }



"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

// Make sure to export the component
export function StickyScrollRevealDemo() {
  const content = [
    {
      title: "LearnYard DSA Course",
      description:
        "Certified for successful completion of the 100% Job Ready DSA Course by LearnYard, demonstrating strong foundations in Data Structures and Algorithms essential for technical interviews and real-world problem solving.",
      content: (
        <div className="flex h-48 w-full items-center justify-center bg-gray-700">
          <img
            src="/assets/certificates/webdev.png"
            alt="Web Development Certificate"
            className="w-full object-cover rounded-md"
          />
        </div>
      ),
    },
    {
      title: "IBM DevOps and Software Engineering (Coursera)",
      description:
        "Earned IBM's Professional Certificate for mastering DevOps and Cloud Engineering tools like Docker, Kubernetes, GitHub, and CI/CD pipelines. Built hands-on experience in Agile, Linux scripting, and microservices development.",
      content: (
        <div className="flex h-48 w-full items-center justify-center bg-gray-700">
          <img
            src="/assets/certificates/react.png"
            alt="React Certificate"
            className="w-full object-cover rounded-md"
          />
        </div>
      ),
    },
    {
      title: "Hack-a-Throne 1.0 - GeeksforGeeks",
      description:
        "Successfully completed the Hack-a-Throne 1.0 hackathon organized by AIESEC in Jalandhar in collaboration with GeeksforGeeks. Demonstrated strong coding skills, problem-solving ability, and innovation under time constraints in a real-world tech challenge.",
      content: (
        <div className="flex h-48 w-full items-center justify-center bg-gray-700">
          <img
            src="/assets/certificates/aws.png"
            alt="AWS Certificate"
            className="w-full object-cover rounded-md"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
