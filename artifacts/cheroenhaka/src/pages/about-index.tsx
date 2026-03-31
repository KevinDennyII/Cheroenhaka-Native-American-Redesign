import React from "react";
import { Link } from "wouter";

const aboutLinks = [
  { name: "Thrahunta Tribal Newsletter", path: "/about-us/tribal-newsletter" },
  { name: "Heritage Foundation 501(c)(3)", path: "/about-us/heritage-foundation" },
  { name: "Cattashowrock Town", path: "/about-us/cattashowrock-town" },
  { name: "Resolution & Goals", path: "/about-us/resolution-goals" },
  { name: "Tribal Shield & Heraldry", path: "/about-us/tribal-shield" },
  { name: "Ethno-Historic Snapshot", path: "/about-us/ethno-historic-snapshot" },
  { name: "Constitution & Bylaws", path: "/about-us/constitution-bylaws" },
  { name: "Our Language (Dar-sun-ke)", path: "/about-us/language" },
  { name: "Chief Edith Turner, 1808", path: "/about-us/edith-turner" },
  { name: "Return of Natives, Pt. 1", path: "/about-us/return-of-natives-1" },
  { name: "Return of Natives, Pt. 2", path: "/about-us/return-of-natives-2" },
  { name: "1808 Cheroenhaka Census", path: "/about-us/census-1808" },
];

export default function AboutIndex() {
  return (
    <div className="w-full p-6 md:p-12">
      <h1 className="text-4xl text-primary font-serif font-bold border-b-4 border-secondary pb-4 mb-8">
        About the Cheroenhaka (Nottoway) Indian Tribe
      </h1>
      
      <div className="prose prose-lg prose-slate mb-10 max-w-none">
        <p className="lead text-xl">
          We are the Cheroenhaka (Nottoway) Indian Tribe of Southampton County, Virginia. Our history is deeply rooted in this land, stretching back thousands of years.
        </p>
        <p>
          We are a proud people who are actively preserving our culture, our Iroquoian language ("Dar-sun-ke"), and our history. Explore the links below to learn more about our heritage, our governance, and our story.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aboutLinks.map((link) => (
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