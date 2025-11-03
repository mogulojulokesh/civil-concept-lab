export interface Concept {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullExplanation: string;
  animationUrl?: string;
  quiz: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }[];
  furtherReading?: string;
}

export const concepts: Concept[] = [
  // Structural Engineering
  {
    id: "bending-moment-shear",
    title: "Bending Moment & Shear Force",
    category: "Structural",
    shortDescription: "Understanding how forces create internal stresses in beams",
    fullExplanation: "When a beam is loaded, it experiences internal forces that vary along its length. Shear force is the internal force acting perpendicular to the beam's axis, while bending moment is the rotational effect of forces about a point. These concepts are fundamental to structural design and help engineers determine if a beam can safely carry loads.",
    quiz: [
      {
        question: "What is the relationship between shear force and bending moment?",
        options: [
          "They are unrelated",
          "The derivative of bending moment equals shear force",
          "The derivative of shear force equals bending moment",
          "They are always equal"
        ],
        correctAnswer: 1,
        explanation: "The shear force is the rate of change (derivative) of the bending moment along the beam. This fundamental relationship helps engineers analyze beam behavior."
      },
      {
        question: "Where does maximum bending moment typically occur?",
        options: [
          "At the supports",
          "Where shear force is maximum",
          "Where shear force is zero",
          "At the free end"
        ],
        correctAnswer: 2,
        explanation: "Maximum bending moment occurs where the shear force crosses zero. This is a critical point for structural design."
      },
      {
        question: "What does a positive bending moment indicate?",
        options: [
          "Compression on top, tension on bottom",
          "Tension on top, compression on bottom",
          "Uniform compression",
          "Uniform tension"
        ],
        correctAnswer: 0,
        explanation: "A positive (sagging) bending moment causes compression in the top fibers and tension in the bottom fibers of the beam."
      }
    ]
  },
  {
    id: "beam-deflection",
    title: "Beam Deflection",
    category: "Structural",
    shortDescription: "How beams deform under load and methods to calculate displacement",
    fullExplanation: "Beam deflection refers to the vertical displacement of a beam from its original position when subjected to loads. The amount of deflection depends on the beam's material properties (Young's modulus), geometry (moment of inertia), loading conditions, and support conditions. Engineers must ensure deflections remain within acceptable limits to prevent structural damage and maintain serviceability.",
    quiz: [
      {
        question: "Which factor does NOT affect beam deflection?",
        options: [
          "Young's modulus",
          "Moment of inertia",
          "Color of the beam",
          "Applied load"
        ],
        correctAnswer: 2,
        explanation: "Beam deflection depends on material stiffness (E), geometry (I), load, and support conditions. The color is purely aesthetic and has no structural significance."
      },
      {
        question: "What is the most common method for calculating beam deflection?",
        options: [
          "Trial and error",
          "Double integration method",
          "Visual estimation",
          "Temperature measurement"
        ],
        correctAnswer: 1,
        explanation: "The double integration method integrates the bending moment equation twice to find the deflection equation. It's the most fundamental analytical approach."
      },
      {
        question: "How does increasing the moment of inertia affect deflection?",
        options: [
          "Increases deflection",
          "No effect",
          "Decreases deflection",
          "Makes deflection unpredictable"
        ],
        correctAnswer: 2,
        explanation: "A larger moment of inertia means the beam is stiffer and resists bending better, resulting in less deflection under the same load."
      }
    ]
  },
  // Geotechnical Engineering
  {
    id: "soil-classification",
    title: "Soil Classification",
    category: "Geotechnical",
    shortDescription: "Systems for categorizing soils based on physical properties",
    fullExplanation: "Soil classification is essential for understanding soil behavior in engineering applications. The Unified Soil Classification System (USCS) and AASHTO system categorize soils based on grain size distribution and plasticity characteristics. This classification helps engineers predict soil behavior, select appropriate foundation types, and design earth structures.",
    quiz: [
      {
        question: "What are the three main soil types?",
        options: [
          "Red, yellow, brown",
          "Gravel, sand, clay",
          "Hard, soft, medium",
          "Wet, dry, moist"
        ],
        correctAnswer: 1,
        explanation: "Soils are classified primarily by particle size: gravel (coarsest), sand, silt, and clay (finest). These form the basis of soil classification systems."
      },
      {
        question: "What test is used to determine plasticity characteristics?",
        options: [
          "Compression test",
          "Atterberg limits test",
          "Color test",
          "Smell test"
        ],
        correctAnswer: 1,
        explanation: "The Atterberg limits test determines the liquid limit, plastic limit, and plasticity index, which are crucial for classifying fine-grained soils."
      },
      {
        question: "Which soil type has the smallest particle size?",
        options: [
          "Gravel",
          "Sand",
          "Silt",
          "Clay"
        ],
        correctAnswer: 3,
        explanation: "Clay particles are the smallest (< 0.002 mm), followed by silt, sand, and gravel. Clay's small size gives it unique cohesive and plastic properties."
      }
    ]
  },
  {
    id: "bearing-capacity",
    title: "Bearing Capacity",
    category: "Geotechnical",
    shortDescription: "The ability of soil to support loads from structures",
    fullExplanation: "Bearing capacity is the maximum pressure that soil can withstand without shear failure. It's crucial for foundation design to ensure structures don't settle excessively or collapse. Factors affecting bearing capacity include soil type, density, moisture content, foundation depth, and shape. Engineers use Terzaghi's bearing capacity theory and other methods to calculate safe bearing pressures.",
    quiz: [
      {
        question: "What is ultimate bearing capacity?",
        options: [
          "The working load on foundation",
          "The maximum pressure before failure",
          "The minimum required pressure",
          "The average soil pressure"
        ],
        correctAnswer: 1,
        explanation: "Ultimate bearing capacity is the maximum pressure the soil can support before shear failure occurs. Allowable bearing capacity is obtained by dividing this by a factor of safety."
      },
      {
        question: "Which factor increases bearing capacity?",
        options: [
          "Increasing foundation depth",
          "Decreasing soil density",
          "Adding moisture",
          "Reducing foundation size"
        ],
        correctAnswer: 0,
        explanation: "Deeper foundations have higher bearing capacity due to increased overburden pressure and confinement. This is why deep foundations are used for weak soils."
      },
      {
        question: "What is the factor of safety typically used in bearing capacity calculations?",
        options: [
          "1.0",
          "1.5 to 3.0",
          "10.0",
          "0.5"
        ],
        correctAnswer: 1,
        explanation: "A factor of safety between 1.5 and 3.0 is typically used to account for uncertainties in soil properties and loading conditions, ensuring safe foundation design."
      }
    ]
  },
  // Transportation Engineering
  {
    id: "traffic-flow-theory",
    title: "Traffic Flow Theory",
    category: "Transportation",
    shortDescription: "Mathematical models of vehicle movement on roadways",
    fullExplanation: "Traffic flow theory studies the movement of vehicles and the interactions between them. Key parameters include flow (vehicles per hour), density (vehicles per mile), and speed. The fundamental relationship Q = K × V (flow = density × speed) helps engineers analyze traffic patterns, design roadways, and optimize signal timing. Understanding traffic flow is essential for reducing congestion and improving safety.",
    quiz: [
      {
        question: "What is the fundamental equation of traffic flow?",
        options: [
          "Q = K + V",
          "Q = K × V",
          "Q = K / V",
          "Q = K - V"
        ],
        correctAnswer: 1,
        explanation: "The fundamental equation Q = K × V relates flow (Q), density (K), and speed (V). This relationship is the cornerstone of traffic flow analysis."
      },
      {
        question: "What happens to speed as density increases?",
        options: [
          "Speed increases",
          "Speed stays constant",
          "Speed decreases",
          "Speed becomes zero immediately"
        ],
        correctAnswer: 2,
        explanation: "As more vehicles occupy the roadway (higher density), drivers must slow down to maintain safe spacing. At jam density, speed reaches zero."
      },
      {
        question: "What is the capacity of a roadway?",
        options: [
          "Maximum flow rate",
          "Minimum flow rate",
          "Average flow rate",
          "Initial flow rate"
        ],
        correctAnswer: 0,
        explanation: "Capacity is the maximum number of vehicles that can pass through a point per unit time under ideal conditions. It occurs at an optimal density-speed balance."
      }
    ]
  },
  // Environmental Engineering
  {
    id: "water-treatment",
    title: "Water Treatment Process",
    category: "Environmental",
    shortDescription: "Steps to purify water for safe human consumption",
    fullExplanation: "Water treatment removes contaminants to produce safe drinking water. The typical process includes: coagulation and flocculation (particles clump together), sedimentation (particles settle), filtration (removes remaining particles), and disinfection (kills microorganisms). Advanced treatments may include reverse osmosis, activated carbon filtration, and UV treatment. This process protects public health by ensuring water meets safety standards.",
    quiz: [
      {
        question: "What is the purpose of coagulation in water treatment?",
        options: [
          "To kill bacteria",
          "To make particles clump together",
          "To add minerals",
          "To heat the water"
        ],
        correctAnswer: 1,
        explanation: "Coagulation uses chemicals like alum to destabilize particles, allowing them to clump together into larger flocs that can be removed more easily."
      },
      {
        question: "Which is the final step in typical water treatment?",
        options: [
          "Coagulation",
          "Filtration",
          "Disinfection",
          "Sedimentation"
        ],
        correctAnswer: 2,
        explanation: "Disinfection is the final step, killing any remaining pathogens using chlorine, UV light, or ozone to ensure the water is safe to drink."
      },
      {
        question: "What chemical is commonly used for disinfection?",
        options: [
          "Salt",
          "Sugar",
          "Chlorine",
          "Vinegar"
        ],
        correctAnswer: 2,
        explanation: "Chlorine is the most common disinfectant in water treatment. It's effective, economical, and provides residual protection in the distribution system."
      }
    ]
  },
  // Surveying
  {
    id: "levelling-contouring",
    title: "Levelling and Contouring",
    category: "Surveying",
    shortDescription: "Techniques to determine elevation differences and map terrain",
    fullExplanation: "Levelling determines the difference in elevation between points on the Earth's surface using instruments like levels and theodolites. Contouring represents three-dimensional terrain on two-dimensional maps using contour lines that connect points of equal elevation. These techniques are fundamental for site planning, earthwork calculations, drainage design, and understanding topography. Contour intervals and characteristics help engineers interpret landscape features.",
    quiz: [
      {
        question: "What do contour lines represent?",
        options: [
          "Property boundaries",
          "Points of equal elevation",
          "Underground utilities",
          "Soil types"
        ],
        correctAnswer: 1,
        explanation: "Contour lines connect points of the same elevation, allowing us to represent 3D terrain on a 2D map. They're fundamental to surveying and site planning."
      },
      {
        question: "What does close spacing of contour lines indicate?",
        options: [
          "Flat terrain",
          "Water body",
          "Steep slope",
          "Depression"
        ],
        correctAnswer: 2,
        explanation: "Closely spaced contour lines mean elevation changes rapidly over a short distance, indicating a steep slope. Widely spaced lines indicate gentle slopes."
      },
      {
        question: "What instrument is used for differential levelling?",
        options: [
          "Compass",
          "Ruler",
          "Dumpy level",
          "Thermometer"
        ],
        correctAnswer: 2,
        explanation: "A dumpy level (or automatic level) provides a horizontal line of sight to measure height differences between points accurately."
      }
    ]
  },
  // Hydraulics & Water Resources
  {
    id: "open-channel-flow",
    title: "Open Channel Flow",
    category: "Hydraulics & Water Resources",
    shortDescription: "Flow of water in channels where the surface is exposed to atmosphere",
    fullExplanation: "Open channel flow occurs when water flows with a free surface exposed to atmospheric pressure, such as in rivers, canals, and drainage systems. Unlike pipe flow, open channel flow is driven by gravity and the water surface can change elevation. Key parameters include flow depth, velocity, discharge, and slope. Understanding open channel flow is essential for designing irrigation systems, urban drainage, and flood control structures.",
    animationUrl: "https://lottie.host/embed/example-water-flow.json",
    quiz: [
      {
        question: "What drives open channel flow?",
        options: [
          "Pressure",
          "Gravity",
          "Wind",
          "Temperature"
        ],
        correctAnswer: 1,
        explanation: "Open channel flow is driven by gravity, with water flowing down a slope from higher to lower elevation under atmospheric pressure."
      },
      {
        question: "What is critical flow?",
        options: [
          "When flow stops",
          "When Froude number equals 1",
          "Maximum possible flow",
          "Minimum possible flow"
        ],
        correctAnswer: 1,
        explanation: "Critical flow occurs when the Froude number equals 1, representing the transition between subcritical and supercritical flow regimes."
      },
      {
        question: "Which formula is used for uniform flow in open channels?",
        options: [
          "Bernoulli's equation",
          "Manning's equation",
          "Darcy's law",
          "Poiseuille's law"
        ],
        correctAnswer: 1,
        explanation: "Manning's equation relates flow velocity to channel roughness, hydraulic radius, and bed slope for uniform flow in open channels."
      }
    ]
  },
  {
    id: "bernoulli-principle",
    title: "Bernoulli's Principle & Energy Line",
    category: "Hydraulics & Water Resources",
    shortDescription: "Conservation of energy in fluid flow along a streamline",
    fullExplanation: "Bernoulli's equation states that for an inviscid, incompressible flow, the sum of pressure energy, kinetic energy, and potential energy remains constant along a streamline. This fundamental principle explains how pressure decreases as velocity increases. The energy line (EL) and hydraulic grade line (HGL) are graphical representations of energy distribution in fluid systems, essential for analyzing pipe networks and hydraulic structures.",
    quiz: [
      {
        question: "What does Bernoulli's equation represent?",
        options: [
          "Conservation of mass",
          "Conservation of energy",
          "Conservation of momentum",
          "Conservation of temperature"
        ],
        correctAnswer: 1,
        explanation: "Bernoulli's equation is a statement of conservation of energy for flowing fluids, showing how pressure, velocity, and elevation energies balance."
      },
      {
        question: "As velocity increases in a pipe, what happens to pressure?",
        options: [
          "Increases",
          "Stays constant",
          "Decreases",
          "Becomes negative"
        ],
        correctAnswer: 2,
        explanation: "According to Bernoulli's principle, when velocity increases, pressure decreases to maintain constant total energy (assuming constant elevation)."
      },
      {
        question: "What does the hydraulic grade line (HGL) represent?",
        options: [
          "Total energy",
          "Pressure head + elevation head",
          "Velocity head only",
          "Pipe elevation"
        ],
        correctAnswer: 1,
        explanation: "The HGL represents the sum of pressure head and elevation head. The energy line is above the HGL by the velocity head amount."
      }
    ]
  },
  {
    id: "pipe-network-design",
    title: "Pipe Network Design",
    category: "Hydraulics & Water Resources",
    shortDescription: "Design and analysis of interconnected pipe systems for water distribution",
    fullExplanation: "Pipe network design involves creating efficient systems to deliver water from sources to consumers. Engineers must consider pipe sizing, pressure requirements, flow velocities, and network layout. Analysis methods like the Hardy-Cross method help solve for flows and pressures in complex networks with multiple loops and branches. Proper design ensures adequate water supply, maintains acceptable pressures, and minimizes energy costs.",
    animationUrl: "https://lottie.host/embed/example-pipe-network.json",
    quiz: [
      {
        question: "What is the purpose of the Hardy-Cross method?",
        options: [
          "To design pipe materials",
          "To analyze flow in looped networks",
          "To measure water quality",
          "To calculate pipe costs"
        ],
        correctAnswer: 1,
        explanation: "The Hardy-Cross method is an iterative technique for analyzing flow distribution and pressure drops in complex looped pipe networks."
      },
      {
        question: "What is head loss in pipe flow?",
        options: [
          "Water evaporation",
          "Energy loss due to friction",
          "Pipe elevation change",
          "Water temperature drop"
        ],
        correctAnswer: 1,
        explanation: "Head loss is the reduction in total energy (head) as water flows through pipes due to friction between the fluid and pipe walls."
      },
      {
        question: "Which equation estimates friction loss in pipes?",
        options: [
          "Bernoulli's equation",
          "Darcy-Weisbach equation",
          "Manning's equation",
          "Continuity equation"
        ],
        correctAnswer: 1,
        explanation: "The Darcy-Weisbach equation (along with Hazen-Williams) is widely used to calculate friction head loss in pipe flow systems."
      }
    ]
  },
  {
    id: "hydraulic-jump",
    title: "Hydraulic Jump",
    category: "Hydraulics & Water Resources",
    shortDescription: "Sudden transition from supercritical to subcritical flow",
    fullExplanation: "A hydraulic jump occurs when high-velocity, shallow flow (supercritical) suddenly transitions to low-velocity, deep flow (subcritical). This phenomenon dissipates significant energy and is characterized by turbulent mixing and a standing wave. Hydraulic jumps are used in stilling basins below spillways and hydraulic structures to safely dissipate energy and prevent downstream erosion. The sequent depth ratio depends on the incoming Froude number.",
    quiz: [
      {
        question: "What characterizes supercritical flow?",
        options: [
          "Froude number < 1",
          "Froude number = 1",
          "Froude number > 1",
          "Froude number = 0"
        ],
        correctAnswer: 2,
        explanation: "Supercritical flow has a Froude number greater than 1, meaning inertial forces dominate over gravitational forces, resulting in high-velocity, shallow flow."
      },
      {
        question: "Where are hydraulic jumps commonly used?",
        options: [
          "Water supply pipes",
          "Stilling basins below dams",
          "Irrigation canals",
          "Swimming pools"
        ],
        correctAnswer: 1,
        explanation: "Hydraulic jumps are intentionally created in stilling basins below dams and spillways to dissipate the high kinetic energy of water safely."
      },
      {
        question: "What happens to flow depth after a hydraulic jump?",
        options: [
          "Decreases",
          "Stays constant",
          "Increases",
          "Becomes zero"
        ],
        correctAnswer: 2,
        explanation: "Flow depth increases significantly after a hydraulic jump as the flow transitions from supercritical (shallow, fast) to subcritical (deep, slow)."
      }
    ]
  },
  {
    id: "dam-spillway-basics",
    title: "Dam and Spillway Basics",
    category: "Hydraulics & Water Resources",
    shortDescription: "Fundamental concepts of dam design and overflow structures",
    fullExplanation: "Dams are barriers constructed across rivers to store water for irrigation, hydropower, or water supply. Spillways are critical safety features that release excess water during floods to prevent dam overtopping and failure. Types include overflow, chute, and side-channel spillways. Design considerations include flood capacity, energy dissipation, and structural stability. Proper spillway design is essential for dam safety and preventing catastrophic failures.",
    animationUrl: "https://lottie.host/embed/example-dam.json",
    quiz: [
      {
        question: "What is the primary purpose of a spillway?",
        options: [
          "To generate electricity",
          "To release excess flood water safely",
          "To store more water",
          "To filter water"
        ],
        correctAnswer: 1,
        explanation: "Spillways are designed to safely discharge excess water during floods, preventing dam overtopping which could lead to catastrophic failure."
      },
      {
        question: "Which type of dam uses concrete or masonry in an arch shape?",
        options: [
          "Earth dam",
          "Rockfill dam",
          "Arch dam",
          "Buttress dam"
        ],
        correctAnswer: 2,
        explanation: "Arch dams use a curved concrete structure that transfers water pressure to the canyon walls, requiring strong rock foundations and narrow valleys."
      },
      {
        question: "What is freeboard in dam design?",
        options: [
          "Distance between water level and dam crest",
          "Dam foundation depth",
          "Spillway width",
          "Dam thickness"
        ],
        correctAnswer: 0,
        explanation: "Freeboard is the vertical distance between the reservoir's maximum water level and the top of the dam, providing a safety margin against overtopping."
      }
    ]
  },
  // Construction Management Advanced
  {
    id: "cost-estimation-boq",
    title: "Cost Estimation & BOQ",
    category: "Construction Mgmt Advanced",
    shortDescription: "Methods to estimate project costs and prepare bills of quantities",
    fullExplanation: "Cost estimation is the process of predicting construction project costs based on design, quantities, and market rates. The Bill of Quantities (BOQ) is a detailed list of materials, labor, and equipment required, with quantities and rates. BOQ preparation requires accurate quantity takeoff from drawings, understanding construction methods, and current market pricing. This document forms the basis for tendering, budgeting, and payment certification.",
    quiz: [
      {
        question: "What does BOQ stand for?",
        options: [
          "Bill of Quality",
          "Bill of Quantities",
          "Book of Questions",
          "Budget of Operations"
        ],
        correctAnswer: 1,
        explanation: "BOQ stands for Bill of Quantities, a comprehensive document listing all work items with quantities and rates for a construction project."
      },
      {
        question: "Which cost type cannot be directly allocated to a specific activity?",
        options: [
          "Direct costs",
          "Material costs",
          "Labor costs",
          "Indirect costs"
        ],
        correctAnswer: 3,
        explanation: "Indirect costs (overhead) like site management, utilities, and insurance cannot be directly allocated to specific work items and are distributed proportionally."
      },
      {
        question: "What is contingency in cost estimation?",
        options: [
          "Profit margin",
          "Allowance for unforeseen expenses",
          "Labor wages",
          "Material wastage"
        ],
        correctAnswer: 1,
        explanation: "Contingency is a percentage added to the estimate to cover unforeseen events, design changes, and uncertainties, typically 5-10% of project cost."
      }
    ]
  },
  {
    id: "safety-management",
    title: "Safety Management in Construction",
    category: "Construction Mgmt Advanced",
    shortDescription: "Principles and practices for maintaining safe construction sites",
    fullExplanation: "Construction safety management involves identifying hazards, assessing risks, and implementing controls to prevent accidents and injuries. Key elements include safety planning, worker training, personal protective equipment (PPE), regular inspections, and incident investigation. Regulations like OSHA (USA) or IS codes (India) mandate safety standards. Effective safety management reduces accidents, improves productivity, and protects both workers and employers from legal and financial consequences.",
    quiz: [
      {
        question: "What does PPE stand for?",
        options: [
          "Personal Protective Equipment",
          "Project Planning Evaluation",
          "Primary Prevention Element",
          "Public Protection Entity"
        ],
        correctAnswer: 0,
        explanation: "PPE stands for Personal Protective Equipment, including helmets, safety boots, gloves, and harnesses that protect workers from workplace hazards."
      },
      {
        question: "What is the hierarchy of hazard control?",
        options: [
          "Detection, response, investigation",
          "Elimination, substitution, engineering controls, administrative controls, PPE",
          "Training, monitoring, enforcement",
          "Planning, execution, review"
        ],
        correctAnswer: 1,
        explanation: "The hierarchy prioritizes eliminating hazards first, followed by substitution, engineering controls, administrative controls, and PPE as the last resort."
      },
      {
        question: "What is a Method Statement in safety planning?",
        options: [
          "Financial accounting method",
          "Document describing how work will be done safely",
          "Quality inspection checklist",
          "Project timeline"
        ],
        correctAnswer: 1,
        explanation: "A Method Statement is a written document detailing the step-by-step procedure for safely executing a specific construction activity."
      }
    ]
  },
  {
    id: "equipment-planning",
    title: "Equipment Planning",
    category: "Construction Mgmt Advanced",
    shortDescription: "Selection and scheduling of construction machinery and equipment",
    fullExplanation: "Equipment planning involves selecting appropriate machinery, determining quantities, and scheduling their use to maximize productivity and minimize costs. Factors include project requirements, site conditions, equipment availability, and operating costs. Key equipment includes excavators, cranes, concrete mixers, and compactors. Proper planning considers equipment capacity, rental vs. purchase decisions, maintenance, and operator availability to ensure smooth project execution.",
    quiz: [
      {
        question: "What factors influence equipment selection?",
        options: [
          "Only initial cost",
          "Work type, site conditions, availability, operating costs",
          "Only equipment color",
          "Only brand name"
        ],
        correctAnswer: 1,
        explanation: "Equipment selection depends on multiple factors including work requirements, site accessibility, equipment capacity, costs, and availability."
      },
      {
        question: "What is equipment productivity?",
        options: [
          "Equipment cost",
          "Output per unit time",
          "Equipment weight",
          "Fuel consumption"
        ],
        correctAnswer: 1,
        explanation: "Equipment productivity measures the output (e.g., cubic meters excavated) per unit time, helping planners estimate durations and costs."
      },
      {
        question: "When is equipment rental more economical than purchase?",
        options: [
          "For long-term, continuous use",
          "For short-term or specialized needs",
          "Never",
          "Always"
        ],
        correctAnswer: 1,
        explanation: "Renting is typically more economical for short-duration work or specialized equipment with limited reuse potential, avoiding high capital investment."
      }
    ]
  },
  {
    id: "contract-tender-procedures",
    title: "Contract and Tender Procedures",
    category: "Construction Mgmt Advanced",
    shortDescription: "Process of bidding and awarding construction contracts",
    fullExplanation: "Tendering is the competitive process where contractors bid for construction projects. The process includes tender notice, document preparation, contractor selection, bid submission, evaluation, and contract award. Types include open tendering (public), selective tendering (pre-qualified), and negotiated contracts. Contract documents define scope, specifications, payment terms, and legal obligations. Understanding tender procedures is essential for both clients and contractors.",
    quiz: [
      {
        question: "What is a tender document?",
        options: [
          "Payment receipt",
          "Set of documents inviting bids for construction work",
          "Building permit",
          "Safety certificate"
        ],
        correctAnswer: 1,
        explanation: "Tender documents include drawings, specifications, BOQ, contract conditions, and instructions to bidders, forming the basis for contractor proposals."
      },
      {
        question: "What is the lowest bid always selected?",
        options: [
          "Yes, always",
          "No, evaluation considers multiple factors",
          "Only for government projects",
          "Only for private projects"
        ],
        correctAnswer: 1,
        explanation: "Bid evaluation considers price, contractor experience, technical capability, schedule, and past performance. The most advantageous bid, not necessarily lowest, wins."
      },
      {
        question: "What is earnest money deposit (EMD)?",
        options: [
          "Final payment",
          "Security deposit submitted with bid",
          "Labor wages",
          "Profit margin"
        ],
        correctAnswer: 1,
        explanation: "EMD is a refundable security deposit (typically 1-2% of bid value) ensuring bidder seriousness. It's forfeited if the winner refuses to sign the contract."
      }
    ]
  },
  // Surveying Advanced
  {
    id: "total-station-basics",
    title: "Total Station Basics",
    category: "Surveying Advanced",
    shortDescription: "Electronic instrument combining angle and distance measurement",
    fullExplanation: "A total station is an electronic theodolite integrated with electronic distance measurement (EDM) for measuring both angles and distances simultaneously. It can calculate coordinates, elevations, and perform complex surveying tasks. Modern total stations have onboard data storage, automated targeting, and can interface with CAD software. They're essential for construction layout, topographic surveys, and precise engineering measurements, offering high accuracy and efficiency.",
    animationUrl: "https://lottie.host/embed/example-surveying.json",
    quiz: [
      {
        question: "What does a total station measure?",
        options: [
          "Only angles",
          "Only distances",
          "Both angles and distances",
          "Only elevation"
        ],
        correctAnswer: 2,
        explanation: "A total station combines electronic theodolite (angle measurement) with EDM (distance measurement) to simultaneously measure horizontal and vertical angles plus slope distance."
      },
      {
        question: "What advantage do total stations have over traditional theodolites?",
        options: [
          "Lighter weight",
          "Lower cost",
          "Electronic data storage and coordinate calculation",
          "No power required"
        ],
        correctAnswer: 2,
        explanation: "Total stations automatically record measurements, calculate coordinates, reduce human error, and interface with computers, greatly improving efficiency and accuracy."
      },
      {
        question: "What is resection in total station surveying?",
        options: [
          "Measuring building heights",
          "Determining instrument position from known points",
          "Creating contour maps",
          "Measuring soil properties"
        ],
        correctAnswer: 1,
        explanation: "Resection determines the total station's unknown position by measuring angles and distances to multiple known control points."
      }
    ]
  },
  {
    id: "gps-remote-sensing",
    title: "GPS & Remote Sensing",
    category: "Surveying Advanced",
    shortDescription: "Satellite-based positioning and earth observation technologies",
    fullExplanation: "GPS (Global Positioning System) uses satellites to determine precise positions on Earth, revolutionizing surveying with accuracy from meters to millimeters (RTK-GPS). Remote sensing captures information about Earth's surface using satellites or aircraft without physical contact. Applications include mapping, land use planning, environmental monitoring, and disaster management. Technologies like GNSS, LiDAR, and multispectral imaging provide engineers with powerful tools for large-scale data collection.",
    quiz: [
      {
        question: "What does GPS stand for?",
        options: [
          "General Positioning System",
          "Global Positioning System",
          "Geographic Plotting Service",
          "Ground Positioning Sensor"
        ],
        correctAnswer: 1,
        explanation: "GPS is the Global Positioning System, a satellite-based navigation system providing location and time information anywhere on Earth."
      },
      {
        question: "What is RTK-GPS?",
        options: [
          "Regular GPS",
          "Real-Time Kinematic GPS for centimeter accuracy",
          "Remote Tracking GPS",
          "Recreational GPS"
        ],
        correctAnswer: 1,
        explanation: "RTK-GPS uses real-time corrections from a base station to achieve centimeter-level accuracy, essential for precise construction and surveying work."
      },
      {
        question: "What is remote sensing primarily used for?",
        options: [
          "Weather forecasting only",
          "Collecting information about Earth without physical contact",
          "Measuring soil strength",
          "Testing concrete"
        ],
        correctAnswer: 1,
        explanation: "Remote sensing uses satellites or aircraft to gather data about Earth's surface through electromagnetic radiation, enabling mapping, monitoring, and analysis without ground access."
      }
    ]
  },
  // Urban Planning & Sustainability
  {
    id: "smart-cities-concept",
    title: "Smart Cities Concept",
    category: "Urban Planning & Sustainability",
    shortDescription: "Integration of technology and data for efficient urban management",
    fullExplanation: "Smart cities use information and communication technology (ICT) to enhance urban services, sustainability, and quality of life. Key components include smart infrastructure (IoT sensors), intelligent transportation systems, energy-efficient buildings, data-driven governance, and citizen engagement platforms. Technologies like big data analytics, AI, and IoT enable real-time monitoring, predictive maintenance, and resource optimization. The goal is creating livable, sustainable, and resilient cities.",
    animationUrl: "https://lottie.host/embed/example-smart-city.json",
    quiz: [
      {
        question: "What is a key characteristic of a smart city?",
        options: [
          "Many tall buildings",
          "Use of ICT and data for efficient urban management",
          "Large population only",
          "Historic monuments"
        ],
        correctAnswer: 1,
        explanation: "Smart cities leverage information and communication technology, IoT sensors, and data analytics to optimize urban services, infrastructure, and sustainability."
      },
      {
        question: "What role does IoT play in smart cities?",
        options: [
          "No role",
          "Connecting devices and sensors for real-time data collection",
          "Only for entertainment",
          "Only for telecommunications"
        ],
        correctAnswer: 1,
        explanation: "IoT (Internet of Things) connects sensors and devices across the city to collect real-time data on traffic, energy use, air quality, and infrastructure for better management."
      },
      {
        question: "Which is NOT typically a smart city component?",
        options: [
          "Intelligent transportation systems",
          "Smart grid energy management",
          "Traditional paper-based governance",
          "Environmental monitoring"
        ],
        correctAnswer: 2,
        explanation: "Smart cities emphasize digital, data-driven governance. Traditional paper-based systems are replaced with e-governance platforms for efficiency and transparency."
      }
    ]
  },
  {
    id: "sustainable-transportation",
    title: "Sustainable Transportation Planning",
    category: "Urban Planning & Sustainability",
    shortDescription: "Designing transport systems that minimize environmental impact",
    fullExplanation: "Sustainable transportation aims to meet mobility needs while reducing environmental impact, promoting equity, and supporting economic development. Strategies include public transit promotion, non-motorized transport (walking, cycling), electric vehicles, transit-oriented development, and congestion management. Planning considers carbon emissions, air quality, land use, accessibility, and social equity. The goal is creating efficient, clean, and inclusive transportation systems for future generations.",
    quiz: [
      {
        question: "What is transit-oriented development (TOD)?",
        options: [
          "Building more highways",
          "Developing compact, mixed-use communities around public transit",
          "Encouraging private car use",
          "Industrial zone planning"
        ],
        correctAnswer: 1,
        explanation: "TOD creates walkable, mixed-use neighborhoods centered around public transit stations, reducing car dependency and promoting sustainable mobility."
      },
      {
        question: "Which mode of transport has the lowest carbon footprint per passenger-km?",
        options: [
          "Private car",
          "Airplane",
          "Public bus/train",
          "Motorcycle"
        ],
        correctAnswer: 2,
        explanation: "Public transportation (buses, trains) has significantly lower carbon emissions per passenger-kilometer compared to private vehicles due to higher occupancy."
      },
      {
        question: "What is the 'last mile' problem in transportation?",
        options: [
          "Final stage of freight delivery",
          "Difficulty connecting homes to public transit",
          "Road maintenance issue",
          "Traffic congestion"
        ],
        correctAnswer: 1,
        explanation: "The 'last mile' refers to the challenge of connecting people's homes to public transit stations. Solutions include bike-sharing, e-rickshaws, and walkable neighborhoods."
      }
    ]
  },
  {
    id: "stormwater-management",
    title: "Stormwater Management",
    category: "Urban Planning & Sustainability",
    shortDescription: "Systems to manage rainfall runoff in urban areas",
    fullExplanation: "Stormwater management controls runoff from rainfall to prevent flooding, reduce pollution, and protect water resources. Traditional approaches use pipes and drains (gray infrastructure). Modern sustainable urban drainage systems (SUDS) or Low Impact Development (LID) include green roofs, permeable pavements, bioswales, and retention ponds that mimic natural hydrology. These solutions reduce runoff volume, improve water quality, and provide co-benefits like urban greening and heat island mitigation.",
    quiz: [
      {
        question: "What is the main goal of stormwater management?",
        options: [
          "Increase water supply",
          "Control runoff to prevent flooding and pollution",
          "Generate electricity",
          "Create swimming pools"
        ],
        correctAnswer: 1,
        explanation: "Stormwater management aims to safely control and treat rainfall runoff, preventing urban flooding, erosion, and water pollution."
      },
      {
        question: "What is a bioswale?",
        options: [
          "Type of pipe",
          "Landscaped channel that filters stormwater",
          "Concrete drain",
          "Pumping station"
        ],
        correctAnswer: 1,
        explanation: "A bioswale is a vegetated, shallow channel designed to slow, filter, and infiltrate stormwater runoff naturally, removing pollutants and reducing peak flows."
      },
      {
        question: "What is permeable pavement?",
        options: [
          "Regular concrete",
          "Paving material that allows water to infiltrate through",
          "Waterproof coating",
          "Metal grating"
        ],
        correctAnswer: 1,
        explanation: "Permeable pavement allows rainwater to pass through the surface into the ground, reducing runoff and recharging groundwater, unlike traditional impervious surfaces."
      }
    ]
  }
];

export const categories = [
  "All",
  "Structural",
  "Geotechnical",
  "Transportation",
  "Environmental",
  "Surveying",
  "Hydraulics & Water Resources",
  "Construction Mgmt Advanced",
  "Surveying Advanced",
  "Urban Planning & Sustainability"
];
