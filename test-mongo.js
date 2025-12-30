const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://hashtaguser:SimplePass123@cluster0.otegora.mongodb.net/hashtags?appName=Cluster0";

async function test() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB!");
    
    const db = client.db('hashtags');
    const categories = await db.collection('categories').find({}).toArray();
    
    console.log("Categories found:", categories.length);
    console.log("Data:", categories);
    
  } catch (err) {
    console.log("❌ Error:", err.message);
  } finally {
    await client.close();
  }
}

test();