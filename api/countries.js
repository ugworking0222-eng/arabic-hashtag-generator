// api/countries.js
import { MongoClient } from 'mongodb';

let client = null;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  try {
    if (!client) {
      client = new MongoClient(process.env.MONGODB_URI);
      await client.connect();
    }

    const db = client.db('hashtags');
    const countries = await db.collection('countries')
      .find({})
      .toArray();

    return res.status(200).json({
      success: true,
      data: countries
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}