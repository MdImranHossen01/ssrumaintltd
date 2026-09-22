import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import Product from '../src/models/Product';
import Category from '../src/models/Category';

// Load env vars
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

// Reusable slug generator
const generateSlug = (name: string) => {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const rawProductsData = [
  // 1. Bricks, Sand & Stones
  { categoryName: "Bricks, Sand & Stones", name: "Premium Red Clay Construction Bricks", price: 15, image: "red-clay-bricks.webp", desc: "High-quality red clay bricks fired to perfection for maximum durability in all construction projects. Excellent load-bearing capacity and weather resistance." },
  { categoryName: "Bricks, Sand & Stones", name: "Construction Coarse River Sand (Per CFT)", price: 40, image: "construction-coarse-sand.webp", desc: "Clean and coarse river sand ideal for heavy construction, concrete mixing, and structural laying." },
  
  // 2. Rod, Cement & Steel
  { categoryName: "Rod, Cement & Steel", name: "BSRM 500W TMT Rebar (Per Ton)", price: 92000, image: "500w-tmt-rebar.webp", desc: "Top-grade 500W TMT steel rebar offering superior tensile strength and earthquake resistance for high-rise buildings." },
  { categoryName: "Rod, Cement & Steel", name: "Shah Special Portland Cement (50kg)", price: 550, image: "portland-cement-bag.webp", desc: "Premium quality Portland cement ensuring rapid setting and extreme durability for concrete works." },

  // 3. Sanitary & Bathroom
  { categoryName: "Sanitary & Bathroom", name: "RAK One-Piece Ceramic Commode", price: 12500, image: "ceramic-commode.webp", desc: "Sleek and modern white ceramic one-piece commode with dual flush technology and soft-close seat cover." },
  { categoryName: "Sanitary & Bathroom", name: "Grohe Chrome Basin Mixer Tap", price: 4200, image: "chrome-basin-mixer.webp", desc: "Elegant chrome-finished basin mixer tap providing a smooth water flow and rust-free longevity." },

  // 4. Plumbing Pipes & Fittings
  { categoryName: "Plumbing Pipes & Fittings", name: "RFL UPVC Plumbing Pipe 20ft (1.5 inch)", price: 850, image: "upvc-pipe.webp", desc: "Durable and leak-proof UPVC plumbing pipe designed for long-lasting underground and indoor water supply." },
  { categoryName: "Plumbing Pipes & Fittings", name: "CPVC 90-Degree Elbow Fitting", price: 45, image: "cpvc-elbow-fitting.webp", desc: "High-temperature resistant CPVC elbow fitting for secure and tight plumbing pipe connections." },

  // 5. Water Supply & Valves
  { categoryName: "Water Supply & Valves", name: "Heavy Duty Brass Gate Valve 2 inch", price: 1800, image: "brass-gate-valve.webp", desc: "Industrial-grade solid brass gate valve ensuring a tight seal and smooth operation for high-pressure water lines." },
  { categoryName: "Water Supply & Valves", name: "Pedrollo 1HP Domestic Water Pump", price: 8500, image: "1hp-water-pump.webp", desc: "Efficient and quiet 1HP domestic water motor pump capable of high suction lift and steady water delivery." },

  // 6. Electrical Wire & Cable
  { categoryName: "Electrical Wire & Cable", name: "BRB 1.5rm House Wiring Copper Cable (Coil)", price: 2900, image: "house-wiring-cable.webp", desc: "Pure copper PVC insulated 1.5rm cable coil for safe and reliable indoor electrical house wiring." },
  { categoryName: "Electrical Wire & Cable", name: "D-Link CAT6 Ethernet LAN Cable Box (305m)", price: 11000, image: "cat6-lan-cable.webp", desc: "High-speed CAT6 ethernet networking cable roll for stable internet connections and CCTV networks." },

  // 7. Switch, Socket & Accessories
  { categoryName: "Switch, Socket & Accessories", name: "Super Star 3-Pin Universal Wall Socket", price: 220, image: "3-pin-universal-socket.webp", desc: "Modern and fire-resistant white 3-pin universal electrical wall socket suitable for all plug types." },
  { categoryName: "Switch, Socket & Accessories", name: "Energypac 1-Gang Modular Piano Switch", price: 150, image: "1-gang-modular-switch.webp", desc: "Sleek and durable 1-gang modular piano switch with a smooth clicking mechanism." },

  // 8. LED Lighting
  { categoryName: "LED Lighting", name: "Philips 18W Bright White LED Bulb", price: 380, image: "18w-led-bulb.webp", desc: "Energy-saving 18W bright white LED bulb with a long lifespan and flicker-free illumination." },
  { categoryName: "LED Lighting", name: "Walton 12W Square LED Panel Light", price: 650, image: "12w-led-panel-light.webp", desc: "Slim and stylish 12W square LED ceiling panel light for even and bright room lighting." },

  // 9. Electrical Protection & DB
  { categoryName: "Electrical Protection & DB", name: "ABB 6-Way Electrical Distribution Board Box", price: 1400, image: "6-way-db-box.webp", desc: "Premium 6-way electrical DB box with a transparent protective door for safe circuit breaker housing." },
  { categoryName: "Electrical Protection & DB", name: "Schneider 20A MCB Miniature Circuit Breaker", price: 450, image: "20a-mcb-breaker.webp", desc: "Highly reliable single-pole 20A MCB for protecting your home appliances from short circuits." },

  // 10. Fan & Ventilation
  { categoryName: "Fan & Ventilation", name: "Vision 56-inch Metallic Ceiling Fan", price: 3200, image: "56-inch-ceiling-fan.webp", desc: "High-speed aerodynamic 56-inch metallic ceiling fan delivering massive airflow with low noise." },
  { categoryName: "Fan & Ventilation", name: "KDK 12-inch Industrial Exhaust Fan", price: 4500, image: "12-inch-exhaust-fan.webp", desc: "Heavy-duty 12-inch metal exhaust fan perfect for kitchens and industrial ventilation." },

  // 11. Electrical Installation Materials
  { categoryName: "Electrical Installation Materials", name: "1-inch PVC Flexible Corrugated Conduit Roll", price: 800, image: "pvc-flexible-conduit.webp", desc: "Durable and flexible corrugated white PVC pipe for safe electrical wire routing." },
  { categoryName: "Electrical Installation Materials", name: "Heavy Duty Nylon Cable Tie Pack (100pcs)", price: 120, image: "cable-tie-pack.webp", desc: "Strong and heat-resistant black nylon cable ties for organizing cables and securing pipes." },

  // 12. Earthing & Lightning Protection
  { categoryName: "Earthing & Lightning Protection", name: "Solid Copper Earthing Rod Spike (4ft)", price: 3500, image: "copper-earthing-rod.webp", desc: "Pure solid copper earthing rod providing excellent conductivity for building safety." },
  { categoryName: "Earthing & Lightning Protection", name: "Multi-Point Copper Lightning Arrester", price: 4200, image: "lightning-arrester-spike.webp", desc: "High-grade multi-point copper lightning arrester rod to protect structures from lightning strikes." },

  // 13. CCTV & Security
  { categoryName: "CCTV & Security", name: "Hikvision 2MP Indoor Dome CCTV Camera", price: 2100, image: "2mp-dome-cctv.webp", desc: "Sleek 2MP indoor dome security camera featuring night vision and crystal-clear 1080p recording." },
  { categoryName: "CCTV & Security", name: "Dahua 8-Channel Network Video Recorder (NVR)", price: 6500, image: "8-channel-nvr.webp", desc: "Modern 8-Channel NVR box for seamless CCTV recording, playback, and remote mobile viewing." },

  // 14. Fire & Safety
  { categoryName: "Fire & Safety", name: "FireTect 5kg ABC Dry Powder Fire Extinguisher", price: 2800, image: "5kg-abc-fire-extinguisher.webp", desc: "Essential 5kg ABC dry powder fire extinguisher cylinder for homes, offices, and factories." },
  { categoryName: "Fire & Safety", name: "Honeywell Ceiling Optical Smoke Detector", price: 1600, image: "optical-smoke-detector.webp", desc: "Highly sensitive optical smoke detector alarm for early fire warning and maximum safety." },

  // 15. Electrical Tools & Instruments
  { categoryName: "Electrical Tools & Instruments", name: "Fluke Digital Multimeter with Probes", price: 4500, image: "digital-multimeter.webp", desc: "Professional-grade digital multimeter for accurate voltage, current, and resistance testing." },
  { categoryName: "Electrical Tools & Instruments", name: "Stanley Heavy Duty Wire Stripper Plier", price: 850, image: "wire-stripper-plier.webp", desc: "Ergonomic wire stripper and cutter plier with insulated rubber grips for electricians." },

  // 16. Tiles & Flooring
  { categoryName: "Tiles & Flooring", name: "Akij 24x24 Glossy White Marble Floor Tile", price: 135, image: "24x24-marble-floor-tile.webp", desc: "Elegant 24x24 inch glossy white ceramic floor tile with premium grey marble veins." },
  { categoryName: "Tiles & Flooring", name: "Premium Wooden Texture PVC Flooring Plank", price: 85, image: "wooden-pvc-flooring.webp", desc: "Waterproof and scratch-resistant PVC flooring plank featuring a realistic natural wood finish." },

  // 17. Paint & Construction Chemicals
  { categoryName: "Paint & Construction Chemicals", name: "Berger 20L EasyClean Interior Emulsion Paint", price: 6500, image: "20l-interior-emulsion-paint.webp", desc: "Washable and stain-resistant 20-liter interior emulsion paint leaving a smooth and rich finish." },
  { categoryName: "Paint & Construction Chemicals", name: "Dr. Fixit 5L Liquid Waterproofing Chemical", price: 2100, image: "waterproofing-chemical.webp", desc: "Advanced liquid waterproofing chemical for roofs and concrete, preventing cracks and dampness." },

  // 18. Doors, Windows & Hardware
  { categoryName: "Doors, Windows & Hardware", name: "Hatil Solid Mahogany Wooden Interior Door", price: 18500, image: "solid-wood-door.webp", desc: "Beautifully carved solid mahogany wooden door panel providing luxury and extreme durability." },
  { categoryName: "Doors, Windows & Hardware", name: "Yale Stainless Steel Mortise Door Lock", price: 3200, image: "ss-mortise-lock.webp", desc: "Premium stainless steel mortise door lock offering maximum security and smooth lever action." },

  // 19. AC, HVAC & Ventilation
  { categoryName: "AC, HVAC & Ventilation", name: "General 1.5 Ton Inverter Split Air Conditioner", price: 82000, image: "1-5-ton-inverter-ac.webp", desc: "Energy-efficient 1.5 Ton inverter split AC ensuring powerful cooling and reduced electricity bills." },
  { categoryName: "AC, HVAC & Ventilation", name: "Gree Compact Window AC Unit (1 Ton)", price: 42000, image: "window-ac-unit.webp", desc: "Compact and powerful 1 Ton window air conditioner perfect for small bedrooms and offices." },

  // 20. Hardware & Power Tools
  { categoryName: "Hardware & Power Tools", name: "DeWalt 20V Cordless Power Drill Machine", price: 14500, image: "20v-cordless-drill.webp", desc: "Rugged 20V cordless power drill machine featuring variable speed and long-lasting battery life." },
  { categoryName: "Hardware & Power Tools", name: "Bosch 4-inch Electric Angle Grinder", price: 4800, image: "angle-grinder-machine.webp", desc: "Heavy-duty 4-inch electric angle grinder machine ideal for cutting metal and polishing stones." },

  // 21. Construction Machinery & Equipment
  { categoryName: "Construction Machinery & Equipment", name: "Heavy Duty Pneumatic Tire Wheelbarrow", price: 5500, image: "heavy-duty-wheelbarrow.webp", desc: "Sturdy construction wheelbarrow with a deep steel tray and pneumatic tire for easy material transport." },
  { categoryName: "Construction Machinery & Equipment", name: "200L Portable Electric Concrete Mixer", price: 35000, image: "portable-concrete-mixer.webp", desc: "High-efficiency portable electric concrete mixer machine for fast and uniform cement mixing." }
];


const seedProducts = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in .env.local');
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clean existing products for a fresh seed (Optional, but safe for a seed script)
    await Product.deleteMany({});
    console.log('🗑️ Cleared existing products');

    let count = 0;
    
    for (let i = 0; i < rawProductsData.length; i++) {
      const rawProd = rawProductsData[i];
      
      // Find the corresponding category
      const category = await Category.findOne({ name: rawProd.categoryName, parentCategory: null });
      
      if (!category) {
        console.warn(`⚠️ Warning: Category '${rawProd.categoryName}' not found. Skipping product '${rawProd.name}'.`);
        continue;
      }

      // Determine statuses based on index
      // 0-9: Flash Sale
      // 10-19: Featured
      // 20-29: New Arrival
      // 30-39: Discounted
      
      const isFlashSale = i < 10;
      const isFeatured = i >= 10 && i < 20;
      const isNewArrival = i >= 20 && i < 30;
      const isDiscounted = i >= 30 && i < 40;
      
      let finalPrice = rawProd.price;
      let finalSalePrice = undefined;
      let finalDiscountRate = undefined;
      
      if (isDiscounted) {
        // e.g. 20% discount
        finalDiscountRate = 20;
        finalSalePrice = Math.round(finalPrice * 0.8);
      } else if (isFlashSale) {
        // e.g. 15% discount for flash sale
        finalDiscountRate = 15;
        finalSalePrice = Math.round(finalPrice * 0.85);
      }

      const newProduct = new Product({
        name: rawProd.name,
        slug: generateSlug(rawProd.name),
        description: rawProd.desc,
        price: finalPrice,
        salePrice: finalSalePrice,
        discountRate: finalDiscountRate,
        sku: `SKU-${1000 + i}`,
        stock: 100, // standard stock
        categories: [category._id],
        images: [`/assets/images/products/${rawProd.image}`],
        isFeatured,
        isNewArrival,
        isFlashSale,
        isPublished: true,
      });

      await newProduct.save();
      count++;
    }

    console.log(`🎉 Seeded ${count} products successfully!`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding products:', error);
    process.exit(1);
  }
};

seedProducts();
