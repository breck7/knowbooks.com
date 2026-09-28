const tags = [
  {
    "id": "physicsTag",
    "question": "Is understanding physical forces, energy, waves, or matter a central goal?"
  },
  {
    "id": "chemistryTag",
    "question": "Is chemical composition or chemical change central to this topic?"
  },
  {
    "id": "biologyTag",
    "question": "Is understanding living organisms or the human body's functions a central goal?"
  },
  {
    "id": "plantTag",
    "question": "Does this knowbook centrally involve plants or materials obtained from plants?"
  },
  {
    "id": "economicsTag",
    "question": "Is money, ownership, trade, or the allocation of scarce resources central to this topic?"
  },
  {
    "id": "psychologyTag",
    "question": "Is understanding or changing attention, emotion, motivation, or social behavior a central goal?"
  },
  {
    "id": "computingTag",
    "question": "Is software, digital information, or electronic computation central to this topic?"
  },
  {
    "id": "materialsTag",
    "question": "Is exploring the properties or uses of a tangible material a central goal?"
  },
  {
    "id": "mechanicsTag",
    "question": "Are forces, motion, or mechanical advantage central to this topic?"
  },
  {
    "id": "electricityTag",
    "question": "Are electric charge, circuits, or electromagnetism central to this topic?"
  },
  {
    "id": "electromagnetismTag",
    "keywords": "electromagnetism electromagnetic electromagnet electromagnets magnetism magnetic induction",
    "question": "Are electric or magnetic fields, electric circuits, or electromagnetic waves central to this topic?"
  },
  {
    "id": "wavesTag",
    "question": "Are light, sound, or other wave phenomena central to this topic?"
  },
  {
    "id": "fluidsTag",
    "question": "Is the behavior or movement of liquids or gases central to this topic?"
  },
  {
    "id": "natureTag",
    "question": "Is observing natural environments, weather, or the sky a central learning activity?"
  },
  {
    "id": "buildingTag",
    "question": "Is assembling, shaping, or programming something a central hands-on way to learn this topic?"
  },
  {
    "id": "measurementTag",
    "question": "Is taking numerical measurements or keeping quantitative records a central way to explore this topic?"
  },
  {
    "id": "creativeTag",
    "question": "Is creating an expressive work, design, or performance a central activity?"
  },
  {
    "id": "instantTag",
    "question": "Can a typical introductory activity give directly observable feedback within a minute of setup?"
  },
  {
    "id": "longTermTag",
    "question": "Is tracking change over weeks or months a central way to deepen learning about this topic?"
  },
  {
    "id": "multiplePeopleTag",
    "question": "Does practicing this topic in real life centrally involve interaction between multiple people?"
  },
  {
    "id": "hazardTag",
    "question": "Does direct experimentation with the real phenomenon involve hazards such as heat, cutting, electricity, contamination, or severe weather?"
  },
  {
    "id": "gasTag",
    "keywords": "gas gases gaseous air atmosphere vapor vapour steam",
    "question": "Are gases or their behavior a central part of this topic?"
  },
  {
    "id": "liquidTag",
    "keywords": "liquid liquids fluid fluids water viscosity",
    "question": "Are liquids or their behavior a central part of this topic?"
  },
  {
    "id": "solidTag",
    "keywords": "solid solids rigid rigidity stiffness hardness",
    "question": "Are the structure or mechanical properties of solids central to this topic?"
  },
  {
    "id": "combustionTag",
    "keywords": "combustion burning burn flame flames fuel ignition",
    "question": "Is burning fuel or understanding combustion a central way to explore this topic?"
  },
  {
    "id": "energyTag",
    "keywords": "energy power work conversion storage",
    "question": "Is storing, transferring, or converting energy a central goal?"
  },
  {
    "id": "temperatureTag",
    "keywords": "temperature thermal heating cooling hot cold thermodynamics",
    "question": "Is temperature or heat transfer central to this topic?"
  },
  {
    "id": "pressureTag",
    "keywords": "pressure compression compressed pneumatic hydraulic hydraulics buoyancy",
    "question": "Is pressure in liquids or gases central to this topic?"
  },
  {
    "id": "opticsTag",
    "keywords": "optics optical lenses lens reflection refraction color colour vision",
    "question": "Is the behavior or perception of light central to this topic?"
  },
  {
    "id": "musicTag",
    "keywords": "music musical instrument instruments rhythm melody pitch acoustic acoustics",
    "question": "Is making or understanding musical sounds a central activity?"
  },
  {
    "id": "growthTag",
    "keywords": "growth growing grow germination reproduction division",
    "question": "Is the growth or reproduction of living things central to this topic?"
  },
  {
    "id": "nutritionTag",
    "keywords": "nutrition nutrients diet eating drinking digestion metabolism",
    "question": "Is understanding how the body obtains or uses food and water a central goal?"
  },
  {
    "id": "healthTag",
    "keywords": "health healthy wellbeing wellness body physiology",
    "question": "Is understanding or supporting human health a central goal?"
  },
  {
    "id": "medicineTag",
    "keywords": "medicine pharma pharmacy drug drugs",
    "question": "Is it about a substance that helps solve a specific condition?"
  },
  {
    "id": "financeTag",
    "keywords": "finance financial money investing investment savings accounting payment payments",
    "question": "Is managing, recording, or exchanging money and financial assets central to this topic?"
  },
  {
    "id": "businessTag",
    "keywords": "business enterprise commerce commercial market markets entrepreneurship",
    "question": "Is operating a business or participating in a market a central goal?"
  },
  {
    "id": "startupsTag",
    "keywords": "startup startups founder founders founding entrepreneur entrepreneurs entrepreneurship venture ventures",
    "question": "Does this topic directly support founding, funding, or building an early-stage business?"
  },
  {
    "id": "communicationTag",
    "keywords": "communication communicating message messages media writing publishing persuasion",
    "question": "Is conveying information to other people a central activity?"
  },
  {
    "id": "cooperationTag",
    "keywords": "cooperation collaboration coordination collaborating teams group social",
    "question": "Is coordinating people's actions toward a shared goal central to this topic?"
  },
  {
    "id": "machinesTag",
    "keywords": "machine machines mechanism mechanisms mechanical engineering robotics robot",
    "question": "Is understanding or using mechanisms that transmit force or motion a central goal?"
  },
  {
    "id": "metalTag",
    "keywords": "metal metallic metallurgy alloy alloys conductive conductor conductors",
    "question": "Are metals or their distinctive properties central to this topic?"
  },
  {
    "id": "timeTag",
    "keywords": "time timing duration cycles periodic history historical aging ageing",
    "question": "Is measuring time or understanding change over time a central goal?"
  },
  {
    "id": "nuclearTag",
    "keywords": "nuclear nucleus nuclei particle particles quantum subatomic radiation",
    "question": "Are atomic nuclei or subatomic particles and their interactions central to this topic?"
  },
  {
    "id": "cyclesTag",
    "keywords": "cycle cycles cyclic cyclical periodic periodicity repetition repeating oscillation oscillations rhythm rhythms rotation rotating spiral spirals helix helices helixes coil coils coiled frequency",
    "question": "Are repeated turns, oscillations, or patterns in space or time central to this topic?"
  },
  {
    "id": "flightTag",
    "keywords": "flight flying fly aviation aerospace aircraft airplane airplanes rocket rockets rocketry propulsion thrust launch lift drag",
    "question": "Is flight, propulsion, or the forces governing travel through air or space central to this topic?"
  },
  {
    "id": "spaceTag",
    "keywords": "space spaceflight astronomy astronomical cosmos cosmic orbit orbital satellite satellites astronaut astronauts",
    "question": "Is understanding objects in space or the physical principles of spaceflight a central way to explore this topic?"
  },
  {
    "id": "motionTag",
    "keywords": "motion movement moving momentum inertia acceleration velocity speed impulse newton newtonian",
    "question": "Is understanding motion, momentum, or the forces that change motion central to this topic?"
  },
  {
    "id": "geometryTag",
    "keywords": "geometry geometric shape shapes spatial structure structures symmetry curves curve topology",
    "question": "Is exploring shapes, spatial relationships, or three-dimensional structures central to this topic?"
  },
  {
    "id": "emotionalSkillsTag",
    "keywords": "emotion emotions emotional feelings resilience resilient regulation mindfulness confidence grit perseverance",
    "question": "Is developing emotional awareness, self-regulation, or the ability to act through difficulty central to this topic?"
  },
  {
    "id": "explorationTag",
    "keywords": "exploration exploring explore discovery discover expedition expeditions navigation navigating adventure adventures",
    "question": "Is investigating unfamiliar places or planning how to explore them a central activity?"
  },
  {
    "id": "parentingTag",
    "keywords": "parenting parent parents parenthood child children childhood childcare caregiving nurturing",
    "question": "Is raising children or practicing parenting skills a central goal?"
  },
  {
    "id": "datingTag",
    "keywords": "dating romance romantic attraction courtship flirting relationships",
    "question": "Is understanding romantic attraction or practicing dating skills a central goal?"
  },
  {
    "id": "familyTag",
    "keywords": "family families familial kinship relatives home",
    "question": "Is building family relationships or caring for family members a central goal?"
  },
  {
    "id": "matingTag",
    "keywords": "mating mate mates courtship pairing partner partners selection",
    "question": "Is understanding mate attraction or mate selection a central goal?"
  },
  {
    "id": "socialTag",
    "keywords": "social interpersonal interaction interactions relationships relating socializing",
    "question": "Is understanding social relationships or practicing interpersonal skills a central goal?"
  },
  {
    "id": "sportsTag",
    "keywords": "sport sports sporting athletic athletics athlete athletes",
    "question": "Is learning or practicing an athletic sport a central goal?"
  },
  {
    "id": "teamSportsTag",
    "keywords": "team sports teams teammates teamwork",
    "question": "Is playing a sport with teammates working toward a shared result central to this topic?"
  },
  {
    "id": "ballSportsTag",
    "keywords": "ball sports balls ballgame ballgames basketball football soccer golf baseball",
    "question": "Is controlling, striking, throwing, or kicking a ball central to this sport?"
  },
  {
    "id": "combatSportsTag",
    "keywords": "combat sports fighting fight sparring boxing",
    "question": "Is practicing a sport involving direct physical combat with an opponent central to this topic?"
  },
  {
    "id": "individualSportsTag",
    "keywords": "individual sports solo singles",
    "question": "Can the sport centrally be practiced in competition with results attributed to an individual rather than a team?"
  }
]