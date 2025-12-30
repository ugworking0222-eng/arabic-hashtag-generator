const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const uri = "mongodb+srv://hashtaguser:SimplePass123@cluster0.otegora.mongodb.net/hashtags?appName=Cluster0";

async function importData() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB!");
    
    const db = client.db('hashtags');
    
    // Import Categories
    console.log("\n📂 Importing categories...");
    const categoriesPath = path.join(__dirname, 'database', 'seeds', 'categories');
    const categoryFiles = fs.readdirSync(categoriesPath);
    
    let totalCategories = 0;
    
    for (const file of categoryFiles) {
      if (file.endsWith('.json')) {
        const filePath = path.join(categoriesPath, file);
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        
        // Insert data
        if (Array.isArray(data)) {
          await db.collection('categories').insertMany(data);
          totalCategories += data.length;
          console.log(`  ✅ ${file}: ${data.length} items`);
        } else {
          await db.collection('categories').insertOne(data);
          totalCategories += 1;
          console.log(`  ✅ ${file}: 1 item`);
        }
      }
    }
    
    console.log(`\n✅ Total categories imported: ${totalCategories}`);
    
    // Import Countries
    console.log("\n📂 Importing countries...");
    const countriesPath = path.join(__dirname, 'database', 'seeds', 'countries');
    
    if (fs.existsSync(countriesPath)) {
      const countryFiles = fs.readdirSync(countriesPath);
      let totalCountries = 0;
      
      for (const file of countryFiles) {
        if (file.endsWith('.json')) {
          const filePath = path.join(countriesPath, file);
          const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          
          if (Array.isArray(data)) {
            await db.collection('countries').insertMany(data);
            totalCountries += data.length;
            console.log(`  ✅ ${file}: ${data.length} items`);
          } else {
            await db.collection('countries').insertOne(data);
            totalCountries += 1;
            console.log(`  ✅ ${file}: 1 item`);
          }
        }
      }
      
      console.log(`\n✅ Total countries imported: ${totalCountries}`);
    }
    // Import Trending
console.log("\n📂 Importing trending hashtags...");
const trendingPath = path.join(__dirname, 'database', 'seeds', 'trending');

if (fs.existsSync(trendingPath)) {
  const trendingFiles = fs.readdirSync(trendingPath);
  let totalTrending = 0;
  
  for (const file of trendingFiles) {
    if (file.endsWith('.json')) {
      const filePath = path.join(trendingPath, file);
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      if (Array.isArray(data)) {
        await db.collection('trending').insertMany(data);
        totalTrending += data.length;
        console.log(`  ✅ ${file}: ${data.length} items`);
      } else {
        await db.collection('trending').insertOne(data);
        totalTrending += 1;
        console.log(`  ✅ ${file}: 1 item`);
      }
    }
  }
  
  console.log(`\n✅ Total trending imported: ${totalTrending}`);
}

    console.log("\n🎉 Data import completed!");
    
  } catch (err) {
    console.log("❌ Error:", err.message);
  } finally {
    await client.close();
  }
}

importData();