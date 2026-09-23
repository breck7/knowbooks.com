const catalog = [
  {
    "id": "magnets",
    "tags": "physicsTag mechanicsTag electricityTag electromagnetismTag instantTag metalTag",
    "title": "Magnets",
    "color": "navy",
    "symbol": "vertical bar magnet. south half is solid color",
    "cover": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"37\" y=\"50\" width=\"26\" height=\"33\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"37\" y=\"17\" width=\"26\" height=\"66\" stroke-width=\"3\"/><line x1=\"37\" y1=\"50\" x2=\"63\" y2=\"50\" stroke-width=\"3\"/></svg>",
    "status": "trailblazer",
    "priceUsd": 149
  },
  {
    "id": "focus",
    "tags": "physicsTag psychologyTag instantTag startupsTag emotionalSkillsTag",
    "title": "Focus",
    "color": "coral",
    "symbol": "two triangles touching horizontally, like a bowtie. solid fill",
    "cover": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"20 28 50 50 20 72\" fill=\"currentColor\" stroke=\"none\"/><polygon points=\"80 28 50 50 80 72\" fill=\"currentColor\" stroke=\"none\"/></svg>",
    "status": "trailblazer",
    "priceUsd": 149
  },
  {
    "id": "levers",
    "tags": "physicsTag mechanicsTag buildingTag instantTag energyTag machinesTag motionTag",
    "title": "Levers",
    "color": "navy",
    "symbol": "tilted lever with an aligned square load and a small touching fulcrum near the load. solid shapes",
    "cover": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"15\" y1=\"53\" x2=\"85\" y2=\"41\" stroke-width=\"4\"/><polygon points=\"40 48.714 32 65 48 65\" fill=\"currentColor\" stroke=\"none\"/><polygon points=\"17.429 37.143 32.429 34.571 35 49.571 20 52.143\" fill=\"currentColor\" stroke=\"none\"/></svg>",
    "status": "trailblazer",
    "priceUsd": 149
  },
  {
    "id": "beams",
    "tags": "physicsTag materialsTag mechanicsTag buildingTag measurementTag instantTag solidTag machinesTag geometryTag",
    "title": "Beams",
    "color": "brown",
    "symbol": "vertical bar. solid fill.",
    "cover": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"40\" y=\"17\" width=\"20\" height=\"66\" fill=\"currentColor\" stroke=\"none\"/></svg>",
    "status": "trailblazer",
    "priceUsd": 149
  },
  {
    "id": "sales",
    "tags": "economicsTag psychologyTag longTermTag multiplePeopleTag businessTag startupsTag communicationTag socialTag",
    "title": "Sales",
    "color": "forest",
    "symbol": "two triangles in alignment, pointed north east",
    "cover": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"46 54 38 82 18 62\" fill=\"currentColor\" stroke=\"none\"/><polygon points=\"82 18 74 46 54 26\" fill=\"currentColor\" stroke=\"none\"/></svg>",
    "status": "trailblazer",
    "priceUsd": 399
  },
  {
    "id": "anger",
    "tags": "psychologyTag emotionalSkillsTag",
    "title": "Anger",
    "color": "orange",
    "symbol": "two scowling eyebrows and eyes",
    "cover": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"28\" y1=\"49\" x2=\"42\" y2=\"56\" stroke-width=\"3\"/><line x1=\"58\" y1=\"56\" x2=\"72\" y2=\"49\" stroke-width=\"3\"/><circle cx=\"35\" cy=\"63\" r=\"3\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"65\" cy=\"63\" r=\"3\" fill=\"currentColor\" stroke=\"none\"/></svg>",
    "status": "trailblazer",
    "priceUsd": 149
  },
  {
    "id": "carpentry",
    "tags": "plantTag materialsTag mechanicsTag buildingTag creativeTag hazardTag solidTag machinesTag geometryTag",
    "title": "Carpentry",
    "color": "brown",
    "symbol": "long horizontal hand saw blade tapering from left to right. solid fill. three teeth. small handle on the left",
    "cover": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"26 34 88 46 88 60 78 66 68 60 58 66 48 60 38 66 26 60\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M10 35 Q10 31 14 31 H28 V63 H14 Q10 63 10 59 Z M16 39 V55 H22 V39 Z\" fill=\"currentColor\" stroke=\"none\"/></svg>",
    "status": "trailblazer",
    "priceUsd": 349
  },
  {
    "id": "plumbing",
    "tags": "physicsTag mechanicsTag fluidsTag buildingTag measurementTag instantTag hazardTag liquidTag pressureTag",
    "title": "Plumbing",
    "color": "ocean",
    "symbol": "two elbow pipes one coming from left a drip of water flowing out and into the other elbow pipe leaving to right. all solids",
    "cover": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 18 H40 Q56 18 56 34 V39 H44 V34 Q44 30 40 30 H14 Z\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M44 66 H56 V72 Q56 76 60 76 H86 V88 H60 Q44 88 44 72 Z\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M50 46 C48 50 45 53 45 56 A5 5 0 0 0 55 56 C55 53 52 50 50 46 Z\" fill=\"currentColor\" stroke=\"none\"/></svg>",
    "status": "trailblazer",
    "priceUsd": 349
  },
  {
    "id": "capital",
    "tags": "economicsTag measurementTag longTermTag financeTag businessTag startupsTag",
    "title": "Capital",
    "color": "forest",
    "symbol": "four pairs of two solid circles. each pair has 1 small circle, 2 are bigger, 1 is bigger than that, 1 bigger than that. arranged in a scattered way.",
    "cover": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"18\" cy=\"19\" r=\"4\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"34\" cy=\"28\" r=\"7\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"65\" cy=\"16\" r=\"4\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"79\" cy=\"30\" r=\"7\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"16\" cy=\"58\" r=\"4\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"30\" cy=\"75\" r=\"10\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"55\" cy=\"56\" r=\"4\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"72\" cy=\"74\" r=\"13\" fill=\"currentColor\" stroke=\"none\"/></svg>",
    "status": "trailblazer",
    "priceUsd": 699
  },
  {
    "id": "buildings",
    "tags": "economicsTag measurementTag longTermTag multiplePeopleTag financeTag businessTag",
    "title": "Buildings",
    "color": "burgundy",
    "symbol": "a teepee, a pitched tent, and a home increasing in height from left to right, showing greater investment",
    "cover": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M 17 44 L 29 70 L 11 70 L 23 44\"/><path d=\"M 17 70 L 20 61 L 23 70\"/><polygon points=\"35 70 44 42 53 70\"/><path d=\"M 44 42 L 53 48 L 61 70 L 53 70\"/><line x1=\"44\" y1=\"57\" x2=\"44\" y2=\"70\" stroke-width=\"2\"/><path d=\"M 66 42 L 78 29 L 90 42\"/><path d=\"M 68 40 L 68 70 L 88 70 L 88 40\"/><path d=\"M 75 70 L 75 57 L 81 57 L 81 70\"/><rect x=\"75\" y=\"44\" width=\"6\" height=\"6\" stroke-width=\"2\"/></svg>",
    "status": "trailblazer",
    "priceUsd": 299
  },
  {
    "id": "light",
    "tags": "physicsTag electromagnetismTag wavesTag instantTag opticsTag cyclesTag",
    "title": "Light",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "tools",
    "tags": "mechanicsTag buildingTag instantTag hazardTag solidTag machinesTag",
    "title": "Tools",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "gravity",
    "tags": "physicsTag mechanicsTag measurementTag instantTag energyTag spaceTag motionTag",
    "title": "Gravity",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "sound",
    "tags": "physicsTag wavesTag measurementTag creativeTag instantTag energyTag musicTag cyclesTag",
    "title": "Sound",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "electricity",
    "tags": "physicsTag electricityTag electromagnetismTag buildingTag measurementTag instantTag hazardTag energyTag",
    "title": "Electricity",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "air",
    "tags": "physicsTag materialsTag fluidsTag natureTag instantTag gasTag pressureTag",
    "title": "Air",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "heat",
    "tags": "physicsTag chemistryTag fluidsTag measurementTag instantTag hazardTag combustionTag energyTag temperatureTag",
    "title": "Heat",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "glass",
    "tags": "physicsTag chemistryTag materialsTag electromagnetismTag wavesTag instantTag hazardTag solidTag opticsTag",
    "title": "Glass",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "cells",
    "tags": "chemistryTag biologyTag growthTag",
    "title": "Cells",
    "status": "believer",
    "priceUsd": 299
  },
  {
    "id": "iron",
    "tags": "physicsTag chemistryTag materialsTag instantTag solidTag metalTag",
    "title": "Iron",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "elements",
    "tags": "physicsTag chemistryTag materialsTag instantTag",
    "title": "Elements",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "copper",
    "tags": "physicsTag chemistryTag materialsTag electricityTag electromagnetismTag instantTag solidTag metalTag",
    "title": "Copper",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "gold",
    "tags": "physicsTag chemistryTag economicsTag materialsTag instantTag solidTag financeTag metalTag",
    "title": "Gold",
    "status": "believer",
    "priceUsd": 999
  },
  {
    "id": "venture",
    "tags": "economicsTag measurementTag longTermTag multiplePeopleTag financeTag businessTag startupsTag communicationTag",
    "title": "Venture",
    "status": "believer",
    "priceUsd": 10000
  },
  {
    "id": "banking",
    "tags": "economicsTag measurementTag longTermTag financeTag businessTag startupsTag",
    "title": "Banking",
    "status": "believer",
    "priceUsd": 1999
  },
  {
    "id": "fire",
    "tags": "physicsTag chemistryTag instantTag hazardTag gasTag combustionTag energyTag temperatureTag",
    "title": "Fire",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "sleep",
    "tags": "biologyTag psychologyTag measurementTag longTermTag healthTag timeTag cyclesTag",
    "title": "Sleep",
    "status": "believer",
    "priceUsd": 499
  },
  {
    "id": "fields",
    "tags": "physicsTag electricityTag electromagnetismTag wavesTag instantTag",
    "title": "Fields",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "energy",
    "tags": "physicsTag electricityTag measurementTag instantTag combustionTag energyTag temperatureTag",
    "title": "Energy",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "frequency",
    "tags": "physicsTag wavesTag measurementTag instantTag cyclesTag",
    "title": "Frequency",
    "status": "believer",
    "priceUsd": 299
  },
  {
    "id": "waves",
    "tags": "physicsTag electromagnetismTag wavesTag measurementTag instantTag energyTag cyclesTag",
    "title": "Waves",
    "status": "believer",
    "priceUsd": 299
  },
  {
    "id": "helices",
    "tags": "physicsTag buildingTag cyclesTag geometryTag",
    "title": "Helices",
    "status": "believer",
    "priceUsd": 299
  },
  {
    "id": "springs",
    "tags": "physicsTag materialsTag mechanicsTag buildingTag measurementTag instantTag solidTag energyTag machinesTag cyclesTag motionTag",
    "title": "Springs",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "voltage",
    "tags": "physicsTag electricityTag electromagnetismTag measurementTag instantTag hazardTag energyTag",
    "title": "Voltage",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "motors",
    "tags": "physicsTag mechanicsTag electricityTag electromagnetismTag buildingTag instantTag hazardTag energyTag machinesTag cyclesTag motionTag",
    "title": "Motors",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "gears",
    "tags": "physicsTag mechanicsTag buildingTag instantTag machinesTag cyclesTag motionTag geometryTag",
    "title": "Gears",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "colors",
    "tags": "physicsTag electromagnetismTag wavesTag creativeTag instantTag opticsTag",
    "title": "Colors",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "matter",
    "tags": "physicsTag chemistryTag materialsTag instantTag solidTag",
    "title": "Matter",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "atoms",
    "tags": "physicsTag chemistryTag nuclearTag",
    "title": "Atoms",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "motion",
    "tags": "physicsTag mechanicsTag measurementTag instantTag energyTag motionTag",
    "title": "Motion",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "momentum",
    "tags": "physicsTag mechanicsTag measurementTag instantTag energyTag spaceTag motionTag",
    "title": "Momentum",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "friction",
    "tags": "physicsTag mechanicsTag measurementTag instantTag solidTag energyTag motionTag",
    "title": "Friction",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "ropes",
    "tags": "physicsTag mechanicsTag buildingTag instantTag machinesTag cyclesTag",
    "title": "Ropes",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "wind",
    "tags": "physicsTag mechanicsTag fluidsTag natureTag measurementTag instantTag gasTag energyTag pressureTag",
    "title": "Wind",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "aerodynamics",
    "tags": "physicsTag mechanicsTag fluidsTag measurementTag instantTag gasTag pressureTag flightTag motionTag",
    "title": "Aerodynamics",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "water",
    "tags": "physicsTag chemistryTag materialsTag fluidsTag natureTag measurementTag instantTag liquidTag pressureTag",
    "title": "Water",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "rust",
    "tags": "physicsTag chemistryTag materialsTag longTermTag metalTag timeTag",
    "title": "Rust",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "time",
    "tags": "measurementTag timeTag cyclesTag",
    "title": "Time",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "patience",
    "tags": "psychologyTag longTermTag timeTag emotionalSkillsTag",
    "title": "Patience",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "centuries",
    "tags": "natureTag measurementTag longTermTag timeTag",
    "title": "Centuries",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "liberty",
    "tags": "economicsTag psychologyTag multiplePeopleTag socialTag",
    "title": "Liberty",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "courage",
    "tags": "psychologyTag emotionalSkillsTag",
    "title": "Courage",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "property",
    "tags": "economicsTag multiplePeopleTag financeTag businessTag",
    "title": "Property",
    "status": "believer",
    "priceUsd": 399
  },
  {
    "id": "membranes",
    "tags": "physicsTag chemistryTag biologyTag materialsTag fluidsTag instantTag liquidTag",
    "title": "Membranes",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "decay",
    "tags": "chemistryTag biologyTag natureTag longTermTag timeTag",
    "title": "Decay",
    "status": "believer",
    "priceUsd": 299
  },
  {
    "id": "bonds",
    "tags": "physicsTag chemistryTag materialsTag",
    "title": "Bonds",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "teamwork",
    "tags": "psychologyTag multiplePeopleTag startupsTag communicationTag cooperationTag socialTag",
    "title": "Teamwork",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "motivation",
    "tags": "psychologyTag longTermTag startupsTag emotionalSkillsTag",
    "title": "Motivation",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "competition",
    "tags": "economicsTag psychologyTag multiplePeopleTag businessTag startupsTag socialTag",
    "title": "Competition",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "alignment",
    "tags": "psychologyTag multiplePeopleTag cooperationTag socialTag",
    "title": "Alignment",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "collusion",
    "tags": "economicsTag psychologyTag multiplePeopleTag businessTag cooperationTag socialTag",
    "title": "Collusion",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "paper",
    "tags": "plantTag materialsTag buildingTag creativeTag instantTag solidTag",
    "title": "Paper",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "ink",
    "tags": "chemistryTag materialsTag buildingTag creativeTag instantTag liquidTag communicationTag",
    "title": "Ink",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "folding",
    "tags": "materialsTag buildingTag creativeTag instantTag solidTag geometryTag",
    "title": "Folding",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "metals",
    "tags": "physicsTag chemistryTag materialsTag instantTag solidTag metalTag",
    "title": "Metals",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "steel",
    "tags": "physicsTag chemistryTag materialsTag instantTag solidTag metalTag",
    "title": "Steel",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "aluminum",
    "tags": "physicsTag chemistryTag materialsTag instantTag solidTag metalTag",
    "title": "Aluminum",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "brass",
    "tags": "physicsTag chemistryTag materialsTag instantTag solidTag metalTag",
    "title": "Brass",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "wood",
    "tags": "plantTag materialsTag buildingTag instantTag solidTag",
    "title": "Wood",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "seeds",
    "tags": "biologyTag plantTag natureTag longTermTag growthTag timeTag",
    "title": "Seeds",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "wheels",
    "tags": "physicsTag mechanicsTag buildingTag instantTag machinesTag cyclesTag motionTag",
    "title": "Wheels",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "wedges",
    "tags": "physicsTag mechanicsTag buildingTag instantTag hazardTag solidTag machinesTag",
    "title": "Wedges",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "stars",
    "tags": "physicsTag wavesTag natureTag measurementTag temperatureTag opticsTag nuclearTag spaceTag",
    "title": "Stars",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "exploration",
    "tags": "natureTag explorationTag",
    "title": "Exploration",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "fabric",
    "tags": "plantTag materialsTag buildingTag creativeTag instantTag",
    "title": "Fabric",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "food",
    "tags": "chemistryTag biologyTag plantTag materialsTag hazardTag energyTag nutritionTag healthTag",
    "title": "Food",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "trees",
    "tags": "biologyTag plantTag natureTag longTermTag growthTag",
    "title": "Trees",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "breath",
    "tags": "biologyTag fluidsTag measurementTag instantTag gasTag pressureTag healthTag cyclesTag",
    "title": "Breath",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "smell",
    "tags": "chemistryTag biologyTag instantTag gasTag",
    "title": "Smell",
    "status": "believer",
    "priceUsd": 349
  },
  {
    "id": "rain",
    "tags": "physicsTag fluidsTag natureTag measurementTag gasTag liquidTag temperatureTag cyclesTag",
    "title": "Rain",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "budgeting",
    "tags": "economicsTag measurementTag longTermTag financeTag businessTag startupsTag",
    "title": "Budgeting",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "bookkeeping",
    "tags": "economicsTag measurementTag longTermTag financeTag businessTag startupsTag",
    "title": "Bookkeeping",
    "status": "believer",
    "priceUsd": 299
  },
  {
    "id": "screws",
    "tags": "physicsTag mechanicsTag buildingTag instantTag hazardTag solidTag machinesTag cyclesTag geometryTag",
    "title": "Screws",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "payroll",
    "tags": "economicsTag measurementTag longTermTag multiplePeopleTag financeTag businessTag startupsTag cooperationTag",
    "title": "Payroll",
    "status": "believer",
    "priceUsd": 299
  },
  {
    "id": "batteries",
    "tags": "physicsTag chemistryTag electricityTag electromagnetismTag buildingTag measurementTag instantTag hazardTag energyTag",
    "title": "Batteries",
    "status": "believer",
    "priceUsd": 299
  },
  {
    "id": "software",
    "tags": "computingTag buildingTag creativeTag instantTag startupsTag communicationTag",
    "title": "Software",
    "status": "believer",
    "priceUsd": 599
  },
  {
    "id": "scroll",
    "tags": "computingTag buildingTag creativeTag instantTag communicationTag",
    "title": "Scroll",
    "status": "believer",
    "priceUsd": 499
  },
  {
    "id": "marketing",
    "tags": "economicsTag psychologyTag creativeTag longTermTag multiplePeopleTag businessTag startupsTag communicationTag socialTag",
    "title": "Marketing",
    "status": "believer",
    "priceUsd": 1499
  },
  {
    "id": "twitter",
    "tags": "psychologyTag computingTag creativeTag longTermTag multiplePeopleTag startupsTag communicationTag socialTag",
    "title": "Twitter",
    "status": "believer",
    "priceUsd": 1499
  },
  {
    "id": "hydration",
    "tags": "biologyTag fluidsTag measurementTag liquidTag nutritionTag healthTag",
    "title": "Hydration",
    "status": "believer",
    "priceUsd": 249
  },
  {
    "id": "hurricanes",
    "tags": "physicsTag mechanicsTag fluidsTag natureTag measurementTag hazardTag gasTag pressureTag cyclesTag",
    "title": "Hurricanes",
    "status": "believer",
    "priceUsd": 399
  },
  {
    "id": "currency",
    "tags": "economicsTag measurementTag financeTag",
    "title": "Currency",
    "status": "believer",
    "priceUsd": 799
  },
  {
    "id": "bitcoin",
    "tags": "economicsTag computingTag measurementTag financeTag",
    "title": "Bitcoin",
    "status": "believer",
    "priceUsd": 899
  },
  {
    "id": "guitar",
    "tags": "physicsTag wavesTag buildingTag creativeTag instantTag musicTag cyclesTag",
    "title": "Guitar",
    "status": "frontier",
    "priceUsd": 599
  },
  {
    "id": "piano",
    "tags": "physicsTag wavesTag buildingTag creativeTag instantTag musicTag cyclesTag",
    "title": "Piano",
    "status": "frontier",
    "priceUsd": 599
  },
  {
    "id": "drums",
    "tags": "physicsTag wavesTag buildingTag creativeTag instantTag musicTag cyclesTag",
    "title": "Drums",
    "status": "frontier",
    "priceUsd": 599
  },
  {
    "id": "singing",
    "tags": "physicsTag wavesTag creativeTag instantTag musicTag cyclesTag",
    "title": "Singing",
    "status": "frontier",
    "priceUsd": 599
  },
  {
    "id": "actuators",
    "tags": "physicsTag mechanicsTag electricityTag electromagnetismTag buildingTag instantTag hazardTag machinesTag motionTag",
    "title": "Actuators",
    "status": "frontier",
    "priceUsd": 1499
  },
  {
    "id": "rockets",
    "tags": "physicsTag mechanicsTag fluidsTag buildingTag measurementTag gasTag energyTag pressureTag flightTag spaceTag motionTag",
    "title": "Rockets",
    "status": "frontier",
    "priceUsd": 1969
  },
  {
    "id": "transistors",
    "tags": "physicsTag computingTag electricityTag electromagnetismTag buildingTag instantTag",
    "title": "Transistors",
    "status": "frontier",
    "priceUsd": 1499
  },
  {
    "id": "mitochondria",
    "tags": "chemistryTag biologyTag energyTag nutritionTag healthTag",
    "title": "Mitochondria",
    "status": "frontier",
    "priceUsd": 1499
  },
  {
    "id": "cancer",
    "tags": "chemistryTag biologyTag longTermTag hazardTag growthTag healthTag",
    "title": "Cancer",
    "status": "frontier",
    "priceUsd": 1499
  },
  {
    "id": "fusion",
    "tags": "physicsTag hazardTag energyTag temperatureTag nuclearTag",
    "title": "Fusion",
    "status": "frontier",
    "priceUsd": 1499
  },
  {
    "id": "raising",
    "tags": "biologyTag psychologyTag longTermTag multiplePeopleTag growthTag healthTag communicationTag cooperationTag timeTag emotionalSkillsTag parentingTag familyTag socialTag",
    "title": "Raising",
    "status": "frontier",
    "priceUsd": 1921
  },
  {
    "id": "attraction",
    "tags": "psychologyTag longTermTag multiplePeopleTag communicationTag emotionalSkillsTag datingTag familyTag matingTag socialTag",
    "title": "Attraction",
    "status": "frontier",
    "priceUsd": 699
  },
  {
    "id": "basketball",
    "tags": "mechanicsTag instantTag longTermTag multiplePeopleTag communicationTag cooperationTag motionTag sportsTag teamSportsTag ballSportsTag",
    "title": "Basketball",
    "status": "frontier",
    "priceUsd": 3323
  },
  {
    "id": "football",
    "tags": "mechanicsTag instantTag longTermTag multiplePeopleTag communicationTag cooperationTag motionTag sportsTag teamSportsTag ballSportsTag",
    "title": "Football",
    "status": "frontier",
    "priceUsd": 2837
  },
  {
    "id": "soccer",
    "tags": "mechanicsTag instantTag longTermTag multiplePeopleTag communicationTag cooperationTag motionTag sportsTag teamSportsTag ballSportsTag",
    "title": "Soccer",
    "status": "frontier",
    "priceUsd": 1023
  },
  {
    "id": "boxing",
    "tags": "mechanicsTag instantTag longTermTag multiplePeopleTag motionTag sportsTag combatSportsTag individualSportsTag",
    "title": "Boxing",
    "status": "frontier",
    "priceUsd": 4956
  },
  {
    "id": "golf",
    "tags": "mechanicsTag instantTag longTermTag motionTag sportsTag ballSportsTag individualSportsTag",
    "title": "Golf",
    "status": "frontier",
    "priceUsd": 1518
  },
  {
    "id": "baseball",
    "tags": "mechanicsTag instantTag longTermTag multiplePeopleTag communicationTag cooperationTag motionTag sportsTag teamSportsTag ballSportsTag",
    "title": "Baseball",
    "status": "frontier",
    "priceUsd": 406
  },
  {
    "id": "flow",
    "tags": "physicsTag mechanicsTag fluidsTag measurementTag instantTag gasTag liquidTag pressureTag",
    "title": "Flow",
    "status": "frontier",
    "priceUsd": 1499
  },
  {
    "id": "gluons",
    "tags": "physicsTag nuclearTag",
    "title": "Gluons",
    "status": "frontier",
    "priceUsd": 1499
  },
  {
    "id": "bosons",
    "tags": "physicsTag nuclearTag",
    "title": "Bosons",
    "status": "frontier",
    "priceUsd": 1499
  },
  {
    "id": "solar",
    "tags": "physicsTag electricityTag electromagnetismTag wavesTag natureTag buildingTag measurementTag instantTag hazardTag energyTag temperatureTag opticsTag",
    "title": "Solar",
    "status": "frontier",
    "priceUsd": 10000
  },
  {
    "id": "knowbook",
    "description": "Includes an initial partner conversation about building Knowbooks in your community.",
    "tags": "economicsTag buildingTag creativeTag multiplePeopleTag businessTag startupsTag communicationTag cooperationTag",
    "title": "Knowbooks",
    "color": "forest",
    "status": "partner",
    "priceUsd": 999
  }
]