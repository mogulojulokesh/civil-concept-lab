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
  }
];

export const categories = [
  "All",
  "Structural",
  "Geotechnical",
  "Transportation",
  "Environmental",
  "Surveying",
  "Construction Mgmt",
  "Hydraulics"
];
