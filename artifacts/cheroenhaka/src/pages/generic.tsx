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
    if (slug === "ethno-historic-snapshot") {
      const [currentPage, setCurrentPage] = useState(1);

      const pages = [
        // Page 1
        <>
          <p>The Hand Site Excavation (44SN22) – in Southampton County carbon dates the ancestors of the Cheroenhaka (Nottoway) Indian Tribe of Southampton County, Virginia to around 1580. It is believed this site existed in 700 AD. NOTE: On November 2, 2009, a State Historical Marker commemorating the Hand Site (44SN22), was placed on the corner of General Thomas Hwy and Hansom Road in Southampton County. As approved by DHR, The marker notes that the site was “long claimed” by the Cheroenhaka (Nottoway).</p>
          <p>The Cheroenhaka (Nottoway) Indian Tribe made first ethno-historic contact with the English in 1607-1608 in what is now Nottoway County, Virginia. The English were looking for information germane to Roanoke Island…the “Lost Colony.”</p>
          <p>In 1608, Nathaniel Powell and Anas Todkill met the Cheroenhaka (Nottoway) Indians at a village call Tomihitton in Nottoway County looking for information reference the Roanoke Island survivors / the “Lost Colony of 1585.</p>
          <p>In 1607 / 1608 the tribe was called Man-goaks or Men-gwe by the Powhatan Confederation’s “Algonquian Speakers” and further listed in the upper left hand quadrant on Capt. John Smith’s 1607 map of Virginia by the same name in what is now Nottoway County as such.</p>
        </>,
        // Page 2
        <>
          <p>The Colonials gave names to other Indian Tribes based on what the Indians they had first contact with called other tribes; such as, the Algonquian Speakers calling the Cheroenhaka, NA-DA-WA or Nottoway as perceived by the Colonials.</p>
          <p>In the Seventeen Century, Virginia Indians (Natives) were divided into three language groups: Algonquian Speakers, Siouan Speakers and Iroquoian Speakers.</p>
          <p>In the Seventeen Century, the Iroquoian Speaking Tribes occupied lands east of the Fall Line on the inner Coastal Plains of Southeastern Virginia. These tribes were the Cheroenhaka (Nottoway), the Meherrin and the Tuscarora.</p>
          <p>In 1650 per the diary entries of James Edward Bland, the Cheroenhaka (Nottoway) Indians were called by the Algonquian Speakers as NA-DA-WA (meaning snake, enemy, stealthy, in their Algonquian language) which the Colonials reverted to Nottoway.</p>
        </>,
        // Page 3
        <>
          <p>August 1650 Bland encountered two Cheroenhaka (Nottoway) Indian Villages: The first town located in what is now Sussex County near Rowantee Branch / Creek was “Chounteroute Town.” At that time Chounteroute (Cho-un-te-roun-te) was King /Chief of the Cheroenhaka (Nottoways). The second town, Tonnatorah, was located on the south side of the Nottoway River where the current Sussex – Greenville County line meets the River. (Jo-ke).</p>
          <p>The true name of the “Nottoway” Indian is Cheroenhaka (Che-ro-en-ha-ka), meaning “People at the Fork of the Stream.” The tribe’s lodging area was where the Nottoway River fork with The Blackwater River to form the Chowan River, in our tribal language (Dar-sunke) we say Onos-chi-oke Jo-ke (a Great River of Water). Thus “People at the Fork of the Steam.” The name Cheroenhaka is noted in the papers of Lewis Binford, in the book by Albert Gallatin, the papers of James Tresevant (Trezevant), Esq. and the book by Gary M. Williams (Sussex County VA, A Heritage Recalled By The Land).</p>
        </>,
        // Page 4
        <>
          <p>The War Department Papers of 1796 refer to the Nottoway as Cheroenhaka. The Honorable James Tresevant (Trezevant) in 1831 stated that the true name of the Nottoway Indians is Cheroenhaka. (Che-ro-en-ha-ka) He also compile as second recording of the Cheroenhaka (Nottoway) Indian’s vocabulary.</p>
          <p>The Cheroenhaka (Nottoway) Indian Tribe’s King and Great Men / Chief Men signed three treaties: The Treaty of 1646; 1677 and a STAND ALONE Treaty of February 27th, 1713. On February 27, 1713 Colonial Provisional LT Gov. Alexander Spotswood signed a Stand Alone Treaty with the Cheroenhaka (Nottoway) Indian Tribe’s King /Chief “Ouracoorass Teerheer”, AKA William Edmund (sometimes spelled Edmond), as called by the Colonials. Said Treaty has a “Successor Clause.” Our tribal government (Council) contends that the Successor Clause meant that the recognized relationship the tribe had with the Colonials from 1713 to1775 continued with the Commonwealth of Virginia beginning in 1776 and the Federal Government in 1781 to the present time.</p>
        </>,
        // Page 5
        <>
          <p>May 1676: Tribal Warriors of the Cheroenhaka (Nottoway) Indian Tribe joined forces with Bacon in what became known as the infamous Nathaniel Bacon’s Rebellion of May 1676 resulting in the downfall of the Occaneechee Indians at Occaneechee Island / on the Roanoke River. Bacon’s Rebellion was the catalyst that lead to the Woodland Plantation Treaty of 1677.</p>
          <p>In the mid 1680s, the Cheroenhaka (Nottoway) Indian Tribe, due to encroachment by the Colonials and to avoid war with other tribes, moved from the Nottoway Town of Ta-ma-hit-ton in Nottoway County / Tonnatorah in Sussex County to the mouth of the Assamoosick Swamp in what is now Surry County and again in the mid 1690s moved further down the Assamoosick Swanp to what is now Courtland (formally Jerusalem), in Southampton County.</p>
        </>,
        // Page 6
        <>
          <p>In 1705, the House of Burgess granted two tracks of “Reservation Land” to the Cheroenhaka (Nottoway) Indian Tribe—the Circle Track (18,000 acres) and Square Track (23,000 acres) totaling some 41,000 acres of Reservation Land. The two tracks of land fell within the confines of what was then Isle of Wight County—now Southampton and Sussex Counties.</p>
          <p>On July 1, 1705, the General Assembly of Virginia passed an act preventing Indians from selling their land.</p>
        </>,
        // Page 7
        <>
          <p>In 1711, Colonial LT Governor Alexander Spotswood met with the Cheroenhaka (Nottoway) Indians and offered forgiveness of Treaty Tribute if the Cheroenhaka (Nottoway) would send their sons to the Brafferton, a school for Indians at the College of William and Mary in Williamsburg, Virginia.</p>
          <p>Though the Cheroenhaka (Nottoway) were fearful that their sons would be sold into slavery, ethno-historic records document that LT Governor Spotswood reported in November 17, 1711, that two sons of the Cheroenhaka (Nottoway) Chief’s men were in fact attending the Brafferton. Cheroenhaka (Nottoway) Surnames continued to appear on the enrollment roster of the Brafferton throughout the 1750s and 1760s.</p>
        </>,
        // Page 8
        <>
          <p>February 27, 1713, a third treaty signed by the tribe included a “Successor Clause,” which has the effect of continuing the relationship that the tribe had with the Colonials from 1713 to 1775 and with the Commonwealth beginning in 1776 to the present time.</p>
          <p>November 24, 1735, the “first” of many land transfer deeds for the “Circle Track of Land” transpired between the Colonials and the Cheroenhaka (Nottoway) Chief and would continue until the 1880s until both the Circle and Square Track of lands, totaling 41,000 acres of reservation lands were in the hands of the Europeans.</p>
        </>,
        // Page 9
        <>
          <p>In 1754, records show that some of the Cheroenhaka (Nottoway) Indians were attending the Brafferton School at William and Mary College. A letter from Rev. Thomas Dawson to the Bishop of London dated August 9, 1754, states that there are at present four Indian boys at the college, two of which are Nottoways, one a Pamunkey, and the other a Chickahominy.</p>
          <p>In July of 1808, the Governor of the Commonwealth of Virginia mandated a “Special” Cheroenhaka (Nottoway) Indian Census be taken of those Indians living on the remaining reservation lands (approx. 7,000 + acres) of the Cheroenhaka (Nottoway) Indian Reservation in what is now Courtland, Virginia, formerly named “Jerusalem.”</p>
        </>,
        // Page 10
        <>
          <p>In 1820, President Thomas Jefferson recorded the language of the Cheroenhaka (Nottoway). In the same year he stated in a Petersburg newspaper that the only remains in the state of Virginia of the formidable tribes are the Pamunkeys and Nottoways and a few Mattaponies.</p>
          <p>Between 1823 and 1824, William Bozeman, also known as Billy Woodson (the name listed in the Special Nottoway Indian Census of 1808) filed a petition in the Southampton County to have the remaining Nottoway reservation lands divided “free and simple” between the Nottoway Indians.</p>
        </>,
        // Page 11
        <>
          <p>In 1849, the Cheroenhaka (Nottoway) filed suit in Southampton County against Jeremiah Cobb over a land dispute. The lawsuit was filed by the tribe’s non-Indian Trustees, James W. Parker, G.N.W. Newsom, and Jessie Parham.</p>
          <p>On November 8, 1850, Judge Rich H. Baker ruled in favor of the Cheroenhaka (Nottoway) and awarded them $818.80 with interest from June 1, 1845. This successful lawsuit is further indication of the recognition of the tribal status of the Cheroenhaka (Nottoway) by the Commonwealth of Virginia.</p>
        </>,
        // Page 12
        <>
          <p>In the 1850s, as the final bits of reservation lands disappeared into the hands of Europeans, many tribal members relocated to what became known as “Artist Town,” near what is now Riverdale Road in Southampton County. These tribal members continued to live there as a tribal communal group up until the late 1990s sharing their Native American traditions and customs – hunting, trapping, fishing the Nottoway River, farming, and raising livestock.</p>
          <p>The excavation of the Hand Site Settlement in Southampton County, Virginia, between 1965 and 1966 and in 1969, resulted in the skeletal remains dating back to 1580 of approximately 132 graves of Cheroenhaka (Nottoway) Indians being removed and taken to the Smithsonian National Museum of Natural History in Washington, D.C.</p>
        </>,
        // Page 13
        <>
          <p>February 2002: The historic Cheroenhaka (Nottoway) Indian Tribe reorganized by bringing together family clusters of Cheroenhaka (Nottoway) Indian descendants still living in Southampton County, Virginia.</p>
          <p>May 2002: A tribal government was in place with the election of a chief and council members and the first Pow Wow and Gathering took place on July of the same year.</p>
          <p>This Pow Wow and Gathering has continued since then on the fourth weekend of July each year as a celebration of the “Green Corn Harvest.”</p>
        </>,
        // Page 14
        <>
          <p>December 7, 2002: The Cheroenhaka (Nottoway) Indian Tribe filed a letter of intent with the Bureau of Indian Affairs (BIA), Office of Federal Acknowledgement (OFA) announcing that it would be filing for Federal Recognition via the OFA.</p>
          <p>July 29, 2003: The Circuit Court of Southampton County, Virginia, issued a license to Chief Walter David “Red Hawk” Brown III of the Cheroenhaka (Nottoway), with all rights to perform the rites of matrimony for the Tribe in accordance with its customs and traditions.</p>
        </>,
        // Page 15
        <>
          <p>February 2004: The Cheroenhaka (Nottoway) Tribal Shield and Heraldry was copyrighted with the Library of Congress.</p>
          <p>July 24, 2004: The elected official body of Southampton County, Virginia, the Southampton County Board of Supervisors, issued under its seal, a Proclamation of Recognition of the Cheroenhaka (Nottoway) proclaiming July 24 of said year as “Cheroenhaka (Nottoway) Day.”</p>
        </>,
        // Page 16
        <>
          <p>June 3, 2005: The Waccamaw Indian tribe of South Carolina enacted a Joint Resolution recognizing the sovereignty of the Cheroenhaka (Nottoway).</p>
          <p>June 2005: The Cheroenhaka (Nottoway) Indian Tribal Heritage Foundation was incorporated as a nonprofit corporation titled the Cheroenhaka (Nottoway) Indian Tribe.</p>
        </>,
        // Page 17
        <>
          <p>January 18, 2006: Senate Joint Resolution NO. 152 was offered by Senator Louise Lucas extending state recognition to the Cheroenhaka (Nottoway) Indian Tribe.</p>
          <p>November 2, 2009: A State Historical Marker commemorating the Hand Site (44SN22), was placed on the corner of General Thomas Hwy and Hansom Road in Southampton County. As approved by DHR, The marker notes that the site was “long claimed” by the Cheroenhaka (Nottoway).</p>
        </>,
        // Page 18
        <>
          <p>March 30, 2010: The Cheroenhaka (Nottoway) Indian Tribe of Southampton County Virginia was officially recognized by the Commonwealth of Virginia via the passage of House Joint Resolution Number 171 and Senate Joint Resolution Number 127.</p>
          <p>November 5, 2010: The Cheroenhaka (Nottoway) Indian Tribe purchased 100 acres of its original Reservation Land in Southampton County, Virginia.</p>
        </>,
        // Page 19
        <>
          <p>July 2011: The Cheroenhaka (Nottoway) Indian Tribe celebrated its 10th Annual Green Corn Dance Powwow and Gathering on its Tribal Land located at 27345 Aquia Path, Courtland, VA 23837.</p>
          <p>July 2012: The 11th Annual Green Corn Dance Powwow and Gathering was held on the Tribal Land.</p>
        </>,
        // Page 20
        <>
          <p>July 2013: The 12th Annual Green Corn Dance Powwow and Gathering was held on the Tribal Land.</p>
          <p>November 2013: The Cheroenhaka (Nottoway) Indian Tribe celebrated its 1st Annual Corn Harvest Powwow and School Day on its Tribal Land.</p>
        </>,
        // Page 21
        <>
          <p>July 2014: The 13th Annual Green Corn Dance Powwow and Gathering was held on the Tribal Land.</p>
          <p>November 2014: The 2nd Annual Corn Harvest Powwow and School Day was held on the Tribal Land.</p>
        </>,
        // Page 22
        <>
          <p>April 23, 2015: The Cheroenhaka (Nottoway) Indian Tribe presented its 302nd Anniversary Spotswood Treaty Tribute to Virginia Governor Terry McAuliffe.</p>
          <p>July 2015: The 14th Annual Green Corn Dance Powwow and Gathering was held on the Tribal Land.</p>
          <p>November 2015: The 3rd Annual Corn Harvest Powwow and School Day was held on the Tribal Land.</p>
        </>,
        // Page 23
        <>
          <p>April 23, 2016: The Cheroenhaka (Nottoway) Indian Tribe presented its 303rd Anniversary Spotswood Treaty Tribute to Virginia Governor Terry McAuliffe.</p>
          <p>July 2016: The 15th Annual Green Corn Dance Powwow and Gathering was held on the Tribal Land.</p>
          <p>November 2016: The 4th Annual Corn Harvest Powwow and School Day was held on the Tribal Land.</p>
        </>,
        // Page 24
        <>
          <p>April 23, 2017: The Cheroenhaka (Nottoway) Indian Tribe presented its 304th Anniversary Spotswood Treaty Tribute to Virginia Governor Terry McAuliffe.</p>
          <p>July 2017: The 16th Annual Green Corn Dance Powwow and Gathering was held on the Tribal Land.</p>
          <p>November 2017: The 5th Annual Corn Harvest Powwow and School Day was held on the Tribal Land.</p>
        </>,
        // Page 25
        <>
          <p>January 2018: The Cheroenhaka (Nottoway) Indian Tribe received a grant from the Virginia Department of Housing and Community Development to construct a Tribal Community House on its Tribal Land.</p>
          <p>April 23, 2018: The Cheroenhaka (Nottoway) Indian Tribe presented its 305th Anniversary Spotswood Treaty Tribute to Virginia Governor Ralph Northam.</p>
        </>,
        // Page 26
        <>
          <p>July 2018: The 17th Annual Green Corn Dance Powwow and Gathering was held on the Tribal Land.</p>
          <p>November 2018: The 6th Annual Corn Harvest Powwow and School Day was held on the Tribal Land.</p>
        </>,
        // Page 27
        <>
          <p>April 23, 2019: The Cheroenhaka (Nottoway) Indian Tribe presented its 306th Anniversary Spotswood Treaty Tribute to Virginia Governor Ralph Northam.</p>
          <p>July 2019: The 18th Annual Green Corn Dance Powwow and Gathering was held on the Tribal Land.</p>
          <p>November 2019: The 7th Annual Corn Harvest Powwow and School Day was held on the Tribal Land.</p>
        </>,
        // Page 28
        <>
          <p>April 23, 2020: Due to the COVID-19 Pandemic, the 307th Anniversary Spotswood Treaty Tribute was mailed to Virginia Governor Ralph Northam.</p>
          <p>July 2020: The 19th Annual Green Corn Dance Powwow and Gathering was cancelled due to the COVID-19 Pandemic.</p>
          <p>November 2020: The 8th Annual Corn Harvest Powwow and School Day was cancelled due to the COVID-19 Pandemic.</p>
        </>,
        // Page 29
        <>
          <p>April 23, 2021: (Saint George Day), Chief Walt “Red Hawk” Brown and Tribal Chief Men, Clan Women, and Council Members of the Cheroenhaka (Nottoway) Indian Tribe of Southampton County VA presented the 308th Spotswood Peace Treaty Tribute of 3 Arrows wrapped in a Beaver Pelt and a Peake (Wampum Belt) to Virginia’s Governor, the Honorable Ralph Northam in front of the Mantel. (Spotswood Treaty with the Cheroenhaka (Nottoway) Indian Tribe Feb. 27, 1713)</p>
          <p>July 3, 2021: The 28th Cheroenhaka (Nottoway) Indian “Green Corn Dance” Powwow and Gathering took place on the tribe’s land located at Cattashowrock Town, 27345 Aquia Path, Courtland, VA 23837, celebrating 441 years of ethnohistory. Special guest were the Aztec Dancers and the Archeological Society of Virginia, Nansemond Chapter. International Tourist from China and Germany attended the powwow. The Virginia Governor’s office was represented and a welcome letter addressed to the tribe from Governor Ralph Northam was read aloud.</p>
        </>,
        // Page 30
        <>
          <p>September 17, 2021: the Cheroenhaka (Nottoway) Indian Tribe hosted its 4th Annual Native American Revival Crusade For Christ, Great Awakening of the Holy Spirit, on its tribal land – Cattashowrock Town. The Guest Evangelist was Evangelist Walt Brown. The Bezalel Dancers danced with banners for the Twelve Tribes of Israel. The Father, The Son and The Holy Spirit – The Great Mystery.</p>
          <p>September 17, 2021: After two years of working with Congressman McEachin’s and his staff germane to the tribe’s Congressional Federal Recognition Packet, providing numerous documents that were to be presented to the Congressional Committee on Natural Resources, a letter was sent to the tribe on Congressman McEachin’s letter head, under his signature, telling us that Congress, nor his staff, knew the process nor were they trained to push a packet for tribal Federal Recognition via Congress. Yet Congressman McEachin give testimony on the hill in favor of the six tribes that were Federal Recognized via Congress in 2018 and had recently vote yae in the House for the Lumbee Indian Nation of NC Federal Recognition Packet, via Congress, to pass the House and be sent to the Senate for Federal Recognition review.</p>
        </>,
        // Page 31
        <>
          <p>November 5, 6 & 7. 2021: The Cheroenhaka (Nottoway) Indian Tribe/Nation hosted its 28th Corn Harvest Intertribal Powwow and School Day, in celebration of 441 years of ethnohistory (1580-2021), on its Tribal Land – Cattashowrock Town. Elementary School Students and Teachers (Public, Private, Christian Academies and Home Schools), attended the School Day on November 5th. The key features were Cattashowrock Town (Palisade 17th Century replica Iroquoian Village, Language Booth, ASV Artifacts, the Hoop and Aztec Dancers. A represented from Virginia’s Governor Office read aloud a welcome letter addressed to the tribe and those attending the Powwow.</p>
          <p>November 18, 2021: Chief Walt Red Hawk Brown and other members of the Cheroenhaka (Nottoway) Indian Tribe, at the invite of the Virginia Governor and First Lady, attended the reception at the Governor’s Mansion in celebration of Native American Heritage Month.</p>
        </>,
        // Page 32
        <>
          <p>December 7, 2021: Chief Walt Red Hawk Brown gave a ZOOM Naïve American Presentation on the history of the Cheroenhaka (Nottoway) Indian Tribe to the Faculty and Staff at Longwood University.</p>
          <p>December 17, 2021: Follow-up in person, one hour, ZOOM meeting with Congressman McEachin, Virginia 4th Congressional District, questioning the nature of his letter of September 17, 2022 regarding our tribe seeking Tribal Federal Recognition via Congress. Discussed the impact of Walter Plecker’s Racial Integrity Act which negated out Native Communities in the early 1900s by classifying them as “Colored”; there by, providing a road block to justify, as required by the OFA, tribal autonomy in the 1900. Explained to Congressman McEachin that this was a show stopper with the Federal Recognition process within the OFA. Also pointed out that this is the same reason that the recently six tribes that were Federal Recognized via Congress in 2018 decided to seek the Congressional route and not go through the OFA process. Congressman McEachin final comments was that he would get back with us.</p>
        </>,
        // Page 33
        <>
          <p>January 15, 2022: Presentation on the State of the Address of the Tribe to the tribal council, tribal members and board members of the Cheroenhaka (Nottoway) Indian Tribe Heritage Foundation. Timeline new tribal goals for the tribe.</p>
          <p>March 8, 2022: Chief Walt Red Hawk Brown gave a ZOOM Native American Presentation on the history of the Cheroenhaka (Nottoway) Indian Tribe to all second graders within the Virginia Beach Public School System.</p>
        </>,
        // Page 34
        <>
          <p>March 17, 2022: Chief Walt Red Hawk Brown, Guest Speaker, and other Cheroenaka (Nottoway) Tribal members gave an “in person” ethno historic tribal presentation; to include, Native Dancing, to students and teachers at Greenville Elementary School for their “Spring in the Past with Native Americans.”</p>
          <p>April 9, 2022: Chief Walt Red Hawk Brown , accompanied by other tribal members of the Cheroenhaka (Nottoway) Indian Tribe, gave an” in person” presentation on the ethno-history of the Cheroenhaka (Nottoway) Indian Tribe of Southampton County Virginia to the Faculty, Staff an attending students at the City of Richmond Public Library of Law.</p>
        </>,
        // Page 35
        <>
          <p>April 14, 2022: Chief Walt Red Hawk Brown held Zoom Meeting with Congressman Bobby Scott, Virginia 3rd House District, regarding seeking Tribal Federal Recognition via the Congressional Route for the Cheroenhaka (Nottoway) Indian Tribe as did the recently six Virginia Tribes that were Federally Recognized via Congress in 2018.</p>
          <p>April 19, 2022: Chief Walt Red Hawk Brown, a life member of the Archeological Society of Virginia, and other tribal members, gave a Native History Presentation, with sources, to ASV Nansemond Chapter in Chesapeake, Virginia.</p>
        </>,
        // Page 36
        <>
          <p>April 22, 2022: Chief Walt “Red Hawk” Brown and Tribal Chief Men, Clan Women, and Council Members of the Cheroenhaka (Nottoway) Indian Tribe of Southampton County VA presented the 309th Spotswood Peace Treaty Tribute of 3 Peace Arrows wrapped in a Beaver Pelt and a Peake (Wampum Belt) to Virginia’s Governor, the Honorable Glenn Youngkin on the steps of the Governor’s Mansion. (Spotswood Treaty with the Cheroenhaka (Nottoway) Indian Tribe Feb. 27, 1713)</p>
          <p>April 27, 2022: Chief Walt Red Hawk Brown and Honorary Tribal Member Teresa Preston visited and viewed the Smith Fort Neal Collection of artifacts many of which were Cheroenhaka (Nottoway). The visit was at the invitation of the Preservation of Virginia’s Curator of Collections and Community Outreach manager to discuss how the artifacts would be maintained and handle.</p>
        </>,
        // Page 37
        <>
          <p>May 12, 2022: Chief Walt Red Hawk Brown, on behalf of the Cheroenhaka (Nottoway) Indian Tribe, gave a ZOOM presentation on Native History to some 200 2nd Grade Students and teachers of the Rockingham County Public Schools, namely John C. Myers Elementary School.</p>
          <p>May 13, 2022: Chief Walt Red Hawk Brown, Guest Speaker, along with other Cheroenhaka (Nottoway) Indian Tribal Members travel in the tribal van to Arlington, VA and gave an ”in person” ethno historic presentation on the Cheroenhaka (Nottoway) Indian Tribe, which included, Native Dancing and language, to 300 4th grade students and teachers at Discovery Elementary School.</p>
        </>,
        // Page 38
        <>
          <p>May 23, 2022: Chief Walt Red Hawk Brown and Tribal Member Kitty Boone of the Cheroenhaka (Nottoway) Indian Tribe met with two members from the Environmental Protection Agency (EPA), as requested by Chief Brown through the USDA, wherein, the EPA representatives identified those indigenous native plants growing on the 263 acres of tribal land, specifically along the tribal walking trails. Some 20 new species were discovered.</p>
          <p>July 2, 2022: The 29th Cheroenhaka (Nottoway) Indian “Green Corn Dance” Powwow and Gathering took place on the tribe’s land located at Cattashowrock Town, 27345 Aquia Path, Courtland, VA 23837. Special guest were the Aztec Dancers and the Archeological Society of Virginia, Nansemond Chapter. Elton “Spirit Panther” Ellis (Cherokee) and Jeannie “Enahdah” Cranford (Cherokee) were the Head Male and Head Female Dancers. Tourist from the East and West Coast attended the powwow. The Virginia Governor’s office was represented and a welcome letter was presented to tribe from Governor Youngkin. Dr. Rosa Atkins, from the Governor’s office of Diversity read the letter to those attending the Powwow.</p>
        </>,
        // Page 39
        <>
          <p>August 3, 2022: Chief Walt Red Hawk Brown of the Cheroenhaka (Nottoway) Indian Tribe was appointed by Virginia Governor Glen Youngkin to the Department of Conservation and Recreation Board. Chief Brown was sworn in on August 3, 2022 during a training scission at the Patrick Henry Bldg, Richmond, Virginia.</p>
          <p>September 17, 2022: the Cheroenhaka (Nottoway) Indian Tribe sponsored the 5th Annual Native American Revival Crusade for Christ at Cattashowrock Town. The guest Evangelist was Chief Steve Silverheels, son of Jay Silverheels, the actor that played Tonto on the old TV series “The Lone Ranger.” The Sacred Circle Drum from South Carolina provided the prayer songs and worship music.</p>
        </>,
        // Page 40
        <>
          <p>September 21, 2022: Chief Walt Red Hawk Brown and ASV Member Teresa Preston gave a Native Presentation, including displayed Artifacts dating back some 10,000 years, to the Hampton Roads Community Foundation. The presentation took place at Cattashowrock Town. Network the Hampton Roads Community Foundation Grant.</p>
          <p>October 10, 2022: Chief Walt Red Hawk Brown, Guest Speaker, accompanied by other members of the Cheroenhaka (Nottoway) Indian Tribe, and a representative from the ASV Nansemond Chapter, in full Native Regalia, gave a Native History Presentation to the faculty, staff and students of Elizabeth City State University in Elizabeth City, NC.</p>
        </>,
        // Page 41
        <>
          <p>October 29, 2022: Members of the Cheroenhaka (Nottoway) Indian Tribe set up a tribal booth at the Matoaka Celebration at Chano on the James.</p>
          <p>November 4th, 5th & 6th, 2022: The 30th Cheroenhaka (Nottoway) Indian Tribe School Day and Corn Harvest Powwow took placed at Cattashowrock Town. Special Guest were the Aztec Dancers and the ASV Nansemond Chapter. David “Spirit Hawk” Brown (Cheroenhaka) was the Head Male Dancer and Tina Mullins (Lumbee) was the Head Female Dancer. International Tourist from Korea and Germany, East and West Coast attended the Powwow.</p>
        </>,
        // Page 42
        <>
          <p>November 10, 2022: Chief Walt Red Hawk Brown, Guest Speaker, accompanied by other members of the Cheroenhaka (Nottoway) Indian Tribe, in full Native Regalia gave a Native American History Month presentation to the staff, faculty and student at Tidewater Community College, Chesapeake Campus. Tribal members danced to the drumming of Yapotoko Drum</p>
          <p>November 16, 2022: Chief Walt Red Hawk Brown, Guest Speaker, accompanied by members of the Cheroenhaka (Nottoway) Indian Tribe, in full Native Regalia, gave a Native American History Month presentation to the Command of the US Navy 10th Cyber Fleet in Suffolk VA.</p>
        </>,
        // Page 43
        <>
          <p>November 17, 2022: Chief Walt Red Hawk Brown, Guest Speaker, accompanied by members of the Cheroenhaka (Nottoway) Indian Tribe, in full Native Regalia, gave a Native American History Month Presentation to the 244th Quartermaster Battalion, Fort Lee, Virginia.</p>
          <p>November 29, 2022: Chief Walt Red Hawk Brown, Guest Speaker, accompanied by members of the Cheroenhaka (Nottoway) Indian Tribe, in full Native Regalia, gave a Native American History Month Presentation to the US Army Corps of Engineers, Norfolk, Virginia.</p>
        </>,
      ];

      const totalPages = pages.length;

      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Ethno-Historical / Current Snapshot of the Cheroenhaka (Nottoway) Indian Nation of Southhampton County, Virginia</h2>
          <p className="text-sm text-muted-foreground">Researched & Compiled by: Chief Walt “Red Hawk” Brown, BS, MS, (Tribal Historian)</p>
          <p className="text-sm text-muted-foreground">Updated December 31, 2022 ©</p>
          
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

    if (slug === "past") {
      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Past Tribal Events</h2>
          
          <h3 className="text-primary">2026</h3>
          <ul className="list-disc pl-8">
            <li>February 7, 2026: W&M 333rd Charter Day Picture</li>
            <li>January 17, 2026: Governor Spanberger Inauguration</li>
          </ul>

          <h3 className="text-primary">2025</h3>
          <ul className="list-disc pl-8">
            <li>November 16, 2025: 2025 Richmond Indigenous Peoples’ Day celebration at Powhatan Hill Park</li>
            <li>November 1 – 3, 2025: 36th Corn Harvest Powwow and School Day at Cattashowrock Town and the VA250 Revolutionary War Mobile Museum</li>
            <li>July 5, 2025: “Green Corn” Powwow</li>
            <li>April 2025: 312th Spotswood Treaty Tribute</li>
          </ul>

          <h3 className="text-primary">2024</h3>
          <ul className="list-disc pl-8">
            <li>September 21, 2024: Native American Jedeo/Christian Revival at Cattashowrock Town</li>
            <li>November 1 – 3, 2024: 35th Corn Harvest Powwow and School Day at Cattashowrock Town</li>
            <li>March 10, 2024: Department of Anthropology at W&M College</li>
            <li>July 6, 2024: 32nd Cheroenhaka ( Nottoway) Indian “Green Corn” Powwow</li>
            <li>April 23, 2024: Spotswood Treaty Tribute — Governor’s Photo Gallery</li>
            <li>Chief Brown Guest Speaker at SGA Tribal 8(a) Paternships Done Right Summit In Fairfax, VA On Behalf Of The Tribally Owned Cheroenhaka Nottoway Enterprise (CNE) Tribal “Super” 8(a) Company. Some 230 Mega Business Attended The Summit, Many Of Whom Were 8(a) Entities</li>
            <li>March 19, 2024: Brookwood Elementary School Tribal Native History Presentation</li>
          </ul>

          <h3 className="text-primary">2023</h3>
          <ul className="list-disc pl-8">
            <li>November 3, 4 & 5, 2023: 32nd Cheroenhaka (Nottoway) Corn Harvest Powwow & School Day</li>
            <li>310th Spotswood Treaty Tribute, April 21, 2024</li>
            <li>2023: Native American Revival Crusade</li>
            <li>July 1, 2023: 31st Cheroenhaka ( Nottoway) Indian “Green Corn” Powwow</li>
            <li>Fort Barfoot Name Changing</li>
            <li>Mar 29, 2023: Army Base Renamed for Native American War Hero, Replacing Confederate – The New York Times</li>
          </ul>

          <h3 className="text-primary">2022</h3>
          <ul className="list-disc pl-8">
            <li>November 5, 2022: Traditional Iroquioan Wedding</li>
            <li>November 4-6, 2022: 30th “Corn Harvest” Powwow and School Day</li>
            <li>September 17, 2022: 5th Annual Native American Revival</li>
            <li>July 2, 2022: 29th Cheroenhaka (Nottoway) Indian “Green Corn” Dance Powwow & Gathering</li>
          </ul>

          <h3 className="text-primary">2021</h3>
          <ul className="list-disc pl-8">
            <li>November 5, 6 & 7, 2021: 28th Cheroenhaka (Nottoway) Indian Intertribal “Corn Harvest” Powwow and School Day</li>
            <li>September 18, 2021: Native American Revival Crusade For Christ – The Great Awaking of the Holy Spirit</li>
            <li>April 23, 2021: 308th Spotswood Treaty Tribute To VA Governor – 3 Peace Arrows.</li>
            <li>July 3, 2021: 27th Cheroenhaka (Nottoway) Indian “Green Corn” Dance Powwow & Gathering. (9 AM to Sunset)</li>
          </ul>

          <h3 className="text-primary">2020</h3>
          <ul className="list-disc pl-8">
            <li>Nov 10, 2020: Daughters of the American Revolution in Williamsburg VA</li>
            <li>2020 July Powwow Flyer Cancellation(Due to Covid-19)</li>
            <li>Educator Information for Cheroenhaka Nottoway School Day Letter 2020</li>
            <li>2020 Presentation Certificates of Appreciation to Archaeology Society of VA</li>
          </ul>

          <h3 className="text-primary">2019</h3>
          <ul className="list-disc pl-8">
            <li>2019 Green Corn Powwow</li>
            <li>2018 Corn Harvest Powwow</li>
            <li>2019 May 17th,18th & 19th Cattashowrock Ancestral Knapp-In Gathering/BBQFundraiser</li>
            <li>Cheroenhaka (Nottoway) Indian Tribe 18th Annual Corn Harvest Powwow</li>
            <li>2019 November Corn Harvest School Day and Powwow November</li>
            <li>2019 Ancesteral Knapp-In Gathering May 17th,18th & 19th With Colonial Virginia Model A Ford Club (CVMAFC)</li>
            <li>3rd Annual 2019 September Revival Crusade for Christ</li>
          </ul>

          <h3 className="text-primary">2018</h3>
          <ul className="list-disc pl-8">
            <li>Cheroenhaka (Nottoway) Indian Tribe 17th Annual Powwow</li>
            <li>2018 November School Day and Powwow</li>
            <li>2018 May 9th 1st Annual Golf Tournament Franklin Va</li>
            <li>2018 May 25th to 28th Primitive Skills Gathering</li>
            <li>2018 September 8th 2nd Annual Native American Revival Crusade for Christ</li>
            <li>2018 November 19th Ft Lee Presentation</li>
            <li>2018 November 30th Ft Eustis Presentation</li>
          </ul>

          <h3 className="text-primary">2017</h3>
          <ul className="list-disc pl-8">
            <li>Cheroenhaka (Nottoway) Indian Tribe 16th Annual Powwow</li>
            <li>2017 May Native American Revival</li>
          </ul>

          <h3 className="text-primary">2016</h3>
          <ul className="list-disc pl-8">
            <li>Cheroenhaka (Nottoway) Indian Tribe 15th Annual Powwow</li>
            <li>2016 November School Day and Powwow</li>
            <li>2016 February 4th Great Bridge Daughters of the American Revolution</li>
            <li>2016 April 23rd 163 Acre Land Closing Ceremony</li>
            <li>2016 April 25th 303rd 1713 Spotswood Treaty Tribute</li>
          </ul>

          <h3 className="text-primary">2015</h3>
          <ul className="list-disc pl-8">
            <li>2015 November School Day And Powwow</li>
            <li>2015 November Military Sealift Command Presentation</li>
          </ul>

          <h3 className="text-primary">2014</h3>
          <ul className="list-disc pl-8">
            <li>Cheroenhaka (Nottoway) Indian Tribe 13th Annual Powwow</li>
            <li>2014 November School Day And Powwow</li>
            <li>2014 November 2nd Hampton Roads VDOT Unity Conference</li>
            <li>2014 November 18th USDA Presentation</li>
            <li>2014 November 23rd Pioneer Elementary School Presentation</li>
          </ul>

          <h3 className="text-primary">2013</h3>
          <ul className="list-disc pl-8">
            <li>Cheroenhaka (Nottoway) Indian Tribe 12th Annual Powwow</li>
            <li>Cheroenhaka (Nottoway) Indian Inter-Tribal “Corn Dance” Spring Festival Powwow</li>
            <li>2013 Cheroenhaka (Nottoway) Indian Tribe Annual School Day and Powwow</li>
            <li>Mortgage Burning Ceremony</li>
            <li>Governor McDonnell Signs Proclamation for American Indian Heritage Month November 8th 2013</li>
          </ul>

          <h3 className="text-primary">2012</h3>
          <ul className="list-disc pl-8">
            <li>Cheroenhaka (Nottoway) Indian Tribe 11th Annual Powwow</li>
            <li>2012 Tribal Educational Presentations</li>
          </ul>

          <h3 className="text-primary">2011</h3>
          <ul className="list-disc pl-8">
            <li>Hand Site Marker – November</li>
          </ul>
        </div>
      );
    }

    if (slug === "creator-heart-speaks") {
      const [currentPage, setCurrentPage] = useState(1);

      const pages = [
        // Page 1
        <>
          <h2 className="text-secondary">(Quaker-Hun-te’ EE Sun-Ke Was-we-kr)</h2>
          <p className="text-sm text-muted-foreground">By Red Hawk “Teerheer” aka Walt “Red Hawk” Brown, Chief, Cheroenhaka (Nottoway) Indian Tribe, Southampton County, Virginia</p>
          <blockquote className="border-l-4 border-accent bg-muted p-4 my-6">
            <p className="font-semibold italic">“May the Great Spirit guide your path in this walk of life, that you might make a difference in the walk of another.”</p>
          </blockquote>
          <p className="text-center font-bold">Edition One and Two,( 2004 and 2005), Of The Waskehee (WAS-KE-HEE)</p>
          <h3 className="text-primary">Foreword</h3>
          <p>The Cheroenhaka (Nottoway) Indian Tribe made first “ethnohistoric” contact with the English (Colonials) in 1608-09.</p>
          <div className="my-8">
            <img src="/images/1988-map.jpg" alt="1988 map showing location of Native American tribes in 1600" className="max-w-full lg:max-w-2xl mx-auto rounded-lg shadow-lg" />
            <p className="text-sm text-center mt-2 text-muted-foreground">1988 MAP PUBLISHED IN THE VIRGINIA ATLAS SHOWING THE LOCATION OF NATIVE AMERICAN TRIBES IN 1600, PRODUCED BY THREE PROFESSORS FROM RADFORD UNIVERSITY</p>
          </div>
          <p>“WE” were referred to as Mangoak, or Mengwe, by the Algonquian Tribes and later in 1650, per the dairy entries of James Edward Bland, referred to again by the Algonquian Tribes as “Na-da-wa” which reverted to” Nottoway” by the Colonials, and thus our derogatory name ”Nottoway” enters the annuals of Colonial History. In our native tongue, many words as recorded by Professor John Wood of W&M College in 1820, “WE” call ourselves Cheroenhaka (CHE-RO-EN-HA-KA and or Che-ro-ha-kah) – People At The Fork Of The Stream. WE lodged and hunted in the southeastern part of Virginia along the Nottoway and Blackwater Rivers as far as the Albemarle Sound.</p>
        </>,
        // Page 2
        <>
          <p>“WE” were signers of three treaties with the English / Colonial Government: The Treaties of 1646, 1677 and February 27, 1713 (with Successor Clause); wherein, Tribal Land was granted, the last of which was the “Circle” and “Square” Tract” (41, 000 Acres) located in what is now Southampton and Sussex Counties. A Commonwealth of Virginia directed 1808 “Special Nottoway Indian Census ( Executive Papers of July 1-22, 1808),” as conducted by Henry Blow, William Blow (descendants of former Nottoway Indian Trustee John Blow), and Samuel Blunt, all ”Trustees” to the Nottoway Tribe of Indians, listed many, but not all, of the Cheroenhaka (Nottoway) Indian Tribal Members that were living on said “Reservations Lands” in Southampton County, Virginia in the vicinity of Assamoosick Swamp and Indian Town Road, Courtland, Virginia. Due to conditions germane to an influx of English Settlers (encroachment – a 1677 and 1713-14 Treaty violation ) and other ”forced” economic conditions; to include, “Documentary and/or Paper Genocide,” wherein, ones’ race was changed (paper wise), to reflect a heritage other than American Indian, along with, the sale of tribal lands, some of which (sales) were contrary to the “1790 Indian Non-Intercourse Act” requiring interaction / intervention by the Federal Government in all sales of land between Indians and Citizens within the Commonwealth of Virginia, some Cheroenhaka (Nottoway) Tribal Members dispersed to other locations outside of Southampton County and even the state of Virginia. However, the majority of our people remained and continued to live in communal groups as a tribe; such as, the one in “Artist Town,” consisting of the Artist, Bozeman, Turners, Browns, and Williams, from the 1850s up to the late 1980s and early 1990s, and their descendants (as of this day) still remain in Southampton County, Virginia and other surrounding counties as members of the “Historic” Reorganized Cheroenhaka (Nottoway) Indian Tribe.</p>
        </>,
        // Page 3
        <>
          <p>During the early seventeenth century, Iroquoian speaking tribes occupied lands east of the Fall Line on the Inner Costal Plain of southern (southeastern) Virginia and North Carolina. During this early period of contact those tribes consisted of the Cheroenhaka (Nottoway); the Meherrin and the Tuscarora – all of which belonged to the Iroquoian linguistic family. Although we spoke a similar dialect and shared cultures we were not always consistent political allies. Boyce (1978:282) states that: “The ethnic and territorial boundaries of the Iroquoian people are confusing but there are significant factors of their identities.”</p>
          <p>My people, the Cheroenhaka (Nottoway) Indian Tribe have a richly “recorded” history within the Commonwealth of Virginia. “WE” first appeared in the ethno-historic record in 1608-1609 (James Mooney, estimated our population at 1,500 in 1600), when a group of Colonials from the Jamestown Colony traveled to what is now Nottoway County, Virginia to inquire about the fate of the Roanoke colony (Williams 1967:127). Upon arrival, their Powhatan Confederation’s guide(s) (Algonguian speakers) referred to the Cheroenhaka (Nottoway) as “Mangoak” or “Mengwe,” a derogatory name meaning stealthy, or treacherous, while we referred to ourselves as Cheroenhaka (CHE-RO-EN-HA-KA / CHERO-HA-KAH)), meaning “People At The Fork Of The Stream.” According to Floyd E. Painter, in his writing “The Last of the Nottoway,”(Archeological Society of Virginia, Quarterly Bulletin, Volume #15, June 1961, p.4) wrote, “ that most Indians were named by their neighboring Indians who came first in contact with the white man.”</p>
        </>,
        // Page 4
        <>
          <p>On a personal note, I have always known about my Cheroenhaka (Nottoway) Indian Heritage. As a young boy some forty-five years ago, my Grand Mother, Cora Lee (Artist) Brown, would tell me about our Indian Heritage. My Grand Mother would often refer to her Grand Mother, Eliza Jane (Turner) Artist, who was a full blooded Cheroenhaka (Nottoway) Indian. She (Eliza Jane) would tell my Grand Mother that we were Nottoway Indians and that we came from a place called “Artist Town.” My Grand Mother would also share with me that her Grand Father, Council Artist, was also a full blooded Cheroenhaka (Nottoway) Indian. As a young boy, I often saw my Great Grand Father Council Artist, as he lived to be 104 years old and died in 1960. He (Council) was the son of Pearson Artist who was the son of Exum Artist who was the son of Solomon Artist who was listed on the 1808 Special Nottoway Indian Census for Southampton County, Virginia. Exum Artist’s wife’s name was Caty (Turner) Artist (Southampton County Deed Book 31, p. 320, 1849) who was also a Cheroenhaka (Nottoway) Indian and daughter of Tom Turner who was listed on the 1808 Special Nottoway Indian Census.</p>
        </>,
        // Page 5
        <>
          <p>In continuing my Grand Mother’s story, she shared that when she was a little girl, her Grand Mother, Eliza Jane (Turner) Artist, would make her sit by the fire place and comb her long black hair, which came to her waist. If she did not comb it right, she would be made to do it over again. She talked about how they made their own lye soap and how they would use sassafras to make tea and how they would use the leaves of the sassafras tree to make “Gumbo.” My Grand Mother stated that they would use the green leaves of a Black Walnut Tree to dye their clothes black. My Grand Mother would often talk about her Grand Father Council Artist and how he would hunt and trap animals. She said that he would get up early in the morning and would be gone all day into the late evening hunting and trapping. She said that when he returned he would be loaded down with rabbits and other wild game. On many occasions, my Grand Mother would take me for a walk in the woods and show me different herbs that could be used for medicinal purposes. She would always tell me not to tell anybody what she was telling me. She would say, “Boy, don’t you go telling nobody what I’m telling you now, ya hear.” In retrospect, what she was saying was that it was not popular to be an Indian.</p>
        </>,
        // Page 6
        <>
          <p>The pictures that you see throughout this first and second edition of the Waskehee are of current members of the Cheroenhaka (Nottoway) Indian Tribe. Our Tribal Council has decided to publish this book of thoughts so as to leave a “Paper Trail” for our children and our children’s children, so that they will know from whence they came. In this book of thoughts, you will find poems and other writings from our Tribal Members, our Chief and our friends. I must admit that our writings might not be that of a professional writer, but they are from the heart. As our tribal members are part of a rich and vibrant culture, our writings will reflect our own unique individual personalities. It is my hope that you will enjoy our book of thoughts and that you will share it with others. We, the Cheroenhaka (Nottoway) Indian Tribe, are very proud of our heritage and we want to share it with you.</p>
          <p>Waneeshi (Thank You),</p>
          <p>Chief Walt “Red Hawk” Brown</p>
        </>,
        // Page 7
        <>
          <h3 className="text-primary">Creator My Heart Speaks</h3>
          <p className="italic">(Quaker-Hun-te’ EE Sun-Ke Was-we-kr)</p>
          <p className="italic">By Chief Walt “Red Hawk” Brown</p>
          <p>Creator, my heart speaks, but my words are few,<br/>My heart is heavy and my spirit is sad.<br/>Why do my people have to stand in line?<br/>Why can’t they see the sign?</p>
          <p>We are the first people of this land,<br/>Yet, we are the last to be recognized.<br/>We have a right to be free,<br/>Just like the eagle in the sky.</p>
          <p>Creator, my heart speaks, but my words are few,<br/>My heart is heavy and my spirit is sad.<br/>Why do my people have to stand in line?<br/>Why can’t they see the sign?</p>
          <p>Our culture is rich and our heritage is strong,<br/>We are a proud people, we have been here all along.<br/>We are the Cheroenhaka (Nottoway) Indian Tribe,<br/>And we will survive.</p>
        </>,
        // Page 8
        <>
          <h3 className="text-primary">My People</h3>
          <p className="italic">By Chief Walt “Red Hawk” Brown</p>
          <p>We are the Cheroenhaka (Nottoway) Indian Tribe of Southampton County, Virginia.<br/>We are the “People at the Fork of the Stream.”<br/>We are a proud people with a rich heritage.<br/>We are the first people of this land.</p>
          <p>Our ancestors were here long before the English came.<br/>They hunted and fished and farmed this land.<br/>They lived in harmony with nature.<br/>They were a spiritual people.</p>
          <p>Then the English came.<br/>They took our land and they took our lives.<br/>They tried to take our culture and our language.<br/>But they could not take our spirit.</p>
          <p>We are still here.<br/>We are the survivors.<br/>We are the Cheroenhaka (Nottoway) Indian Tribe.<br/>And we will always be here.</p>
        </>,
        // Page 9
        <>
          <h3 className="text-primary">We Are Still Here</h3>
          <p className="italic">By Chief Walt “Red Hawk” Brown</p>
          <p>We are still here, though many have tried to erase us.<br/>We are still here, though our land has been taken from us.<br/>We are still here, though our culture has been suppressed.</p>
          <p>We are the Cheroenhaka (Nottoway) Indian Tribe.<br/>We are a proud people with a rich heritage.<br/>We will not be forgotten.<br/>We will not be erased.</p>
          <p>We are still here.<br/>And we will always be here.</p>
        </>,
        // Page 10
        <>
          <h3 className="text-primary">A New Day</h3>
          <p className="italic">By Chief Walt “Red Hawk” Brown</p>
          <p>A new day is dawning for the Cheroenhaka (Nottoway) Indian Tribe.<br/>A new day of hope and a new day of promise.<br/>A new day of pride and a new day of recognition.</p>
          <p>We have been through many struggles,<br/>But we have never given up.<br/>We have always known who we are.<br/>And we have always been proud of our heritage.</p>
          <p>Now, the world is beginning to see us for who we are.<br/>They are beginning to see our strength and our resilience.<br/>They are beginning to see our beauty and our grace.</p>
          <p>We are the Cheroenhaka (Nottoway) Indian Tribe.<br/>And this is our new day.</p>
        </>,
        // Page 11
        <>
          <h3 className="text-primary">The Eagle</h3>
          <p className="italic">By Chief Walt “Red Hawk” Brown</p>
          <p>The eagle soars high above the earth,<br/>A symbol of freedom and strength.<br/>He sees all that is below him,<br/>And he knows all that is to come.</p>
          <p>The eagle is a sacred bird to our people.<br/>He is a messenger from the Creator.<br/>He brings us hope and he brings us guidance.<br/>He is a reminder that we are never alone.</p>
          <p>When you see an eagle, remember our people.<br/>Remember our strength and our resilience.<br/>Remember our beauty and our grace.<br/>And remember that we are still here.</p>
        </>,
        // Page 12
        <>
          <h3 className="text-primary">The Drum</h3>
          <p className="italic">By Chief Walt “Red Hawk” Brown</p>
          <p>The drum is the heartbeat of our people.<br/>It is the sound of our ancestors.<br/>It is the rhythm of our lives.</p>
          <p>The drum is a sacred instrument.<br/>It is used in our ceremonies and our celebrations.<br/>It is a way for us to connect with the Creator.<br/>It is a way for us to connect with each other.</p>
          <p>When you hear the drum, listen with your heart.<br/>Listen to the stories that it has to tell.<br/>Listen to the wisdom of our ancestors.<br/>And listen to the heartbeat of our people.</p>
        </>,
        // Page 13
        <>
          <h3 className="text-primary">The Circle</h3>
          <p className="italic">By Chief Walt “Red Hawk” Brown</p>
          <p>The circle is a sacred symbol to our people.<br/>It represents the circle of life,<br/>The four seasons,<br/>The four directions,<br/>And the four races of man.</p>
          <p>The circle is a symbol of unity.<br/>It is a symbol of strength.<br/>It is a symbol of our connection to all things.</p>
          <p>When you see a circle, remember our people.<br/>Remember our unity and our strength.<br/>Remember our connection to all things.<br/>And remember that we are all related.</p>
        </>,
        // Page 14
        <>
          <h3 className="text-primary">The Four Directions</h3>
          <p className="italic">By Chief Walt “Red Hawk” Brown</p>
          <p>The four directions are sacred to our people.<br/>They represent the four seasons,<br/>The four stages of life,<br/>And the four races of man.</p>
          <p>The east is the direction of the rising sun.<br/>It is the direction of new beginnings.<br/>It is the direction of birth.</p>
          <p>The south is the direction of the midday sun.<br/>It is the direction of growth.<br/>It is the direction of youth.</p>
          <p>The west is the direction of the setting sun.<br/>It is the direction of change.<br/>It is the direction of adulthood.</p>
          <p>The north is the direction of the winter sun.<br/>It is the direction of rest.<br/>It is the direction of old age.</p>
          <p>When you look to the four directions, remember our people.<br/>Remember our journey through life.<br/>Remember our connection to all things.<br/>And remember that we are all related.</p>
        </>,
        // Page 15
        <>
          <h3 className="text-primary">The Four Races of Man</h3>
          <p className="italic">By Chief Walt “Red Hawk” Brown</p>
          <p>The four races of man are sacred to our people.<br/>They represent the four directions,<br/>The four seasons,<br/>And the four stages of life.</p>
          <p>The red race is the race of the east.<br/>They are the keepers of the sacred fire.<br/>They are the people of the rising sun.</p>
          <p>The yellow race is the race of the south.<br/>They are the keepers of the sacred water.<br/>They are the people of the midday sun.</p>
          <p>The black race is the race of the west.<br/>They are the keepers of the sacred earth.<br/>They are the people of the setting sun.</p>
          <p>The white race is the race of the north.<br/>They are the keepers of the sacred air.<br/>They are the people of the winter sun.</p>
          <p>We are all related.<br/>We are all brothers and sisters.<br/>We are all children of the Creator.</p>
        </>,
        // Page 16
        <>
          <h3 className="text-primary">We Are All Related</h3>
          <p className="italic">By Chief Walt “Red Hawk” Brown</p>
          <p>We are all related.<br/>We are all brothers and sisters.<br/>We are all children of the Creator.</p>
          <p>We may have different skin colors,<br/>We may have different cultures,<br/>We may have different languages,<br/>But we are all one people.</p>
          <p>We must learn to live together in peace and harmony.<br/>We must learn to respect each other.<br/>We must learn to love each other.</p>
          <p>For we are all related.<br/>And we are all in this together.</p>
        </>
      ];

      const totalPages = pages.length;

      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Creator, My Heart Speaks</h2>
          
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

    if (slug === "us-congress-bill-alert-hr9630") {
      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">The Cheroenhaka (Nottoway) Indian Tribe of Virginia Federal Recognition Act</h2>
          <p className="text-sm text-muted-foreground">IN THE HOUSE OF REPRESENTATIVES<br/>September 17, 2024</p>
          <p>Mrs. Kiggans of Virginia introduced the following bill; which was referred to the Committee on Natural Resources</p>
          <hr className="my-8"/>
          <h3 className="text-primary text-center">A BILL</h3>
          <p>To extend Federal recognition to the Cheroenhaka (Nottoway) Indian Tribe of Virginia, and for other purposes.</p>
          <p><em>Be it enacted by the Senate and House of Representatives of the United States of America in Congress assembled,</em></p>
          
          <h4 className="font-bold">SECTION 1. Short title.</h4>
          <p>This Act may be cited as the “Cheroenhaka (Nottoway) Indian Tribe of Virginia Federal Recognition Act”.</p>

          <h4 className="font-bold">SEC. 2. Findings.</h4>
          <p>Congress finds as follows:</p>
          <ol className="list-decimal pl-8 space-y-2">
            <li>The Cheroenhaka-Nottoway has more than 300 Tribal citizens on its rolls, all of whom, via a paper trail, can document their genealogical line to an ethno-historic surname of the Cheroenhaka (Nottoway) Tribe.</li>
            <li>The Tribe owns 263 acres of “Tribal” land in Southampton County, Virginia, which is a part of its originally granted 41,000 acres by the Virginia House of Burgesses in 1705.</li>
            <li>The Virginia, the Racial Integrity Act of 1924, under the direction of the Virginia Bureau of Vital Statistics, reclassified American Indians to “colored” or “mulatto” This reclassification has created genealogical gaps, making it nearly impossible for Virginia Tribes to gain Federal recognition via the Bureau of Indian Affairs process.</li>
            <li>The Cheroenhaka (Nottoway) signed a stand alone treaty with Virginia’s Provincial Lieutenant Governor Alexander Spotswood on April 23, 1713, that required a “Peace Tribute” be delivered to the Governor of the Virginia on April 23rd annually.</li>
            <li>The Tribe has presented this tribute to the governor on the 299th, 300th, 301st, 302nd, 303rd, 304th, 305th, 306th, 307th, 308th, 309th, 310th, and 311th anniversaries of the treaty.</li>
            <li>The Cheroenhaka (Nottoway) were the only Tribe in the Commonwealth of Virginia to have a recorded Gubernatorially Mandated Special Census that took place on the Tribal reservation in 1808.</li>
            <li>The Cheroenhaka (Nottoway) are an officially recognized Tribe by the Commonwealth of Virginia.</li>
            <li>The Hand Site Excavation (44SN22)—in Southampton County carbon dates the ancestors of the Cheroenhaka (Nottoway) Indian Tribe of Southampton County, Virginia to around 1580. It is believed this site existed in 700 AD.</li>
            <li>The Cheroenhaka (Nottoway) Indian Tribe made first ethno-historic contact with the English in 1607–1608 in what is now Nottoway County, Virginia. The English were looking for information germane to Roanoke Island … the “Lost Colony”.</li>
            <li>In the Seventeenth Century, the Iroquoian Speaking Tribes occupied lands east of the Fall Line on the inner Coastal Plains of Southeastern Virginia. These tribes were the Cheroenhaka (Nottoway), the Meherrin and the Tuscarora.</li>
            <li>The Cheroenhaka (Nottoway) Indian Tribe’s King and Great Men/Chief Men signed three treaties: The Treaty of 1646; 1677 in addition to the above mentioned 1713, Spotswood Treaty.</li>
            <li>In 1705, the House of Burgess granted two tracks of “Reservation Land” to the Cheroenhaka (Nottoway) Indian Tribe—the Circle Track (18,000 acres) and Square Track (23,000 acres) totaling some 41,000 acres of Reservation Land. The two tracks of land fell within the confines of what was then Isle of Wight County—now Southampton and Sussex Counties.</li>
            <li>In July of 1808, the Governor of the Commonwealth of Virginia mandated a “Special” Cheroenhaka (Nottoway) Indian Census be taken of those Indians living on the remaining reservation lands (approx. 7,000 + acres) of the Cheroenhaka (Nottoway) Indian Reservation in what is now Courtland, Virginia, formerly named “Jerusalem”.</li>
            <li>In 1816, new trustees were appointed for the Cheroenhaka (Nottoway) Indians. These Trustees were empowered to make reasonable rules and regulations for the government of the tribe and for the expenditure of the money held in trust for them, which was to continue so long as any number of the tribe were living. Any funds remaining on hand were then to be paid into the public treasury.</li>
            <li>On December 7, 2002, the Cheroenhaka (Nottoway) Indian Tribe filed a letter of intent with the Bureau of Indian Affairs (BIA), Office of Federal Acknowledgement (OFA) announcing that it would be filing for Federal Recognition via the OFA.</li>
          </ol>

          <h4 className="font-bold">SEC. 3. Definitions.</h4>
          <p>In this Act:</p>
          <ol className="list-decimal pl-8 space-y-2">
            <li>SECRETARY.—The term “Secretary” means the Secretary of the Interior.</li>
            <li>TRIBAL CITIZEN.—The term “Tribal citizen” means—
              <ol className="list-alpha pl-6">
                <li>an individual who is an enrolled member of the Tribe as of the date of the enactment of this Act; and</li>
                <li>an individual who is placed on the membership rolls of the Tribe in accordance with this Act.</li>
              </ol>
            </li>
            <li>TRIBE.—The term “Tribe” means the Cheroenhaka (Nottoway) Indian Tribe of Virginia.</li>
          </ol>

          <h4 className="font-bold">SEC. 4. Federal recognition.</h4>
          <p>(a) Federal recognition.—</p>
          <ol className="list-decimal pl-8 space-y-2">
            <li>IN GENERAL.—Federal recognition is extended to the Tribe.</li>
            <li>APPLICABILITY OF LAWS.—All laws (including regulations) of the United States of general applicability to Indians or nations, tribes, or bands of Indians, including the Act of June 18, 1934 (25 U.S.C. 5101 et seq.), shall apply to the Tribe and its members.</li>
          </ol>
        </div>
      );
    }

    if (slug === "how-to-show-support") {
      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Instructions for Emailing Senators</h2>
          <p>Teresa Preston submitted the following advice on effectively emailing Senators in support of Cheroenhaka (Nottoway) recognition:</p>
          <p>Dear Walt,</p>
          <p>I just finished e-mailing every single Senator on the Rules Committee, as well as the Patron and Co-Patrons of SJR 152. I made each e-mail slightly different (not a form letter) and e-mailed them individually rather than a “copy to”. I kept it brief. In the ones to the Patron and co-patron and the Chair I mentioned my work on the 2007 county committee and the ASV 2007 committee.</p>
          <p>Here is an example of the shortest version I sent:</p>
          <blockquote className="border-l-4 border-accent bg-muted p-4 my-6">
            <p>Dear Senator Hanger,</p>
            <p>I support passage of Senate Joint Resolution 152 to obtain state recognition for the Cheroenhaka (Nottoway) Indian Tribe of Southampton County Virginia because this tribe has one of the best documentable histories of any tribe in Virginia. I encourage you to vote for passage of this resolution.</p>
            <p>Thank you,</p>
            <p>Teresa Bevis Preston<br/>[address]<br/>[phone number]<br/>Southampton County, VA</p>
          </blockquote>
        </div>
      );
    }

    if (slug === "beaver-creek-support") {
      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Letter of Support from Beaver Creek Indians</h2>
          <p>Dear Senator Tommy Norment,</p>
          <p>My name is Chief Louie C Chavis, of the Beaver Creek Indians in Salley, SC. I would like to express my support and honor in the recognition of the Cheroenhaka ( Nottoway ) Indian Tribe. I have personally been to many of their Annual Green Corn Festivals, (Pow Wows), the fourth weekend of July.</p>
          <p>I have become very acquainted with this Tribe and Chief WD “Walt” Brown. I was born in Fredericksburg, VA and coming back to my home state for this event each year is very important to me personally as well a support for my fellow American Indian people and their Chief. I also have a son who lives in Southampton County presently, which also helps him to stay close with an American Indian fellowship Tribe, since he cannot come back to SC often.</p>
          <p>I have studied the history of this Tribe for we share a common heritage and I would like to cast my support for this Tribe to be formally recognized by the Commonwealth of Virginia .</p>
          <p>We the Beaver Creek Indians from South Carolina have recently received our own State Recognition. I can attest personally, how important this is to American Indian people.</p>
          <p>This recognition affords every American Indian member of this Tribe their birthright, heritage, honor, culture, spiritual and proper place among the population in Virginia .</p>
          <p>Chief Brown, Vice Chief Wright and their governing Council came to South Carolina in support of South Carolina ‘s Unity Conference which was held for the first time in May, 2005. This was a history making event for South Carolina American<br/>Indians and I would like to return the same honor to my fellow American Indian people the Cheroenhaka (Nottoway) Indian Tribe, in the State of Virginia.<br/></p>
          <p>Respectfully,<br/>Chief Louie C Chavis<br/>Beaver Creek Indians<br/>Salley, South Carolina</p>
        </div>
      );
    }

    if (slug === "recognition-delayed") {
      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Nottoway State Recognition Won’t Happen This Legislative Session</h2>
          <p className="text-sm text-muted-foreground">The Tidewater News<br/>Thursday, Feb. 9, 2006</p>
          <p className="text-sm text-muted-foreground">By Don Koralewski | Editor</p>
          <p><strong>Franklin</strong> — There will be no recognition for the Cheroenhaka (Nottoway) Indian Tribe coming out of this year’s session of the General Assembly.</p>
          <p>Sen. Louise Lucas, who introduced a Senate Joint Resolution that would provide state recognition of the tribe, has pulled the legislation from consideration. The resolution had gone to the Senate Committee on Rules, and was given to a subcommittee for further consideration.</p>
          <p>While in subcommittee, the resolution attracted condemnation from certain opponents. According to Lucas, the resolution’s survival seemed destined to one of two fates — to be stricken or removed from legislative consideration, or to be “passed by” indefinitely. From the feedback she was getting from the subcommittee, Lucas said she acted to preserve the possibility of the resolution and General Assembly recognition in the next legislative session.</p>
          <p>At issue, according to Lucas, is the Virginia Council on Indians. According to the Code of Virginia (§ 2.2-2629), the Virginia Council on Indians “shall establish criteria for tribal recognition and shall recommend to the General Assembly and the Governor in its biennial report those groups meeting the criteria that should be given official state recognition.”</p>
          <p>The body, comprised of members from already recognized tribes, non-tribal members, and at-large members, was established in the early 1980s in order to serve as a recommending body for the Generaly Assembly. While Native Americans aren’t required to go through the council for recognition, the Council was set up as part of the vetting process to make recommendations one way or another before such an issue gets to the General Assembly.</p>
          <p>In the case of the Cheroenhaka (Nottoway), consideration for recognition went directly to the General Assembly via Sen. Lucas. The VCI was bypassed.</p>
          <p>Bypassing the VCI isn’t out of the norm, or necessarily improper, according to one VCI member. Buck Woodard is an Indian Member At-Large.</p>
          <p>Woodard, a Native American himself, said he respects the sovereignity of tribes, and the way a tribe would seek recognition is up to the tribe and its particular circumstances.</p>
          <p>As for the Cheroenhaka (Nottoway), Woodard said he understands there are circumstances that tribe members feel make the tribe distinct. Particularly, that the tribe can produce documentation that shows local recognition. For example, Walt Brown, elected chief of the Cheroenhaka (Nottoway), has provided court records dating back to the 19th century in which a judge in Southampton County made an award to the tribe.</p>
          <p>In addition, Southampton County Supervisors approved and forwarded a resolution in support of the tribe to senators for their consideration in officially recognizing the tribe.</p>
          <p>“If they want to do this,” Woodard said, “the council can’t have position on this one way or another.”</p>
          <p>The VCI itself hasn’t taken a position on tribal recognition, nor would it be proper for it to take a position as a council on this particular matter. Since the Cheroenhaka (Nottoway) didn’t go to the council, the council can’t make a recommendation.</p>
          <p>However, the effort for recognition through the General Assembly, was met with objection from some members of other recognized tribes, and by an anthropologist with a long association with the VCI.</p>
          <p>According to Brown, the only information that got to the subcommittee was negative input from a handful of people. Articles associated with support for the resolution, history of the tribe, and historical documentation, didn’t get to the senate committe or subcommittee.</p>
          <p>That being the case, Brown made the rounds to senate offices in Richmond on Tuesday, delivering additional information to subcommittee members. He said he’d be pleased if the resolution could be revived.</p>
          <p>Barring that, Brown is preparing for a formal presentation of a request for tribal recognition to the VCI.</p>
          <p>According to Sen. Lucas, the chairman of the Senate Rules Committee directed that the matter be referred to the VCI. Once the VCI has received and reviewed the application and documentation of the Cheroenhaka (Nottoway), Sen. Thomas K. Norment Jr., (R), Williamsburg, has stated the issue will be revisited.</p>
          <p>“Sen. Norment has said the resolution couldn’t come out of the Rules Committee because the criteria of the VCI has not be followed,” said Lucas.</p>
          <p>Brown said Sen. Norment has assured him that the matter would come back to the General Assembly, whether or not the VCI makes a recommendation.</p>
          <p>For the senators as well as the legislative watchers, the issue is a relatively confusing one. The General Assembly created the VCI itself in order to vet requests for tribal recognition before those requests get to the assembly. However, there is no law stating that vetting before the VCI is a mandate. Brown’s contention is that since his tribe has a long established history with local governmental bodies and has been recognized since Colonial days, there isn’t the need for VCI involvement.</p>
          <p>Besides, Brown said, six of the already recognized tribes in the state were recognized without going through the VCI process.</p>
          <p>The tribe, Brown said, will follow Sen. Norment’s direction and make a formal applicaton to the VCI. No matter what comes of that process, Brown said, he expects that the issue will come back to the floor of the Generaly Assembly.</p>
        </div>
      );
    }

    if (slug === "anthropologist-article") {
      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Tribe Recognition Gets Support of Anthropologist</h2>
          <p className="text-sm text-muted-foreground">The Tidewater News, Thursday, February 2, 2006</p>
          <p className="text-sm text-muted-foreground">By Don Koralewski | Editor</p>
          <p><strong>FRANKLIN</strong> — Howard MacCord, a distinguished anthropolist, has added his voice to those in support of Sen. Louise Lucas’ Joint Senate Resolution for official state recognition of the Cheroenhaka (Nottoway) Indian Tribe.</p>
          <blockquote className="border-l-4 border-accent bg-muted p-4 my-6">
            <p className="font-semibold italic">“Mr. MacCord is the most published and renowned archeologist in the Commonwealth. He has more expertise and knowledge of the ethno-historic and current history of my people and the current members of our tribe than Helen Roundtree could ever dream of.”</p>
          </blockquote>
          <p>The Joint Resolution was introduced to the General Assembly last week, and has been stalled in the Senate Committe on Rules since Jan. 18. The resolution seeks to grant state recognition to the tribe. As presented to the senate, tribe members can trace their history to well before the Colonial days in Southside and other areas of Virginia.</p>
          <p>The resolution, however, is on hold while senate staffers and senators gather more information on the issue. The hold was initiated by objection to the resolution from Anthropoligst Helen Roundtree, who, through e-mail correspondence last week, told Sen. Lucas and other senators that recognition of the tribe through the General Assembly would “soil” the recognition of other tribes.</p>
          <p>The resolution, as well as efforts to get the tribe recognized by the federal government, is backed by the effort of Walt Brown, descendent and elected chief of the Cheroenhaka (Nottoway) and Southampton County supervisor.</p>
          <p>Brown supplied the historical information for Lucas’ use in putting together the resolution. As presented, the resolution traces the history of the tribe from pre-Colonial days to the present.</p>
          <p>According to Brown, and other supporters of recognition, the documentation provided by the tribe supports the move for recognition, more so than that information provided by any other tribe that has been recognized by the state so far.</p>
          <p>Currently, there are eight Native American tribes recognized by the state of Virginia:</p>
          <ul className="list-disc pl-8">
            <li>Chickahominy — Charles City County, recognized in 1983;</li>
            <li>Eastern Chickahominy — New Kent County, recognized in 1983.</li>
            <li>Mattaponi — Banks of the Mattaponi River, King William County, recognized in 1983;</li>
            <li>Monacan Indian Nation — Bear Mountain, Amherst County, recognized in 1989;</li>
            <li>Nansemond — Cities of Suffolk and Chesapeake, recognized in 1985;</li>
            <li>Pamunkey — Banks of the Pamunkey River, King William County, recognized in 1983;</li>
            <li>Rappahannock — Indian Neck, King & Queen County, recognized in 1983; and,</li>
            <li>Upper Mattaponi — King William County, recognized in 1983.</li>
          </ul>
          <p>In adding his voice of support to the resolution, MacCord wrote. “I see recognition by the state of the Nottoway tribe as fully justified. Their history is known, and there is a historic and genealogical continuity which is scant for some of our recognized tribes.”</p>
          <p>MacCord, 90, is an eminent figure in mid-Atlantic and Virginia archeology. “Mr. MacCord is the most published and renowned archeologist in the Commonwealth. He has more expertise and knowledge of the ethno-historic and current history of my people and the current members of our tribe than Helen Roundtree could ever dream of,” said Brown in correspondence this week to Lucas.</p>
          <p>MacCord is also intimately familiar with the Cheroenhaka (Nottoway), as he was the director of the “Hand Site” excavation dig here in Southampton County in the 1960’s, where some 131 skeletal remains were dug up and taken to the Smithsonian National Museum of Natural History in Washington, DC.</p>
          <p>In his support for state recognition of the tribe, MacCord wrote Senator Walter A. Stosch, (R) Glen Allen, “I am in full agreement with the appeal by today’s Cheronehaka (Nottoway) Indian descendants to confirm their historic relationship with the state. SJ 152 is a good beginning.”</p>
          <p>MacCord added, “In my opinion, the Nottoways qualify for recognition, and I strongly recommend passage of SJ 152 this year in time for similar action by the House.” In addition to MacCord, several others have weighed in with their support for recognition of the tribe.</p>
          <p>“I encourage you to support the Senate Joint Resolution 152,” wrote Debora Littlewing Moore, of the Powhatan Nation, in correspondece to a member of the Senate Rules Committee. “I was made aware that the Senate Rules Committee may be influenced by certain scholastic writers, namely one Helen Roundtree – This woman is known to write and speak from her perspective only.”</p>
        </div>
      );
    }

    if (slug === "anthropologist-letter") {
      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Letter in Support from Anthropologist Howard A. MacCord</h2>
          <p>Senator Stosch – You may remember me and my efforts over many years in support of archeological work all over the Commonwealth. I am now 90 and retired, but I keep up with work done by others. I still contribute to the science by writing for publication and serving as a source of information for other researchers. It is very satisfying, too.</p>
          <p>I am in full agreement with the appeal by today’s Cheroenhaka (Nottoway) Indian descendants to confirm their historic relationship with the state. SJ 152 is a good beginning. It is a bit long and detailed, and it contains gaps in the tribal history which I hope the group can fill by supporting archeological work on sites in their historic region, the drainage of the Nottoway River east of the Fall Line. I have offered this advice to Chief Brown, who seems open to such research.</p>
          <p>Regardless, I see recognition by the state of the Nottoway tribe as fully justified. Their history is known, and there is a historic and genealogical continuity which is scant for some of our recognized tribes, especially the Monacans. The Nottoways and Meherrins spoke an Iroquois language, probably as an off-shoot from the Tuscaroras in North Carolina. The Meherrins moved into North Carolina around AD 1700 and still live near Winton, Ahoskie and Murfreesboro, where they are a recognized group. In my opinion, the Nottoways qualify for recognition, and I strongly recommend passage of SJ 152 this year. in time for similar action by the House. I am available to answer questions on this, if you or others of the Rules Committee desire.</p>
          <p>Thank you for your long and meritorious service in the General Assembly. Best wishes, too, in all other aspets of your life.</p>
          <p>Howard A. MacCord, Sr Archeologist-retired<br/>&amp; Colonel (AUS-Retired) Richmond, VA</p>
        </div>
      );
    }

    if (slug === "va-senate-resolution") {
      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Senate Joint Resolution No. 152</h2>
          <p className="text-sm text-muted-foreground">Offered January 18, 2006</p>
          <p className="text-center font-bold"><em>Extending State Recognition to the<br/>Cheroenhaka (Nottoway) Indian Tribe.</em></p>
          <p className="text-center text-sm">Patrons—Lucas, Blevins, Norment, Quayle, Ruff and Stolle; Delegates: Barlow, Jones, S.C., Oder, Spruill and Tyler</p>
          <p className="text-center text-sm">———- Referred to Committee on Rules ———-</p>
          <p>WHEREAS, the Cheroenhaka (Nottoway) Indian Tribe (the Cheroenhaka) made first ethno-historic contact with the English during 1608 in what is now Nottoway County, Virginia; and</p>
          <p>WHEREAS, in 1608, the Cheroenhaka were called Man-goak or Men-gwe by the Powhatan Confederation’s “Algonquian Speakers” and further listed on John Smith’s 1607 map of Virginia by the same name; and</p>
          <p>WHEREAS, the Colonials gave names to other Indian tribes based on what the Indians they had first contact with called other tribes and as such, the Algonquian speakers called the Cheroenhaka NA-DA-WA or Nottoway, as perceived by the Colonials; and</p>
          <p>WHEREAS, in the seventeen century, Virginia Indians were divided into three language groups: Algonquian speakers, Siouan speakers and Iroquoian speakers. During this period, the Iroquoian-speaking tribes occupied lands east of the Fall Line on the inner coastal plains of Southeastern Virginia, and these tribes were the Cheroenhaka, the Meherrin and the Tuscarora; and</p>
          <p>WHEREAS, in 1650, according to the diary entries of James Edward Bland, the Nottoway Indians were called NA-DA-WA by the Algonquian speakers, which the Colonials interpreted as to Nottoway. Also in 1650, Bland encountered two Cheroenhaka villages, one in Sussex County near present-day Homeville and the other in Drewryville, Virginia, in Southampton County; and </p>
          <p>WHEREAS, the true name of the Tribe is Cheroenhaka (Che-ro-en-ha-ka)<strong>,</strong> which means “People at the Fork of the Stream,” based on the Tribe’s lodging area, which was where the Nottoway River forks with the Backwater River to form the Chowan River; and</p>
          <p>WHEREAS, the Cheroenhaka were signers to the Treaty of 1647 and the Treaty of 1677; and</p>
          <p>WHEREAS, the tribal warriors of the Cheroenhaka (Nottoway) Indian Tribe joined forces with Nathaniel Bacon in what became known as Bacon’s Rebellion of May 1676; and</p>
          <p>WHEREAS, in the mid 1680s, the Cheroenhaka (Nottoway) Indian Tribe, due to encroachment by the Colonials and to avoid war with other tribes, moved from the Nottoway Town of Ta-ma-hit-tion in Sussex County to the mouth of the Assamoosick Swamp in what is now present-day Courtland and Sebrell in Southampton County, Virginia; and</p>
          <p>WHEREAS, in 1705, the House of Burgess granted two tracks of land to the Cheroenhaka – the Circle and Square Tracks consisting of some 41,000 acres of reservation land. The tracks of land fell within the confines of what was then Isle of Wight County and what is now Southampton and Sussex Counties; and</p>
          <p>WHEREAS, in 1711, Colonial Lieutenant Governor Spottswood met with the Cheroenhaka offering forgiveness of treaty tribute if the Cheroenhaka would send their sons to the “Brafferton,” a school for Indians at the College of William and Mary; and</p>
          <p>WHEREAS, though the Cheroenhaka (Nottoway) were fearful that their sons would be sold into slavery, ethno-historic records document that Colonial Lieutenant Governor Spottswood reported in November 17, 1711, that two sons of the Cheroenhaka Chief’s men were, in fact, attending the Brafferton school. Cheroenhaka “Surnames” continued to appear on the enrollment roster of the Brafferton school throughout the 1750s and 1760s; and</p>
          <p>WHEREAS, the Treaty of 1713-1714, a third treaty signed by the Tribe, included a “Successor Clause,” which has the effect of continuing the relationship that the Tribe had with the Colonials from 1713 to 1775 and with the Commonwealth beginning in 1776 to the present time; and</p>
          <p>WHEREAS, on February 7, 1713, Colonial Lieutenant Governor Spotswood signed a treaty that included a Successor Clause with the Cheroenhaka’s Chief Ouracoorass Teerheer, who was also known as William Edmund/Edmond; and</p>
          <p>WHEREAS, on November 24, 1735, the “first” of many land transfer deeds for the “Circle Tract of Land” transpired between the Colonials and the Cheroenhaka Chief and would continue until the 1880’s until both the Circle and Square Track of Lands, totaling 41,000 acres of reservation lands, were in the hands of the Europeans; and</p>
          <p>WHEREAS, in 1808, the Governor of the Commonwealth of Virginia mandated a Special Nottoway Indian Census to be taken of those Indians living on the remaining lands of the Nottoway Indian Reservation in what is now Courtland, Virginia, which then totaled approximately 3,000 acres; and</p>
          <p>WHEREAS, the Special Census was conducted by non-Indian Tribal Trustees Henry Blow, William Blow, and Samuel Blunt; and </p>
          <p>WHEREAS, in 1820, President Thomas Jefferson recorded the language of the Cheroenhaka; in the same year he stated in a Petersburg newspaper that the only remains in the state of Virginia of the formidable tribes are the Pamunkeys and Nottoways and a few Mattaponies; and</p>
          <p>WHEREAS, between 1823 and 1824, William Bozeman, also know as Billy Woodson (the name listed in the Special Nottoway Indian Census of 1808) filed a petition in the Southampton County to have remaining Nottoway reservation lands divided “free and simple” between the Nottoway Indians; and</p>
          <p>WHEREAS, in 1849, the Cheroenhaka filed suit in Southampton County against Jeremiah Cobb over a land dispute. The lawsuit was filed by the tribe’s non-Indian Trustees, James W. Parker, G.N.W. Newsom, and Jessie Parham; and</p>
          <p>WHEREAS, on November 8, 1850, Judge Rich H. Baker ruled in favor of the Cheroenhaka and awarded them $818.80 with interest from June 1, 1845. This successful lawsuit is further indication of the recognition of the tribal status of the Cheroenhaka by the Commonwealth of Virginia; and</p>
          <p>WHEREAS, in the 1850’s, as the final bits of reservation lands disappeared into the hands of Europeans, many tribal members relocated to what became known an “Artist Town,” near what is now Riverdale Road in Southampton County. These tribal members continued to live there as a tribal communal group up until the late 1990s sharing their Native American traditions and customs – hunting, trapping, fishing the Nottoway River, farming, and raising livestock; and</p>
          <p>WHEREAS, the excavation of the Hand Site Settlement in Southampton County, Virginia, between 1965 and 1966 and in 1969, resulted in the skeletal remains dating back to 1580 of approximately 132 graves of Cheroenhaka Indians being removed and taken to the Smithsonian National Museum of Natural History in Washington, D.C.; and</p>
          <p>WHEREAS, in February 2002, the historic Cheroenhaka Indian Tribe reorganized by bringing together family clusters of Cheroenhaka Indian descendants still living in Southampton County, Virginia; and</p>
          <p>WHEREAS, in May 2002, a tribal government was in place with the election of a chief and council members and the first Pow Wow and Gathering took place on July of the same year; and</p>
          <p>WHEREAS, this Pow Wow and Gathering has continued since then on the fourth weekend of July each year as a celebration of the “Green Corn Harvest”; and</p>
          <p>WHEREAS, on December 7, 2002, the Cheroenhaka Indian Tribe filed a letter of intent with the Bureau of Indian Affairs announcing that it would be filing for federal recognition; and</p>
          <p>WHEREAS, on July 29, 2003, the Circuit Court of Southampton County, Virginia, issued a license to Chief Walter David “Red Hawk” Brown III of the Cheroenhaka, with all rights to perform the rites of matrimony for the Tribe in accordance with its customs and traditions; and</p>
          <p>WHEREAS, in February 2004, the Cheroenhaka Tribal Shield and Heraldry was copyrighted with the Library of Congress; and</p>
          <p>WHEREAS, on July 24, 2004, the elected official body of Southampton County, Virginia, the Southampton County Board of Supervisors, issued under its seal, a Proclamation of Recognition of the Cheroenhaka proclaiming July 24 of said year as “Cheroenhaka Day”; and</p>
          <p>WHEREAS, on June 3, 2005, the Waccamaw Indian tribe of South Carolina enacted a Joint Resolution recognizing the sovereignty of the Cheroenhaka; and</p>
          <p>WHEREAS, in June of 2005, the Cheroenhaka (Nottoway) Indian Tribal Heritage Foundation was incorporated as a nonprofit corporation titled the Cheroenhaka (Nottoway) Indian Tribe; and</p>
          <p>WHEREAS, the Cheroenhaka of Southampton, Virginia has an ongoing documented and continual relationship with the Commonwealth of Virginia dating to the first ethno-historic contact with English settlers in 1608; now, therefore, be it</p>
          <p>RESOLVED by the Senate, the House of Delegates concurring, That the General Assembly of Virginia recognize the existence within the Commonwealth of the Cheroenhaka (Nottoway) Indian Tribe.</p>
          <p>RESOLVED FURTHER, That the Clerk of the Senate transmit a copy of this resolution to the Chief Walter David “Red Hawk” Brown III, requesting that he further disseminate copies of this resolution to his constituents so that they may be apprised of the sense of the General Assembly of Virginia in this matter.</p>
        </div>
      );
    }

    if (slug === "return-of-natives-2") {
      const [currentPage, setCurrentPage] = useState(1);

      const pages = [
        // Page 1
        <>
          <div className="my-8">
            <img src="/images/return-of-natives-2-drum.jpg" alt="Julianne Jennings, Francis Kello and Calvin Hall beat a powwow drum" className="max-w-full lg:max-w-2xl mx-auto rounded-lg shadow-lg" />
            <p className="text-sm text-center mt-2 text-muted-foreground">Julianne Jennings, from left, Francis Kello and Calvin Hall, chief of the Meherrin, beat a powwow drum on land where Nottoway/Cheroenhaka drums echoed for hundreds of years. Photos by Chris Tyree / The Virginian-Pilot.</p>
          </div>
          <p>An eagle feather comes in three colors. Its vanes branch in different directions, yet meet in the middle. Symbolic, it is said, of the Nottoway/Cheroenhaka Indians. The Cheroenhaka, long ago, split apart. Some went away with their Iroquois cousins, the Tuscarora, north to a sanctuary far from the encroaching English, north to Canada. Others stayed home, lying low and adopting the names and races of foreigners with more status than their own. They stayed south in the land of their ancestors, Southampton County. Centuries passed, memories faded, blood diluted.</p>
          <p>The northern branch retained the name Nottoway: “Snake” or “enemy” as christened by the Algonquins around Jamestown.</p>
          <p>The southern branch has reorganized as the Cheroenhaka: “People at the Fork of the Stream,” in Iroquois.</p>
          <p>Now they meet.</p>
        </>,
        // Page 2
        <>
          <p>Julianne Jennings began looking for her Nottoway roots last summer. The Rhode Island woman, who had alwaysknown more about her Pequot ancestry, came to Virginia in search of Jennings Ordinary. The small community in Nottoway County descended from a home established by an English settler on lands granted by the king, regardless of Indian rights.</p>
          <p>“Mr. Jennings had five children with a Nottoway Indian woman and sent them up north,” Jennings said. “I was a product of what Jennings probably didn’t want to talk about.”</p>
          <p>She went from Nottoway County to Richmond to Southampton County, where the librarian introduced her to Francis Kello, whose family now owns part of the old Nottoway reservation. He took her to see it, and they found pottery fragments in the plowed field where the Indian village stood in 1728. Jennings felt like she was home.</p>
          <p>“It has been such an incredible awakening,” she said. “I don’t know why this is happening, but it’s happening.”</p>
        </>,
        // Page 3
        <>
          <p>Partly because of her search, the descendants of the Nottoway/Cheroenhaka met for the first time on Feb. 2, in Kello’s river cottage. Meherrin Indians were there, to give guidance. Weanocks were there, for kinship. Tuscarora were there, representing the Nottoway Confederation, organized in 1997 to bring together Iroquois groups.</p>
          <p>Also there was Helen Rountree, an anthropologist retired from Old Dominion University who wrote a 1987 journal article titled “The Termination and Dispersal of the Nottoway Indians of Virginia.” She defined termination as the cessation of government protection and services, the liquidation of the tribe as a legal entity and the division of tribal property among the members, who were then no longer considered Indians for legal purposes.</p>
        </>,
        // Page 4
        <>
          <p>The Nottoway Confederation took umbrage at that term. “We basically found, in legal language, that the Nottoway people were never really terminated,” said Dr. Robert M. Chavis, a family practitioner and Tuscarora clan chief in Maxton, N.C. “Allotments were given out, but the tribe never came together as a whole and said we will no longer be a tribe.”</p>
          <p>The confederation is seeking a clarification of the tribe’s status from Virginia’s attorney general. A ruling in its favor would save paperwork and legal fees, Chavis said.</p>
          <p>Rountree, who took minutes for the tribe’s Feb. 2 meeting, wrote that her article was the only document to ever call the Nottoway terminated. “They are, however, `extinct’ AS A TRIBE in the eyes of the Virginia government,” she wrote.</p>
        </>,
        // Page 5
        <>
          <p>Chavis, whose great-grandfather was born in Southampton County, said Indians have been treated poorly for centuries and, even today, have less voice in their own country than other races.</p>
          <p>“Because Indians didn’t have, quote unquote, the education of the Europeans, we were easy people to be forgotten and left alone, and next thing we know there’s laws made that you don’t have the land,” Chavis said. “Who gives you the right to terminate me? Even if there was (legal) language, who gives them the right to say this community of people cannot exist anymore? We’re spending money to blow up people all around the world to make them live with each other. We need to clean up at home a little bit.”</p>
          <p>Jennings did not attend the meeting, but she understands the frustration of Indian descendants.</p>
          <p>“I’m still not an Indian woman in the eyes of the government,” she said. “I’m a black woman. I don’t know what I’m supposed to feel like. You look in the mirror, who the hell am I supposed to be?”</p>
        </>,
        // Page 6
        <>
          <p>Jennings performs Native American songs and drumming as “Strong Woman.” She receives state and federal grants to present basket weaving and Indian heritage programs. She enjoys the irony.</p>
          <p>“When the government told me I couldn’t be an Indian, I got out there, girlfriend, and pounded my drum even harder,” Jennings said. “Indians are confronted with a lot of racism. We were a people destined for obliteration. I think people today are still trying to figure out who they are.</p>
          <p>“You have to straddle two canoes. And you know what happens when you do that.”</p>
          <p>The Cheroenhaka of Virginia began to organize in each other’s homes in the weeks after the first meeting. They chose a tribal council, set goals, suggested a logo.</p>
        </>,
        // Page 7
        <>
          <p>Lt. Col. Walter Brown III, trained in Army race relations, emerged as a spokesman, later chief. “When we come together as Cheroenhaka, we all come with a common goal,” he said, leaning earnestly over the breakfast table at Fred’s Restaurant in Franklin. “ We’ve got to walk the same path together. That’s important. I cannot overemphasize that. ”</p>
          <p>A 1961 article in the Quarterly Bulletin of the Archaeological Society of Virginia reported William Lamb to be the last of the Nottoway. “When this old Indian fades away,” it read, “the Nottoway will be no more.”</p>
          <p>Nobody, Brown said, interviewed his family for that story.</p>
          <p>“It is not true that the descendants of the Cheroenhaka have ceased to be,” he said. “We are still here in the flesh.”</p>
        </>,
        // Page 8
        <>
          <p>Furthermore, he said, no Indian descendant needs state or federal permission to exist. “We’re Cheroenhaka because we say we are, because that’s our name. Because that’s where we lodged,” he said. “We’re the Cheroenhaka if we have the bloodline. We’re the Cheroenhaka.”</p>
          <p>But he distanced himself from the confederation. The Cheroenhaka are applying for government recognition using modern-day paperwork and bureaucratic channels. The designation would give the tribe access to federal funds.</p>
          <p>The tribal council has set initial goals that include restoring the old Indian graveyard on Kello’s farm, of educating the public, of helping people trace their genealogy. “Unity and camaraderie is the foremost of our concern,” he said. “That blood of Ouracoorass Teerheer still runs warm in a lot of people in Southampton County, some white, some black. Always has.”</p>
          <p>People of many colors fill the river cottage at Francis Kello’s farm during a meeting of Nottoway descendants. The cottage is near the site where a Nottoway longhouse once stood.</p>
        </>,
        // Page 9
        <>
          <p>On April 6, the Cheroenhaka met again at Kello’s river cottage. Others were there as well — Cherokee from Tennessee, Meherrin from North Carolina, Saponi from Virginia, Nottoway from Six Nations of the Grand River in Canada — come to bring the old traditions home. What some saw as support and encouragement, others interpreted as intrusion. The room was tightly packed. People overflowed outdoors.</p>
          <p>Local archaeologist Russell Darden told of the 136 Nottoway skeletons removed in the 1960s from a dig farther down the river. Pat Holley of Canada offered to perform an ancient ceremony for the dead. Sheila Payne, chief of the United Nation of the Nottoway and Weanock of Ohio, objected.</p>
          <p>“In 1960, our people were dug up and put in a basement,” she said. “Until we have them back, we can’t have ceremonies.”</p>
          <p>Brown tried to ease the tensions. “Dissension is what happened to us two or three hundred years ago,” he said. “We solicit the support of other tribes.”</p>
        </>,
        // Page 10
        <>
          <p>A few members of the visiting tribes wore Indian regalia: beads and feathers and buckskin. The Cheroenhaka wore business suits and Sunday dresses, jeans and casual slacks. Holley stepped forward with his smudge pot and an eagle feather.</p>
          <p>“You can tell from an eagle feather at any point in time where we are today,” he said, and touched the center. “We are here. That means there are changes in the wind. It doesn’t matter if you’re black, white or red. The Nottoways of Virginia need to come together, and you cannot let anything split you apart.”</p>
          <p>At Six Nations, the Nottoway language has been preserved, along with the culture of the longhouse and traditional ceremonies, he explained. The ceremony for the dead is performed twice yearly, with scented smoke and plates of food left for ancestors.</p>
          <p>“We all have one thing very much in common here,” he said. “We all have the same blood and we all have the same ancestors buried in this field.”</p>
        </>,
        // Page 11
        <>
          <p>He lit the smudge pot and wafted the smoke of pine, sweetgrass, sage, cedar and sacred tobacco with the feather. He took it to each person, collecting their silent thoughts to carry to the ancestors. Payne gathered the smoke with both hands and carried it to her face.</p>
          <p>Holley led the way to the graveyard, overgrown with saplings and underbrush, carpeted with dead leaves. In the dirt road beside it, a Saponi/Occaneechi set up a drum. Holley spoke to the descendants before entering the woods.</p>
          <p>“We’re here because it’s destiny,” he said. “Time to come home.”</p>
          <p>As he spoke in an unknown language, Gloria Rose separated from the crowd. As he led the way among the trees, the Yorktown woman refused to go.</p>
        </>,
        // Page 12
        <>
          <p>“I can’t understand what they’re saying so I’d better stand back,” she said. “I was raised Pentecostal. I don’t believe in walking on sacred ground. I’ve got a dreamcatcher in my car, and I’ve been debating taking it down. I don’t want any satanic symbols.”</p>
          <p>Rose didn’t learn of her Indian heritage until six years ago, when she found her birth certificate after her mother’s death. Under race, it said “Portugee,” a reference to the Portuguese community at Weldon, N.C., where she grew up.</p>
          <p>The Indians of that area began calling themselves Portuguese when they realized that the dark-skinned immigrants received better treatment than native peoples. Rose’s daughter, Crystal, began researching family history and found connections to three different Indian tribes, all the way back to Pocahontas. Rose’s relatives — mother included — had always denied any connection to Indians. Her own husband had felt uncomfortable even being in a restaurant with Indians during a vacation out West.</p>
          <p>“It’s been hard for me to accept,” Rose said. “I don’t know which way I’m going sometimes. When I go to the powwows, I’m usually the whitest thing there. I feel bad sometimes, sitting there white as I don’t know what, claiming to be something else.”</p>
        </>,
        // Page 13
        <>
          <p>Some of the Cheroenhaka went so far as to drive to Charles City in early May, to attend a powwow hosted by six of the eight state-recognized tribes in Virginia. They held a meeting there and adopted a logo. They discussed bylaws and nonprofit status. They talked about holding a powwow in July.</p>
          <p>Julianne Jennings came even farther, driving from Rhode Island in mid-May to perform native drumming and singing at the Southampton County library. She left feeling that the reorganization was moving too fast.</p>
          <p>“I’m not against the Nottoway people organizing themselves. I think it’s a good thing,” she said. “What bothers me is that we go from zero to 100.”</p>
          <p>She also questioned the research some are doing into treaty rights, which could potentially lead to a challenge over ownership of Kello’s land. She said that not all descendants, including herself, are not notified of tribal meetings or invited to vote.</p>
        </>,
        // Page 14
        <>
          <p>“This is not unusual,” Jennings said. “A lot of people fractionalize themselves, Indian people.</p>
          <p>“While I was down there I got a strong sense that something just wasn’t right. I was walking the land and asking the Creator: Why am I here? Why am I so called here? I was looking for an actual, tangible sign.”</p>
          <p>Later she realized that she was sent as a messenger to say slow down, honor the land, absorb the culture, respect Kello for his stewardship of the old reservation and the Indians’ past. Before Jennings left, Kello gave her a Nottoway arrowhead, made of two kinds of stone fused together.</p>
          <p>“I was like, bam, there’s the sign,” Jennings said. “We are a mixed people. I don’t think we need to dig up old treaties. We need each other to move forward.”</p>
        </>,
        // Page 15
        <>
          <p>During her performance, Jennings solicited money to buy a headstone for William Lamb, buried in a nearby churchyard. As it turns out, Lamb wasn’t the last of the ancient Nottoway — he was the first of the modern Cheroenhaka, still, after 400 years, living in Southampton County.</p>
          <p>Their unification won’t be easy. But as Jennings, mother of three descendants herself, said:</p>
          <p>“That’s a pregnancy for you. It can be tough. They’re being reborn.”</p>
          <div className="my-8">
            <img src="/images/return-of-natives-2-dance.jpg" alt="Angel Dukes Montague, a Cheroenhaka/Nottoway council member, dances during a powwow." className="max-w-full lg:max-w-2xl mx-auto rounded-lg shadow-lg" />
            <p className="text-sm text-center mt-2 text-muted-foreground">Angel Dukes Montague, center, a Cheroenhaka/Nottoway council member, dances during a powwow on the Chickahominy River. The tribe hopes to hold its own powwow this summer.</p>
          </div>
          <p className="text-sm text-muted-foreground">Reach Diane Tennant at 446-2478 or dianet@pilotonline.com</p>
        </>
      ];

      const totalPages = pages.length;

      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Return of the Natives: Part Two “Time to Come Home”</h2>
          <p className="text-sm text-muted-foreground">By DIANE TENNANT, The Virginia-Pilot © May 27, 2002</p>
          <p className="text-sm font-bold text-muted-foreground">Part 2 of 2</p>

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

          {currentPage === totalPages && (
            <div className="mt-8 text-center">
              <Link href="/about-us/return-of-natives-1">
                <Button>← Back to Part 1</Button>
              </Link>
            </div>
          )}
        </div>
      );
    }

    if (slug === "return-of-natives-1") {
      const [currentPage, setCurrentPage] = useState(1);

      const pages = [
        // Page 1
        <>
          <div className="my-8">
            <img src="/images/return-of-natives.jpg" alt="Julianne Jennings blessing the Nottoway River" className="max-w-full lg:max-w-2xl mx-auto rounded-lg shadow-lg" />
            <p className="text-sm text-center mt-2 text-muted-foreground">Julianne Jennings, right, a Rhode Island woman who has traced her roots to the Nottoway tribe, blesses the Nottoway River while her friend Ron Hasikaii watches. Photo by Chris Tyree / The Virginian-Pilot.</p>
          </div>
          <p><strong>SOUTHAMPTON COUNTY</strong> — In 1963, the story goes, the last of the Nottoway Indians died.</p>
          <p>A fierce tribe of the Iroquois nation had dwindled over 350 years to one old man, illiterate, who worked as a farmhand and rode a bicycle into town for beer.</p>
          <p>William Lamb is buried near the farm where he lived and worked, on lands once granted to the Nottoway Indians by the crown of England, to be theirs forever. But the monarch overlooked one thing: The land already belonged to the Indians, had belonged to them for thousands of years, since the ancestors of the clan mothers camped on Stony Creek.</p>
        </>,
        // Page 2
        <>
          <p>They were Indian lands before John Smith set up fort, before Pocahontas met John Rolfe, before the Tuscarora War and the American Revolution and the Civil War and Virginia’s Racial Integrity Act of 1924.</p>
          <p>And one more thing.</p>
          <p>William Lamb wasn’t the last of the Nottoway.</p>
          <p>The blood that is thicker than Nottoway River water has summoned the descendants. They seek to recover a past that was for so many years denied them.</p>
          <p>They call themselves in Iroquois the Cheroenhaka, the People at the Fork of the Stream. They are scattered over at least seven states and Canada. They are coming home, to Southampton County. But like any journey worth taking, it isn’t easy.</p>
        </>,
        // Page 3
        <>
          <p>Francis Kello stood on the bluff of the old Indian reservation — his family’s land now — looking down at the cypress trees, the elbow of smooth water and the bank where this son of Britain now stores his own canoe.</p>
          <p>“You can see why the Indians would pick this site,” Kello said. “It’s the most beautiful high spot on the Nottoway River. I imagine the Indian kids playing up and down the side of these hills like I used to.</p>
          <p>“You can go up and down this river, wherever you want, and you won’t find another place like this.”</p>
          <p>Which is why the Indians want to come back.</p>
          <p>They have been back four, five times since February, when the descendants of the Cheroenhaka (pronounced CHAIR-en-hocka) held their first tribal meeting in Kello’s river cottage. They know they’re Indians, but some are not exactly sure what that means.</p>
        </>,
        // Page 4
        <>
          <p>When colonial invader John Smith asked the Algonquin around Jamestown what tribe lived to the west, they replied, “Nottoway.” In their language, the term meant “snake” or “enemy.” History, as written by the English, recorded that name.</p>
          <p>In today’s Southampton County, the Nottoway River flows, Nottoway House sells furniture and the highway marker beside the high school says “Nottoway Indians.” Some descendants of the tribe who fled north to Canada and Wisconsin, who ended up in Missouri and Ohio and Rhode Island, who live in North Carolina, still use that name.</p>
          <p>Those who stayed do not. They want state and federal recognition as the Cheroenhaka. They want their ancestors’ bones back from the Smithsonian Institution. They want to rebury them on Kello’s land.</p>
        </>,
        // Page 5
        <>
          <p>On Sussex County’s Stony Creek, a tributary of the Nottoway, archaeologists have turned up Indian artifacts from at least 15,000 years ago. These “first Americans” were building fires and making arrowheads 6,000 years before anyone crossed the land bridge between Siberia and Alaska, upsetting theories about the colonization of North America.</p>
          <p>These probable Nottoway ancestors moved on downstream, near the present-day county seat of Courtland. While looking for surface arrowheads in the early 1960s, Russell Darden found that looters had been digging for Indian artifacts on the riverbank. A founder of the Nottoway chapter of the Archaeological Society of Virginia, Darden contacted authorities, raised money for a professional excavation and took an active role in examining what came to be called the Hand site.</p>
        </>,
        // Page 6
        <>
          <p>“We have them dated here in the 1500s,” Darden said. “And that’s pretty definitely a Nottoway village, because of the house construction.”</p>
          <p>The archaeologists uncovered the remains of 136 Indians and one white woman, maybe a Spaniard, maybe a Lost Colonist. Most of the Indian bones ended up in the Smithsonian, where they will stay unless the Nottoway can, indeed, gain recognition as a tribe and apply for their ancestors’ repatriation. For now, in the eyes of the government, no descendants remain to claim them.</p>
          <p>The English colonists arrived in 1607, but they didn’t meet the Nottoway until 1650, when merchant Edward Bland came upon a village of some 400 people. Their distance from Jamestown — about 40 miles — limited contact with the English.</p>
          <p>Still, the Nottoway, along with several other tribes, signed a peace treaty in 1677, which called for a yearly tribute to the governor.</p>
          <p>After the Tuscarora of North Carolina lost their war against white settlers in 1713, some of the Nottoway joined their Iroquois cousins on their migration north to join the Iroquois confederacy in New York. Others remained in Southampton County.</p>
        </>,
        // Page 7
        <>
          <div className="my-8">
            <img src="/images/first-virginians-map.jpg" alt="Map of The First Virginians" className="max-w-full lg:max-w-2xl mx-auto rounded-lg shadow-lg" />
            <p className="text-sm text-center mt-2 text-muted-foreground">Before English settlers arrived, several Indian tribes had territories in Virginia, including the Nottoway. Today, the old Nottoway reservation belongs to the Kello family, which has owned the property for more than 100 years.</p>
          </div>
          <p>In 1705, the House of Burgesses granted the Nottoway two tracts of land totaling 41,000 acres, a circle and a square, which became their reservation. It was located on the south side of the Nottoway River in what is now Southampton County.</p>
          <p>The tribe dwindled. By 1735, the Nottoway were petitioning the General Assembly to let them sell some of their land. It was the beginning of the end of the reservation. A 1794 petition noted only six men and 19 women on the tribal rolls.</p>
        </>,
        // Page 8
        <>
          <p>In 1808, only 25 Nottoway remained on about 4,000 acres. The state appointed white trustees to manage their affairs. One of the last full-bloods was Queen Edie Turner, who died in 1838.</p>
          <p>An 1878 court order divided the last few acres among three families. The Nottoway, as a people, seemed to vanish from the landscape.</p>
          <p>But they didn’t.</p>
          <p>They just went underground.</p>
          <p>Some moved away. Some married whites, or blacks, or other Indians. They hid their Indian identity to avoid persecution. After 1924, when Virginia’s registrar of statistics, Walter A. Plecker, began his campaign of racial cleansing, it was dangerous to be anything other than white or black. Plecker believed that anyone with one drop of non-white blood was black, and he began changing public records to reflect his views.</p>
        </>,
        // Page 9
        <>
          <p>For 30 years, Plecker systematically erased Virginia’s Indians from the books. He left a legacy of anger and frustration for those who now seek to prove their Indian heritage.</p>
          <p>“It just seems like somebody has tried to wipe us out of history,” said Lynette Allston, a descendant who lives in Courtland.</p>
          <p>Walt “Red Hawk” Brown, a retired Army lieutenant colonel, began his genealogical quest in 1997. He had grown up knowing he was part-Indian. His grandmother, a Turner, was one-quarter Nottoway. His grandfather, a Brown, was one-quarter Meherrin. Both were Southampton County natives.</p>
          <p>“I always wanted to do the family tree, but I never had the time,” Brown said. “When I retired, I had the time.”</p>
        </>,
        // Page 10
        <>
          <p>He started at the Southampton County courthouse, poring over deeds, wills and court orders. He found the Nottoway reservation lands, the tribal rolls, the names of his ancestors. He spent days at the Library of Virginia in Richmond, copying documents. He traveled to the National Archives in Washington, D.C.</p>
          <p>He found other Nottoway descendants, people who also had been searching. They began to meet, to share information, to piece together their past.</p>
          <p>In February, about 30 of them gathered at Kello’s cottage. They elected Brown chief. They chose a tribal council. They adopted a constitution and bylaws.</p>
          <p>They are Cheroenhaka again.</p>
          <p>“It’s been a long time coming,” Brown said.</p>
        </>,
        // Page 11
        <>
          <div className="my-8">
            <img src="/images/return-of-natives-hug.jpg" alt="Pat Holley hugs a tribal member" className="max-w-full lg:max-w-2xl mx-auto rounded-lg shadow-lg" />
            <p className="text-sm text-center mt-2 text-muted-foreground">Near the Nottoway graveyard in Southampton County, Pat Holley, right center, of the Canadian Iroquois confederation Six Nations of the Grand River, hugs tribal member. Photo by Chris Tyree / The Virginian-Pilot.</p>
          </div>
          <p>The tribe has about 100 members now, with more joining as word spreads. They are doctors, lawyers, teachers, artists, construction workers, computer programmers. They are rediscovering their culture, their language, their spirituality.</p>
          <p>Pat Holley, a Canadian of the Six Nations of the Grand River, an Iroquois confederation, came from Ontario to attend. Holley’s ancestors were forced out of the Mohawk Valley of New York during the American Revolution. He has no Nottoway blood, but he knows what it is to be Iroquois.</p>
        </>,
        // Page 12
        <>
          <p>"I can’t begin to tell you how it feels to see all these people," Holley said, looking at the gathering around the drum. "It’s really amazing. We were told there was no one left."</p>
          <p>Later, Holley would lead the group in a blessing of the river, a tobacco ceremony to give thanks to the Creator, and a smudging, or cleansing, of each person with the smoke of sacred herbs.</p>
          <p>"It is," he said, "a new beginning."</p>
        </>,
      ];

      const totalPages = pages.length;

      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Return of the Natives in Southampton County</h2>
          <p className="text-sm text-muted-foreground">By DIANE TENNANT, The Virginia-Pilot © May 26, 2002</p>
          <p className="text-sm font-bold text-muted-foreground">Part 1 of 2</p>

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

          {currentPage === totalPages && (
            <div className="mt-8 text-center">
              <Link href="/about-us/return-of-natives-2">
                <Button>Continue to Part 2 →</Button>
              </Link>
            </div>
          )}
        </div>
      );
    }

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

    if (slug === "native-americans-reclaim-reservation-land") {
      const [currentPage, setCurrentPage] = useState(1);

      const pages = [
        // Page 1
        <>
          <div className="my-8">
            <img src="/images/reclaim-reservation-land-1.jpg" alt="Chief Walt “Red Hawk” Brown points a peace pipe toward the four winds" className="max-w-full lg:max-w-2xl mx-auto rounded-lg shadow-lg" />
            <p className="text-sm text-center mt-2 text-muted-foreground">Chief Walt “Red Hawk” Brown (center) points a peace pipe toward the four winds during the “Land Closing Peace Pipe Ceremony” Friday in Courtland. Seated are Mark Remaley (left) of International Paper Co. and Jay Randolph (right), the assistant county administrator for Southampton County. Photo by Charlie Passut</p>
          </div>
          <p><strong>COURTLAND</strong>—For the first time in centuries, the Cheroenhaka (Nottoway) Indian Tribe has its land back.</p>
          <p>On Friday, the tribe’s foundation officially purchased 100 acres from Sustainable Forest LLC, a Delaware limited liability company and an arm of International Paper Co.</p>
          <p>Several dozen members of the tribe were on hand and in full regalia to witness the historic event, officially called a “land closing peace pipe ceremony.”</p>
        </>,
        // Page 2
        <>
          <p>“This will be a historic moment in the history of the tribe,” Chief Walt “Red Hawk” Brown said. “It is a Creator-sent blessing that in the 21st century we are reclaiming a small portion of the reservation land that once belonged to our tribe. With ownership of the land, we can now work toward bringing our goals to fruition.”</p>
          <div className="my-8">
            <img src="/images/reclaim-reservation-land-2.jpg" alt="Bernard “Fire Walker” Hedgepeth, Vashti “Sparrow Hawk” Clark and Lila “Spirit Heart” Hedgepeth listen to Chief Walt “Red Hawk” Brown’s comments" className="max-w-full lg:max-w-2xl mx-auto rounded-lg shadow-lg" />
            <p className="text-sm text-center mt-2 text-muted-foreground">Bernard “Fire Walker” Hedgepeth (background, from left), Vashti “Sparrow Hawk” Clark and Lila “Spirit Heart” Hedgepeth listen to Chief Walt “Red Hawk” Brown’s comments during Friday’s “Land Closing Peace Pipe Ceremony,” while Mark Remaley of International Paper Co. looks on. Photo by Charlie Passut</p>
          </div>
          <p>The 100-acre parcel is located on Old Bridge Road, just south of Courtland. The land is a wooded area, and according to a survey map the southern boundary of the parcel is near, but does not quite reach, the Nottoway River.</p>
        </>,
        // Page 3
        <>
          <p>“This is a very proud moment for all of us at International Paper,” said Mark Remaley, a fiber manager for the company in Courtland. “For many years this has been a working forest. And (like) the working forests that we have managed for many years, this forest went through a rebirth many times. We would harvest the trees, and then plant them back, so that we would have a future forest for generations to come.”</p>
          <p>And then came the moment that the tribe had been waiting for seven years.</p>
          <p>“So today, I hand Mr. Brown the purchase and sales agreement to move this land from International Paper’s stewardship to the Cheroenhaka (Nottoway) Indian stewardship for generations to come.”</p>
        </>,
        // Page 4
        <>
          <p>Since re-forming in February 2002, one of the tribe’s goals has been to acquire a portion of their former reservation land either through purchase or donation.</p>
          <p>According to information from the tribe, about 41,000 acres were given to the tribe as a reservation in 1705 by the House of Burgesses, which was then the colonial government of Virginia. The reservation was divided into two parts, the Circle Tract and the Square Tract, which were 18,000 and 23,000 acres in size, respectively.</p>
          <p>The reservation started to disappear in 1735 after land grabs by colonists. By 1877, the final 525 acres of the reservation were divided among surviving tribal members.</p>
        </>,
        // Page 5
        <>
          <p>Brown said the 100-acre tract purchased by the tribe Friday was once part of the Square Tract.</p>
          <p>The tribe plans to construct a tribal cultural center and museum on the property, as well as powwow grounds and a worship center. Brown said the tribe would also develop an interactive Native American village called Cattashowrock Town.</p>
          <p>According to Brown, Cattashowrock Town was the name of one of three Cheroenhaka (Nottoway) villages known to colonist James Thweatt, who stated that he knew of the villages’ existence for 48 years in a sworn affidavit in November 1707. Thweatt also stated that the Cheroenhaka (Nottoway) Indians called the nearby river “Nottoway.”</p>
        </>,
        // Page 6
        <>
          <p>Cattashowrock Town would be constructed as a replica of a 1580s Iroquoian village, complete with a palisade and Iroquois traditional “long houses,” similar to the ones discovered in the 1960s in Southampton County near General Thomas Highway.</p>
          <p>“In the long term, we envision some 40 to 50 thousand tourists per year visiting the area,” Brown said. “We are trusting that the local communities will take a proactive role and interest in the goals of the tribe and lend their support monetarily or in kind.”</p>
          <p>Meanwhile, a bill seeking federal recognition of six Virginia tribes went before the House Committee on Natural Resources on Wednesday.</p>
        </>,
        // Page 7
        <>
          <p>The Thomasina E. Jordan Indian Tribes of Virginia Federal Recognition Act of 2009 seeks recognition of the Chickahominy Indian Tribe, the Chickahominy Indian Tribe-Eastern Division, the Upper Mattaponi Tribe, the Rappahannock Tribe, Inc., the Monacan Indian Nation, and the Nansemond Indian Tribe.</p>
          <p>The federal government currently recognizes 562 tribes in the United States.</p>
          <p>According to Chief Stephen R. Adkins of the Chickahominy Indian Tribe, the law would guarantee access to archaeological sites on public land, the ability to retrieve the bones of ancestors from federal repositories, and create a formal relationship between the tribes and the federal government.</p>
        </>
      ];

      const totalPages = pages.length;

      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Native Americans Reclaim Reservation Land</h2>
          <p className="text-sm text-muted-foreground">By Charlie Passut | Tidewater News</p>
          <p className="text-sm text-muted-foreground">Published Saturday, March 21, 2009</p>
          
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

    if (slug === "census-1808") {
      const [currentPage, setCurrentPage] = useState(1);

      const pages = [
        // Page 1
        <>
          <p className="has-text-align-center"><em>(Transcribed By Chief Walt “Red Hawk” Brown, Cheroenhaka (Nottoway) Indian Tribe, Southampton County, VA and Tribal Member Cynthia “Water Lily” Brown)</em></p>
          <p>The following enumeration of the Cheroenhaka ((Nottoway) Indian tribe was abstracted from the Executive Papers (July 1-22, 1808) located at the Library of Virginia, Archives Division, Richmond, VA. The Tribal Census is contained in a letter to the Governor from the Trustees of the Cheroenhaka (Nottoway) Indian Tribe dated July 18, 1808. <strong>The trustees were seeking instructions concerning the leasing and / or division of the Cheroenhaka (Nottoway) Indian lands; an as such, predicated their “Enumeration” based on a Matrilineal Line.</strong> <strong>All Patrilineal (males) descendents (children) were negated from the count. </strong> <strong>This method of enumerating reduced the number of Indians the Trustees would have to deal with in any future land transfers.</strong></p>
          <p>It is noted that the division of the Nottoway Land did not come about until after the William Boseman Act of 1823, some 15 years later. From this author’s perspective the Census was a forerunner of attempting to get around the Federal Government’s 1790 Indian Non-Intercourse Act which prohibited any land sales between the Indians and non-Indians (members of the Commonwealth) only if the Federal Government intervened<em> .</em></p>
          <p>The following Census /material is presented close to the original format. The census list includes males, their ages, their employments, and some general remarks about their character, followed by a list of the females with the same information. The amount of acreage they tilled and some genealogical data is included in the general remarks of the Trustees<em>. (It should be noted that the “Census Takers” did not count some children even though they carried a minimum of ½ the Indian Bloodline. From an Ethno-Historic point, research has revealed that many of the Cheroenhaka (Nottoway) Indians had Common-Law Wives and/or Common-Law Husbands, with children).</em></p>
        </>,
        // Page 2
        <>
          <p>1.<strong> Littleton Scholar</strong> 51 years Tillage a small part of his time, balance idle; <strong>12 acres</strong>; he is the only Indian in his family, his wife being a white woman. <em>(Children not counted…WDB)</em></p>
          <p>2. <strong>Tom Turner</strong> 36 years Tillage when he works, his employment at present unknown, as he has left his farm in the possession of a mulatto woman who has been kept by him as a wife, the greater part of his time has been generally spent in drunkenness, and the destruction of what little crop he has made; <strong>18 acres</strong>; he is the only Indian in his family. <em>(Children not counted…WDB)</em></p>
          <p>3. <strong>Jemmy Wineoak</strong> 38 years Tillage, idle more than three fourths of his time, <strong>18 acres</strong>; he is the only Indian in his family, has no wife, a mulatto woman lives with him. <em>(Children not counted…WDB)</em></p>
          <p>4. <strong>Tom Step</strong> 18 years Sometimes hires himself out as a day laborer, but mostly idle. (see Betsy Step)</p>
          <p>5. <strong>Henry Turner</strong> 16 years Employed by his mother in making a crop. (see Nancy Turner) <em>(Henry Turner was registered in 1844 on Free Negro and Mulatto Census / List, St Luke Parish…WDB)</em></p>
        </>,
        // Page 3
        <>
          <p>6. <strong>Alexander Rogers</strong> 11 years Lives with Mrs. Susanna Goodwyn, who receives his allowance in proportion to the time she maintains him. He is brother by the mother’s side of Fanny and Solomon Bartlett. Until September 1806, he with Fanny and Solomon Bartlett lived with a relation of theirs named Celia Rogers, a Nansemond Indian, on the land of the Nottoways; at that time Celia Rogers died (their parents being long dead), they were without a near relation and none of the Nottoways came to take care of them. The Trustees took them into their families. Alexander was taken into the family of Robert Goodwyn, <strong>a trustee</strong>, and has continued with Goodwyn’s widow. <em>(Alexander Rogers in 1820 was tried and found guilty of 2nd Degree Murder in the court of Southampton County, VA – received 15 years…WDB)</em></p>
          <p>7. <strong>John Woodson</strong> 12 years Employment unknown. <em>(Living in Artis Town in 1850…WDB)</em></p>
          <p>8. <strong>Solomon Bartlett</strong> 8 years Lives with Samuel Blunt <strong>(Trustee),</strong> no employment; Blunt receives the allowance due his and his sister, (see Alexander Rogers). <em>(Solomon Bartlett’s name reverted to Solomon Turner in 1820…WDB)</em></p>
        </>,
        // Page 4
        <>
          <p>9. <strong>Billy Woodson</strong> 12 years Lives with Micajah Boseman, <em>(White…WDB)</em> his father, too small for any particular employment, has been sent to school by his father, can read and write a little, his father has promised the Trustees to send him again. His father in addition to his allowance also is allowed to work <strong>17 acres</strong>. He has lived with his father since his mother’s death. (Nanny Woodson). <em>(In 1823 he listed himself as William Boseman. The name “William Boseman” is listed first on the 1822 Free Negro and Mulatto Census-St Luke’s Parish…WDB</em>)</p>
          <p>10. <strong>Edy Turner</strong> 54 years Her employments are knitting, sewing, and what is usual in common housewifery; <strong>34 acres</strong>; she has had 2 Negroes hired for her last year by the Trustees and this year by her husband; her family consists of herself, Polly Woodson and John Woodson, whose allowances are paid to her for their maintenance. <em>( A 1819 Marriage Lic between Edy (Edith) Turner and William Green (Southampton County Court, Clerk’s Office) list them as “A Free Person of Color.” In 1820 she is dubbed as Queen / Chief of the Cheroenhaka (Nottoway) Indian Tribe, Southampton County, VA…WDB)</em></p>
        </>,
        //Page 5
        <>
          <p>11. <strong>Nancy Turner</strong> 34 years Knitting, sewing, weaving, etc.; <strong>15 acres</strong>, also <strong>3 acres</strong> worked at her desire and with our permission by a free Negro; the Indian part of her family is composed of herself and son Henry Turner, whose allowance she receives.</p>
          <p>12. <strong>Betsy Step</strong> 36 years Spinning, generally; <strong>2 acres</strong>; she and her son Tom, when at home compose her family.</p>
          <p>13. <strong>Winny Woodson</strong> 17 years Spinning, generally; <strong>45 acres</strong>; She and her sister Anny Woodson have the care and receive the allowance of their young sister Jinny Woodson and compose a household.</p>
          <p>14. <strong>Anny Woodson</strong> 19 years Spinning, generally. (See Winny Woodson).</p>
        </>,
        // Page 6
        <>
          <p>15. <strong>Polly Woodson</strong> 14 years Employment unknown. (See Edy Turner).<br/><em>(“Polly” Woodson – Kare’ Hout aka Mary Woodson Turner was born in 1794 and is recorded as living with Pearson Truner in Artis Town in 1850...WDB)</em></p>
          <p>16. <strong>Fanny Bartlett</strong> 16 years Sometimes learning to spin, lives with Samuel Blunt <strong>(Trustee</strong>). (See Alexander Rogers)</p>
          <p>17. <strong>Jenny Woodson</strong> 6 years Lives with her sisters Anny and Winny Woodson. (See Winny Woodson)</p>
        </>,
        // Page 7
        <>
          <p className="has-text-align-right">Signed by,</p>
          <p className="has-text-align-right">Henry Blow<br/>William Blow<br/>Samuel Blunt<br/>Trustees to the Nottoway<br/>Tribe of Indians </p>
          <p>It is noted, by the census count of the Trustees, that only <strong>164 total acreage</strong> were being tilled and /or farmed. This is somewhat alarming and puzzling considering that a March 17,1820 news paper clipping, resulting from a note of Thomas Jefferson, and appearing in the Petersburg Newspaper reported the following: <em>“The Nottoway (Cheroenhaka…WDB) Indians in number about 27 including men, women and children , occupy a track of <strong>7, 000 Acres</strong> of excellent land upon the west side of the Nottoway River, two miles from Jerusalem (Courtland, VA…WDB), in the County of Southampton. The principal character among them is a woman, who is styled their Queen. Her name is Edie (Edith…WDB) Turner (Wane’ Roonseraw…WDB).</em></p>
        </>
      ];

      const totalPages = pages.length;

      return (
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-secondary">Cheroenhaka (Nottoway) Indian Census Southampton County, Va</h2>
          <p className="text-sm text-muted-foreground">July 18, 1808</p>
          
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
        <a href="#" onClick={(e) => { e.preventDefault(); history.back(); }} className="text-primary hover:text-secondary font-bold inline-flex items-center gap-2">
          ← Back
        </a>
      </div>
    </div>
  );
}