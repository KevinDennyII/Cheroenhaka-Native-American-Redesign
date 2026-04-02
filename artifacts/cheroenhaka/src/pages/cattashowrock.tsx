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
          </div>

          <p>Relive the history, cultural, and traditions of the Iroquoian speaking Cheroenhaka (Nottoway) Indians of Southampton County VA with Chief Red Hawk.</p>
          
          <h3 className="text-primary">Experience the Culture</h3>
          <ul className="list-disc pl-5 marker:text-secondary space-y-2">
            <li>Enjoy Native American Dancing, Drumming and Singing. A maze of color in Native American Dance Regalia.</li>
            <li>Special Guest the Aztec Dancers.</li>
            <li>Visit the Cheroenhaka (Nottoway) Indian History Booth and learn to speak our Iroquoian Language as recorded by John Wood in 1820.</li>
            <li>View Native Artifacts with ASV, Nansemond Chapter, dating back to 10,000 BC.</li>
            <li>Visit our Native American Arts & Craft and Jewel Vendors.</li>
            <li>Enjoy the taste of Native Cuisine Indian Taco, Fry Bread, Fish & Chips, Corn Soup, Funnel Cake and more.</li>
          </ul>

          <h3 className="text-primary">Explore the Village</h3>
          <p>Visit Cattashowrock Town, a 17th Century replica Native American Palisade Village, as identified by William Byrd, II of Westover upon his visits to what is now Southampton County on April 7th & 8th, 1728.</p>
          <p>Walk the interpretative trails guided by signage in our Iroquoian language and in English identifying Native Flora and Fauna indigenous to the area.</p>

          <h3 className="text-primary">Learn More</h3>
          <ul className="list-disc pl-5 marker:text-secondary space-y-2">
            <li>263 Tribal Land</li>
            <li>100 Acre Site Plan</li>
            <li>Tree of Peace</li>
            <li>Tribal Clans</li>
            <li>A walk on Tribal Land</li>
            <li>Cattashowrock Town Donation Brochure</li>
            <li>Grand Opening Of Cattashowrock Town November 16th & 17th 2012</li>
            <li>Cheroenhaka (Nottoway) Indian Tribe Inter-Tribal “Corn Dance Spring Festival” Powwow May 5th 6th 2013</li>
            <li>13th Annual Cheroenhaka Nottoway Indian Inter-Tribal Green Corn Dance Powwow </li>
            <li>Mortgage Burning Ceremony July 27 2013</li>
            <li>2015 Tribal Post Card</li>
            <li>Long Leaf Pine Planting</li>
            <li>20,000 Long Leaf Pines Fulfill Vision Of “Red Hawk”</li>
            <li>Cheroenhaka (Nottoway) Indian Culture Center Museum</li>
            <li>Cheroenhaka (Nottoway) Indian Tribe Culture Center/ Museum And Wellness Center Non-Denominational Worship Center Site Plan</li>
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