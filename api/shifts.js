const API_URL = "http://192.168.68.104:4000/api/shifts";

export const getShifts = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const bookShift = async (id) => {
  const res = await fetch(`${API_URL}/book/${id}`, { method: "POST" });
  return res.json();
};

export const cancelShift = async (id) => {
  const res = await fetch(`${API_URL}/cancel/${id}`, { method: "POST" });
  return res.json();
};
