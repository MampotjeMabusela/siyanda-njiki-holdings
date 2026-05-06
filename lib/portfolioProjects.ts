export type PortfolioTimelineEvent = {
  date: string;
  milestone: string;
};

export type PortfolioProject = {
  id: number;
  title: string;
  category: "Electrical" | "Civil" | "Supply" | "Transport";
  image: string;
  tagline: string;
  storyline: string;
  timeline: PortfolioTimelineEvent[];
  location: string;
  client: string;
  satisfactionRating: number;
  totalCostLabel: string;
  savingsLabel: string;
};

function formatZar(amount: number): string {
  return `R ${amount.toLocaleString("en-ZA")}`;
}

/** Curated portfolio pieces — illustrative case studies for marketing use. */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "Substation inspection & preventive maintenance",
    category: "Electrical",
    image: "/images/portfolio-electrical-1.png",
    tagline: "Keeping a rural hospital powered through rainy season.",
    storyline:
      "When Emalahleni Community Health Centre called us, their backup supply had been limping through storm seasons. Our team treated the work like family was in those wards: we listened first, then restored confidence in every breaker and inspection log. Weeks later, the facility manager said the lights had never felt steadier—and that quiet pride is exactly why we show up.",
    timeline: [
      { date: "Jan 2025", milestone: "Site walk-through with facility engineers & SNH safety briefing" },
      { date: "Feb 2025", milestone: "Thermal imaging, oil sampling, and protection relay verification" },
      { date: "Mar 2025", milestone: "Scheduled outage window — busbar tightening & kiosk resealing" },
      { date: "Apr 2025", milestone: "Sign-off, as-built updates, and nurse-station handover training" },
    ],
    location: "Emalahleni (Witbank), Mpumalanga",
    client: "Mpumalanga Department of Health — Emalahleni Community Health Centre",
    satisfactionRating: 4.9,
    totalCostLabel: formatZar(1180000),
    savingsLabel: `${formatZar(174000)} avoided vs. emergency call-out & downtime model (initial comparator quote)`,
  },
  {
    id: 2,
    title: "Industrial driveway & demarcation refresh",
    category: "Civil",
    image: "/images/portfolio-civil-2.png",
    tagline: "Safer movements for drivers who start before sunrise.",
    storyline:
      "Thungela’s yard crews were doing honest work in low light. We re-marked lanes and walkways so every forklift route read clearly at 5 a.m.—not because regulations demanded drama, but because going home safe matters. The ops manager told us their near-miss chatter dropped visibly; that feedback still warms the team.",
    timeline: [
      { date: "May 2025", milestone: "Traffic plan, surface prep, and primer colour trials" },
      { date: "Jun 2025", milestone: "After-hours line marking & photoluminescent hazard bands" },
      { date: "Jul 2025", milestone: "Curing, reflectivity checks, and SHE sign-off" },
    ],
    location: "Thungela South Africa (Isibonelo Colliery precinct), Mpumalanga",
    client: "Thungela Operations (Pty) Ltd — Logistics & SHE",
    satisfactionRating: 4.85,
    totalCostLabel: formatZar(465000),
    savingsLabel: `${formatZar(62000)} saved by phasing work in outage windows vs. daytime shutdown`,
  },
  {
    id: 3,
    title: "Bulk PPE & site consumables roll-out",
    category: "Supply",
    image: "/images/portfolio-supply-3.png",
    tagline: "Right stock, right batch, right to the gate.",
    storyline:
      "Mbombela Estates had three contractors waiting on gloves and high-vis that never seemed to arrive together. We consolidated suppliers, labelled every crate, and delivered so site inductions could stay on schedule. The site agent said it felt like someone finally respected their calendar—that’s the human outcome behind the spreadsheet.",
    timeline: [
      { date: "Aug 2025", milestone: "Take-on inventory audit & critical path SKUs agreed" },
      { date: "Sep 2025", milestone: "First consolidated drop — branded kitting per trade package" },
      { date: "Oct 2025", milestone: "Rolling replenishment & 30-day stock cover review" },
    ],
    location: "Riverside Extension, Mbombela (Nelspruit)",
    client: "Mbombela Property Developers CC",
    satisfactionRating: 4.8,
    totalCostLabel: formatZar(892000),
    savingsLabel: `${formatZar(128000)} procurement savings via bundled sourcing & vetted substitutes`,
  },
  {
    id: 4,
    title: "Insured pallet distribution — citrus season peak",
    category: "Transport",
    image: "/images/portfolio-transport-4.png",
    tagline: "Cold-chain friendly runs when the export clock is ruthless.",
    storyline:
      "Lowveld Agri needed pallets moved between pack-house and rail without bruising trust—or fruit. Our drivers planned routes around toll peaks, shared live ETAs, and treated every lift like their own harvest. The pack-house lead sent a voice note saying ‘die span het rustig gemaak’—they made it calm. That’s the reward.",
    timeline: [
      { date: "Mar 2025", milestone: "Route risk assessment & perishable handling checklist" },
      { date: "Apr–Jun 2025", milestone: "Peak-season daily runs — Mbombela to Maputo corridor batches" },
      { date: "Jul 2025", milestone: "Fuel & incident review; winter schedule optimisation" },
    ],
    location: "White River ↔ Mbombela pack-houses, Mpumalanga",
    client: "Lowveld Agri Co-operative Ltd",
    satisfactionRating: 4.95,
    totalCostLabel: formatZar(734000),
    savingsLabel: `${formatZar(99000)} operational savings vs. ad-hoc spot hire + demurrage incidents (YoY comparison)`,
  },
  {
    id: 5,
    title: "Municipal street-lighting batch upgrade",
    category: "Electrical",
    image: "/images/portfolio-electrical-5.png",
    tagline: "Brighter streets where learners walk home.",
    storyline:
      "Bushbuckridge Housing Project wanted mothers to feel the pavement under their feet, not guess it. We grouped LED swaps street-by-street, explained every outage window in isiNdebele and English, and left commissioning sheets at ward offices. A councillor stopped us to say children were reading homework under the new light—that’s the legacy line we will never trim from the report.",
    timeline: [
      { date: "Feb 2025", milestone: "Ward consultation & lux-level baseline survey" },
      { date: "Mar–Apr 2025", milestone: "Pole-by-pole LED retrofits & earthing checks" },
      { date: "May 2025", milestone: "Community walk-through & fault hotline handover" },
    ],
    location: "Bushbuckridge Local Municipality — extension phases A–C",
    client: "Bushbuckridge Community Housing NPC (municipal programme partner)",
    satisfactionRating: 4.88,
    totalCostLabel: formatZar(2100000),
    savingsLabel: `${formatZar(310000)} energy & maintenance saving forecast over 36 months (ESCO model)`,
  },
  {
    id: 6,
    title: "Community hall flooring & access ramps",
    category: "Civil",
    image: "/images/portfolio-civil-6.png",
    tagline: "Level floors for weddings, clinics, and voter days.",
    storyline:
      "Secunda Chamber of Commerce uses one hall for everything—AGMs, clinics, and celebrations. Level differences tripped elders in the rain. We squared subfloors, laid non-slip finish, and built ramps with handrails that feel permanent, not charitable. They opened with a hall blessing; we got invited back for coffee, not complaints.",
    timeline: [
      { date: "Jun 2025", milestone: "Structural survey & moisture mapping" },
      { date: "Jul 2025", milestone: "Screed, ramp pour, and tactile warning strips" },
      { date: "Aug 2025", milestone: "Accessibility snag list & occupancy certificate support" },
    ],
    location: "Downtown Secunda, Govan Mbeki Local Municipality",
    client: "Secunda & District Chamber of Commerce NPC",
    satisfactionRating: 4.92,
    totalCostLabel: formatZar(628000),
    savingsLabel: `${formatZar(84000)} vs. separate ramp contractor + hall closure extension`,
  },
  {
    id: 7,
    title: "Electrical distribution boards — phased supply package",
    category: "Supply",
    image: "/images/portfolio-supply-7.png",
    tagline: "Certified gear that arrived before the concrete set.",
    storyline:
      "Sasol Khanyisa’s contractor was racing formwork. We staged DB boards, surge kits, and labelling so electricians could work continuously without idle hands on site. The project engineer wrote that SNH ‘removed the anxiety row’ from their Gantt chart—music to our ears.",
    timeline: [
      { date: "Jan 2025", milestone: "Bill-of-materials alignment with principal agent" },
      { date: "Feb 2025", milestone: "Factory acceptance & SANS compliance pack" },
      { date: "Mar 2025", milestone: "Just-in-time drops aligned to crane picks" },
    ],
    location: "Khanyisa construction support zone, Mpumalanga",
    client: "Sasol Khanyisa — site services subcontractor channel (SNH tier-2 supply)",
    satisfactionRating: 4.82,
    totalCostLabel: formatZar(3420000),
    savingsLabel: `${formatZar(410000)} saving through manufacturer direct & consolidated freight`,
  },
  {
    id: 8,
    title: "School shuttle compliance upgrade & dedicated run",
    category: "Transport",
    image: "/images/portfolio-transport-8.png",
    tagline: "Seat belts tight, routes calm, parents notified.",
    storyline:
      "Middelburg Christian Academy parents wanted transparency, not promises. We upgraded vehicle checks, shared weekly route sheets, and trained drivers on learner safeguarding. The head of sport hugged our supervisor after provincials—simple humanity that beats any KPI slide.",
    timeline: [
      { date: "Jan 2025", milestone: "Operator PDP audit & PRASA school-route alignment" },
      { date: "Feb–Nov 2025", milestone: "Term-time morning & afternoon dedicated loops" },
      { date: "Dec 2025", milestone: "Annual review, parent survey, incident-zero certificate" },
    ],
    location: "Middelburg ↔ Rockdale, Steve Tshwete Local Municipality",
    client: "Middelburg Christian Academy — governing body transport committee",
    satisfactionRating: 4.97,
    totalCostLabel: formatZar(512000),
    savingsLabel: `${formatZar(68000)} vs. outsourcing to non-compliant minibus brokers (risk-adjusted)`,
  },
  {
    id: 9,
    title: "Factory floor high-bay relamping & emergency circuits",
    category: "Electrical",
    image: "/images/portfolio-electrical-9.png",
    tagline: "Light where precision tooling meets night shift.",
    storyline:
      "Steatite’s machinists measure in microns; flicker is not aesthetic, it’s defect risk. We relamped high bays, separated emergency circuits, and labelled every DB like a map nobody would fear. Production quietly gained throughput; the maintenance chief simply said, ‘Finally we trust the panel board.’ For us, that sentence is the whole portfolio.",
    timeline: [
      { date: "Apr 2025", milestone: "Lux mapping, harmonics snapshot, and outage choreography" },
      { date: "May 2025", milestone: "Lift platform retrofits & emergency inverter tie-in" },
      { date: "Jun 2025", milestone: "Thermography sign-off & night-shift burn-in tests" },
    ],
    location: "White River Industrial Park, Mbombela, Mpumalanga",
    client: "Steatite (Pty) Ltd — manufacturing engineering",
    satisfactionRating: 4.91,
    totalCostLabel: formatZar(2890000),
    savingsLabel: `${formatZar(412000)} downtime avoided vs. unplanned stoppages from legacy gear failure`,
  },
];
