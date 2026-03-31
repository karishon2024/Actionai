import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Users, 
  Briefcase, 
  ChevronDown, 
  ArrowRight, 
  Star,
  Zap,
  Target,
  Search,
  Layout,
  FileText,
  Image as ImageIcon,
  Globe,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center">
            <span className="text-brand-dark font-bold text-xl">A</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">Action AI</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#problem" className="text-gray-300 hover:text-brand-green transition-colors text-sm font-medium">Problem</a>
          <a href="#who" className="text-gray-300 hover:text-brand-green transition-colors text-sm font-medium">Who It's For</a>
          <a href="#learn" className="text-gray-300 hover:text-brand-green transition-colors text-sm font-medium">What You'll Learn</a>
          <a href="#packages" className="text-gray-300 hover:text-brand-green transition-colors text-sm font-medium">Packages</a>
          <a href="#faq" className="text-gray-300 hover:text-brand-green transition-colors text-sm font-medium">FAQ</a>
        </div>
        <button className="bg-brand-green text-brand-dark px-6 py-2 rounded-full font-semibold text-sm hover:bg-brand-green/90 transition-all">
          Get Started
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 dark-section overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-green font-semibold tracking-wider uppercase text-sm mb-4 block">
            Hands-On AI Training for Marketing Teams in Toronto & GTA
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Your Marketing Team Is Working Too Hard. <br />
            <span className="text-brand-green">AI Can Fix That in One Day.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
            We come to your office and train your marketing team to use the AI tools that actually matter. Write faster. Design better. Create campaigns in minutes instead of hours. No tech skills needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="btn-primary text-lg px-10">Book a Free Consultation</button>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-500">
              Trusted by <span className="text-white font-semibold">150+ professionals</span> across Toronto. Rated <span className="text-white font-semibold">4.7/5</span> by students.
            </p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/marketing-team/800/1000" 
              alt="Marketing Team Training" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 glass-card p-6 shadow-xl max-w-[200px]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Live Training</span>
            </div>
            <p className="text-sm font-semibold text-white">Toronto & GTA In-Person Sessions</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section id="problem" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">Your Marketing Team Is Spending Hours on Work That AI Does in Minutes</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Your team is busy. They write social media posts, design graphics, plan campaigns, research competitors, and build presentations. Every single week. The problem? Most of this work takes way longer than it should.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { task: "A blog post", before: "2 hours", after: "10 minutes", icon: FileText },
          { task: "Social media graphic", before: "45 minutes", after: "seconds", icon: ImageIcon },
          { task: "Competitor analysis", before: "Full afternoon", after: "15 minutes", icon: Search },
        ].map((item, idx) => (
          <div key={idx} className="p-8 rounded-3xl bg-brand-light-gray border border-gray-100 hover:border-brand-green/30 transition-all group">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-green group-hover:text-white transition-colors">
              <item.icon size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">{item.task}</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-500 line-through">Before: {item.before}</p>
              <p className="text-lg font-bold text-brand-green">After: {item.after}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <p className="text-xl text-gray-700 max-w-2xl mx-auto italic">
          "Your team is not slow. They just don't have the right tools yet. And while they're spending all that time on tasks AI can handle, your competitors are already moving faster."
        </p>
      </div>
    </div>
  </section>
);

const WhoIsThisFor = () => (
  <section id="who" className="py-24 bg-brand-light-gray">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">This Training Is Built for Marketing Teams That Want to Work Smarter</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Marketing Teams at Small Businesses",
            desc: "Your team handles everything: social media, emails, ads, content, design. This training shows them how to do it all faster and better with AI.",
            icon: Users
          },
          {
            title: "Marketing Managers and Content Creators",
            desc: "If your job is to produce content, run campaigns, and hit deadlines, AI will change how you work. Less time creating. More time thinking.",
            icon: Target
          },
          {
            title: "Business Owners Who Run Their Own Marketing",
            desc: "You wear every hat. AI becomes your extra team member. Write copy, create images, plan campaigns, and research markets without hiring more people.",
            icon: Briefcase
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-2xl flex items-center justify-center mx-auto mb-8">
              <item.icon size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ModuleCard = ({ number, title, duration, desc, practices }: any) => (
  <div className="glass-card p-8 hover:bg-white/10 transition-all group">
    <div className="flex justify-between items-start mb-6">
      <div className="w-10 h-10 rounded-full border border-brand-green text-brand-green flex items-center justify-center font-bold">
        {number}
      </div>
      <div className="flex items-center gap-2 text-gray-400 text-sm">
        <Clock size={16} />
        {duration}
      </div>
    </div>
    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-green transition-colors">{title}</h3>
    <p className="text-gray-400 mb-6 leading-relaxed">{desc}</p>
    <div className="space-y-3">
      <p className="text-xs font-bold uppercase tracking-widest text-brand-green">What they'll practice:</p>
      {practices.map((p: string, i: number) => (
        <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
          <CheckCircle2 size={16} className="text-brand-green shrink-0 mt-0.5" />
          {p}
        </div>
      ))}
    </div>
  </div>
);

const WhatTheyWillLearn = () => (
  <section id="learn" className="py-24 dark-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Here's What Your Team Will Learn in One Day</h2>
        <p className="text-xl text-gray-400 max-w-2xl">
          Everything is hands-on. Your team works with real AI tools on real marketing tasks during the session. They leave ready to use everything the next morning.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ModuleCard 
          number="1"
          title="AI-Powered Content Creation with Claude"
          duration="2 hours"
          desc="Write marketing copy that sounds like your brand. Social media posts, email campaigns, ad copy, blog drafts, CTAs."
          practices={[
            "Writing a full social media campaign in minutes",
            "Creating email sequences that convert",
            "Building a brand voice assistant",
            "Analyzing competitors and finding content gaps"
          ]}
        />
        <ModuleCard 
          number="2"
          title="AI Image Creation with Recraft"
          duration="1.5 hours"
          desc="Create professional marketing visuals without a designer. Social media graphics, product images, lifestyle photos."
          practices={[
            "Creating Instagram, FB, and LinkedIn graphics",
            "Setting up brand colors and consistency",
            "Generating product mockups",
            "Building a library of marketing visuals"
          ]}
        />
        <ModuleCard 
          number="3"
          title="Google AI Tools for Marketing"
          duration="1.5 hours"
          desc="Learn the AI features hiding inside Google. Gemini for content, AI Search for research, and custom Gems."
          practices={[
            "Writing content with Gemini in Docs",
            "Running market research with AI Search",
            "Scanning competitor materials with Lens",
            "Building a marketing assistant Gem"
          ]}
        />
        <ModuleCard 
          number="4"
          title="Web Design with Google Stitch"
          duration="1 hour"
          desc="Design landing pages and web layouts using plain English. No coding or design experience needed."
          practices={[
            "Designing a landing page from a text prompt",
            "Matching designs to your brand look",
            "Exporting designs for developers"
          ]}
        />
        <ModuleCard 
          number="5"
          title="Intelligence with NotebookLM"
          duration="30 minutes"
          desc="Upload documents or reports and let AI summarize, compare, and extract insights instantly."
          practices={[
            "Summarizing long marketing reports",
            "Comparing competitor documents",
            "Creating audio summaries to share"
          ]}
        />
        <ModuleCard 
          number="6"
          title="Campaigns with Google Pomelli"
          duration="30 minutes"
          desc="Enter your website URL. Get a complete, on-brand social media campaign in minutes."
          practices={[
            "Setting up their Business DNA profile",
            "Generating branded social posts automatically",
            "Editing and downloading ready assets"
          ]}
        />
      </div>
    </div>
  </section>
);

const Transformation = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">What Changes After Your Team Gets Trained</h2>
      </div>
      <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-brand-light-gray">
              <th className="p-6 font-bold text-gray-900 border-b border-gray-200">Marketing Task</th>
              <th className="p-6 font-bold text-gray-500 border-b border-gray-200">Before Training</th>
              <th className="p-6 font-bold text-brand-green border-b border-gray-200">After Training</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ["Writing a blog post", "2-3 hours", "15-20 minutes"],
              ["Creating social media graphics", "45+ minutes each", "5 minutes each"],
              ["Planning an email campaign", "Half a day", "30 minutes"],
              ["Competitor research", "A full afternoon", "15 minutes"],
              ["Designing a landing page", "Days (with a designer)", "1 hour (no designer needed)"],
              ["Creating branded visuals", "Outsourced or skipped", "Done in-house, instantly"],
            ].map((row, i) => (
              <tr key={i} className="hover:bg-brand-light-gray/50 transition-colors">
                <td className="p-6 font-medium text-gray-900">{row[0]}</td>
                <td className="p-6 text-gray-500">{row[1]}</td>
                <td className="p-6 font-bold text-brand-green">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="py-24 bg-brand-light-gray">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Getting Started Is Simple</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-12 relative">
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
        {[
          { step: "1", title: "Free Consultation", desc: "Book a free 30-minute Zoom call. We'll talk about what your marketing team does every day and where AI can help." },
          { step: "2", title: "Customized Training Plan", desc: "Based on your needs, we build a half-day or full-day session. You pick the modules that matter most." },
          { step: "3", title: "We Come to You", desc: "We show up at your office (or Zoom) and train your team hands-on. Everyone leaves with skills they can use right away." },
        ].map((item, idx) => (
          <div key={idx} className="relative z-10 text-center">
            <div className="w-16 h-16 bg-brand-dark text-brand-green rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-8 border-4 border-white shadow-lg">
              {item.step}
            </div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <button className="btn-primary">Book Your Free Consultation</button>
      </div>
    </div>
  </section>
);

const Packages = () => (
  <section id="packages" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Training Options</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-10 rounded-[3rem] border-2 border-gray-100 hover:border-brand-green transition-all bg-white shadow-sm flex flex-col">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-2">Half-Day Training</h3>
            <p className="text-gray-500">Approx. 4 hours (with breaks)</p>
          </div>
          <p className="text-lg font-medium mb-8">Best for teams that want to focus on the essentials.</p>
          <ul className="space-y-4 mb-10 flex-grow">
            {[
              "AI Content Creation with Claude (2 hrs)",
              "AI Image Creation with Recraft (1.5 hrs)",
              "Branded Campaigns with Pomelli (30 min)",
              "Hands-on exercises with real tasks",
              "Post-training resource guide"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-600">
                <CheckCircle2 size={20} className="text-brand-green" />
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-6">Ideal for: Marketing teams of 2-15 people who need to get up and running fast.</p>
            <button className="w-full btn-primary">Get a Custom Quote</button>
          </div>
        </div>

        <div className="p-10 rounded-[3rem] bg-brand-dark text-white shadow-xl flex flex-col relative overflow-hidden">
          <div className="absolute top-6 right-6 bg-brand-green text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Most Popular
          </div>
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-2">Full-Day Training</h3>
            <p className="text-gray-400">Approx. 7 hours (with lunch break)</p>
          </div>
          <p className="text-lg font-medium mb-8">The complete AI marketing toolkit for your team.</p>
          <ul className="space-y-4 mb-10 flex-grow">
            {[
              "Includes everything in Half-Day, plus:",
              "Google AI Tools for Marketing (1.5 hrs)",
              "Landing Page Design with Stitch (1 hr)",
              "Research with NotebookLM (30 min)",
              "Extended hands-on practice time",
              "Post-training resource guide"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 size={20} className="text-brand-green" />
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-gray-400 mb-6">Ideal for: Teams that want the full picture. Walk away with every AI marketing tool covered.</p>
            <button className="w-full btn-primary">Get a Custom Quote</button>
          </div>
        </div>
      </div>
      <p className="mt-12 text-center text-gray-500 max-w-2xl mx-auto">
        Both options are available on-site at your office in Toronto/GTA or online via Zoom. Training is customized to your team's industry and daily tasks.
      </p>
    </div>
  </section>
);

const WhyActionAI = () => (
  <section className="py-24 bg-brand-light-gray overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://picsum.photos/seed/ran-armon/800/800" 
              alt="Ran Armon - Instructor" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 glass-card bg-brand-dark p-8 shadow-2xl max-w-xs">
            <p className="text-brand-green font-bold text-xl mb-1">Ran Armon</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              150+ professionals trained across Toronto. Practical, clear approach for "non-tech" people.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-8">Why Teams Choose Action AI</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            This is not a video course. It is not a webinar you watch and forget. Action AI training is live, in-person, and 100% hands-on.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { title: "Hands-On, Not Theory", desc: "Every minute is spent doing. Your team creates real content and campaigns." },
              { title: "Customized for You", desc: "We learn what your team does every day. Training is built around your tasks." },
              { title: "No Tech Skills Needed", desc: "If you can use Google and email, you can learn AI. We move at your pace." },
              { title: "Personal Attention", desc: "Focused training sessions where everyone gets to ask questions." },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center">
                    <CheckCircle2 size={14} className="text-brand-green" />
                  </div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ToolsCovered = () => (
  <section className="py-16 bg-white border-y border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-10">AI Tools Your Team Will Master</p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
        {["Claude", "Recraft", "Gemini", "AI Search", "Google Lens", "Stitch", "NotebookLM", "Pomelli"].map((tool) => (
          <span key={tool} className="text-2xl font-bold text-gray-800">{tool}</span>
        ))}
      </div>
      <p className="text-center text-sm text-gray-400 mt-10">
        All tools are selected for marketing teams. Learn which tool is right for which task.
      </p>
    </div>
  </section>
);

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className="text-lg font-bold text-gray-900 group-hover:text-brand-green transition-colors">{question}</span>
        <ChevronDown 
          size={20} 
          className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => (
  <section id="faq" className="py-24 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
      <div className="bg-brand-light-gray/50 rounded-[2.5rem] p-8 md:p-12">
        <FAQItem 
          question="Do we need any technical experience?" 
          answer="Not at all. This training is designed for marketing professionals, not developers. If your team can use Google and write emails, they can learn AI."
        />
        <FAQItem 
          question="Can the training be done online?" 
          answer="Yes. We offer both on-site training (we come to your office in Toronto or the GTA) and online sessions via Zoom. Online works great for remote teams or companies outside Toronto."
        />
        <FAQItem 
          question="How many people can attend?" 
          answer="We recommend groups of 5-15 for the best experience. For larger teams, we can run multiple sessions or split into groups."
        />
        <FAQItem 
          question="What does each person need to bring?" 
          answer="A laptop with internet access. That is it. All AI tools used in the session are free or have free tiers, so there is no software cost for participants."
        />
        <FAQItem 
          question="Can you customize the training for our specific industry?" 
          answer="Absolutely. Before the session, we have a free consultation call where we learn about your business, your marketing workflow, and your biggest time-wasters. The training is built around your actual needs."
        />
        <FAQItem 
          question="How much does it cost?" 
          answer="Pricing depends on the format (half-day or full-day), group size, and whether it is on-site or online. Book a free consultation and we will build a custom quote based on your needs."
        />
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24 dark-section relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green rounded-full blur-[120px]" />
    </div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 className="text-4xl lg:text-6xl font-bold mb-8">
        Your Competitors Are Already Using AI. <br />
        <span className="text-brand-green">Your Team Should Be Too.</span>
      </h2>
      <p className="text-xl text-gray-400 mb-12">
        Book a free 30-minute consultation. We will show you exactly how AI can save your marketing team hours every week.
      </p>
      <button className="btn-primary text-xl px-12 py-4 mb-8">Book a Free Consultation</button>
      <div className="pt-8 border-t border-white/10">
        <p className="text-gray-400">Or call Ran directly:</p>
        <p className="text-2xl font-bold text-white mt-2">416.677.1629 | info@actionai.ca</p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center">
              <span className="text-brand-dark font-bold text-xl">A</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">Action AI</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Hands-on AI training for marketing teams. Practical, live, and 100% focused on results.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-brand-green transition-colors">Home</a></li>
            <li><a href="#who" className="hover:text-brand-green transition-colors">Business Training</a></li>
            <li><a href="#learn" className="hover:text-brand-green transition-colors">Workshops</a></li>
            <li><a href="#faq" className="hover:text-brand-green transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>Toronto, ON</li>
            <li>416.677.1629</li>
            <li>info@actionai.ca</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">Get AI marketing tips in your inbox.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-brand-green w-full"
            />
            <button className="bg-brand-green text-brand-dark px-4 py-2 rounded-lg font-bold text-sm">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© 2026 Action AI. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <WhoIsThisFor />
      <WhatTheyWillLearn />
      <Transformation />
      <HowItWorks />
      <Packages />
      <WhyActionAI />
      <ToolsCovered />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
