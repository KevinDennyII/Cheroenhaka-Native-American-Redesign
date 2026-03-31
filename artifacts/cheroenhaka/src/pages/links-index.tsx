import React from "react";
import { Link } from "wouter";

const linkCategories = [
  { name: "Educational Links", path: "/links/educational" },
  { name: "Funding Links", path: "/links/funding" },
  { name: "Genealogy Links", path: "/links/genealogy" },
  { name: "Health Resources", path: "/links/health" },
  { name: "Political Issues Links", path: "/links/political" },
  { name: "Social Services Links", path: "/links/social-services" },
  { name: "Tribes & Events Links", path: "/links/tribes-events" },
  { name: "Other Resources", path: "/links/other" },
];

export default function LinksIndex() {
  return (
    <div className="w-full p-6 md:p-12">
      <h1 className="text-4xl text-primary font-serif font-bold border-b-4 border-secondary pb-4 mb-8">
        Native American Resources & Links
      </h1>
      
      <div className="prose prose-lg prose-slate mb-10 max-w-none">
        <p>
          We have compiled a directory of resources covering educational opportunities, health services, genealogical research, and inter-tribal events. Please explore the categories below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {linkCategories.map((link) => (
          <Link 
            key={link.path} 
            href={link.path}
            className="flex items-center p-6 bg-card border-2 border-border rounded-lg shadow-sm hover:border-accent hover:shadow-md hover:-translate-y-1 transition-all group"
          >
            <span className="font-serif font-bold text-primary group-hover:text-secondary text-lg">
              {link.name}
            </span>
            <span className="ml-auto text-accent opacity-0 group-hover:opacity-100 transition-opacity">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}