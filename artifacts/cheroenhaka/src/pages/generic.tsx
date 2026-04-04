import React, { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

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
    if (slug === "edith-turner") {
      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Library of Virginia Spotlights Edith Turner</h2>
          <p className="text-sm text-muted-foreground">By R.E. Spears III/STAFF WRITER/res.spears@tidewaternews.com</p>
          
          <div className="my-8">
            <img src="/images/edith-turner-group.jpg" alt="Cheroenhaka (Nottoway) tribe members at the Library of Virginia" className="max-w-full lg:max-w-2xl mx-auto rounded-lg shadow-lg" />
            <p className="text-sm text-center mt-2 text-muted-foreground">Left to Right: Prince David “SlowTurtle” Brown; Beverly “Barefoot” El; War Chief William Lamb “Spread Eagle” Howell; Vashti “Sparrow Hawk” Clarke; Cynthia “Water Lily” Brown; Chief Walt “Red Hawk” Brown; Vice Chief Ellis “Soaring Eagle” Wright; Mona “Quite Storm” Cunnikin; Ethel “Suncery” Johnson; Sthepnie “Dancing Wolf” Brown; Teresa “Chonabuck” Baxter and Deborah “Tiger Lily” Motahari.</p>
          </div>

          <p><strong>RICHMOND</strong>—The groundbreaking 19th century Native American chief of a Southampton County tribe is one of eight women whose lives are celebrated in a new traveling exhibition organized by the Library of Virginia. Library officials unveiled the exhibit during a recent Richmond program capping off Women’s History Month. Twelve members of the Cheroenhaka (Nottoway) tribe, including the current chief, Walt “Red Hawk” Brown, attended the ceremony, dressed in full regalia.</p>

          <p>“We were just elated,” Brown said Friday. “It was just a great honor, and it brought a lot of good visibility to Southampton County, also.”</p>
          
          <p>Brown said he was contacted by library officials earlier this year and told of their plan to honor Edith Turner, also known by her tribal name Wané Roonseraw. He said he believed they had learned of her and her contributions to Virginia history on the Cheroenhaka’s Web site.</p>
          
          <p>“There’s a lot of visibility that has been gained for our tribe by our Web site,” he said. “The visibility of the tribe here in Southampton County over the last seven years has brought this to fruition.”</p>

          <blockquote className="border-l-4 border-accent bg-muted p-4 my-6">
            <p className="font-semibold italic">“(T)he lands belonging to the said tribe are rendered in a great measure useless by their being held in common, which tenure takes away the main inducement to industry in the cultivation of them... It is found to be impossible to divide a common crop, made by a number of persons of various powers, and different Wills, so as to give to each a share strictly proportioned to the part taken in the labour performed, and in consequence of long continued dissatisfaction on that head, at length no crop at all is made.”</p>
            <cite className="block text-right not-italic text-muted-foreground">— Edith Turner's 1821 petition</cite>
          </blockquote>

          <p>In an ironic twist, Turner’s apparent early embrace of capitalism and free-market principles ultimately led to the transfer of all but a tiny portion of Cheroenhaka land to non-indigenous owners.</p>
          
          <p>In 1838, the year of her death, records indicated that the tribe owned as much as 7,000 acres of its former reservation. Just 40 years later, the last 575 acres was divided among members. Today, Brown said, he is aware of only about 15 acres of tribal land that remains in the hands of a direct descendant.</p>
          
          <p>Nonetheless, Turner’s petition is thought to have inspired others Indians to adopt the intensive farming practices of white farmers. The example she set was especially influential. As the Cheroenhaka (Nottoway) were forced to sell reservation land to pay debts, she prospered on her own farm, remaining self-sufficient and even keeping her own last name when she married William Green.</p>

          <p>“She was way ahead of her time,” Brown said. Nonetheless, she cared deeply for her tribe and its culture.</p>
          
          <p>She was a foster mother for two Cheroenhaka (Nottoway) children and was able to convince the tribe’s white trustees to return four other Indian children to the reservation, according to information from the Library of Virginia. She was one of the last tribal members to speak the Iroquoian language, and she is credited in 1820 with providing a College of William & Mary scholar with a vocabulary of Cheroenhaka words that ultimately wound up in the hands of Thomas Jefferson and is now held at the Library of Congress in Washington, D.C.</p>
          
          <p>Today that vocabulary list is the only existing reproduction of the long-dead Iroquoian language. Turner was the only Cheroenhaka (Nottoway) of her time to write a will, a document that still can be found at the Southampton County courthouse. In it, she left her personal effects — including a cart with wheels, a heifer and a bull, “four house pigs,” farming tools and kitchen implements — to Edwin Turner, a member of the tribe.</p>
          
          <p>William A. Spark was the recipient of her farm. Brown said there is no record that Spark was Cheroenhaka (Nottoway), but he believes him to be the same William Spark who was later a member of Virginia’s House of Delegates and Senate.</p>
          
          <p>Brown has a special connection to Turner. He is a direct descendant of Mary Polly Woodson, also known by her tribal name Karé Houte. Woodson was one of Turner’s foster children and was one of the signatories of the 1821 petition to the General Assembly.</p>

          <p>In honor of his forebearers, when he accepted a crystal bowl and a silver bracelet during the library ceremony March 27, Brown delivered brief comments in the tribe’s native tongue, and then presented library officials with a peace arrow, copies of four tribal magazines and a copy of his own birth certificate and genealogy.</p>

          <p>During an interview Friday, Brown looked for the first time at the bracelet he had been given. An inscription read, “Isn’t it amazing what one woman and her friends can do?”</p>
        </div>
      );
    }

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

    if (slug === "language") {
      const [currentPage, setCurrentPage] = useState(1);

      const pages = [
        // Page 1
        <>
          <h3 className="text-primary">Cheroenhaka (Nottoway) Indian Language: Dar-Sun-Ke (Tongue)</h3>
          <p className="text-sm text-muted-foreground">Transcribed By: Chief Walt “Red Hawk” Brown, Tribal Historian</p>
          <p>The Cheroenhaka (Nottoway) Indian Tribe of Southampton County, Virginia’s Language (Dar-sun-ke), is recorded in a “Manuscript” obtained from the American Philosophical Society, 105 South Fifth Street, Philadelphia, Philadelphia.</p>
          <p>The vocabulary and /or tongue (Dar-sun-ke) of the Cheroenhaka (Nottoway) Indians is a compilation of lists and source materials dating back to March 4th, 1820. Former President Thomas Jefferson’s hand written letter to Peter S. DuPonceau, on July 7, 1820, states that the Cheroenhaka (Nottoway) Indian vocabulary was obtained on March 4th, 1820 from a woman by the name of Edie Turner, styled as their “Queen” and that he had procured a copy of the vocabulary from John Woods, a former Professor of Mathematics at the College of William & Mary. Jefferson also infers in his letter of July 7, 1820, that at the time of the recording of the vocabulary, members of the Cheroenhaka (Nottoway) Indian Tribe, Southampton County Virginia, was still living on seven thousands acres of tribal reservation land, west of the Nottoway River, two miles from Jerusalem [Courtland…WDB] in Southampton County Virginia.</p>
        </>,
        // Page 2
        <>
          <p>Lewis R. Benford, University of California, Los Angeles, in his manuscript, title “An Ethno-history of the Nottoway, Meherrin and Weanock Indians of Southeastern Virginia” writes that Jefferson forwarded the Cheroenhaka (Nottoway) Indian Vocabulary to Peter S. DuPonceau of Philadelphia, a student of Indian Languages, particularly the Iroquoian tongues (Gallatin 1836:81) and that DuPonceau recognized the Cheroenhaka (Nottoway) Indian language as belonging to the Iroquoian family of languages. Prior to the analysis by DuPonceau it was assumed that the Cheroenhaka (Nottoway) Indians spoke an Algonkian (Algonquian) language related to their northern neighbors, the Powhatan tribes and / or Lenape Nation.</p>
          <p>Albert Gallatin, “Transactions and Collections of the American Antiquarian Society, Volume II, pages 81-82,” states that “the Cheroenhaka (Nottoway) Indian Tribe had preserved their independence and their numbers later than the Powhatans, and that, at the end of the seventeenth century, they still had one hundred and thirty warriors and they had not migrated from their original seat in Southampton County Virginia. It is noted that between 1831 and 1836 a second recording of the Cheroenhaka (Nottoway) Indian language was obtained and recorded by the Honorable James Tresevant (Trezevant), one of the original judges on the infamous Southampton County Nat Turner Insurrection Trial. The vocabulary obtained by the Honorable James Tresevant corresponds with that of John Wood, and from which we learn that the true name of the tribe is Cheroenhaka sometimes spelled Cherohakah.</p>
        </>,
        // Page 3
        <>
          <p>In his references notes, Lewis Binford writes that in accordance with Mook (1944:185-195), Swanton (1952:218), Mooney (1894:29), and Hewitt (Hodge 1907:71) that the Cheroenhaka (Nottoway) were also named by the Algonkian(Algonquian) speakers as Mangoake (Mandoags, Mandoaks, Mandoages, Maongoack) a term apparently meaning “rattlesnakes. In 1650 per the diary entries of Bland we were called “Na-da-wa” by the Algonkian (Algonquian) speakers.</p>
          <p>The following is the language /vocabulary – “DAR-SUN-KE” of the Cheroenhaka (Nottoway) Indian Tribe as obtained / recorded phonically by John Woods on March 4th 1820 and the Honorable James Tresevant, 1831-1836 and as analyzed by Peter S. DuPonceau and documented in letters between he and Thomas Jefferson between July 1820 and September 1820:</p>
          <p>Vocabulary Of The Language Of The Cheroenhaka (Nottoway) Indians of Southampton County, Virginia Obtain By John Wood (1775-1822) From An Old Indian Woman by The Name of Edie Turner aka Wane’ Roonseraw, The 4th Of March 1820 – As Communicated By Thomas Jefferson to Peter DuPonceau (1760-1844) :</p>
        </>,
        // Page 4
        <>
          <h4>Nouns of the Universe</h4>
          <table>
            <tbody>
              <tr><td>The Sun</td><td>A-hee-ta</td></tr>
              <tr><td>The Moon</td><td>Teth-ra-ke</td></tr>
              <tr><td>The Stars</td><td>Dee-shu</td></tr>
              <tr><td>The Clouds</td><td>Ura-se-que</td></tr>
              <tr><td>Thunder</td><td>Ha-he-nu</td></tr>
              <tr><td>Lighting</td><td>Towat-gehe-terise</td></tr>
              <tr><td>Air</td><td>Yau-tat-ch</td></tr>
              <tr><td>God</td><td>Quaker-Hunte</td></tr>
              <tr><td>Devil</td><td>Ot-kum</td></tr>
              <tr><td>Rain</td><td>Yount-out-ch</td></tr>
              <tr><td>Snow</td><td>Kan-kaus</td></tr>
              <tr><td>Ice</td><td>O-wees</td></tr>
              <tr><td>Fire</td><td>Au-teur</td></tr>
              <tr><td>A River</td><td>Jo-ke</td></tr>
              <tr><td>A Great River</td><td>Onos-chi-oke</td></tr>
              <tr><td>The Ocean</td><td>Owan-tet-cho-ta</td></tr>
              <tr><td>A Mountain</td><td>Yenun-Te-nunte</td></tr>
              <tr><td>The Woods</td><td>Ora-racoon</td></tr>
              <tr><td>Rocks</td><td>Orun-tag</td></tr>
              <tr><td>Light</td><td>You-han-hu</td></tr>
              <tr><td>Darkness</td><td>A-sun-ta</td></tr>
              <tr><td>Swamp</td><td>Kee-nu</td></tr>
              <tr><td>Land</td><td>O-ter</td></tr>
              <tr><td>Gold or Copper</td><td>Geek-quan</td></tr>
              <tr><td>Silver</td><td>Wa-nee</td></tr>
              <tr><td>Heaven/Sky</td><td>Quaker-win-tika</td></tr>
              <tr><td>Iron</td><td>Owe-na</td></tr>
              <tr><td>I</td><td>EE</td></tr>
              <tr><td>Yes</td><td>Ho-Keh</td></tr>
              <tr><td>No</td><td>Roh</td></tr>
              <tr><td>My</td><td>Set (Singular)</td></tr>
              <tr><td>Your</td><td>Get (Singular)</td></tr>
              <tr><td>My</td><td>Ses (Plural – more than one)</td></tr>
              <tr><td>Your</td><td>Ges (Plural )</td></tr>
            </tbody>
          </table>
        </>,
        // Page 5
        <>
          <h4>Verbs</h4>
          <table>
            <tbody>
              <tr><td>To Walk</td><td>Iā</td></tr>
              <tr><td>To Run</td><td>Ther-ā</td></tr>
              <tr><td>To Stand</td><td>Tune-qua</td></tr>
              <tr><td>To Sit</td><td>Ge-ha</td></tr>
              <tr><td>To Lie Down</td><td>Kee-way-a</td></tr>
              <tr><td>To Fly</td><td>Get-ya</td></tr>
              <tr><td>To Swim</td><td>Kee-te-a</td></tr>
              <tr><td>To Drink</td><td>Arar-her</td></tr>
              <tr><td>To Eat</td><td>A-gwe-a</td></tr>
              <tr><td>To Throw</td><td>Esung-wis-a-tae</td></tr>
              <tr><td>To Strike</td><td>A-hoke-ta</td></tr>
              <tr><td>To Sleep</td><td>Ker-her</td></tr>
              <tr><td>To Speak</td><td>De-sun-ke</td></tr>
              <tr><td>To See</td><td>A-gwe-he</td></tr>
              <tr><td>To Hear</td><td>A-har-tick</td></tr>
              <tr><td>To Sing</td><td>Un-e-ha</td></tr>
              <tr><td>To Dance</td><td>Kē-tau-a</td></tr>
              <tr><td>To Whistle</td><td>Hee-wee</td></tr>
              <tr><td>To Cry</td><td>Ke-a-hoke</td></tr>
              <tr><td>To Laugh</td><td>A-gwe-ne-ha</td></tr>
              <tr><td>To Love</td><td>A-gwe-nouse</td></tr>
              <tr><td>To Live</td><td>De-a-ha</td></tr>
              <tr><td>To Die</td><td>Une-ha</td></tr>
            </tbody>
          </table>
        </>,
        // Page 6
        <>
          <h4>Adjectives</h4>
          <table>
            <tbody>
              <tr><td>Good</td><td>O-sa</td></tr>
              <tr><td>Bad</td><td>As-sun</td></tr>
              <tr><td>Handsome</td><td>We-sa-se</td></tr>
              <tr><td>Ugly</td><td>Hoke-sun-te</td></tr>
              <tr><td>High</td><td>En-gote</td></tr>
              <tr><td>Low</td><td>Nung-sa-te</td></tr>
              <tr><td>Sweet</td><td>A-que-ch</td></tr>
              <tr><td>Sour</td><td>A-gwe-he-un</td></tr>
              <tr><td>Hot</td><td>Au-tau-te</td></tr>
              <tr><td>Cold</td><td>Youn-te</td></tr>
              <tr><td>White</td><td>Ane-ha</td></tr>
              <tr><td>Black</td><td>A-sun-ta</td></tr>
              <tr><td>Red</td><td>Geek-quan</td></tr>
              <tr><td>Brave</td><td>Qua-ra-sa</td></tr>
              <tr><td>Afraid</td><td>Qua-ra-sa-te</td></tr>
              <tr><td>All</td><td>A-qua</td></tr>
            </tbody>
          </table>
        </>,
        // Page 7
        <>
          <h4>Comparative Vocabulary</h4>
          <p>Comparative Vocabulary of the languages of the Iroquois and of the Cheroenhaka (Nottoway) Indians, showing the difference between the two languages.</p>
          <table>
            <thead>
              <tr><th>English</th><th>Iroquois</th><th>Cheroenhaka</th></tr>
            </thead>
            <tbody>
              <tr><td>God</td><td>Ne-o</td><td>Quaker-Hunte</td></tr>
              <tr><td>Devil</td><td>Ot-kon</td><td>Ot-kum</td></tr>
              <tr><td>Sun</td><td>Ka-ra-qua</td><td>A-hee-ta</td></tr>
              <tr><td>Moon</td><td>A-sook-qua</td><td>Teth-ra-ke</td></tr>
              <tr><td>Stars</td><td>O-ke-sa</td><td>Dee-shu</td></tr>
              <tr><td>Heaven</td><td>Ka-ron-ke-a-ka</td><td>Quaker-win-tika</td></tr>
              <tr><td>Earth</td><td>O-en-ke-a</td><td>O-ter</td></tr>
              <tr><td>Man</td><td>Ron-que</td><td>En-sun</td></tr>
              <tr><td>Woman</td><td>E-rin-a</td><td>A-gwe-hung</td></tr>
              <tr><td>Boy</td><td>Ax-a-a</td><td>En-sun-go</td></tr>
              <tr><td>Girl</td><td>Kax-a-a</td><td>A-gwe-hoong-go</td></tr>
              <tr><td>Infant</td><td>O-na-so</td><td>O-na-so</td></tr>
              <tr><td>Father</td><td>Ra-ke-ne</td><td>A-ta-ne</td></tr>
              <tr><td>Mother</td><td>Is-ta-ne</td><td>A-na-ne</td></tr>
              <tr><td>Husband</td><td>Te-a-ke-ni</td><td>En-sun-e</td></tr>
              <tr><td>Wife</td><td>Te-a-ke-ni</td><td>A-gwe-hoong-e</td></tr>
              <tr><td>Son</td><td>He-a-wa-ka</td><td>A-ha-e</td></tr>
              <tr><td>Daughter</td><td>Ke-a-wa-ka</td><td>Ka-ha-e</td></tr>
              <tr><td>Brother</td><td>Te-a-ke-a-ta</td><td>A-ka-te</td></tr>
              <tr><td>Sister</td><td>Te-a-ke-a-ta</td><td>A-ka-ta</td></tr>
              <tr><td>Head</td><td>A-no-wa-ra</td><td>Ke-a-ra</td></tr>
              <tr><td>Hair</td><td>O-noo-qua</td><td>Ke-a-ra</td></tr>
              <tr><td>Face</td><td>A-kon-sa</td><td>A-gwa-ha</td></tr>
              <tr><td>Ear</td><td>A-hoo-ta</td><td>A-ta-ka</td></tr>
              <tr><td>Eye</td><td>O-ka-ra</td><td>A-gwe-he</td></tr>
              <tr><td>Nose</td><td>O-ne-sa</td><td>A-ne-sa</td></tr>
              <tr><td>Mouth</td><td>Sa-ka-ra</td><td>Is-sun-a</td></tr>
              <tr><td>Tongue</td><td>Sa-na-sa</td><td>Dar-sun-ke</td></tr>
              <tr><td>Tooth</td><td>O-na-o-we-ra</td><td>A-na-ta</td></tr>
              <tr><td>Neck</td><td>O-ne-a-ra</td><td>A-ne-a-te</td></tr>
              <tr><td>Arm</td><td>O-nen-sa</td><td>A-ne-sa</td></tr>
              <tr><td>Hand</td><td>O-sen-na</td><td>Is-sa-ra</td></tr>
              <tr><td>Fingers</td><td>O-sen-na</td><td>Is-sa-ra</td></tr>
              <tr><td>Leg</td><td>O-sa-na</td><td>A-se-na</td></tr>
              <tr><td>Foot</td><td>O-sa-ta</td><td>A-se-ta</td></tr>
              <tr><td>Toes</td><td>O-sa-ta</td><td>A-se-ta</td></tr>
              <tr><td>Bone</td><td>Os-ta</td><td>Os-te</td></tr>
              <tr><td>Heart</td><td>A-we-a-re-sa</td><td>A-qua-ri-a</td></tr>
              <tr><td>Blood</td><td>Ot-que-sa</td><td>Ka-ta-ke</td></tr>
              <tr><td>Friend</td><td>A-ta-se</td><td>A-ka-tash</td></tr>
              <tr><td>Town</td><td>Ka-na-ta-ka</td><td>Wa-se-ke</td></tr>
              <tr><td>House</td><td>Ka-no-sa</td><td>Ka-hoo-sa</td></tr>
              <tr><td>Axe</td><td>A-to-ke</td><td>A-sha</td></tr>
              <tr><td>Knife</td><td>Osh-a</td><td>Osh</td></tr>
              <tr><td>Canoe</td><td>Ka-ho-we-a</td><td>A-ta-hoo</td></tr>
              <tr><td>Bow</td><td>A-en-a</td><td>A-ra</td></tr>
              <tr><td>Arrow</td><td>Ka-he-na</td><td>Wa-ne</td></tr>
              <tr><td>Shoe</td><td>A-ta-que-an-da</td><td>A-ta-ke</td></tr>
              <tr><td>Pipe</td><td>Ka-no-no-wa</td><td>A-na-qua</td></tr>
              <tr><td>Tobacco</td><td>O-ke-a-ta</td><td>O-na-ke</td></tr>
              <tr><td>Dog</td><td>Er-har</td><td>Cheer</td></tr>
              <tr><td>Wolf</td><td>Er-har</td><td>Ther-he</td></tr>
              <tr><td>Bear</td><td>O-qua-re</td><td>A-que-ni</td></tr>
              <tr><td>Deer</td><td>O-sken-on-to</td><td>A-ne-ka</td></tr>
              <tr><td>Beaver</td><td>Ka-ne-to</td><td>A-ne-sa</td></tr>
              <tr><td>Snake</td><td>O-se-a-ta</td><td>A-she-an</td></tr>
              <tr><td>Fish</td><td>Ken-so-on</td><td>Ka-ta-ke</td></tr>
              <tr><td>White</td><td>O-ra-ke</td><td>Ane-ha</td></tr>
              <tr><td>Black</td><td>O-soor-ha-se</td><td>A-sun-ta</td></tr>
              <tr><td>Red</td><td>O-quar-re-a</td><td>Geek-quan</td></tr>
              <tr><td>To Eat</td><td>Sa-ka-re</td><td>A-gwe-a</td></tr>
              <tr><td>To Drink</td><td>Sa-ke-re</td><td>Arar-her</td></tr>
              <tr><td>To Run</td><td>Ta-ke-re</td><td>Ther-ā</td></tr>
              <tr><td>To Go</td><td>Ia-e</td><td>Iā</td></tr>
              <tr><td>To Come</td><td>Ia-e</td><td>Iā</td></tr>
              <tr><td>To Love</td><td>A-no-re</td><td>A-gwe-nouse</td></tr>
              <tr><td>To Speak</td><td>A-ta-re-a</td><td>De-sun-ke</td></tr>
              <tr><td>To See</td><td>O-ka-te</td><td>A-gwe-he</td></tr>
              <tr><td>To Sleep</td><td>A-ta-re-a</td><td>Ker-her</td></tr>
              <tr><td>To Die</td><td>Ia-he-ke</td><td>Une-ha</td></tr>
              <tr><td>To Kill</td><td>Re-no-hoke</td><td>A-hoke-ta</td></tr>
              <tr><td>One</td><td>Un-ska</td><td>O-sa</td></tr>
              <tr><td>Two</td><td>Tek-a-ne</td><td>Tek-a-ne</td></tr>
              <tr><td>Three</td><td>A-suth</td><td>A-suth</td></tr>
              <tr><td>Four</td><td>Ka-e-re</td><td>Haun-a-ka</td></tr>
              <tr><td>Five</td><td>Wisk</td><td>We-suth</td></tr>
              <tr><td>Six</td><td>I-a-ak</td><td>A-su-a-ka</td></tr>
              <tr><td>Seven</td><td>Sa-to-re</td><td>Na-toke</td></tr>
              <tr><td>Eight</td><td>Tek-a-ro</td><td>Tek-a-ne-ha</td></tr>
              <tr><td>Nine</td><td>Wa-tro</td><td>We-ra-noke</td></tr>
              <tr><td>Ten</td><td>O-ke-re</td><td>Wane-ha</td></tr>
            </tbody>
          </table>
        </>,
        // Page 11
        <>
          <h4>Letter Of Reply To Thomas Jefferson From Peter S. DuPonceau</h4>
          <p className="text-sm text-muted-foreground">Germane To The Vocabulary Of The Nottoway Tribe Of Indians</p>
          <p className="text-sm text-muted-foreground">Transcribed by Chief Walt “Red Hawk” Brown of the Cheroenhaka (Nottoway) Indian Tribe, Southampton County, Virginia</p>
          <p>Thomas Jefferson, Esq Philadelphia 12th July 1820</p>
          <p>Dear Sir</p>
          <p>I have received the letter you have done me the honor to write to me dated the 7th July 1820 enclosing a vocabulary of the language of the Nottoway [ Cheroenhaka…WDB] tribe of Indians, which I shall not fail to lay before the Historical Committee at their next meeting, & in the mean while I am free to anticipate their cordial thanks for your unwearied & effectual exertions in promoting the great cause of American literature as well as committee’s special objects. They will always be proud & happy to acknowledge the great obligations which you have laid them under, & which men truly devoted to the pursuit of Science can but appreciate.</p>
          <p>I am at no loss to determine on the true character of this language. The moment I cast my eyes on this vocabulary, I was struck as well as astonished at its decided Iroquois physiognomy, which habit has taught me easily to discriminate. I say I was astonished, because from the names of Rivers and places in Virginia, which in general are to be traced to the great & widely extended Lenni Lenape, of Delaware idiom, and also from the words of the Virginia Indians quoted by Capt Smith, which are all in close affinity with the Lenape, I did not expect to find, in what you consider as a branch of the general language of the Powhatans, an Iroquois Dialect, & yet nothing is cleared nor more incontrovertible than that this Nottoway language is essentially Iroquois, & is compounded of the different dialects of the Six Nations, in which the Tuscarora seems to predominate. I have yet found but one word in which there appears some affinity to the Lenape, it is “Deeshu” (a star) which appears derived from the Delaware “Gischur” (the sun). The Nottoway word “Aheeta,” which in the vocabulary signifies the great luminary, is evidently Tuscarora “Heita,” which has the same meaning. I shall take the liberty some time hence of sending you full proofs of the assertion which I have made; in the mean time I enclose the Nottoway numerals from one to ten, compared with the Onandago & Mohawks, the two principal Iroquois Dialects. I regret, I have not the Tuscarora numerals as a further means of comparison, you will be thus convinced of the great affinity which exist between those languages.</p>
        </>,
        // Page 12
        <>
          <p>Whether the Nottoway is a mother tongue from which the Iroquois Dialects have branched out, or whether it is itself a derivative mixture, I dare not undertake to pronounce , but this much appears to me certain, that Virginia has been enhabited by nations of the two great stocks which filled the Northern parts of this country, the Lenape & the Iroquois, or five and afterward Six nations. Of these last the Tuscarora are the least known having joined the confederacy at a late period. It would be perhaps hazarding too much to say that their original stock is found in the Nottoways. I content myself with stating facts. Leaving it to those who are better informed than I am to draw inference from them.</p>
          <p>Among the vocabularies which you have heretofore had the goodness to send to the Historical committee, there is none of the language, nor of any connected with it. They are all various idioms of the Lenape & Floridian Stocks. There is not a single one at all in affinity with the Iroquois or any of its Dialects. The Iroquois language appears to have been more extended in its branches than was imagined before Zeisberger & Pyrlous. I have found considerable affinity to it in the Osage.</p>
          <p>If more vocabularies could be procured of the Idioms of the Virginia Indians, it would be easy to tract them to their respective stocks, for I have no doubt they were all in affinity with one or other of the two great families, the Lenape & the Iroquois, & that the settlements of the Floridian Indians did not begin farther to the Northward than North Carolina. Yet I may be mistaken. I offer a conjecture in which I think I am warranted by all that I have hitherto seen of the languages of the Northern Indians.</p>
          <p>I have the honor to be – with the greatest respect</p>
          <p>(signed by)</p>
          <p>Peter S. DuPonceau</p>
        </>,
        // Page 13
        <>
          <h4>Letter Sent by Thomas Jefferson To Peter S. DuPonceau, Esq.</h4>
          <p className="text-sm text-muted-foreground">Germane To The Vocabulary of The Nottoway Tribe Of Indians</p>
          <p className="text-sm text-muted-foreground">Transcribed by Chief Walt “Red Hawk” Brown of the</p>
          <p className="text-sm text-muted-foreground">Cheroenhaka (Nottoway) Indian Tribe, Southampton County Virginia</p>
          <p>Dear Sir Monticello July 7th 1820</p>
          <p>I have lately had an opportunity of procuring a copy of the vocabulary of the Nottoway [Cheroenhaka...WDB] tribe of Indians. These with the Pamunkies and Mattaponies were component parts of the great Powhatan Confederacy which covered all the lower part of this State, and probably spoke the general language of the Powhatans. This vocabulary was taken by Mr. John Woods, formerly professor of mathematics in William & Mary College. I do not know whether vocabilaries of these Tribes or of some of them might not have been among those I formerly sent you, in that case this may still be of service by collecting their orthographies. I tender you constant assurances of my friendship & respect.</p>
          <p>(signed by)</p>
                    <p>Thomas Jefferson</p>
        </>,
              ];

      const totalPages = pages.length;

      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Our Language: Dar-sun-ke (The Tongue)</h2>
          
          <div className="my-4">
            {pages[currentPage - 1]}
          </div>

          <div className="flex justify-between items-center mt-8 not-prose">
            <Button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>
              Previous
            </Button>
            <span>Page {currentPage} of {totalPages}</span>
            <Button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>
              Next
            </Button>
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

    if (slug === "constitution-bylaws") {
      const [currentPage, setCurrentPage] = useState(1);

      const pages = [
        // Page 1
        <>
          <h3 className="text-primary">PREAMBLE</h3>
          <p>We, the descendants of the Cheroenhaka (Nottoway) Indian Nation, of Virginia, whose last known “Reservations Lands’ were located in Southampton County and within the same jurisdiction do now lodge, in order to preserve, enrich and protect our tribal culture, traditions and history, promote our general welfare and secure to ourselves and our posterity and that of our children, the power to exercise certain rights of self government consistent with Federal, State and local laws–do ordain and establish this Constitution as the governing document of the Cheroenhaka (Nottoway) Indian Nation of Virginia. The term NATION as used in this Constitution is the same as TRIBE.</p>
          <h3 className="text-primary">ARTICLE I – NAME</h3>
          <p>The name of this Nation (Tribe) shall be the Cheroenhaka (Nottoway) Indian Tribe, Southampton County, Virginia.</p>
          <h3 className="text-primary">ARTICLE II – JURISDICTION</h3>
          <p>The jurisdiction of the Cheroenhaka (Nottoway) Indian Nation extends within the ethno-historical geographical contact boundaries of Southeastern Virginia, inclusive to the Virginia Counties of Southampton, Isle of Wight, Sussex, Greenville, Brunswick, Surry, and Nottoway; to include, Northampton and Gates County, North Carolina.</p>
        </>,
        // Page 2
        <>
          <h3 className="text-primary">ARTICLE III – CITIZENSHIP</h3>
          <h4>Section 1:</h4>
          <p>By this Constitution, all lineal descendents of the historical Cheroenhaka (Nottoway) Indian Nation who can trace, “via a paper trail,” their blood line to an ethno-historic Cheroenhaka (Nottoway) Indian Descendant as listed on one or more of the following documents:</p>
          <ul>
            <li>The July 18, 1808 Special Nottoway Indian Census of Southampton County, Virginia;</li>
            <li>Nottoway Indian Surnames as listed on Land Deeds transfers / sales of Nottoway Lands within Southampton and Isle of Wight Counties from 1735 thru 1840;</li>
            <li>Nottoway Indian Surnames listed on the February 5, 1849 Court Case as filed in Southampton County, Virginia – Nottoway Indian Tribe vs Jeremiah Cobb;</li>
            <li>those Nottoway Indian Surnames as listed on the 1803 and 1819 to1850 Free Negro and Mulatto Census of Saint Luke’s Parish in Southampton County Virginia; the US Census</li>
            <li>Cheroenhaka (Nottoway) Indian Tribal Surname Roster, shall be entitled to membership in the Cheroenhaka (Nottoway) Indian Nation, Southampton County, Virginia.</li>
            <li>And any child under the age of 18 born to an enrolled member of the Tribe will be automatically recognized as a full tribal member</li>
          </ul>
          <h4>Section 2:</h4>
          <p>Any person enrolled as a citizen of another Tribe, Band or Federal Recognized Indian Community shall not be allowed citizenship / membership in the Cheroenhaka (Nottoway) Indian Nation.</p>
        </>,
        // Page 3
        <>
          <h3 className="text-primary">ARTICLE III – CITIZENSHIP (continued)</h3>
          <h4>Section 3: Loss of Membership.</h4>
          <p>Membership in the Cheroenhaka (Nottoway) Indian Tribe may be lost by resignation in writing to the Tribal Council;</p>
          <ul>
            <li>Resignation must be in the form of a signed written letter to the Tribal Council and mailed to the tribal address</li>
            <li>The tribal secretary/roll keeper shall acknowledge the receipt of the letter of resignation and shall forward a letter of instructions advising the return of tribal property including the member’s tribal ID card.</li>
            <li>Following action taken by the tribal council, the member’s name shall be removed from the active roll of the tribe and the member notified of said action. Membership application, and oath of allegiance will then be placed in the tribe’s inactive roll files</li>
            <li>Discovery of dual enrollment of the member with another Indian tribe.</li>
            <li>Upon proof of lack of eligibility for enrollment.</li>
            <li>Failure to perform duties of elected office.</li>
          </ul>
          <h4>Section 4: Reinstatement.</h4>
          <p>Reinstatement of any former Cheroenhaka (Nottoway) Indian Tribal Member shall be initiated by written application to the tribal membership committee which shall upon proper investigation, make a recommendation to the tribal council for its consideration by proper vote, reinstatement or denial. The tribal council shall have the power to enact ordinances governing future citizenship and loss of citizenship.</p>
        </>,
        // Page 4
        <>
          <h3 className="text-primary">ARTICLE III – CITIZENSHIP (continued)</h3>
          <h4>Section 5: Tribal Cards.</h4>
          <p>All citizens of the Cheroenhaka (Nottoway) Indian Nation shall be assigned a Roll Number, listed on the Tribal Roster and issued a pictured Tribal ID Card.Secondly, there shall be established a Cheroenhaka (Nottoway) Indian Surname Roster, kept by the Tribal Roll Keeper, to be used by the membership committee for the inclusion of any Cheroenhaka (Nottoway) Indian “Descendant” seeking membership who presents the necessary evidence of eligibility for registration on the Tribal Rolls.</p>
          <h4>Section 6: Adoption.</h4>
          <p>The tribe may adopt persons of American Indian descent and may also grant honorary membership to persons of Non- Indian descent. Approval will be by majority vote of enrolled membership present at the General Body Business Meeting. Adopted persons are granted the right to vote, but cannot serve as part of the governing body. An honorary member may not hold office, and is not assigned a Tribal Roll Number.</p>
          <h4>Section 7: Oath of Allegiance.</h4>
          <p>All citizens of the Cheroenhaka (Nottoway) Indian Nation shall be bound by an oath of allegiance to the Tribe, the Constitution and its Bylaws. Any violation of said oath shall be grounds for termination of citizenship, subject to a hearing by the Tribal Council.</p>
        </>,
        // Page 5
        <>
          <h3 className="text-primary">ARTICLE IV – GOVERNING BODY</h3>
          <h4>Section 1:</h4>
          <p>The governing body of the Cheroenhaka (Nottoway) Indian Nation shall be a Tribal Council, which shall consist of a Chief, a Vice Chief, a Secretary, a Treasurer, and Council Members at large. The number of council members shall be determined by the Tribal Council and specified in the Bylaws of the Tribe.</p>
          <h4>Section 2:</h4>
          <p>The Tribal Council shall have the power to enact ordinances, resolutions, or either means to promote the peace, health, education, morals, and welfare of the tribe and its members.</p>
          <h4>Section 3:</h4>
          <p>The Tribal Council shall meet at least once a month, at a time and place to be determined by the Council. Special meetings may be called by the Chief or by a majority of the Tribal Council. All members shall be notified of all meetings.</p>
        </>,
        // Page 6
        <>
          <h3 className="text-primary">ARTICLE V – ELECTIONS</h3>
          <h4>Section 1:</h4>
          <p>All enrolled members of the Cheroenhaka (Nottoway) Indian Nation who are 18 years of age or older shall have the right to vote in all tribal elections.</p>
          <h4>Section 2:</h4>
          <p>The election of Tribal Officers and Council Members shall be held every four years, at a time and place to be determined by the Tribal Council and specified in the Bylaws of the Tribe.</p>
          <h4>Section 3:</h4>
          <p>All candidates for office shall be enrolled members of the Cheroenhaka (Nottoway) Indian Nation and shall meet the qualifications for office as specified in the Bylaws of the Tribe.</p>
        </>,
        // Page 7
        <>
          <h3 className="text-primary">ARTICLE VI – DUTIES OF OFFICERS</h3>
          <h4>Section 1: The Chief</h4>
          <p>The Chief shall be the principal officer of the Cheroenhaka (Nottoway) Indian Nation and shall preside at all meetings of the Tribal Council and the General Body. The Chief shall have general supervision of the affairs of the Tribe and shall perform such other duties as may be prescribed by the Tribal Council.</p>
          <h4>Section 2: The Vice Chief</h4>
          <p>The Vice Chief shall assist the Chief in the performance of his or her duties and shall, in the absence or disability of the Chief, perform the duties of the Chief.</p>
          <h4>Section 3: The Secretary</h4>
          <p>The Secretary shall be responsible for keeping the minutes of all meetings of the Tribal Council and the General Body, and shall be the custodian of the tribal records.</p>
          <h4>Section 4: The Treasurer</h4>
          <p>The Treasurer shall be responsible for the receipt and disbursement of all tribal funds, and shall keep accurate and complete records of all financial transactions.</p>
        </>,
        // Page 8
        <>
          <h3 className="text-primary">ARTICLE VII – VACANCIES AND REMOVAL FROM OFFICE</h3>
          <h4>Section 1:</h4>
          <p>Any vacancy in an office or on the Tribal Council shall be filled by appointment by the Chief, subject to the approval of the Tribal Council, until the next regular election.</p>
          <h4>Section 2:</h4>
          <p>Any elected official may be removed from office for cause, by a two-thirds vote of the Tribal Council. The accused shall be given a written statement of the charges against him or her and shall have the right to a hearing before the Tribal Council.</p>
        </>,
        // Page 9
        <>
          <h3 className="text-primary">ARTICLE VIII – AMENDMENTS</h3>
          <h4>Section 1:</h4>
          <p>This Constitution may be amended by a two-thirds vote of the enrolled members of the Cheroenhaka (Nottoway) Indian Nation who are present and voting at a General Body meeting called for that purpose, provided that the proposed amendment has been submitted in writing to the Tribal Council at least 30 days prior to the meeting.</p>
        </>,
        // Page 10
        <>
          <h3 className="text-primary">ARTICLE IX – BYLAWS</h3>
          <h4>Section 1:</h4>
          <p>The Tribal Council shall have the power to adopt Bylaws for the Cheroenhaka (Nottoway) Indian Nation, which shall be consistent with this Constitution. The Bylaws may be amended by a majority vote of the Tribal Council.</p>
        </>,
        // Page 11
        <>
          <h3 className="text-primary">ARTICLE X – DISSOLUTION</h3>
          <h4>Section 1:</h4>
          <p>In the event of the dissolution of the Cheroenhaka (Nottoway) Indian Nation, any assets of the Tribe shall be distributed to a non-profit organization that is exempt from federal income tax under section 501(c)(3) of the Internal Revenue Code.</p>
        </>,
        // Page 12
        <>
          <h3 className="text-primary">ARTICLE XI – TRIBAL SEAL AND LOGO</h3>
          <h4>Section 1:</h4>
          <p>The Tribal Council shall adopt a tribal seal and logo, which shall be the official emblem of the Cheroenhaka (Nottoway) Indian Nation.</p>
        </>,
        // Page 13
        <>
          <h3 className="text-primary">ARTICLE XII – SOVEREIGN IMMUNITY</h3>
          <h4>Section 1:</h4>
          <p>The Cheroenhaka (Nottoway) Indian Nation shall be immune from suit in any court, except to the extent that the Tribal Council expressly waives its sovereign immunity. The Tribe shall not be liable for the acts or omissions of its officers, employees, or agents, except to the extent that such liability is expressly provided for by tribal law.</p>
        </>,
        // Page 14
        <>
          <h3 className="text-primary">ARTICLE XIII – SAVINGS CLAUSE</h3>
          <h4>Section 1:</h4>
          <p>If any provision of this Constitution shall be held invalid, the remainder of the Constitution shall not be affected thereby.</p>
        </>,
        // Page 15
        <>
          <h3 className="text-primary">ARTICLE XIV – ADOPTION</h3>
          <h4>Section 1:</h4>
          <p>This Constitution shall be effective upon its adoption by a majority vote of the enrolled members of the Cheroenhaka (Nottoway) Indian Nation who are present and voting at a General Body meeting called for that purpose.</p>
        </>,
        // Page 16
        <>
          <h3 className="text-primary">ARTICLE XV – AMENDMENTS</h3>
          <h4>Section 1:</h4>
          <p>This Constitution and Bylaws may be amended by a majority vote of the qualified voters of the tribe voting at an election called for that purpose providing that the amendment has/have been proposed and reviewed by the By-laws Committee and presented to the Tribal Council for approval.</p>
        </>,
        // Page 17
        <>
          <h3 className="text-primary">ARTICLE XVI – DISSOLUTION</h3>
          <h4>Section 1:</h4>
          <p>Should the Cheroenhaka (Nottoway) Indian Tribe be dissolved, any remaining capital assets shall be liquidated and dispersed equally to all active enrolled tribal members in good standing with the tribe.</p>
        </>,
        // Page 18
        <>
          <h3 className="text-primary">APPENDIX A: TRIBAL ROLL</h3>
          <p>The official roll of the Cheroenhaka (Nottoway) Indian Nation shall be maintained by the Tribal Secretary/Roll Keeper and shall be updated on a regular basis.</p>
        </>,
        // Page 19
        <>
          <h3 className="text-primary">APPENDIX B: OATH OF ALLEGIANCE</h3>
          <p>I, [full name], do solemnly swear (or affirm) that I will support and defend the Constitution and Bylaws of the Cheroenhaka (Nottoway) Indian Nation, and that I will faithfully discharge the duties of a citizen of the Cheroenhaka (Nottoway) Indian Nation to the best of my ability, so help me God.</p>
        </>,
        // Page 20
        <>
          <h3 className="text-primary">BYLAWS</h3>
          <h4>ARTICLE I – TRIBAL COUNCIL</h4>
          <p>Section 1: The Tribal Council shall consist of seven (7) members: the Chief, the Vice Chief, the Secretary, the Treasurer, and three (3) Council Members at large.</p>
          <p>Section 2: The Tribal Council shall be the governing body of the Cheroenhaka (Nottoway) Indian Nation.</p>
        </>,
        // Page 21
        <>
          <h3 className="text-primary">BYLAWS (continued)</h3>
          <h4>ARTICLE II – MEETINGS</h4>
          <p>Section 1: The Tribal Council shall meet at least once a month. The date, time, and place of the meetings shall be determined by the Tribal Council.</p>
          <p>Section 2: Special meetings of the Tribal Council may be called by the Chief or by a majority of the Tribal Council. All members shall be notified of all special meetings at least 24 hours in advance.</p>
          <p>Section 3: A quorum for the transaction of business at any meeting of the Tribal Council shall consist of a majority of the members of the Council.</p>
        </>,
        // Page 22
        <>
          <h3 className="text-primary">BYLAWS (continued)</h3>
          <h4>ARTICLE III – ELECTIONS</h4>
          <p>Section 1: Elections shall be held every four (4) years on the first Saturday in December.</p>
          <p>Section 2: An election committee shall be appointed by the Tribal Council at least 60 days prior to the election.</p>
          <p>Section 3: The election committee shall be responsible for conducting the election in a fair and impartial manner.</p>
        </>
      ];

      const totalPages = pages.length;

      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Constitution & Bylaws</h2>
          <p className="text-sm text-muted-foreground">Approved December 7, 2002 | Revised January 14, 2006</p>
          
          <div className="my-4">
            {pages[currentPage - 1]}
          </div>

          <div className="flex justify-between items-center mt-8 not-prose">
            <Button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>
              Previous
            </Button>
            <span>Page {currentPage} of {totalPages}</span>
            <Button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>
              Next
            </Button>
          </div>
        </div>
      );
    }

    if (slug === "ethno-historic-snapshot") {
      const [currentPage, setCurrentPage] = useState(1);

      const pages = [
        // Page 1
        <>
          <p>The Hand Site Excavation (44SN22) – in Southampton County carbon dates the ancestors of the Cheroenhaka (Nottoway) Indian Tribe of Southampton County, Virginia to around 1580. It is believed this site existed in 700 AD. NOTE: On November 2, 2009, a State Historical Marker commemorating the Hand Site (44SN22), was placed on the corner of General Thomas Hwy and Hansom Road in Southampton County. As approved by DHR, The marker notes that the site was “long claimed” by the Cheroenhaka (Nottoway).</p>
          <p>The Cheroenhaka (Nottoway) Indian Tribe made first ethno-historic contact with the English in 1607-1608 in what is now Nottoway County, Virginia. The English were looking for information germane to Roanoke Island…the “Lost Colony.”</p>
          <p>In 1608, Nathaniel Powell and Anas Todkill met the Cheroenhaka (Nottoway) Indians at a village call Tomihitton in Nottoway County looking for information reference the Roanoke Island survivors / the “Lost Colony of 1585.</p>
          <p>In 1607 / 1608 the tribe was called Man-goaks or Men-gwe by the Powhatan Confederation’s “Algonquian Speakers” and further listed in the upper left hand quadrant on Capt. John Smith’s 1607 map of Virginia by the same name in what is now Nottoway County as such.</p>
          <p>The Colonials gave names to other Indian Tribes based on what the Indians they had first contact with called other tribes; such as, the Algonquian Speakers calling the Cheroenhaka, NA-DA-WA or Nottoway as perceived by the Colonials.</p>
          <p>In the Seventeen Century, Virginia Indians (Natives) were divided into three language groups: Algonquian Speakers, Siouan Speakers and Iroquoian Speakers.</p>
          <p>In the Seventeen Century, the Iroquoian Speaking Tribes occupied lands east of the Fall Line on the inner Coastal Plains of Southeastern Virginia. These tribes were the Cheroenhaka (Nottoway), the Meherrin and the Tuscarora.</p>
        </>,
        // Page 2
        <>
          <p>In 1650 per the diary entries of James Edward Bland, the Cheroenhaka (Nottoway) Indians were called by the Algonquian Speakers as NA-DA-WA (meaning snake, enemy, stealthy, in their Algonquian language) which the Colonials reverted to Nottoway.</p>
          <p>August 1650 Bland encountered two Cheroenhaka (Nottoway) Indian Villages: The first town located in what is now Sussex County near Rowantee Branch / Creek was “Chounteroute Town.” At that time Chounteroute (Cho-un-te-roun-te) was King /Chief of the Cheroenhaka (Nottoways). The second town, Tonnatorah, was located on the south side of the Nottoway River where the current Sussex – Greenville County line meets the River. (Jo-ke).</p>
          <p>The true name of the “Nottoway” Indian is Cheroenhaka (Che-ro-en-ha-ka), meaning “People at the Fork of the Stream.” The tribe’s lodging area was where the Nottoway River fork with The Blackwater River to form the Chowan River, in our tribal language (Dar-sunke) we say Onos-chi-oke Jo-ke (a Great River of Water). Thus “People at the Fork of the Steam.”</p>
          <p>The name Cheroenhaka is noted in the papers of Lewis Binford, in the book by Albert Gallatin, the papers of James Tresevant (Trezevant), Esq. and the book by Gary M. Williams (Sussex County VA, A Heritage Recalled By The Land).</p>
          <p>The War Department Papers of 1796 refer to the Nottoway as Cheroenhaka. The Honorable James Tresevant (Trezevant) in 1831 stated that the true name of the Nottoway Indians is Cheroenhaka. (Che-ro-en-ha-ka) He also compile as second recording of the Cheroenhaka (Nottoway) Indian’s vocabulary.</p>
        </>,
        // Page 3
        <>
          <p>The Cheroenhaka (Nottoway) Indian Tribe’s King and Great Men / Chief Men signed three treaties: The Treaty of 1646; 1677 and a STAND ALONE Treaty of February 27th, 1713. On February 27, 1713 Colonial Provisional LT Gov. Alexander Spotswood signed a Stand Alone Treaty with the Cheroenhaka (Nottoway) Indian Tribe’s King /Chief “Ouracoorass Teerheer”, AKA William Edmund (sometimes spelled Edmond), as called by the Colonials. Said Treaty has a “Successor Clause.” Our tribal government (Council) contends that the Successor Clause meant that the recognized relationship the tribe had with the Colonials from 1713 to1775 continued with the Commonwealth of Virginia beginning in 1776 and the Federal Government in 1781 to the present time.</p>
          <p>May 1676: Tribal Warriors of the Cheroenhaka (Nottoway) Indian Tribe joined forces with Bacon in what became known as the infamous Nathaniel Bacon’s Rebellion of May 1676 resulting in the downfall of the Occaneechee Indians at Occaneechee Island / on the Roanoke River. Bacon’s Rebellion was the catalyst that lead to the Woodland Plantation Treaty of 1677.</p>
          <p>In the mid 1680s, the Cheroenhaka (Nottoway) Indian Tribe, due to encroachment by the Colonials and to avoid war with other tribes, moved from the Nottoway Town of Ta-ma-hit-ton in Nottoway County / Tonnatorah in Sussex County to the mouth of the Assamoosick Swamp in what is now Surry County and again in the mid 1690s moved further down the Assamoosick Swamp.</p>
        </>,
      ];

      const totalPages = pages.length;

      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Ethno-Historic Snapshot</h2>
                    <div className="flex items-center gap-4">
            <img src="/images/chief-signature.png" alt="Chief Red Hawk Signature" className="h-12" />
            <p className="text-sm text-muted-foreground m-0">Researched & Compiled by: Chief Walt “Red Hawk” Brown, BS, MS, (Tribal Historian) | Updated December 31, 2022 ©</p>
          </div>
          
          <div className="my-4">
            {pages[currentPage - 1]}
          </div>

          <div className="flex justify-between items-center mt-8 not-prose">
            <Button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>
              Previous
            </Button>
            <span>Page {currentPage} of {totalPages}</span>
            <Button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>
              Next
            </Button>
          </div>
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