export interface Guideline {
  id: string;
  category: string;
  title: string;
  summary: string;
  keywords: string[];
  specifications: string[];
  notes: string[];
  relatedSearchTerms: string[];
  useCases: string[];
}

export const guidelines: Guideline[] = [
  {
    id: "ramp-01",
    category: "Ramps",
    title: "Accessible Ramp",
    summary: "A wheelchair-accessible ramp should provide a gentle slope and safe movement between levels.",
    keywords: ["ramp", "ramps", "ramp slope", "wheelchair ramp", "incline", "access ramp", "ramp ratio", "gradient", "handrail ramp", "non-slip ramp", "accessible ramp"],
    specifications: ["Slope ratio: 1:12", "Minimum clear width: 1200 mm", "Handrails on both sides", "Non-slip surface finish", "Landing provided at regular intervals and at level changes", "Edge protection should be included where required"],
    notes: ["Keep the ramp easy to use for wheelchair users and people with mobility aids.", "Avoid steep slopes or narrow ramps.", "Landing space should allow resting and turning where needed."],
    relatedSearchTerms: ["wheelchair access", "accessible entrance", "barrier-free entry", "slope", "inclined surface"],
    useCases: ["Building entrance", "internal level change", "public facility access"]
  },
  {
    id: "door-01",
    category: "Doors",
    title: "Accessible Door",
    summary: "Doorways should allow easy passage for wheelchair users and people with limited mobility.",
    keywords: ["door", "doors", "door width", "wheelchair door", "entry door", "accessible entry", "threshold", "door handle height", "main entrance", "opening clearance", "accessible doorway"],
    specifications: ["Minimum clear opening width: 900 mm", "Low or flush threshold preferred", "Easy-to-operate handles", "Handle height should be within accessible reach range", "Door should not require excessive force to open", "Clear maneuvering space should be provided"],
    notes: ["Avoid heavy doors where possible.", "Keep the entry path unobstructed.", "Door hardware should be easy to grip and use."],
    relatedSearchTerms: ["entrance", "entry width", "wheelchair entry", "passage width", "door clearance"],
    useCases: ["Main entrance", "toilet door", "room access", "public building entry"]
  },
  {
    id: "toilet-01",
    category: "Toilets",
    title: "Accessible Toilet",
    summary: "Accessible toilets should provide enough turning space, proper grab bars, and usable fixtures.",
    keywords: ["toilet", "toilets", "washroom", "restroom", "bathroom", "accessible toilet", "accessible washroom", "wc", "commode", "grab bar", "wheelchair toilet"],
    specifications: ["Turning radius: 1500 mm", "Door should open outward or slide", "Grab bars should be provided near WC", "WC height should allow easy transfer", "Sink should be reachable from wheelchair position", "Floor should be slip-resistant"],
    notes: ["Provide enough lateral space for wheelchair transfer.", "Keep fittings within reachable height.", "Use clear signage outside the toilet."],
    relatedSearchTerms: ["accessible washroom", "disabled toilet", "wheelchair bathroom", "universal toilet"],
    useCases: ["Public toilets", "office toilets", "institutional washrooms", "commercial spaces"]
  },
  {
    id: "stairs-01",
    category: "Stairs",
    title: "Accessible Stairs",
    summary: "Stairs should be safe, uniform, and easy to detect and use.",
    keywords: ["stairs", "staircase", "steps", "step", "handrail", "tread", "riser", "non-slip step", "stair width", "accessible stairs"],
    specifications: ["Uniform riser and tread dimensions", "Handrails on both sides", "Non-slip finish on steps", "Good lighting at stair locations", "Visual contrast at step edges", "Landings provided as required"],
    notes: ["Avoid irregular steps.", "Use tactile and visual cues where appropriate.", "Handrails should be continuous and easy to grip."],
    relatedSearchTerms: ["flight of stairs", "step safety", "railings", "stair handrail"],
    useCases: ["Building circulation", "floor movement", "public access routes"]
  },
  {
    id: "lift-01",
    category: "Lifts",
    title: "Accessible Lift",
    summary: "Lifts should be usable by wheelchair users, people with low vision, and elderly users.",
    keywords: ["lift", "lifts", "elevator", "elevators", "wheelchair lift", "accessible lift", "lift controls", "lift buttons", "lift cabin", "audio signal", "braille lift"],
    specifications: ["Cabin size should support wheelchair entry and turning", "Controls should be at accessible height", "Audio and visual indicators should be provided", "Buttons should include tactile/Braille marking", "Door opening should be wide enough for wheelchair access"],
    notes: ["Controls should be easy to locate and read.", "Use clear floor indicators and signage.", "Keep waiting area accessible."],
    relatedSearchTerms: ["elevator accessibility", "wheelchair elevator", "braille buttons", "audio announcement"],
    useCases: ["Multi-storey buildings", "public institutions", "commercial complexes"]
  },
  {
    id: "parking-01",
    category: "Parking",
    title: "Accessible Parking",
    summary: "Accessible parking spaces should be closer to the entrance and clearly marked.",
    keywords: ["parking", "accessible parking", "disabled parking", "wheelchair parking", "parking bay", "car park", "reserved parking", "access aisle"],
    specifications: ["Space should allow side transfer from vehicle", "Located near accessible entrance", "Clearly marked with signage and symbols", "Access route should be step-free", "Surface should be level and safe"],
    notes: ["Avoid placing accessible parking far from the entrance.", "Ensure the route from parking to entry has no obstacles."],
    relatedSearchTerms: ["disabled parking space", "accessible bay", "vehicle access"],
    useCases: ["Malls", "schools", "hospitals", "offices", "public buildings"]
  },
  {
    id: "signage-01",
    category: "Signage",
    title: "Accessible Signage",
    summary: "Signs should be easy to read, placed correctly, and useful for everyone.",
    keywords: ["signage", "signs", "accessible signage", "direction signs", "wayfinding", "braille sign", "tactile sign", "visual sign", "symbols", "contrast signage"],
    specifications: ["High contrast text and background", "Clear font with readable size", "Signs placed at visible height", "Tactile and Braille where needed", "Consistent icons and directions"],
    notes: ["Use simple wording.", "Avoid decorative fonts.", "Include both visual and tactile communication where appropriate."],
    relatedSearchTerms: ["wayfinding", "braille board", "tactile indicator", "direction board"],
    useCases: ["Building navigation", "toilet marking", "exit directions", "floor identification"]
  },
  {
    id: "corridor-01",
    category: "Corridors",
    title: "Accessible Corridor",
    summary: "Corridors should provide enough clear width for movement and turning.",
    keywords: ["corridor", "hallway", "passage", "corridor width", "clear passage", "wheelchair corridor", "movement space", "accessible passage"],
    specifications: ["Adequate clear width for wheelchair movement", "No obstacles in circulation path", "Slip-resistant floor finish", "Good lighting and visibility", "Turning space where required"],
    notes: ["Keep corridors free from furniture and protrusions.", "Use contrasting edges where needed."],
    relatedSearchTerms: ["hall width", "movement path", "access route", "internal circulation"],
    useCases: ["Schools", "offices", "hospitals", "public buildings"]
  },
  {
    id: "tactile-01",
    category: "Tactile/Braille",
    title: "Tactile and Braille Features",
    summary: "Tactile and Braille elements help users with low vision and blindness navigate spaces.",
    keywords: ["braille", "tactile", "tactile sign", "braille sign", "raised letters", "tactile guide", "accessible communication", "low vision guidance"],
    specifications: ["Braille signage should be placed consistently", "Raised lettering should be legible", "Tactile cues should support navigation", "Contrast and readability should be strong"],
    notes: ["Use consistent placement across the building.", "Pair tactile information with visual information."],
    relatedSearchTerms: ["raised sign", "touch sign", "navigation aid", "low vision support"],
    useCases: ["Lift panels", "room labels", "toilet signs", "wayfinding"]
  },
  {
    id: "handrail-01",
    category: "Stairs",
    title: "Handrails",
    summary: "Handrails provide support and safety along stairs, ramps, and raised walkways.",
    keywords: ["handrail", "handrails", "railing", "grab rail", "stair rail", "ramp handrail", "continuous handrail", "graspable rail"],
    specifications: ["Height: 900–1000 mm from floor", "Continuous along full length of stairs/ramps", "Circular or oval profile, 32–50 mm diameter", "Extensions at top and bottom of stairs", "Contrast with surrounding surfaces", "Non-rotating and firmly fixed"],
    notes: ["Handrails should be easy to grip for people with limited hand strength.", "Avoid sharp edges or interruptions.", "Provide handrails on both sides where possible."],
    relatedSearchTerms: ["stair support", "ramp railing", "safety rail", "balustrade"],
    useCases: ["Staircases", "ramps", "corridors with level change", "external walkways"]
  },
  {
    id: "entrance-01",
    category: "Doors",
    title: "Accessible Entrance",
    summary: "The main entrance to a building should be accessible to all users without assistance.",
    keywords: ["entrance", "accessible entrance", "main entry", "building entrance", "barrier-free entrance", "level entrance", "automatic door"],
    specifications: ["Level or gently sloped approach", "Minimum clear width: 900 mm", "Automatic or easy-to-open doors", "Weather protection canopy recommended", "Clearly identifiable from the street", "Adequate lighting at entrance"],
    notes: ["Avoid steps at the main entrance.", "Provide visual contrast to help locate the entrance.", "Ensure door mats are flush with the floor."],
    relatedSearchTerms: ["building entry", "front door", "main door", "level access"],
    useCases: ["Commercial buildings", "public facilities", "residential complexes", "offices"]
  },
  {
    id: "route-01",
    category: "Corridors",
    title: "Accessible Route",
    summary: "An accessible route is a continuous, unobstructed path connecting all accessible elements of a building.",
    keywords: ["accessible route", "travel path", "accessible path", "circulation route", "pedestrian route", "clear path", "barrier-free route"],
    specifications: ["Minimum clear width: 1200 mm", "Firm, stable, and slip-resistant surface", "No abrupt level changes", "Adequate turning space at intersections", "Detectable warning surfaces at hazards", "Clear of protruding objects"],
    notes: ["The accessible route should connect parking, entrance, and all key facilities.", "Maintain consistent floor levels wherever possible.", "Use tactile guidance strips on long routes."],
    relatedSearchTerms: ["path of travel", "pedestrian access", "internal route", "building circulation"],
    useCases: ["Connecting parking to entrance", "internal building navigation", "campus wayfinding"]
  },
  {
    id: "curbramp-01",
    category: "Ramps",
    title: "Curb Ramp",
    summary: "Curb ramps provide a smooth transition between a sidewalk and the road surface.",
    keywords: ["curb ramp", "curb cut", "dropped kerb", "kerb ramp", "sidewalk ramp", "pedestrian crossing ramp", "street ramp"],
    specifications: ["Slope ratio: 1:12 maximum", "Minimum width: 1200 mm", "Detectable warning surface at the base", "Flush transition with road surface", "Non-slip finish", "Located at pedestrian crossings"],
    notes: ["Curb ramps should align with crosswalk markings.", "Avoid water pooling at the base of the ramp.", "Keep ramp surface free from debris."],
    relatedSearchTerms: ["street crossing", "pedestrian ramp", "sidewalk access", "road transition"],
    useCases: ["Street crossings", "parking lots", "public pathways", "transit stops"]
  },
  {
    id: "tactilefloor-01",
    category: "Tactile/Braille",
    title: "Tactile Flooring",
    summary: "Tactile ground surface indicators warn and guide people with visual impairments.",
    keywords: ["tactile flooring", "tactile paving", "warning tiles", "guidance tiles", "detectable surface", "truncated domes", "directional tiles"],
    specifications: ["Warning indicators: truncated dome pattern", "Directional indicators: elongated bar pattern", "Contrast with surrounding surface", "Durable and slip-resistant material", "Placed at hazards, stairs, and platform edges", "Consistent color coding"],
    notes: ["Use warning tiles at the top of stairs and ramp edges.", "Directional tiles guide users along routes.", "Maintain tactile surfaces — worn tiles lose effectiveness."],
    relatedSearchTerms: ["ground indicators", "floor texture", "blind navigation", "paving for visually impaired"],
    useCases: ["Train platforms", "stair approaches", "pedestrian crossings", "building lobbies"]
  },
  {
    id: "emergency-01",
    category: "Fire & Evacuation",
    title: "Emergency Exit",
    summary: "Emergency exits must be accessible and clearly marked for all building occupants.",
    keywords: ["emergency exit", "fire exit", "evacuation", "escape route", "fire door", "exit sign", "emergency egress"],
    specifications: ["Minimum clear width: 900 mm", "Doors should open in direction of escape", "Illuminated exit signage", "Accessible hardware (push bars/panic bars)", "No steps in evacuation route where possible", "Audio and visual alarms"],
    notes: ["Ensure evacuation routes are wheelchair-accessible.", "Conduct regular evacuation drills inclusive of disabled occupants.", "Provide clear wayfinding to exits."],
    relatedSearchTerms: ["fire safety", "escape door", "evacuation path", "exit route"],
    useCases: ["All buildings", "high-rise structures", "assembly venues", "schools"]
  },
  {
    id: "refuge-01",
    category: "Fire & Evacuation",
    title: "Refuge Area",
    summary: "Refuge areas are designated safe zones for people who cannot use stairs during an emergency.",
    keywords: ["refuge area", "safe zone", "fire refuge", "evacuation area", "waiting area", "assisted evacuation", "area of rescue"],
    specifications: ["Minimum size: 900 × 1400 mm per wheelchair user", "Fire-resisting construction", "Two-way communication system", "Clear signage identifying the refuge", "Located adjacent to fire escape stairs", "Separated from smoke and fire by fire-rated elements"],
    notes: ["Refuge areas should be part of the evacuation plan.", "Staff should be trained to assist occupants in refuge areas.", "Communication devices must be regularly tested."],
    relatedSearchTerms: ["fire safety zone", "evacuation hold point", "rescue area", "safe haven"],
    useCases: ["Multi-storey buildings", "hospitals", "schools", "offices"]
  },
  {
    id: "water-01",
    category: "Corridors",
    title: "Drinking Water Point",
    summary: "Drinking water points should be accessible and usable by all people including wheelchair users.",
    keywords: ["drinking water", "water fountain", "water cooler", "accessible fountain", "hydration point", "drinking tap"],
    specifications: ["Spout height: 750–900 mm for wheelchair users", "Knee clearance beneath the fountain", "Easy-to-operate controls (lever or push)", "Located along accessible routes", "Cup dispenser within reach if provided"],
    notes: ["Provide both high and low spouts where possible.", "Avoid placement in narrow alcoves.", "Keep area around the fountain dry and slip-free."],
    relatedSearchTerms: ["water access", "hydration", "fountain height", "accessible water"],
    useCases: ["Schools", "parks", "offices", "public buildings", "sports facilities"]
  },
  {
    id: "counter-01",
    category: "Corridors",
    title: "Accessible Counter / Reception Desk",
    summary: "Service counters should have a lowered section for wheelchair users and people of short stature.",
    keywords: ["counter", "reception desk", "service counter", "accessible counter", "lowered counter", "front desk", "information desk"],
    specifications: ["Lowered section height: 750–800 mm", "Minimum width of lowered section: 900 mm", "Knee clearance beneath counter", "Located along an accessible route", "Clear signage identifying accessible counter"],
    notes: ["Staff should be trained to serve from the lowered section.", "Avoid clutter on the lowered counter surface.", "Provide hearing loop at reception where applicable."],
    relatedSearchTerms: ["front desk access", "reception accessibility", "service point", "checkout counter"],
    useCases: ["Banks", "hotels", "hospitals", "government offices", "retail stores"]
  },
  {
    id: "seating-01",
    category: "Corridors",
    title: "Accessible Seating",
    summary: "Accessible seating should accommodate wheelchair users and provide companion seating.",
    keywords: ["accessible seating", "wheelchair seating", "companion seat", "auditorium seating", "stadium seating", "theatre seating", "reserved seating"],
    specifications: ["Wheelchair space: minimum 900 × 1400 mm", "Companion seat adjacent to wheelchair space", "Located on an accessible route", "Clear sightlines to the stage/screen", "Distributed across different price categories", "Easy ingress and egress"],
    notes: ["Do not segregate accessible seating to the worst locations.", "Provide a choice of seating positions.", "Removable seats can increase flexibility."],
    relatedSearchTerms: ["theatre access", "stadium accessibility", "event seating", "viewing area"],
    useCases: ["Theatres", "cinemas", "stadiums", "lecture halls", "places of worship"]
  }
];

export const categories = [
  "Ramps", "Doors", "Toilets", "Stairs", "Lifts",
  "Parking", "Signage", "Corridors", "Tactile/Braille", "Fire & Evacuation"
];

export const suggestedSearches = [
  "ramp slope", "door width", "toilet turning radius", "wheelchair parking",
  "lift controls height", "braille signage", "handrails stairs", "emergency exit",
  "curb ramp", "accessible seating"
];

export const categoryColors: Record<string, string> = {
  "Ramps": "bg-emerald-100 text-emerald-800",
  "Doors": "bg-sky-100 text-sky-800",
  "Toilets": "bg-violet-100 text-violet-800",
  "Stairs": "bg-amber-100 text-amber-800",
  "Lifts": "bg-indigo-100 text-indigo-800",
  "Parking": "bg-rose-100 text-rose-800",
  "Signage": "bg-teal-100 text-teal-800",
  "Corridors": "bg-orange-100 text-orange-800",
  "Tactile/Braille": "bg-cyan-100 text-cyan-800",
  "Fire & Evacuation": "bg-red-100 text-red-800",
};
