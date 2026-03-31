import React from "react";
import { Link } from "wouter";

export default function Home() {
  const councilMembers = [
    "Chief Walt \"Red Hawk\" Brown — Tribal Chief/Council Chairman/President",
    "Ellis \"Soaring Eagle\" Wright — Vice Chief/Tribal Treasurer",
    "William Lamb \"Spread Eagle\" Howell — War Chief/Powwow Color Guard Commander",
    "Caroh \"Water Blossom\" Holley — Council Woman/Roll Keeper/Facebook Admin",
    "Gary \"Twin Hawks\" Burnette — Chief Man/Grant Committee Vice Chairman",
    "Tommy \"Star Watcher\" Hines — Chief Man/Council Member",
    "Kitty \"Yellow Sky Woman\" Boone — Heritage Foundation Treasurer",
    "Rickie \"Two Beavers\" Boone — Chief Man/Powwow Co-Chairman",
    "LaStel \"Talking Bird\" Walker — Grant Committee Chairperson",
    "Teresa \"Moon Star\" Preston — Adopted Tribal Member/Heritage Foundation",
    "Robert I \"Running Eagle\" Turner — Powwow Food Services Committee Chairman",
    "Annie Thomas & Carol Harrison — Tribal Women's Group Co-Chairs",
    "Michael \"Strong Tree\" Skipper — Chief Man/Tribal Website Administrator",
    "Deborah \"Tiger Lily\" Motahari — Educational Representative/School Day Coordinator",
    "Karen \"Running Moon\" Barrett — Tribal Fund Raiser Chairperson"
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Welcome Section */}
      <section className="bg-card p-6 md:p-12 border-b-2 border-border">
        <h1 className="text-3xl md:text-5xl text-center mb-8 border-b-2 border-accent pb-4 inline-block mx-auto">
          Welcome to the Cheroenhaka (Nottoway) Indian Tribe
        </h1>
        
        <div className="flex flex-col md:flex-row gap-8 items-start mt-6">
          <div className="w-full md:w-1/3 shrink-0">
            <img 
              src="/images/BROWN.jpg" 
              alt="Chief Walt Red Hawk Brown" 
              className="w-full rounded-md shadow-lg border-4 border-secondary object-cover"
            />
            <p className="text-center mt-3 font-serif font-bold text-primary text-sm">
              Chief Walt "Red Hawk" Brown
            </p>
          </div>
          
          <div className="w-full md:w-2/3 prose prose-lg prose-slate text-foreground">
            <p className="lead italic text-primary/80 border-l-4 border-accent pl-4 py-2 bg-muted/30">
              "As our tribe's spokesperson 'Dar-sun-ke' (the Tongue), and Chief, it is with great zeal on behalf of the Cheroenhaka (Nottoway) Indian Tribal Council and Members, that we welcome you in the name of the Creator (Quaker-Hun-te) to our Tribal Web Site. Each year we host three tribal events on our 263 acres of tribal land at Cattashowrock Town. A Green Corn Dance Powwow the first Saturday in July, a Native American Revival, Crusade for Christ / Yahshua, the Great Awakening of the Holy Spirit, on the third Saturday in September and an Intertribal Corn Harvest Powwow and School Day on the first weekend in November."
            </p>
            <p className="text-right font-bold font-serif text-secondary mt-2">
              — Chief Walt "Red Hawk" Brown, "Teerheer"
            </p>

            <div className="mt-8 bg-muted p-6 rounded-lg border border-border shadow-inner">
              <h3 className="text-xl font-bold text-secondary mb-3 mt-0">Support Our Tribe</h3>
              <p>
                <strong>2026 Tribal Calendar Available!</strong><br />
                Purchase your calendar for $20 + $5 shipping. Contact: <a href="mailto:barrettkd20@gmail.com" className="text-primary font-semibold hover:underline">barrettkd20@gmail.com</a> or <a href="mailto:wdbrowniii@aol.com" className="text-primary font-semibold hover:underline">wdbrowniii@aol.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="bg-primary text-primary-foreground p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0,transparent_100%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-accent mb-6">Sacred Traditions</h2>
          <img 
            src="/images/blessing-pipe.jpg" 
            alt="Blessing of the Peace Pipe" 
            className="w-full rounded-md shadow-2xl border-4 border-accent/50 mx-auto"
          />
          <p className="mt-4 text-sm italic text-primary-foreground/80 max-w-2xl mx-auto">
            Blessing of the Peake (Peace) Pipe on the Na-da-Wa Jo-ke L-R: Vice Chief Ellis 'Soaring Eagle' Wight; Chief Walt 'Red Hawk' Brown; War Chief William Lamb 'Spread Eagle' Howell
          </p>
        </div>
      </section>

      {/* Tribal Council Section */}
      <section className="p-8 md:p-12 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl text-center mb-10 text-primary uppercase tracking-widest border-b border-border pb-4">
            Tribal Council Members
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {councilMembers.map((member, idx) => {
              const [name, title] = member.split(" — ");
              return (
                <div key={idx} className="flex flex-col pb-3 border-b border-border/50">
                  <span className="font-bold text-secondary text-lg">{name}</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wide">{title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Quick Links */}
      <section className="bg-muted p-8 md:p-12 border-t-4 border-secondary">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <Link href="/about-us/cattashowrock-town" className="bg-card p-6 rounded shadow hover:shadow-md transition-shadow border-t-4 border-accent group">
            <h3 className="font-serif font-bold text-xl text-primary group-hover:text-secondary transition-colors mb-2">Visit Cattashowrock</h3>
            <p className="text-sm text-foreground/80">Experience our 17th Century replica palisade village.</p>
          </Link>
          <Link href="/recognition" className="bg-card p-6 rounded shadow hover:shadow-md transition-shadow border-t-4 border-secondary group">
            <h3 className="font-serif font-bold text-xl text-primary group-hover:text-secondary transition-colors mb-2">Federal Recognition</h3>
            <p className="text-sm text-foreground/80">Learn about H.R.9630 and our fight for recognition.</p>
          </Link>
          <Link href="/events/upcoming" className="bg-card p-6 rounded shadow hover:shadow-md transition-shadow border-t-4 border-primary group">
            <h3 className="font-serif font-bold text-xl text-primary group-hover:text-secondary transition-colors mb-2">Tribal Events</h3>
            <p className="text-sm text-foreground/80">Join us for Powwows and seasonal gatherings.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}