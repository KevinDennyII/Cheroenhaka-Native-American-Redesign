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
    if (slug === "heritage-foundation") {
      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Cheroenhaka (Nottoway) Indian Tribal Heritage Foundation, Inc. 501 (c) (3)</h2>
          <p className="text-sm text-muted-foreground uppercase tracking-wider">Effective June 13, 2005</p>
          <ul>
            <li>The Cheroenhaka (Nottoway) Indian Tribal Heritage Foundation is the incorporated non-profit for the Cheroenhaka (Nottoway) Indian Tribe of Southampton County, Virginia.</li>
            <li>The specific purposes for which this corporation is organized are Charitable, Religious, and Educational.</li>
            <li>This corporation is organized under Section 501(c)(3) of the Internal Revenue Code.</li>
            <li>This is a non-member organization.</li>
            <li>All donations are Tax Deductible.</li>
          </ul>
          <p>Checks should be made payable to the Cheroenhaka (Nottoway) Indian Tribal Heritage Foundation and mailed to the following address, or make a donation to Pay Pal:</p>
          <div className="bg-muted p-6 border-l-4 border-accent mt-6">
            <h3 className="m-0 text-primary">Mailing Address</h3>
            <p className="m-0 mt-2">P.O. Box 297<br/>Franklin, Virginia 23851</p>
          </div>
          <p>We thank you for your generous Tax Deductible Donation.  Your donations will support our goal in Southampton County, Virginia (by purchase or donation); the building of a Cheroenhaka (Nottoway) Indian Tribe’s Culture Center and Museum; a Worship Center; to include, the construction of a Cheroenhaka (Nottoway) Indian Tribe’s Interactive Palisade Indian Village, with “Longhouses” – a 1580 replica of the Cheroenhaka (Nottoway) Indian Village as identified in the archeological excavation of the “Hand Site.”</p>
          <h3 className="text-primary mt-8">Contact Information</h3>
          <p>Questions germane to the goals of the “Foundation;” to include, “Donations” may be directed to:</p>
          <ul>
            <li>Chairman Walt Brown: (757) 562-7760</li>
            <li>Caroh “Water Blossom” Holley, Foundation Secretary: (443) 802-6275</li>
            <li>Teresa Preston, Foundation Financial Secretary: (757) 375-5956</li>
          </ul>
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

    if (slug === "tribal-shield") {
      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Cheroenhaka (Nottoway) Indian Tribal Shield & Heraldry</h2>
          <p className="text-sm text-muted-foreground uppercase tracking-wider">Library of Congress Copyright Office – VA 1-256-506</p>

          <div className="not-prose my-8 flex flex-col md:flex-row-reverse gap-8 items-start">
            <div className="flex-shrink-0 w-full md:w-1/3">
              <img src="/images/tribal-shield.png" alt="Cheroenhaka (Nottoway) Indian Tribal Shield" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="flex-grow">
              <p className="prose prose-lg mt-0">The Cheroenhaka (Nottoway) Tribal Shield was designed by the Tribal Council to reflect the history of the “Historic” Cheroenhaka (Nottoway) Indian Tribe. Beginning at our first appearance in the ethno-historic records in 1608, when members of the Jamestown Colony traveled to Nottoway County, Virginia to inquire as to the fate of the “lost” Roanoke Colony; to include, the current reorganization of the historic tribe. The Shield depicts 400 + years of Cheroenhaka (Nottoway) Indian survival, through three peace treaties, accompanied by wars, the white man’s disease, such as small pox, and “forced dispersal” from our native lands, as a result of colonial encroachment, economic suffrage and violations of our treaty by the Colonial Council and the Commonwealth of Virginia.</p>
            </div>
          </div>

          <h3 className="text-primary">The Circle</h3>
          <p>Represents the circle of life. The outer circle reflects our walk in this sacred circle of life in that we must have a positive impact on the walk of another. The inner circle is our children and our children’s children.</p>

          <h3 className="text-primary">Red, White and Blue Rings</h3>
          <p>Represents our Tribal Colors in that our “Regalia Dress” as reported by William Byrd in April 7th & 8th , 1728, while visiting one of our Cheroenhaka (Nottoway) Indian Towns in Southampton County – “the young men danced to the beat of a gourd drum, stretched tight with a skin – the women wore Blue and Red Match Coats with their hair braided with Blue and White beads.” The colors also represent our loyalty and patriotism; we fought in the French and Indian War at Fort Duquesne, Penn., in 1754 and in the Revolutionary War, where one of our werrowance / Teerheer / Chief was killed. The white ring also represents the purity of our worship and our devout belief in the One Creator – “Quaker-Hun-te,” our Lord and Savior Jesus the Christ.</p>

          <h3 className="text-primary">Four Feathers</h3>
          <p>Represents the four directions – east, west, north and south; to include, the “forced dispersal” of our people from our ancestral lands. Colonial encroachment and economic suffrage “forced” many of our people to disperse to the four winds – east, west, north and south; however, the majority of our tribal members remained in their native Southampton County, Virginia – we are here today.</p>

          <h3 className="text-primary">Eagle Perched</h3>
          <p>A Bird of Prey, looking back, never forgetting who we are, remembering our native roots. Representing the spirit, steadfastness and determination of the Tribe to reunite from the four directions the Cheroenhaka (Nottoway) Indian Nation. To “make right” the incorrect history by teaching our traditions, culture and the true history of our people to the masses.</p>

          <h3 className="text-primary">Cheroenhaka (Che-ro-en-ha-ka)</h3>
          <p>Is the name that we have always called ourselves. It means “People At The Fork of The Stream.”</p>

          <h3 className="text-primary">Peace Pipe</h3>
          <p>Represents the three Treaties that we signed with the Colonial Government – the Treaty of 1646; the Treaty of 1677 (“Two Pom Wompon” – Middle Plantation-Williamsburg), and the separate Treaty with only the Cheroenhaka (Nottoway) Indian Tribe, February, 1713-14, bearing the signature(s) of Colonial Governor Alexander Spotswood and mark of our Teerheer, “Ouracoorass Teerheer,” at Williamsburg, Virginia – a treaty, from our tribal perspective, has never been negated and is still in force.</p>

          <h3 className="text-primary">Three Rivers (Nottoway; Blackwater & Chowan)</h3>
          <p>Represents the mark of our Teerheer (three rivers running parallel) as affixed to the Treaty of 1677. It also represents the location of our “Reservations Lands,” as granted by the House of Burgess in 1705-06 (some 41,000 acres –The Circle and Square Tracts). We lodged and hunted as far as the Albemarle Sound along the Chowan River. Here we called ourselves, “People At The Fork of The Stream.” – the fork where the Nottoway and the Blackwater Rivers join.</p>

          <h3 className="text-primary">Leaves, Oak Trees & Acorns</h3>
          <p>Represents the Fall Season of the year when our “young” Tribal Men rejoiced, traveled, hunted, trapped, fished with “Rock Weirs,” foraged for foods, built “Long Houses,” took wives, and made war on enemy tribes.</p>

          <h3 className="text-primary">Large Tan, Reddish Brown Circle</h3>
          <p>Represents our lively-hood, the land we farmed, the corn, beans, squash we grew; the hogs we raised, the many hides we trapped, tanned, traded, and made into clothes to protect ourselves from the climate. The color also applies to our complexion – according to the diaries of William Byrd, while visiting the Reservation of the Cheroenhaka (Nottoway) Indians, 1729, in what is now present day Courtland, Virginia ( Southampton County), wrote: “the women came out dressed in their Red and Blue Match Coats that fitted loosely about their bodies that their mahogany (Reddish Brown) skin shone through – though they were sad but colored, they would make exceptional wives for the English Planters and their dark skin would breed out in two generations.”</p>

          <h3 className="text-primary">(Nottoway)</h3>
          <p>Represents the “derogatory name” by which history remembers us. A name given to us by our enemies, the Algonquian Speaking Powhatan Indians. It means “Snakes” or “Adders” in their tongue.</p>
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

    if (slug === "resolution-goals") {
      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <p>The Cheroenhaka (Nottoway) Indian Tribe, made first ethno-historic contact with the English in 1607/1608 in what is now Nottoway County. We were referred to as Mangoak, or Mengwe, by the Algonquian Tribes and later in 1650, per the diary entries of Edward Bland, referred to again by the Algonquian Tribes as “Nadawa,” which soon reverted to Nottoway. In our native Iroquoian Tongue we call ourselves CHEROENHAKA – People at the Fork of the Stream.</p>
          <p>We lodged and hunted in the southeastern part of Virginia along the Nottoway and Blackwater River. Our hunting territory extended into North Carolina along the Chowan River as far as Albemarle Sound. We, the Cheroenhaka (Nottoway) Indian Tribe’s Chief Men were signers of three Treaties with the English / Colonial Government: the Treaty of 1646, 1677 and 1714 (w/Successor Clause), wherein Tribal Land was granted, the last of which was the” Circle” and the “Square Tract” (41 K acres) located in what is now Sussex and Southampton County, Virginia.</p>
          <p>An 1808 “Special Census” depicted the Cheroenhaka (Nottoway) Indian Tribal Members still living on said land in Sussex and Southampton County, Virginia in the vicinity of Assamoosick Swamp. Due to conditions germane to an influx of English Settlers (encroachment) and other accompanying economic conditions; to include, “Documentary Genocide,” some Tribal Members dispersed to other locations outside of Southampton County and even the state of Virginia; however, many of the Cheroenhaka (Nottoway) Indian Tribal Members remained, continuing to live in a communal group/tribe in “Artist Town” up to the early 1990s, and their descendants (as of this day) still remain in Southampton County.</p>

          <h2 className="text-secondary">As Such</h2>
          <p>As Tribal citizens, and as residents of Southampton County Virginia “We” the Historical Cheroenhaka (Nottoway) Indian Tribe (Reorganized) came together in a purpose to share much, of our culture, and traditions, realizing that we have one thing in common – through no fault of our own, some of us must struggle to find our Native American roots. Many of us were lucky in that our ancestors / parents guided us in our Cheroenhaka (Nottoway) Indian genealogy, Culture, and Traditional Ways. Others had parents who were afraid to embrace their Native American heritage for fear of repercussions, even to the point of being reclassified as another race – which we were on paper – Documentary Genocide at it’s worst.</p>
          <p>The Cheroenhaka (Nottoway) Indian Tribe, Southampton County, Virginia seeks to remedy that situation by uniting together as a Nation, while building ALLIES with other neighboring Native American Tribes, so that our rich heritage, history, traditions and culture is not lost.</p>

          <h2 className="text-secondary">The “Goals / Purpose” of the Cheroenhaka (Nottoway) Indian Tribe, Southampton County Virginia are:</h2>
          <ul>
            <li>To Preserve and perpetuate the ideas, culture, and traditions of the Cheroenhaka (Nottoway) Indian Tribe.</li>
            <li>To enlighten and inform others as to the Native American way of life.</li>
            <li>To raise public awareness of the history and culture of the Cheroenhaka (Nottoway) Indian Tribe, Southampton County, Virginia.</li>
            <li>To assist members in researching their Cheroenhaka (Nottoway) Indian genealogy.</li>
            <li>To bring together (once dispersed) the NATION of Cheroenhaka (Nottoway) Indian descendants and those seeking a tribal unity with the Cheroenhaka (Nottoway) Indian Tribe.</li>
            <li>To engage in scientific, educational and cultural activities / exchanges to benefit the Tribal Membership and Virginia’s community at large.</li>
            <li>To encourage the educational system of Virginia to teach an accurate portrayal of Native American influence of the Cheroenhaka (Nottoway) Indian culture and Traditions.</li>
            <li>To seek out / research the Quiocosine(s) (Nottoway Indian Burial Grounds) clear / clean a portion of said discovered Cheroenhaka (Nottoway) Indian Cemeteries located in Southampton County, Virginia and /or surrounding counties; such as, Rose Hill , Hand Site and Raccoon Island – and conduct a Native American rededication ceremony, to include the laying of an official marker.</li>
            <li>To acquire “letters of support” from congress, other state recognized Tribes in pursuit of Federal Certification for the Cheroenhaka (Nottoway) Indian Tribe, Southampton County Virginia.</li>
            <li>To submit a petition to the National Museum of National History for repatriation of the remains and return to their original resting-place the Cheroenhaka (Nottoway) Indian’s Skeletal Remains (132 ea.), excavated at the Hand Site # 44SN22 in Southampton County, Virginia – 1965, 66, & 69.</li>
            <li>Coordinate with the Southeastern Virginia Community at large, Counties, State and Federal Government in pursuit of land donations and / or purchases / repatriation, for a Reservation Site.</li>
            <li>Establish a Tribal Historical Cultural Center / Museum for the Cheroenhaka (Nottoway) Indian Tribe, Southampton County VA.</li>
            <li>Research and document the Cheroenhaka (Nottoway) Indian Language.</li>
            <li>Coordinate and develop a Cheroenhaka (Nottoway) Indian Tribal Heritage Foundation with the purpose of providing scholarship support for four year colleges and / or two year colleges and / or Trade Schools.</li>
          </ul>
        </div>
      );
    }


    if (slug === "tribal-newsletter") {
      const newsletterItems = [
        {
          title: "Thra-hun-ta Newsletter - Spring 2022",
          link: "https://www.cheroenhaka-nottoway.org/wp-content/uploads/Thra-hun-ta-Newsletter-spring-22.pdf",
        },
        {
          title: "Thra-hun-ta Winter 2020 Tribal Newsletter",
          link: "https://www.cheroenhaka-nottoway.org/wp-content/uploads/thra-hun-ta-winter-2020-tribal-newsletter.pdf",
        },
        {
          title: "Thra-hun-ta Winter 2020 Tribal Newsletter (alternative)",
          link: "https://www.cheroenhaka-nottoway.org/wp-content/uploads/Thra-hun-ta-Winter-2020-Tribal-Newsletter.pdf",
        },
      ];

      return (
        <div>
          <div className="prose prose-lg prose-slate mb-8 max-w-none">
            <p className="lead">
              Stay up to date with the latest news and events from the Cheroenhaka (Nottoway) Indian Tribe with our official newsletter, the Thrahunta.
            </p>
          </div>

          <div className="space-y-6">
            {newsletterItems.map((item, index) => (
              <a href={item.link} key={index} className="block bg-card p-6 rounded-lg border-l-4 border-secondary shadow-sm hover:shadow-md transition-shadow" target="_blank" rel="noopener noreferrer">
                <h3 className="text-xl font-bold text-primary mb-2 mt-0 font-serif">{item.title}</h3>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4 font-serif">Please Donate</h3>
            <div className="flex justify-center items-center space-x-8">
                <a href="https://www.paypal.com/US/fundraiser/charity/1617210" target="_blank" rel="noopener noreferrer">
                  <img src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" alt="Donate with PayPal" />
                </a>
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-bold text-primary mb-2 font-serif">Zelle</h4>
                  <img src="/images/zelle.jpg" alt="Zelle QR Code" style={{ width: '128px', height: '128px' }} />
                </div>
              </div>
          </div>
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