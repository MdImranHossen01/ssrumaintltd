const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Read .env.local file to get MONGODB_URI
const envPath = path.join(__dirname, '../.env.local');
let mongodbUri = '';

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const match = envContent.match(/^MONGODB_URI=(.*)$/m);
  if (match && match[1]) {
    mongodbUri = match[1].trim().replace(/['"]/g, '');
  }
}

if (!mongodbUri) {
  throw new Error('MONGODB_URI is not defined in .env.local');
}

console.log('Connecting to MongoDB...');

const GlobalSettingsSchema = new mongoose.Schema(
  {
    brandName: { type: String, required: true },
    contact: {
      email: String,
      phone: String,
      address: String,
    },
    logoUrl: String,
    socialLinks: {
      facebook: String,
      twitter: String,
      instagram: String,
      youtube: String,
      linkedin: String,
      tiktok: String,
      whatsapp: String,
    },
    marqueeText: String,
    metaTitle: String,
    metaDescription: String,
  },
  { timestamps: true, strict: false }
);

const GlobalSettings = mongoose.models.GlobalSettings || mongoose.model('GlobalSettings', GlobalSettingsSchema);

async function seed() {
  try {
    await mongoose.connect(mongodbUri);
    console.log('Connected to Database.');

    const ssrumaSettings = {
      brandName: 'S S RUMA INTERNATIONAL LTD',
      contact: {
        email: 'info@ssrumaintltd.com',
        phone: '+880 1911-170535, +880 1711257673',
        address: '2nd floor, jaman tower, Dhaka-1000, Bangladesh',
      },
      socialLinks: {
        facebook: 'https://facebook.com',
        whatsapp: '+8801911170535',
        linkedin: 'https://linkedin.com',
      },
      marqueeText: 'Welcome to S S RUMA INTERNATIONAL LTD • Building Trust • Creating Opportunities • Delivering Excellence',
      metaTitle: 'S S RUMA INTERNATIONAL LTD - Building Trust. Creating Opportunities. Delivering Excellence.',
      metaDescription: 'Your Trusted Partner in Construction, International Trade, Import & Export, Business Consultancy and Global Solutions.',
    };

    const existing = await GlobalSettings.findOne();
    if (existing) {
      console.log('Updating existing settings...');
      Object.assign(existing, ssrumaSettings);
      await existing.save();
    } else {
      console.log('Creating new settings...');
      await GlobalSettings.create(ssrumaSettings);
    }

    console.log('Database seeded successfully for S S RUMA INTERNATIONAL LTD.');
  } catch (error) {
    console.error('Error seeding settings:', error);
  } finally {
    await mongoose.disconnect();
  }
}

seed();
