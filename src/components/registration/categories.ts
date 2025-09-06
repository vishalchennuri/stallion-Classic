// categories.ts
export interface Category {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  keyFacts: string[];
  categories: string[];
  galleryImages: string[];
}

export const competitionCategories: Category[] = [
  {
    id: "mens-physique",
    title: "MENS PHYSIQUE",
    subtitle: "Aesthetics, Proportion, and Stage Presence",
    image: "/images/cat/division/2a.png",
    keyFacts: [
      "Judged on V-taper, Shoulder-to-Waist Ratio",
      "Board Shorts Required - No Bodybuilding Posing Trunks",
      "4 Quarter Turns - No Mandatory Poses",
    ],
    categories: [
      "Men's Physique Up to 170 cm",
      "Men's Physique Up to 173 cm",
      "Men's Physique Up to 176 cm",
      "Men's Physique Up to 179 cm",
      "Men's Physique Up to 182 cm",
      "Men's Physique Up to 185 cm",
      "Men's Physique Up to 188 cm",
      "Men's Physique Over 188 cm",
      "Men's Physique Masters 40+",
    ],
    galleryImages: [
      "/images/cat/mens physics/img3.JPG",
      "/images/cat/mens physics/img1.JPG",
      "/images/cat/mens physics/img2.JPG",
    ],
  },
  {
    id: "classic-physique",
    title: "CLASSIC PHYSIQUE",
    subtitle: "Golden-era Muscle with Modern Precision",
    image: "/images/cat/division/3a.png",
    keyFacts: [
      "Weight Limits Based on Height",
      "Blend of Bodybuilding Mass and Aesthetic Lines",
      "Classic Poses Including Vacuum Pose Required",
    ],
    categories: [
      "Classic Physique Up to 168 cm",
      "Classic Physique Up to 171 cm",
      "Classic Physique Up to 175 cm",
      "Classic Physique Up to 180 cm",
      "Classic Physique Up to 185 cm",
      "Classic Physique Up to 190 cm",
      "Classic Physique Up to 195 cm",
      "Classic Physique Over 195 cm",
      "Classic Physique Masters 40+",
    ],
    galleryImages: [
      "/images/cat/classicphysic/SRP04334 (1).JPG",
      "/images/cat/classicphysic/img1.JPG",
      "/images/cat/classicphysic/classiccatgory.JPG",
    ],
  },
  {
    id: "bodybuilding",
    title: "BODYBUILDING",
    subtitle: "The Ultimate Test Of Size, Symmetry, And Stage Presence",
    image: "/images/cat/division/1a.png",
    keyFacts: [
      "Judged 60% Muscularity, 30% Symmetry, 10% Conditioning",
      "No Weight Limits - Pure Mass Rules",
      "8 Mandatory Poses (Front Lat Spread To Most Muscular)",
    ],
    categories: [
      "Bodybuilding 55 to 60 KG",
      "Bodybuilding 60 to 65 KG",
      "Bodybuilding 65 to 70 KG",
      "Bodybuilding 70 to 75 KG",
      "Bodybuilding 75 to 80 KG",
      "Bodybuilding 80 to 85 KG",
      "Bodybuilding 85 to 90 KG",
      "Bodybuilding 90 to 95 KG",
      "Bodybuilding 95+ KG",
    ],
    galleryImages: [
      "/images/cat/body building/img2.JPG",
      "/images/cat/body building/image1.JPG",
      "/images/cat/body building/bodybuildingcat1.JPG",
    ],
  },
  {
    id: "fitness-model",
    title: "Denim Jeans",
    subtitle: "Commercial Appeal with Athletic Conditioning",
    image: "/images/cat/division/4a.png",
    keyFacts: [
      "Judged on Marketability and Commercial Appeal",
      "Athletic, Lean Physique - Not Extreme Muscularity",
      "Includes Swimwear and Fashion Rounds",
    ],
    categories: [
      "Fitness Model Male Up to 175 cm",
      "Fitness Model Male Up to 180 cm",
      "Fitness Model Male Up to 185 cm",
      "Fitness Model Male Over 185 cm",
      "Fitness Model Female Up to 163 cm",
      "Fitness Model Female Up to 168 cm",
      "Fitness Model Female Up to 173 cm",
      "Fitness Model Female Over 173 cm",
      "Fitness Model Masters 35+",
    ],
    galleryImages: [
      "/images/cat/denim jeans/img1.JPG",
      "/images/cat/denim jeans/img2.JPG",
      "/images/cat/division/4d.png",
    ],
  },
];

// Helper function to get category by ID
export const getCategoryById = (id: string): Category | undefined => {
  return competitionCategories.find(category => category.id === id);
};

// Helper function to get all category names for a division
export const getCategoriesByDivision = (divisionId: string): string[] => {
  const division = getCategoryById(divisionId);
  return division ? division.categories : [];
};