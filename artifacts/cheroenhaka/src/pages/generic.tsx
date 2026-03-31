import React from "react";
import { Link } from "wouter";

interface GenericPageProps {
  section: string;
  slug: string;
}

// Simple lookup to generate a nice title from a slug
function formatTitle(slug: string): string {
  if (slug === "index" || slug === "bio") return "";
  
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function GenericPage({ section, slug }: GenericPageProps) {
  const specificTitle = formatTitle(slug);
  const pageTitle = specificTitle ? `${specificTitle}` : section;
  
  // Custom content injection based on known pages
  const renderContent = () => {
    // Heritage Foundation
    if (slug === "heritage-foundation") {
      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Cheroenhaka (Nottoway) Indian Heritage Foundation</h2>
          <p>The Heritage Foundation operates as a 501(c)(3) non-profit organization, effective June 13, 2005.</p>
          <p>Our mission is charitable, religious, and educational—dedicated to the preservation and teaching of our Iroquoian history, culture, and traditions.</p>
          <div className="bg-muted p-6 border-l-4 border-accent mt-6">
            <h3 className="m-0 text-primary">Mailing Address</h3>
            <p className="m-0 mt-2">P.O. Box 297<br/>Franklin, Virginia 23851</p>
          </div>
        </div>
      );
    }

    // Language
    if (slug === "language") {
      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Our Language: Dar-sun-ke (The Tongue)</h2>
          <p>Our language is Iroquoian. The historical vocabulary of our people was formally recorded in 1820 by John Wood, who transcribed it directly from our esteemed Chief, Edie Turner.</p>
          <p>The significance of our language was even noted by Thomas Jefferson, who recognized the distinct Iroquoian roots of our people living in Southeastern Virginia.</p>
          <div className="p-6 bg-sidebar text-sidebar-foreground rounded-lg mt-6 text-center italic text-xl font-serif">
            "Dar-sun-ke"
          </div>
        </div>
      );
    }

    // Shield
    if (slug === "tribal-shield") {
      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Tribal Shield & Heraldry</h2>
          <p className="text-sm text-muted-foreground uppercase tracking-wider">Library of Congress Copyright - VA 1-256-506</p>
          <p className="mt-4">Our tribal shield is rich with deep spiritual and cultural symbolism.</p>
          <ul>
            <li><strong>The Circle:</strong> Represents the Circle of Life, the eternal continuum of our people.</li>
            <li><strong>Tribal Colors:</strong> Red, White, and Blue. These colors reflect the historic regalia worn by our young women, who adorned themselves with blue and red match coats decorated with intricate blue and white beads.</li>
            <li><strong>Four Feathers:</strong> Represent the Four Directions (North, South, East, West) and the winds that guide us.</li>
          </ul>
        </div>
      );
    }

    // Constitution
    if (slug === "constitution-bylaws") {
      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Constitution & Bylaws</h2>
          <p><em>Approved December 7, 2002 | Revised January 14, 2006</em></p>
          
          <h3 className="text-primary">Article I: Name</h3>
          <p>The official name of our nation is the Cheroenhaka (Nottoway) Indian Tribe of Southampton County, Virginia.</p>
          
          <h3 className="text-primary">Article II: Jurisdiction</h3>
          <p>Our jurisdiction extends within the ethno-historical geographical contact boundaries of Southeastern Virginia. This encompasses the counties of Southampton, Isle of Wight, Sussex, Greenville, Brunswick, Surry, Nottoway, and Northampton, as well as Gates County in North Carolina.</p>
        </div>
      );
    }

    // Ethno-historic
    if (slug === "ethno-historic-snapshot") {
      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Ethno-Historic Snapshot</h2>
          <p>Our history in Virginia predates the arrival of European colonists by centuries.</p>
          <ul>
            <li><strong>Hand Site (44SN22):</strong> Carbon dating of our ancestors at this site places them around 1580 AD, with evidence suggesting occupation as far back as 700 AD.</li>
            <li><strong>First Contact:</strong> Our first ethno-historic contact with the English occurred in 1607-1608.</li>
            <li><strong>1608 Meeting:</strong> Nathaniel Powell and Anas Todkill encountered our tribe at the Tomihitton village while searching for survivors of the Lost Colony.</li>
            <li><strong>Historical Names:</strong> We were referred to as "Man-goaks" or "Men-gwe" by the Algonquian-speaking Powhatan Confederation.</li>
            <li><strong>Linguistic Context:</strong> In 17th century Virginia, there were three distinct language groups: Algonquian, Siouan, and Iroquoian (our language family).</li>
          </ul>
          <p>On November 2, 2009, a State Historical Marker was proudly placed to officially commemorate our history.</p>
        </div>
      );
    }

    // Hand Site
    if (slug === "handsite") {
      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Hand Site (44SN22) Skeletal Remains</h2>
          <img src="/images/HandSitemarker.jpg" alt="Hand Site Marker" className="w-full max-w-md float-right ml-6 mb-4 rounded border-2 border-primary" />
          <p>The Hand Site is a profoundly sacred location for the Cheroenhaka (Nottoway) Indian Tribe.</p>
          <p>In the 1960s, a major archaeological dig removed the skeletal remains of our ancestors from this site. For decades, our tribe has worked tirelessly to reconnect with and honor these individuals.</p>
          <p>In October 2011, as reported by the Tidewater News, our tribe officially reconnected with the remains of our ancestors. A Historical Marker Unveiling ceremony was held to permanently consecrate the site and ensure the respectful remembrance of those who walked this land before us.</p>
          <div className="clear-both"></div>
        </div>
      );
    }

    // Fallback for pages without specific text in the prompt
    return (
      <div className="py-12 text-center text-muted-foreground border-2 border-dashed border-border rounded-lg bg-muted/20">
        <p className="text-xl font-serif">Content for this page is currently being updated.</p>
        <p className="mt-2">Please check back soon for detailed information about <strong>{pageTitle}</strong>.</p>
      </div>
    );
  };

  return (
    <div className="w-full p-6 md:p-12">
      <div className="mb-4 text-sm font-bold uppercase tracking-widest text-accent flex items-center gap-2">
        <Link href={`/${section.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary transition-colors">
          {section}
        </Link>
        {specificTitle && (
          <>
            <span>/</span>
            <span className="text-muted-foreground">{specificTitle}</span>
          </>
        )}
      </div>

      <h1 className="text-3xl md:text-5xl text-primary font-serif font-bold border-b-4 border-secondary pb-4 mb-8">
        {pageTitle}
      </h1>
      
      {renderContent()}
      
      <div className="mt-16 pt-6 border-t border-border">
        <Link href="javascript:history.back()" className="text-primary hover:text-secondary font-bold inline-flex items-center gap-2">
          ← Back
        </Link>
      </div>
    </div>
  );
}