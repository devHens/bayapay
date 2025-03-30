import express from "express";
import { fetchVehicleData } from "./repository.js";
import cors from "cors";
import helmet from "helmet";
const PORT = process.env.SERVER_PORT;
const app = express();

//should impplement rate limiting as well
app.use(helmet());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.get("/api/v1/vehicles", async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      sort = "last_updated",
      order = "DESC",
    } = req.query;
    const offset = (page - 1) * limit;

    const validSortFields = [
      "vehicle_id",
      "type",
      "lock_status",
      "current_speed",
      "battery_level",
      "latitude",
      "longitude",
      "last_updated",
    ];

    if (!validSortFields.includes(sort)) {
      return res.status(400).json({ error: "Invalid sort field" });
    }

    if (!["ASC", "DESC"].includes(order.toUpperCase())) {
      return res
        .status(400)
        .json({ error: "Invalid sort order. Use 'ASC' or 'DESC'." });
    }

    const results = await fetchVehicleData({
      limit: parseInt(limit),
      offset,
      sort,
      order: order.toUpperCase(),
    });

    res.json(results);
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.use((req, res) => {
  res
    .status(404)
    .json({ error: `please only use localhost:${PORT}/api/v1/vehicles` });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
