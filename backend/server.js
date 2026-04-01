const express = require("express");
const app = express();
app.get("/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date() });
});


app.get("/api/activities", (_req, res) => {
    res.json([]);
});

app.listen(3000, () => console.log("VitalSync API on :3000"));


app.get('/api/users', (_req, res) => res.json([]));

app.get('/api/v2/health', (_req, res) => res.json({ status: 'v2 ok' }));


