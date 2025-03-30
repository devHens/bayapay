import sequelize from "./db.js";

export async function fetchVehicleData({
  limit = 10,
  offset = 0,
  sort = "vs.last_updated",
  order = "DESC",
}) {
  try {
    const query = `
      SELECT 
          v.id AS vehicle_id,
          v.type,
          vs.lock_status,
          vs.current_speed,
          vs.battery_level,
          vl.latitude,
          vl.longitude,
          vs.last_updated
      FROM 
          vehicles v
      JOIN 
          vehicle_status vs ON v.id = vs.vehicle_id
      JOIN 
          vehicle_locations vl ON v.id = vl.vehicle_id
      ORDER BY 
          ${sort} ${order}
      LIMIT :limit
      OFFSET :offset;
    `;

    const [results] = await sequelize.query(query, {
      replacements: { limit, offset },
    });

    return results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
