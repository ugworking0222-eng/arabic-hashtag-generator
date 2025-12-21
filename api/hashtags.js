// api/hashtags.js
import { MongoClient } from 'mongodb';

let client = null;

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // MongoDB connect
    if (!client) {
      client = new MongoClient(process.env.MONGODB_URI);
      await client.connect();
    }

    const db = client.db('hashtags');
    const hashtags = await db.collection('hashtags')
      .find({})
      .limit(100)
      .toArray();

    return res.status(200).json({
      success: true,
      data: hashtags
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}