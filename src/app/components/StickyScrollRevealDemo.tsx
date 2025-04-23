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
import { motion } from "framer-motion";

type StickyScrollItem = {
  title: string;
  description: string;
  content: React.ReactNode;
};

type StickyScrollProps = {
  content: StickyScrollItem[];
};

export const StickyScroll: React.FC<StickyScrollProps> = ({ content }) => {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-4">
      {content.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="sticky top-4 z-10 bg-black p-6 rounded-lg shadow-lg border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-2">{item.title}</h2>
            <p className="text-gray-300 mb-4">{item.description}</p>
            {item.content}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
