import React from "react";

export default function CattashowrockTown() {
  return (
    <div className="w-full flex flex-col p-6 md:p-12">
      <h1 className="text-4xl text-primary font-serif font-bold border-b-4 border-secondary pb-4 mb-8">
        Cattashowrock Town
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="prose prose-slate prose-lg">
          <h2 className="text-secondary mt-0">17th Century Replica Village</h2>
          <p className="font-semibold text-xl text-foreground">
            Visit Cattashowrock Town, a 17th Century replica Native American Palisade Village.
          </p>
          <p>
            As identified by William Byrd II of Westover upon his visit to what is now Southampton County, Virginia on April 7th & 8th, 1728, our village offers a vibrant glimpse into the historic life and culture of the Cheroenhaka (Nottoway) Indian Tribe.
          </p>
          
          <div className="bg-muted p-6 rounded-lg my-6 border-l-4 border-accent">
            <h3 className="text-primary font-serif m-0 mb-2">Location</h3>
            <p className="m-0">
              27345 Aquia Path<br />
              Courtland, VA 23837
            </p>
            <p className="text-sm mt-3 mb-0">Located on 263 acres of our historic tribal land.</p>
          </div>

          <h3 className="text-primary">What You Will Experience:</h3>
          <ul className="list-disc pl-5 marker:text-secondary space-y-2">
            <li>Native American Dancing, Drumming and Singing</li>
            <li>Aztec Dancers</li>
            <li>Cheroenhaka (Nottoway) Indian History Booth</li>
            <li>Native Artifacts with ASV dating back to 10,000 BC</li>
            <li>Native American Arts & Craft and Jewelry Vendors</li>
            <li>Native Cuisine: Indian Taco, Fry Bread, Fish & Chips, Corn Soup, Funnel Cake</li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <img 
            src="/images/Cattashowrock-about2-977x1024.jpg" 
            alt="Cattashowrock Town View 1" 
            className="w-full rounded-md shadow-md border-2 border-border"
          />
          <img 
            src="/images/Cattashowrock2.jpg" 
            alt="Cattashowrock Town View 2" 
            className="w-full rounded-md shadow-md border-2 border-border"
          />
        </div>
      </div>
    </div>
  );
}