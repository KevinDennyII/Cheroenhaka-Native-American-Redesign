import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Layout } from "@/components/layout";

import Home from "@/pages/home";
import CattashowrockTown from "@/pages/cattashowrock";
import Contact from "@/pages/contact";
import AboutIndex from "@/pages/about-index";
import RecognitionIndex from "@/pages/recognition-index";
import LinksIndex from "@/pages/links-index";
import News from "@/pages/news";
import GenericPage from "@/pages/generic";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        
        {/* About Subpages */}
        <Route path="/about-us" component={AboutIndex} />
        <Route path="/about-us/cattashowrock-town" component={CattashowrockTown} />
        <Route path="/about-us/:slug">
          {(params) => <GenericPage section="About Us" slug={params.slug} />}
        </Route>
        
        {/* Recognition */}
        <Route path="/recognition" component={RecognitionIndex} />
        <Route path="/recognition/:slug">
          {(params) => <GenericPage section="Recognition" slug={params.slug} />}
        </Route>
        
        {/* History */}
        <Route path="/history">
          {() => <GenericPage section="History" slug="index" />}
        </Route>
        <Route path="/history/:slug">
          {(params) => <GenericPage section="History" slug={params.slug} />}
        </Route>
        
        {/* Events */}
        <Route path="/events">
          {() => <GenericPage section="Events" slug="index" />}
        </Route>
        <Route path="/events/:slug">
          {(params) => <GenericPage section="Events" slug={params.slug} />}
        </Route>
        
        {/* Other Pages */}
        <Route path="/chief-bio">
          {() => <GenericPage section="Chief's Bio" slug="bio" />}
        </Route>
        <Route path="/in-the-news" component={News} />
        <Route path="/handsite">
          {() => <GenericPage section="Hand Site" slug="handsite" />}
        </Route>
        
        {/* Links */}
        <Route path="/links" component={LinksIndex} />
        <Route path="/links/:slug">
          {(params) => <GenericPage section="Links" slug={params.slug} />}
        </Route>
        
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;