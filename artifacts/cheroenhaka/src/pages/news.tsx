import React from "react";

export default function News() {
  const newsItems = [
    {
      title: "Governor Youngkin receives peace tribute from Cheroenhaka Indian Tribe in annual Spotswood Treaty ceremony",
      source: "WRIC ABC 8News",
    },
    {
      title: "Youngkin and Cheroenhaka Tribe Renew Spottswood Treaty 310th Annual Ceremony",
      source: "Newsradio 1140 WRVA",
    },
    {
      title: "Local New Virginia state park honors Native American tribes",
      source: "The Washington Post",
    },
    {
      title: "Machicomoco State Park Virtual dedication of Virginia's 40th State Park",
      source: "State Park Dedication",
    },
    {
      title: "Cheroenhaka present Spotswood tribute",
      source: "Tidewater News, May 16, 2018",
    },
    {
      title: "Cheroenhaka Journals Archived by State Library",
      source: "Tidewater News, June 24, 2009",
    },
    {
      title: "Native Americans Reclaim Reservation Land",
      source: "Local News",
    }
  ];

  return (
    <div className="w-full p-6 md:p-12">
      <h1 className="text-4xl text-primary font-serif font-bold border-b-4 border-secondary pb-4 mb-8">
        In the News
      </h1>
      
      <div className="prose prose-lg prose-slate mb-8 max-w-none">
        <p className="lead">
          The Cheroenhaka (Nottoway) Indian Tribe has been frequently featured in local and national media. Below is a selection of recent and historical coverage highlighting our heritage, ceremonies, and milestones.
        </p>
      </div>

      <div className="space-y-6">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-card p-6 rounded-lg border-l-4 border-secondary shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-primary mb-2 mt-0 font-serif">{item.title}</h3>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-0">
              Source: {item.source}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}