import React from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us", subItems: [
    { name: "Thrahunta Newsletter", path: "/about-us/tribal-newsletter" },
    { name: "Heritage Foundation", path: "/about-us/heritage-foundation" },
    { name: "Cattashowrock Town", path: "/about-us/cattashowrock-town" },
    { name: "Resolution & Goals", path: "/about-us/resolution-goals" },
    { name: "Tribal Shield & Heraldry", path: "/about-us/tribal-shield" },
    { name: "Constitution & Bylaws", path: "/about-us/constitution-bylaws" },
    { name: "Our Language", path: "/about-us/language" },
    { name: "Chief Edith Turner", path: "/about-us/edith-turner" },
    { name: "Return of Natives Pt.1", path: "/about-us/return-of-natives-1" },
    { name: "Return of Natives Pt.2", path: "/about-us/return-of-natives-2" },
    { name: "1808 Census", path: "/about-us/census-1808" },
    { name: "Native Americans Reclaim Reservation Land", path: "/about-us/native-americans-reclaim-reservation-land" },
    { name: "Cheroenhaka (Nottoway) Enterprises", path: "https://www.cheroenhaka-nottoway.org/wp-content/uploads/CNE-Capability-Statement-Updated.pdf", external: true },
  ]},
  { name: "Recognition", path: "/recognition", subItems: [
    { name: "US Congress.gov Bill Alert – H.R.9630", path: "/recognition/us-congress-bill-alert-hr9630" },
    { name: "House Joint Resolution 171", path: "https://www.cheroenhaka-nottoway.org/wp-content/uploads/State-Recognition-Enrolled-HJ171.pdf", external: true },
    { name: "Senate Joint Resolution 127", path: "https://www.cheroenhaka-nottoway.org/wp-content/uploads/State-Recognition-Enrolled-SJ127.pdf", external: true },
    { name: "VA Senate Resolution", path: "/recognition/va-senate-resolution" },
    { name: "Anthropologist Letter", path: "/recognition/anthropologist-letter" },
    { name: "Anthropologist Article", path: "/recognition/anthropologist-article" },
    { name: "Recognition Delayed", path: "/recognition/recognition-delayed" },
    { name: "Beaver Creek Support", path: "/recognition/beaver-creek-support" },
    { name: "Federal Recognition of Native American Tribes in Virginia", path: "http://www.virginiaplaces.org/nativeamerican/recognition.html", external: true },
    { name: "How to Show Support", path: "/recognition/how-to-show-support" },
  ]},
  { name: "History", path: "/history", subItems: [
    { name: "Waskehee", path: "/history/creator-heart-speaks" },
    { name: "Ethnohistorical Snapshot", path: "/history/ethno-historic-snapshot" },
  ]},
  { name: "Events", path: "/events", subItems: [
    { name: "Upcoming Events", path: "/events/upcoming" },
    { name: "Past Events", path: "/events/past" },
    { name: "Spotswood Treaty Tributes", path: "/events/spotswood-treaty-tributes" },
    { name: "Presentations", path: "/events/tribal-presentations" },
    { name: "Arch. Society", path: "/events/archaeological-society" },
  ]},
  { name: "News", path: "/in-the-news" },
  { name: "Hand Site", path: "/handsite" },
  { name: "Chief's Bio", path: "/chief-bio" },
  { name: "Links", path: "/links", subItems: [
    { name: "Educational", path: "/links/educational" },
    { name: "Funding", path: "/links/funding" },
    { name: "Genealogy", path: "/links/genealogy" },
    { name: "Health", path: "/links/health" },
    { name: "Political", path: "/links/political" },
    { name: "Social Services", path: "/links/social-services" },
    { name: "Tribes & Events", path: "/links/tribes-events" },
    { name: "Other", path: "/links/other" },
  ]},
  { name: "Contact", path: "/contact" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [location] = useLocation();

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      <header className="w-full flex flex-col shadow-md z-50">
        {/* Banner Image */}
        <div className="w-full bg-primary flex justify-center">
          <img 
            src="/images/header.jpg" 
            alt="Cheroenhaka (Nottoway) Indian Tribe Header Banner" 
            className="w-full max-w-[1200px] h-auto object-cover border-b-4 border-secondary"
          />
        </div>
        
        {/* Top Bar with social */}
        <div className="bg-primary text-primary-foreground py-1 px-4 flex justify-end items-center text-sm max-w-[1200px] w-full mx-auto">
          <a href="https://www.facebook.com/CheroenhakaNottowayIndianTribe/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Facebook size={18} />
            <span className="hidden sm:inline">Follow us on Facebook</span>
          </a>
        </div>

        {/* Navigation */}
        <nav className="bg-primary text-primary-foreground border-b border-sidebar-border sticky top-0">
          <div className="max-w-[1200px] mx-auto">
            {/* Mobile Nav Toggle */}
            <div className="md:hidden flex justify-between items-center p-4">
              <span className="font-serif font-bold text-lg text-accent">Menu</span>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-primary-foreground hover:text-accent">
                {mobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>

            {/* Desktop Nav */}
            <ul className="hidden md:flex flex-wrap justify-center text-sm font-semibold tracking-wide py-2">
              {navItems.map((item) => (
                <li key={item.path} className="relative group px-3 py-2">
                  <Link href={item.path} className="hover:text-accent transition-colors uppercase font-serif whitespace-nowrap inline-block">
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <ul className="absolute left-0 top-full mt-0 bg-primary border border-sidebar-border shadow-lg min-w-[220px] hidden group-hover:block z-50 rounded-b-md overflow-hidden">
                      {item.subItems.map((sub) => (
                        <li key={sub.path}>
                          {sub.external ? (
                            <a href={sub.path} target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:bg-secondary hover:text-secondary-foreground transition-colors font-sans text-[13px] border-b border-primary-foreground/10 last:border-0">
                              {sub.name}
                            </a>
                          ) : (
                            <Link href={sub.path} className="block px-4 py-3 hover:bg-secondary hover:text-secondary-foreground transition-colors font-sans text-[13px] border-b border-primary-foreground/10 last:border-0">
                              {sub.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Nav Drawer */}
            {mobileMenuOpen && (
              <div className="md:hidden bg-sidebar text-sidebar-foreground flex flex-col max-h-[70vh] overflow-y-auto">
                <ul className="flex flex-col py-2">
                  {navItems.map((item) => (
                    <li key={item.path} className="border-b border-sidebar-border last:border-0">
                      <Link href={item.path} className="block px-4 py-3 font-serif uppercase hover:bg-sidebar-primary hover:text-sidebar-primary-foreground font-semibold">
                        {item.name}
                      </Link>
                      {item.subItems && (
                        <ul className="bg-primary/50">
                          {item.subItems.map((sub) => (
                            <li key={sub.path}>
                              {sub.external ? (
                                <a href={sub.path} target="_blank" rel="noopener noreferrer" className="block pl-8 pr-4 py-2 text-sm hover:bg-secondary hover:text-secondary-foreground transition-colors border-b border-sidebar-border/30 last:border-0">
                                  {sub.name}
                                </a>
                              ) : (
                                <Link href={sub.path} className="block pl-8 pr-4 py-2 text-sm hover:bg-secondary hover:text-secondary-foreground transition-colors border-b border-sidebar-border/30 last:border-0">
                                  {sub.name}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>
      </header>

      <main className="flex-1 w-full max-w-[1200px] mx-auto bg-card shadow-xl min-h-[50vh]">
        {children}
      </main>

      <footer className="w-full bg-sidebar text-sidebar-foreground mt-12 py-8 border-t-4 border-secondary">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-accent text-xl mb-4">Contact Us</h3>
            <address className="not-italic text-sm space-y-1 text-muted">
              <p>Cheroenhaka (Nottoway) Indian Tribe</p>
              <p>Cattashowrock Town</p>
              <p>27345 Aquia Path</p>
              <p>P.O. Box 397</p>
              <p>Courtland VA 23837</p>
              <p className="pt-2">Phone: 757-562-7760</p>
              <p>Fax: 757-516-8125</p>
            </address>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <h3 className="font-serif text-accent text-xl mb-4">Support Our Heritage</h3>
            <p className="text-sm text-muted mb-4">Your donations help preserve our 17th Century replica palisade village and tribal traditions.</p>
            <div className="flex flex-col gap-3">
              <Button asChild variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8">
                <a href="/contact">Donate via PayPal</a>
              </Button>
              <span className="text-xs text-muted">Or use Zelle: barrettkd20@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-col items-end text-right md:items-start md:text-left">
            <h3 className="font-serif text-accent text-xl mb-4">Connect</h3>
            <a href="https://www.facebook.com/CheroenhakaNottowayIndianTribe/" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
              <img src="/images/facebook2.png" alt="Facebook" className="h-10 w-auto bg-white p-1 rounded" />
            </a>
            <p className="mt-4 text-sm text-muted">
              Chief Walt "Red Hawk" Brown<br/>
              <a href="mailto:wdbrowniii@aol.com" className="hover:text-accent underline">wdbrowniii@aol.com</a>
            </p>
          </div>
        </div>
        
        <div className="max-w-[1200px] mx-auto px-4 mt-8 pt-6 border-t border-sidebar-border text-center text-xs text-muted/60">
          <p>All rights reserved Cheroenhaka (Nottoway) Indian Tribe © {new Date().getFullYear()}</p>
          <p className="mt-1">Webmaster: Michael 'Strong Tree' Skipper</p>
        </div>
      </footer>
    </div>
  );
}