import { v4 as uuid } from "uuid";

// helper to create shifts
const createShift = (date, start, end, city) => ({
  id: uuid(),
  date,
  startTime: start,
  endTime: end,
  area: city,
  booked: false,
});

export let shifts = [
  createShift("2025-12-10", "09:00", "11:00", "Helsinki"),
  createShift("2025-12-10", "11:00", "13:00", "Helsinki"),
  createShift("2025-12-10", "12:00", "15:00", "Turku"),
  createShift("2025-12-11", "10:00", "12:00", "Helsinki"),
  createShift("2025-12-11", "13:00", "16:00", "Turku"),
  createShift("2025-12-12", "09:00", "12:00", "Tampere"),
  createShift("2025-12-12", "12:00", "15:00", "Helsinki"),
  createShift("2025-12-13", "10:00", "13:00", "Turku"),
  createShift("2025-12-13", "14:00", "17:00", "Tampere"),
  createShift("2025-12-14", "09:00", "12:00", "Helsinki"),
  createShift("2025-12-14", "13:00", "16:00", "Turku"),
  createShift("2025-12-15", "10:00", "13:00", "Tampere"),
  createShift("2025-12-15", "14:00", "17:00", "Helsinki"),
];
