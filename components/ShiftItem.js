import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ShiftItem({ shift, onBook, onCancel }) {
  const now = new Date();
  const shiftStart = new Date(`${shift.date}T${shift.startTime}`);
  const shiftEnd = new Date(`${shift.date}T${shift.endTime}`);

  const isPast = shiftEnd < now;
  const isBooked = shift.booked;
  const isAvailable = !isBooked && !isPast;

  const backgroundColor = isBooked
    ? "#ffe5e5"
    : isAvailable
      ? "#e0f7fa"
      : "#cfcfcf";

  const textColor = isBooked
    ? "#d32f2f"
    : isAvailable
      ? "#00796b"
      : "#616161";

  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text style={[styles.area, { color: textColor }]}>{shift.area}</Text>
      <Text style={[styles.time, { color: textColor }]}>
        {shift.startTime} - {shift.endTime}
      </Text>
      <Text style={[styles.status, { color: textColor }]}>
        {isBooked ? "Booked" : isAvailable ? "Available" : "Unavailable"}
      </Text>

      {(isAvailable || isBooked) && (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: isBooked ? "#d32f2f" : "#00796b" }]}
          onPress={isBooked ? onCancel : onBook}
        >
          <Text style={styles.buttonText}>{isBooked ? "Cancel" : "Book"}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 18,
    borderRadius: 16,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 5,
  },
  area: { fontSize: 16, fontWeight: "bold", marginBottom: 6 },
  time: { fontSize: 14, marginBottom: 6 },
  status: { fontSize: 12, fontStyle: "italic", marginBottom: 10 },
  button: {
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
