import { useEffect, useState } from "react";
import { ScrollView, Text, View, Alert } from "react-native";
import ShiftItem from "../components/ShiftItem";
import { getShifts, bookShift, cancelShift } from "../api/shifts";
import { groupByDate } from "../utils/groupByDate";



export default function AllShiftsScreen() {
  const [shifts, setShifts] = useState([]);

  const loadShifts = async () => {
    const data = await getShifts();
    setShifts(data);
  };

  useEffect(() => { loadShifts(); }, []);

  const handleBook = async (shiftId) => {
    try {
      const res = await bookShift(shiftId);
      if (res.error) Alert.alert("Error", res.error);
      await loadShifts(); 
    } catch (err) {
      Alert.alert("Error", "Failed to book shift");
    }
  };

  const handleCancel = async (shiftId) => {
    try {
      const res = await cancelShift(shiftId);
      if (res.error) Alert.alert("Error", res.error);
      await loadShifts(); 
    } catch (err) {
      Alert.alert("Error", "Failed to cancel shift");
    }
  };

  const grouped = groupByDate(shifts);

  return (
    <ScrollView style={{  }}>
        <View style={{ marginBottom: 25, backgroundColor:"#d4643bff", borderRadius:16, }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", margin: 40, color:"white" }}>All Shifts</Text>
        </View>
      {Object.keys(grouped).map(date => (
        <View key={date} style={{ marginBottom: 25, padding:15 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>{date}</Text>
          {grouped[date].map(shift => (
            <ShiftItem
              key={shift.id}
              shift={shift}
              onBook={() => handleBook(shift.id)}
              onCancel={() => handleCancel(shift.id)}
            />
          ))}
        </View>
      ))}
    </ScrollView>
  );
}
