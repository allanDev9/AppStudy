import api from "../../../core/config/api.js";

export const getActivities = async () => {
  try {
    const response = await api.get("activities");
    console.log("Activities fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw error;
  }
};
