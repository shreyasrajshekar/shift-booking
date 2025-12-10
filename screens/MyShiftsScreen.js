import { useEffect, useState } from "react";
import { ScrollView, Text, View, Alert } from "react-native";
import ShiftItem from "../components/ShiftItem";
import { getShifts, cancelShift } from "../api/shifts";
import { groupByDate } from "../utils/groupByDate";

export default function MyShiftsScreen() {
  const [shifts, setShifts] = useState([]);

  const loadShifts = async () => {
    const data = await getShifts();
    setShifts(data.filter(s => s.booked));
  };

  useEffect(() => { loadShifts(); }, []);

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
    <ScrollView>
         <View style={{ marginBottom: 25, backgroundColor:"#d4643bff", borderRadius:16, }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", margin: 40, color:"white" }}>My Shifts</Text>
        </View>
      {Object.keys(grouped).map(date => (
        <View key={date} style={{ margin: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>{date}</Text>
          {grouped[date].map(shift => (
            <ShiftItem
              key={shift.id}
              shift={shift}
              onCancel={() => handleCancel(shift.id)}
              onBook={() => {}}
            />
          ))}
        </View>
      ))}
    </ScrollView>
  );
}
