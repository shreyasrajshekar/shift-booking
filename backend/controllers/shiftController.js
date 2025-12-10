import { shifts } from "../data/shifts.js";

// helper to check overlap
const hasOverlap = (shiftToBook) => {
  const bookedShifts = shifts.filter(s => s.booked);
  return bookedShifts.some(s => 
    s.date === shiftToBook.date &&
    !(s.endTime <= shiftToBook.startTime || s.startTime >= shiftToBook.endTime)
  );
};

export const getShifts = (req, res) => {
  res.json(shifts);
};

export const bookShift = (req, res) => {
  const { id } = req.params;
  const shift = shifts.find(s => s.id === id);

  if (!shift) return res.status(404).json({ error: "Shift not found" });
  if (shift.booked) return res.status(400).json({ error: "Already booked" });

  // Cannot book past shifts
  const now = new Date();
  const shiftDateTime = new Date(`${shift.date}T${shift.startTime}`);
  if (shiftDateTime < now) return res.status(400).json({ error: "Shift already started" });

  // Check overlapping
  if (hasOverlap(shift)) return res.status(400).json({ error: "Overlapping shift exists" });

  shift.booked = true;
  res.json({ message: "Shift booked", shift });
};

export const cancelShift = (req, res) => {
  const { id } = req.params;
  const shift = shifts.find(s => s.id === id);

  if (!shift) return res.status(404).json({ error: "Shift not found" });
  if (!shift.booked) return res.status(400).json({ error: "Shift not booked" });

  shift.booked = false;
  res.json({ message: "Shift cancelled", shift });
};
