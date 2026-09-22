import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import Category from '../src/models/Category';

// Load env vars
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const categoriesData = [
  {
    name: "Bricks, Sand & Stones",
    image: "/assets/images/cagetory/bricks-sand-stones.webp",
    subcategories: ["Bricks", "Sylhet Sand", "Coarse Sand", "Fine Sand", "Stones", "Stone Chips", "Brick Chips"]
  },
  {
    name: "Rod, Cement & Steel",
    image: "/assets/images/cagetory/rod-cement-steel.webp",
    subcategories: ["MS Rod / Rebar", "Cement", "MS Angle", "Channel", "Flat Bar", "GI Sheet", "Steel Pipe", "Threaded Pipe", "GI Fittings"]
  },
  {
    name: "Sanitary & Bathroom",
    image: "/assets/images/cagetory/sanitary-bathroom.webp",
    subcategories: ["Commode / WC", "Pan", "Basin", "Urinal", "Bathtub", "Kitchen Sink", "Basin Mixer", "Pillar Cock", "Bib Cock", "Angle Cock", "Shower", "Hand Shower", "Health Faucet", "Floor Drain", "Floor Trap", "Flush Valve"]
  },
  {
    name: "Plumbing Pipes & Fittings",
    image: "/assets/images/cagetory/plumbing-pipes-fittings.webp",
    subcategories: ["PVC Pipe", "UPVC Pipe", "CPVC Pipe", "PPR Pipe", "HDPE Pipe", "GI Pipe", "Elbow", "Tee", "Socket", "Coupler", "Reducer", "Bush", "Nipple", "Union", "Flange", "Valve"]
  },
  {
    name: "Water Supply & Valves",
    image: "/assets/images/cagetory/water-supply-valves.webp",
    subcategories: ["Ball Valve", "Gate Valve", "Globe Valve", "Check Valve / NRV", "Foot Valve", "Butterfly Valve", "Float Valve", "Pressure Reducing Valve", "Water Tank", "Water Pump"]
  },
  {
    name: "Electrical Wire & Cable",
    image: "/assets/images/cagetory/electrical-wire-cable.webp",
    subcategories: ["House Wiring Cable", "Single Core Wire", "Multi Core Cable", "Flexible Cable", "Power Cable", "Armoured Cable", "LAN Cable", "CCTV Cable", "Telephone Cable", "Earth Cable"]
  },
  {
    name: "Switch, Socket & Accessories",
    image: "/assets/images/cagetory/switch-socket-accessories.webp",
    subcategories: ["Modular Switch", "Socket", "Universal Socket", "2-Pin / 3-Pin Socket", "USB Socket", "Fan Regulator", "Dimmer", "TV Socket", "Telephone Socket", "Data/LAN Socket"]
  },
  {
    name: "LED Lighting",
    image: "/assets/images/cagetory/led-lighting.webp",
    subcategories: ["LED Bulb", "LED Tube Light", "LED Panel", "Down Light", "Spot Light", "Flood Light", "Street Light", "Emergency Light", "Ceiling Light", "Wall Light", "Garden Light", "Decorative Light"]
  },
  {
    name: "Electrical Protection & DB",
    image: "/assets/images/cagetory/electrical-protection-db.webp",
    subcategories: ["DB Box", "MCB", "MCCB", "RCCB", "RCBO", "ELCB", "Isolator", "Changeover Switch", "Contactor", "Relay", "SPD", "Fuse", "Busbar"]
  },
  {
    name: "Fan & Ventilation",
    image: "/assets/images/cagetory/fan-ventilation.webp",
    subcategories: ["Ceiling Fan", "Exhaust Fan", "Wall Fan", "Industrial Fan", "Ventilation Fan", "Fan Regulator", "Fan Capacitor"]
  },
  {
    name: "Electrical Installation Materials",
    image: "/assets/images/cagetory/electrical-installation-materials.webp",
    subcategories: ["PVC Conduit", "Flexible Conduit", "GI Conduit", "Cable Tray", "Cable Trunking", "Junction Box", "Switch Box", "Cable Gland", "Cable Lug", "Cable Tie", "Connector", "Insulation Tape"]
  },
  {
    name: "Earthing & Lightning Protection",
    image: "/assets/images/cagetory/earthing-lightning-protection.webp",
    subcategories: ["Earthing Rod", "Copper Rod", "GI Earthing Pipe", "Earth Cable", "Earth Clamp", "Earth Bar", "Earthing Compound", "Lightning Arrester", "Lightning Protection Rod"]
  },
  {
    name: "CCTV & Security",
    image: "/assets/images/cagetory/cctv-security.webp",
    subcategories: ["CCTV Camera", "DVR", "NVR", "CCTV Power Supply", "Video Door Phone", "Door Bell", "Intercom", "Access Control", "Biometric Device"]
  },
  {
    name: "Fire & Safety",
    image: "/assets/images/cagetory/fire-safety.webp",
    subcategories: ["Smoke Detector", "Heat Detector", "Fire Alarm", "Fire Alarm Panel", "Emergency Exit Light", "Fire Extinguisher", "Safety Equipment"]
  },
  {
    name: "Electrical Tools & Instruments",
    image: "/assets/images/cagetory/electrical-tools-instruments.webp",
    subcategories: ["Digital Multimeter", "Clamp Meter", "Voltage Tester", "Insulation Tester", "Wire Stripper", "Cable Cutter", "Crimping Tool", "Screwdriver Set", "Plier", "Test Pen"]
  },
  {
    name: "Tiles & Flooring",
    image: "/assets/images/cagetory/tiles-flooring.webp",
    subcategories: []
  },
  {
    name: "Paint & Construction Chemicals",
    image: "/assets/images/cagetory/paint-construction-chemicals.webp",
    subcategories: []
  },
  {
    name: "Doors, Windows & Hardware",
    image: "/assets/images/cagetory/doors-windows-hardware.webp",
    subcategories: []
  },
  {
    name: "AC, HVAC & Ventilation",
    image: "/assets/images/cagetory/ac-hvac-ventilation.webp",
    subcategories: []
  },
  {
    name: "Hardware & Power Tools",
    image: "/assets/images/cagetory/hardware-power-tools.webp",
    subcategories: []
  },
  {
    name: "Construction Machinery & Equipment",
    image: "/assets/images/cagetory/construction-machinery-equipment.webp",
    subcategories: []
  }
];

// Reusable slug generator
const generateSlug = (name: string, parentSlug?: string) => {
  const baseSlug = name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
    
  return parentSlug ? `${parentSlug}-${baseSlug}` : baseSlug;
};

const seedCategories = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in .env.local');
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    for (const cat of categoriesData) {
      // Upsert Main Category
      const mainSlug = generateSlug(cat.name);
      const mainCat = await Category.findOneAndUpdate(
        { name: cat.name },
        { 
          name: cat.name,
          image: cat.image,
          slug: mainSlug,
          parentCategory: null,
          isActive: true
        },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );

      console.log(`📌 Upserted Main Category: ${mainCat.name}`);

      // Upsert Subcategories
      if (cat.subcategories && cat.subcategories.length > 0) {
        for (const subCatName of cat.subcategories) {
          const subSlug = generateSlug(subCatName, mainSlug);
          await Category.findOneAndUpdate(
            { name: subCatName, parentCategory: mainCat._id },
            { 
              name: subCatName,
              slug: subSlug,
              parentCategory: mainCat._id,
              isActive: true
            },
            { upsert: true, new: true, setDefaultsOnInsert: true }
          );
        }
        console.log(`   └─ Added ${cat.subcategories.length} subcategories for ${mainCat.name}`);
      }
    }

    console.log('🎉 Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding categories:', error);
    process.exit(1);
  }
};

seedCategories();
