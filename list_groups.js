import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.MAILERLITE_API_KEY;

async function listGroups() {
    const res = await fetch('https://connect.mailerlite.com/api/groups', {
        headers: { 'Authorization': `Bearer ${API_KEY}`, 'Accept': 'application/json' }
    });
    const data = await res.json();
    console.log(JSON.stringify(data.data.map(g => ({ name: g.name, id: g.id })), null, 2));
}

listGroups();
