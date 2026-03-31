import React from "react";
import { Link } from "wouter";

const recognitionLinks = [
  { name: "US Congress H.R.9630 Bill", path: "/recognition/hr9630" },
  { name: "VA Senate Resolution", path: "/recognition/senate-resolution" },
  { name: "Anthropologist Letter", path: "/recognition/anthropologist-letter" },
  { name: "Recognition Delayed Article", path: "/recognition/recognition-delayed" },
  { name: "Beaver Creek Support Letter", path: "/recognition/beaver-creek-support" },
  { name: "How to Show Support", path: "/recognition/how-to-support" },
];

export default function RecognitionIndex() {
  return (
    <div className="w-full p-6 md:p-12">
      <h1 className="text-4xl text-primary font-serif font-bold border-b-4 border-secondary pb-4 mb-8">
        State & Federal Recognition
      </h1>
      
      <div className="prose prose-lg prose-slate mb-10 max-w-none">
        <p className="lead text-xl font-bold text-secondary">
          The Struggle for Official Acknowledgement
        </p>
        <p>
          The Cheroenhaka (Nottoway) Indian Tribe was officially granted State Recognition by the Commonwealth of Virginia through Senate Resolution SH127 and House Resolution HJ171. We are incredibly proud of this milestone, but our journey continues as we seek Federal Recognition.
        </p>
        
        <div className="bg-muted p-6 border-l-4 border-primary rounded my-6">
          <h3 className="mt-0 text-primary">Current Federal Effort: H.R.9630</h3>
          <p className="mb-0">
            H.R.9630 was introduced on September 17, 2024 by Representative Kiggans of Virginia. This vital piece of legislation seeks to extend federal recognition to the Cheroenhaka (Nottoway) Indian Tribe.
          </p>
        </div>

        <h3 className="text-secondary">Historical Context & Challenges</h3>
        <p>
          We are a documented people. Our tribe has over 300 tribal citizens with extensive genealogical documentation proving our lineage. We maintain 263 acres of tribal land—a fraction of the original 41,000 acres granted to us by the Virginia House of Burgesses in 1705.
        </p>
        <p>
          Federal recognition has been made extraordinarily difficult due to the Virginia Racial Integrity Act of 1924, an administrative erasure orchestrated by Walter Plecker, which forcibly reclassified American Indians as "colored" or "mulatto" on vital records, deliberately attempting to wipe our existence from official state memory.
        </p>
      </div>
      
      <h2 className="text-2xl font-serif font-bold text-primary mb-6">Recognition Resources & Documents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recognitionLinks.map((link) => (
          <Link 
            key={link.path} 
            href={link.path}
            className="flex flex-col justify-center p-6 bg-card border border-border rounded-lg shadow-sm hover:border-secondary hover:shadow-md transition-all group"
          >
            <span className="font-serif font-bold text-primary group-hover:text-secondary text-lg">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}