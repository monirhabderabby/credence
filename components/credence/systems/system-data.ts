export type SystemSlug = "linkedin" | "social" | "email" | "web";
export type BookingPersona = "General" | "LinkedIn" | "Social" | "Email" | "Web";

export type SystemContent = {
  slug: SystemSlug;
  number: string;
  name: string;
  persona: BookingPersona;
  description: string;
  pipelineLabel: string;
  pipelineIntro: string;
  stages: { name: string; focus: string; content: string }[];
  philosophy: { label: string; heading: string; body?: string };
  cta?: { heading: string; body: string };
};

export const linkedin: SystemContent = {
  slug: "linkedin", number: "01", name: "LinkedIn", persona: "LinkedIn",
  description: "Your LinkedIn profile is either working for you or against you. Right now, it's probably not working hard enough. Credence closes the gap.",
  pipelineLabel: "Action Pipeline",
  pipelineIntro: "Watch how we systematically strip away invisibility and establish market dominance.",
  stages: [
    { name: "The Reset", focus: "First Impressions & Profile Architecture.", content: "We rebuild your profile from scratch. We make sure the first thing someone reads about you makes them want to know more." },
    { name: "The 30-Day Sprint", focus: "Building Trust & Proving Expertise.", content: "12 posts that prove your expertise and build trust with the people who matter. We write them. You approve them." },
    { name: "Full Management", focus: "Network Growth & Consistent Engagement.", content: "We run your LinkedIn completely. 20+ posts per month. Network growth. Inbox management. You focus on your business. We focus on your presence." },
    { name: "Elite Advisory", focus: "Global Industry Leadership.", content: "PR. Speaking opportunities. Industry positioning. We turn your name into one your industry cannot ignore." },
  ],
  philosophy: { label: "Founder's Logic", heading: '"If someone can\'t immediately see your value, they will assume you have none."' },
};

export const social: SystemContent = {
  slug: "social", number: "02", name: "Social Media", persona: "Social",
  description: '"Content creation" is a trap. You don\'t need more content. You need a narrative. We build social ecosystems that turn silent watchers into high-value clients.',
  pipelineLabel: "Action Pipeline",
  pipelineIntro: "Watch how we systematically transition your brand from isolated posts to a globally dominant social ecosystem.",
  stages: [
    { name: "Ecosystem Audit", focus: "Finding the Gaps.", content: "We look at where you are. We find the gaps. We fix the messaging before we post a single word." },
    { name: "The Visibility Sprint", focus: "Immediate Market Impact.", content: "30 days. High-intensity. We change how your market sees you immediately." },
    { name: "Ongoing Dominance", focus: "Content that Converts.", content: "We take over the day-to-day. You provide the expertise. We turn it into content that converts." },
    { name: "Scale & Omnipresence", focus: "Expanding Your Footprint.", content: "We expand your footprint. More platforms. More reach. Same unignorable authority." },
  ],
  philosophy: { label: "Credence Philosophy", heading: '"People don\'t buy from the loudest person. They buy from the most trusted one."' },
  cta: { heading: "Ready to command attention?", body: "Secure your ecosystem clarity call to discover exactly where your current digital signal is failing your revenue goals." },
};

export const email: SystemContent = {
  slug: "email", number: "03", name: "Email", persona: "Email",
  description: "Social media can disappear tomorrow. Your email list cannot. We build the system that moves your followers into a list you own. Then we turn that list into a revenue engine.",
  pipelineLabel: "Action Pipeline",
  pipelineIntro: "See the exact sequence we execute to move from renting attention to owning a highly profitable retention ecosystem.",
  stages: [
    { name: "The Foundation", focus: "Setting up Capture Points.", content: "We set up the capture points. Every person who discovers you gets a clear path to join your list." },
    { name: "The Newsletter", focus: "Trust Building Asset.", content: "A regular email that keeps you in front of your best prospects. Not a sales blast. A trust-building asset that works while you sleep." },
    { name: "Automation", focus: "Educate, Trust, Sell.", content: "We build email sequences that educate, build trust, and sell. They run without you." },
    { name: "The Vault", focus: "Advanced Retention.", content: "Advanced retention systems. Member portals. High-level briefings. Your list becomes your most valuable business asset." },
  ],
  philosophy: { label: "Credence Philosophy", heading: "Why email beats social.", body: "Going viral is luck. A strong email list is a strategy. When you own your list, you control your revenue. You're not at the mercy of an algorithm." },
  cta: { heading: "Ready to stabilize your income?", body: "Secure your retention infrastructure Clarity call and stop letting your most valuable followers slip through the cracks." },
};

export const web: SystemContent = {
  slug: "web", number: "04", name: "Website", persona: "Web",
  description: "Most websites are digital brochures. They look fine. They do nothing. People land on them and leave without buying. We build websites that sell.",
  pipelineLabel: "Architecture Blueprint",
  pipelineIntro: "See the exact architecture we build to transform an outdated online presence into dominating Conversion Real Estate.",
  stages: [
    { name: "The Signal Page", focus: "Immediate Credibility.", content: 'A 1 to 3 page site that immediately tells visitors: "This person knows what they\'re doing." We close the gap between how good you are offline and how you look online.' },
    { name: "The Full Site", focus: "Conversion Engine.", content: "4 to 6 pages that tell your story, prove your expertise, and convert visitors into leads." },
    { name: "The Platform", focus: "Complete Digital Home.", content: "7 to 15+ pages. A full content hub. The complete digital home of your brand." },
    { name: "Full Dominance", focus: "Omnipresent Authority.", content: "Your website, SEO, PR, and all channels working together. You become impossible to miss." },
  ],
  philosophy: { label: "Credence Philosophy", heading: "Why your website matters more than you think.", body: "Your website is the only digital real estate you truly own. It needs to do more than look good. It needs to make people trust you before they ever get on a call. If it's not doing that, it's not an asset. It's a liability." },
  cta: { heading: "Ready to fix it?", body: "Apply below to find out exactly where your digital presence is costing you authority and how to architect a high-converting footprint." },
};
