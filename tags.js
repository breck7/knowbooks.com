const tags = [
  {
    "id": "physicsTag",
    "question": "Is understanding physical forces, energy, waves, or matter a central goal?",
    "knowbooks": "magnets beams focus levers light gravity sound electricity air heat glass iron elements copper gold fire fields energy voltage motors gears colors matter atoms motion friction ropes wind aerodynamics water rust membranes bonds metals steel aluminum brass wheels wedges stars screws batteries hurricanes guitar piano drums singing actuators transistors fusion flow gluons bosons frequency waves helices springs momentum rockets solar plumbing rain ironing"
  },
  {
    "id": "chemistryTag",
    "question": "Is chemical composition or chemical change central to this topic?",
    "knowbooks": "heat glass cells iron elements copper gold fire matter atoms water rust membranes decay bonds ink metals steel aluminum brass food batteries mitochondria cancer smell"
  },
  {
    "id": "biologyTag",
    "question": "Is understanding living organisms or the human body's functions a central goal?",
    "knowbooks": "cells sleep membranes decay seeds food hydration mitochondria cancer raising trees breath smell"
  },
  {
    "id": "plantTag",
    "question": "Does this knowbook centrally involve plants or materials obtained from plants?",
    "knowbooks": "carpentry paper wood seeds fabric food trees ironing"
  },
  {
    "id": "economicsTag",
    "question": "Is money, ownership, trade, or the allocation of scarce resources central to this topic?",
    "knowbooks": "capital sales gold banking liberty property competition collusion budgeting bookkeeping payroll marketing currency bitcoin venture knowbook buildings launch"
  },
  {
    "id": "psychologyTag",
    "question": "Is understanding or changing attention, emotion, motivation, or social behavior a central goal?",
    "knowbooks": "focus sales sleep patience liberty courage teamwork motivation competition collusion anger marketing twitter alignment raising attraction"
  },
  {
    "id": "computingTag",
    "question": "Is software, digital information, or electronic computation central to this topic?",
    "knowbooks": "software scroll twitter bitcoin transistors"
  },
  {
    "id": "materialsTag",
    "question": "Is exploring the properties or uses of a tangible material a central goal?",
    "knowbooks": "beams carpentry air glass iron elements copper gold matter water rust membranes bonds paper ink folding metals steel aluminum brass wood fabric food springs ironing"
  },
  {
    "id": "mechanicsTag",
    "question": "Are forces, motion, or mechanical advantage central to this topic?",
    "knowbooks": "magnets beams tools carpentry gravity levers motors gears motion friction ropes wind aerodynamics wheels wedges screws actuators flow hurricanes springs momentum rockets basketball football soccer boxing golf baseball plumbing"
  },
  {
    "id": "electricityTag",
    "question": "Are electric charge, circuits, or electromagnetism central to this topic?",
    "knowbooks": "magnets electricity copper fields energy voltage motors batteries actuators transistors solar"
  },
  {
    "id": "electromagnetismTag",
    "keywords": "electromagnetism electromagnetic electromagnet electromagnets magnetism magnetic induction",
    "question": "Are electric or magnetic fields, electric circuits, or electromagnetic waves central to this topic?",
    "knowbooks": "magnets electricity copper fields voltage motors batteries actuators transistors light glass colors waves solar"
  },
  {
    "id": "wavesTag",
    "question": "Are light, sound, or other wave phenomena central to this topic?",
    "knowbooks": "light sound glass fields colors stars guitar piano drums singing frequency waves solar"
  },
  {
    "id": "fluidsTag",
    "question": "Is the behavior or movement of liquids or gases central to this topic?",
    "knowbooks": "air heat wind aerodynamics water membranes hydration hurricanes flow rockets plumbing breath rain"
  },
  {
    "id": "natureTag",
    "question": "Is observing natural environments, weather, or the sky a central learning activity?",
    "knowbooks": "air wind water centuries decay seeds stars exploration hurricanes solar trees rain"
  },
  {
    "id": "buildingTag",
    "question": "Is assembling, shaping, or programming something a central hands-on way to learn this topic?",
    "knowbooks": "beams tools carpentry levers electricity motors gears ropes paper ink folding wood wheels wedges fabric screws batteries software scroll guitar piano drums actuators transistors helices springs rockets solar knowbook plumbing"
  },
  {
    "id": "measurementTag",
    "question": "Is taking numerical measurements or keeping quantitative records a central way to explore this topic?",
    "knowbooks": "beams capital gravity sound electricity heat banking sleep energy voltage motion friction wind aerodynamics water time centuries stars budgeting bookkeeping payroll batteries hydration hurricanes currency bitcoin flow frequency waves springs momentum rockets solar venture plumbing breath rain buildings launch"
  },
  {
    "id": "creativeTag",
    "question": "Is creating an expressive work, design, or performance a central activity?",
    "knowbooks": "carpentry sound colors paper ink folding fabric software scroll marketing twitter guitar piano drums singing knowbook launch"
  },
  {
    "id": "instantTag",
    "question": "Can a typical introductory activity give directly observable feedback within a minute of setup?",
    "knowbooks": "magnets beams focus levers light tools gravity sound electricity air heat glass iron elements copper gold fire fields energy voltage motors gears colors matter motion friction ropes wind aerodynamics water membranes paper ink folding metals steel aluminum brass wood wheels wedges fabric screws batteries software scroll guitar piano drums singing actuators transistors flow frequency waves springs momentum basketball football soccer boxing golf baseball solar plumbing breath smell ironing"
  },
  {
    "id": "longTermTag",
    "question": "Is tracking change over weeks or months a central way to deepen learning about this topic?",
    "knowbooks": "capital sales banking sleep rust patience centuries decay motivation seeds budgeting bookkeeping payroll marketing twitter cancer raising attraction basketball football soccer boxing golf baseball venture trees buildings launch"
  },
  {
    "id": "multiplePeopleTag",
    "question": "Does practicing this topic in real life centrally involve interaction between multiple people?",
    "knowbooks": "sales liberty property teamwork competition collusion payroll marketing twitter alignment raising attraction basketball football soccer boxing baseball venture knowbook buildings launch"
  },
  {
    "id": "hazardTag",
    "question": "Does direct experimentation with the real phenomenon involve hazards such as heat, cutting, electricity, contamination, or severe weather?",
    "knowbooks": "tools carpentry electricity heat glass fire voltage motors wedges food screws batteries hurricanes actuators cancer fusion solar plumbing ironing"
  },
  {
    "id": "gasTag",
    "keywords": "gas gases gaseous air atmosphere vapor vapour steam",
    "question": "Are gases or their behavior a central part of this topic?",
    "knowbooks": "air fire wind aerodynamics hurricanes flow rockets breath smell rain ironing"
  },
  {
    "id": "liquidTag",
    "keywords": "liquid liquids fluid fluids water viscosity",
    "question": "Are liquids or their behavior a central part of this topic?",
    "knowbooks": "water membranes ink hydration flow plumbing rain"
  },
  {
    "id": "solidTag",
    "keywords": "solid solids rigid rigidity stiffness hardness",
    "question": "Are the structure or mechanical properties of solids central to this topic?",
    "knowbooks": "beams tools carpentry glass iron copper gold matter friction paper folding metals steel aluminum brass wood wedges screws springs"
  },
  {
    "id": "combustionTag",
    "keywords": "combustion burning burn flame flames fuel ignition",
    "question": "Is burning fuel or understanding combustion a central way to explore this topic?",
    "knowbooks": "fire heat energy"
  },
  {
    "id": "energyTag",
    "keywords": "energy power work conversion storage",
    "question": "Is storing, transferring, or converting energy a central goal?",
    "knowbooks": "levers gravity sound electricity heat fire energy voltage motors motion friction wind food batteries mitochondria fusion springs momentum rockets waves solar ironing"
  },
  {
    "id": "temperatureTag",
    "keywords": "temperature thermal heating cooling hot cold thermodynamics",
    "question": "Is temperature or heat transfer central to this topic?",
    "knowbooks": "heat fire energy stars fusion solar rain ironing"
  },
  {
    "id": "pressureTag",
    "keywords": "pressure compression compressed pneumatic hydraulic hydraulics buoyancy",
    "question": "Is pressure in liquids or gases central to this topic?",
    "knowbooks": "air wind aerodynamics water hurricanes flow rockets plumbing breath"
  },
  {
    "id": "opticsTag",
    "keywords": "optics optical lenses lens reflection refraction color colour vision",
    "question": "Is the behavior or perception of light central to this topic?",
    "knowbooks": "light glass colors stars solar"
  },
  {
    "id": "musicTag",
    "keywords": "music musical instrument instruments rhythm melody pitch acoustic acoustics",
    "question": "Is making or understanding musical sounds a central activity?",
    "knowbooks": "sound guitar piano drums singing"
  },
  {
    "id": "growthTag",
    "keywords": "growth growing grow germination reproduction division",
    "question": "Is the growth or reproduction of living things central to this topic?",
    "knowbooks": "cells seeds cancer raising trees"
  },
  {
    "id": "nutritionTag",
    "keywords": "nutrition nutrients diet eating drinking digestion metabolism",
    "question": "Is understanding how the body obtains or uses food and water a central goal?",
    "knowbooks": "food hydration mitochondria"
  },
  {
    "id": "healthTag",
    "keywords": "health healthy wellbeing wellness body physiology",
    "question": "Is understanding or supporting human health a central goal?",
    "knowbooks": "sleep food hydration mitochondria cancer raising breath"
  },
  {
    "id": "financeTag",
    "keywords": "finance financial money investing investment savings accounting payment payments",
    "question": "Is managing, recording, or exchanging money and financial assets central to this topic?",
    "knowbooks": "capital gold banking property budgeting bookkeeping payroll currency bitcoin venture buildings"
  },
  {
    "id": "businessTag",
    "keywords": "business enterprise commerce commercial market markets entrepreneurship",
    "question": "Is operating a business or participating in a market a central goal?",
    "knowbooks": "capital sales banking property competition collusion budgeting bookkeeping payroll marketing venture knowbook buildings launch"
  },
  {
    "id": "startupsTag",
    "keywords": "startup startups founder founders founding entrepreneur entrepreneurs entrepreneurship venture ventures",
    "question": "Does this topic directly support founding, funding, or building an early-stage business?",
    "knowbooks": "focus capital sales banking teamwork competition budgeting bookkeeping payroll software marketing twitter motivation venture knowbook launch"
  },
  {
    "id": "communicationTag",
    "keywords": "communication communicating message messages media writing publishing persuasion",
    "question": "Is conveying information to other people a central activity?",
    "knowbooks": "sales teamwork ink software scroll marketing twitter raising attraction basketball football soccer baseball venture knowbook launch"
  },
  {
    "id": "cooperationTag",
    "keywords": "cooperation collaboration coordination collaborating teams group social",
    "question": "Is coordinating people's actions toward a shared goal central to this topic?",
    "knowbooks": "teamwork collusion payroll alignment raising basketball football soccer baseball knowbook launch"
  },
  {
    "id": "machinesTag",
    "keywords": "machine machines mechanism mechanisms mechanical engineering robotics robot",
    "question": "Is understanding or using mechanisms that transmit force or motion a central goal?",
    "knowbooks": "beams levers tools carpentry motors gears ropes wheels wedges screws actuators springs"
  },
  {
    "id": "metalTag",
    "keywords": "metal metallic metallurgy alloy alloys conductive conductor conductors",
    "question": "Are metals or their distinctive properties central to this topic?",
    "knowbooks": "magnets iron copper gold rust metals steel aluminum brass"
  },
  {
    "id": "timeTag",
    "keywords": "time timing duration cycles periodic history historical aging ageing",
    "question": "Is measuring time or understanding change over time a central goal?",
    "knowbooks": "sleep rust time patience centuries decay seeds raising"
  },
  {
    "id": "nuclearTag",
    "keywords": "nuclear nucleus nuclei particle particles quantum subatomic radiation",
    "question": "Are atomic nuclei or subatomic particles and their interactions central to this topic?",
    "knowbooks": "atoms stars fusion gluons bosons"
  },
  {
    "id": "cyclesTag",
    "keywords": "cycle cycles cyclic cyclical periodic periodicity repetition repeating oscillation oscillations rhythm rhythms rotation rotating spiral spirals helix helices helixes coil coils coiled frequency",
    "question": "Are repeated turns, oscillations, or patterns in space or time central to this topic?",
    "knowbooks": "light sound sleep frequency helices springs motors gears ropes time wheels screws hurricanes guitar piano drums singing waves breath rain"
  },
  {
    "id": "flightTag",
    "keywords": "flight flying fly aviation aerospace aircraft airplane airplanes rocket rockets rocketry propulsion thrust launch lift drag",
    "question": "Is flight, propulsion, or the forces governing travel through air or space central to this topic?",
    "knowbooks": "rockets aerodynamics"
  },
  {
    "id": "spaceTag",
    "keywords": "space spaceflight astronomy astronomical cosmos cosmic orbit orbital satellite satellites astronaut astronauts",
    "question": "Is understanding objects in space or the physical principles of spaceflight a central way to explore this topic?",
    "knowbooks": "stars gravity rockets momentum"
  },
  {
    "id": "motionTag",
    "keywords": "motion movement moving momentum inertia acceleration velocity speed impulse newton newtonian",
    "question": "Is understanding motion, momentum, or the forces that change motion central to this topic?",
    "knowbooks": "motion momentum gravity friction springs rockets levers motors gears wheels actuators aerodynamics basketball football soccer boxing golf baseball"
  },
  {
    "id": "geometryTag",
    "keywords": "geometry geometric shape shapes spatial structure structures symmetry curves curve topology",
    "question": "Is exploring shapes, spatial relationships, or three-dimensional structures central to this topic?",
    "knowbooks": "helices folding beams carpentry gears screws"
  },
  {
    "id": "emotionalSkillsTag",
    "keywords": "emotion emotions emotional feelings resilience resilient regulation mindfulness confidence grit perseverance",
    "question": "Is developing emotional awareness, self-regulation, or the ability to act through difficulty central to this topic?",
    "knowbooks": "focus patience courage motivation anger raising attraction"
  },
  {
    "id": "explorationTag",
    "keywords": "exploration exploring explore discovery discover expedition expeditions navigation navigating adventure adventures",
    "question": "Is investigating unfamiliar places or planning how to explore them a central activity?",
    "knowbooks": "exploration"
  },
  {
    "id": "parentingTag",
    "keywords": "parenting parent parents parenthood child children childhood childcare caregiving nurturing",
    "question": "Is raising children or practicing parenting skills a central goal?",
    "knowbooks": "raising"
  },
  {
    "id": "datingTag",
    "keywords": "dating romance romantic attraction courtship flirting relationships",
    "question": "Is understanding romantic attraction or practicing dating skills a central goal?",
    "knowbooks": "attraction"
  },
  {
    "id": "familyTag",
    "keywords": "family families familial kinship relatives home",
    "question": "Is building family relationships or caring for family members a central goal?",
    "knowbooks": "raising attraction"
  },
  {
    "id": "matingTag",
    "keywords": "mating mate mates courtship pairing partner partners selection",
    "question": "Is understanding mate attraction or mate selection a central goal?",
    "knowbooks": "attraction"
  },
  {
    "id": "socialTag",
    "keywords": "social interpersonal interaction interactions relationships relating socializing",
    "question": "Is understanding social relationships or practicing interpersonal skills a central goal?",
    "knowbooks": "sales liberty teamwork competition collusion marketing twitter alignment raising attraction"
  },
  {
    "id": "sportsTag",
    "keywords": "sport sports sporting athletic athletics athlete athletes",
    "question": "Is learning or practicing an athletic sport a central goal?",
    "knowbooks": "basketball football soccer boxing golf baseball"
  },
  {
    "id": "teamSportsTag",
    "keywords": "team sports teams teammates teamwork",
    "question": "Is playing a sport with teammates working toward a shared result central to this topic?",
    "knowbooks": "basketball football soccer baseball"
  },
  {
    "id": "ballSportsTag",
    "keywords": "ball sports balls ballgame ballgames basketball football soccer golf baseball",
    "question": "Is controlling, striking, throwing, or kicking a ball central to this sport?",
    "knowbooks": "basketball football soccer golf baseball"
  },
  {
    "id": "combatSportsTag",
    "keywords": "combat sports fighting fight sparring boxing",
    "question": "Is practicing a sport involving direct physical combat with an opponent central to this topic?",
    "knowbooks": "boxing"
  },
  {
    "id": "individualSportsTag",
    "keywords": "individual sports solo singles",
    "question": "Can the sport centrally be practiced in competition with results attributed to an individual rather than a team?",
    "knowbooks": "boxing golf"
  }
]