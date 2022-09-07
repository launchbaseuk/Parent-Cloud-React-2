import React, {useState, useCallback, useMemo} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Calendar as CalendarUI, CalendarUtils} from 'react-native-calendars';
import calendarTestIDs from '../../utils/calendarTestIDs';

const Calendar = () => {
  const INITIAL_DATE = new Date().toISOString().slice(0, 10);
  const HOURS = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
  ];

  const {width, height} = Dimensions.get('window');

  const [selectedDate, setSelectedDate] = useState(INITIAL_DATE);
  const [currentMonth, setCurrentMonth] = useState(INITIAL_DATE);

  const [selectedHour, setSelectedHour] = useState('');

  const getDate = (count: number) => {
    const date = new Date(INITIAL_DATE);
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };

  const onDayPress = useCallback((day: any) => {
    setSelectedDate(day.dateString);
  }, []);

  const marked = useMemo(() => {
    return {
      [selectedDate]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: '#11535C',
        selectedTextColor: '#FFFAC5',
      },
    };
  }, [selectedDate]);
  return (
    <SafeAreaView style={styles.container}>
      <CalendarUI
        testID={calendarTestIDs.calendars.FIRST}
        enableSwipeMonths
        current={INITIAL_DATE}
        style={styles.calendar}
        onDayPress={onDayPress}
        markedDates={marked}
        // leftArrowImageSource={leftArrowIcon}
        // rightArrowImageSource={rightArrowIcon}
      />
      <View style={[styles.calendarHours, {maxWidth: width}]}>
        {HOURS.map(hour => (
          <TouchableOpacity
            key={hour}
            style={[
              styles.calendarHoursText,
              selectedHour === hour && styles.selectedHourText,
            ]}
            onPress={() => setSelectedHour(hour)}>
            <Text
              style={[
                styles.hoursText,
                selectedHour === hour && styles.selectedText,
              ]}>
              {hour}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  calendarHours: {
    height: '50%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  calendarHoursText: {
    // paddingLeft: 25,
    // paddingRight: 25,
    margin: 20,
    padding: 10,
    paddingRight: 15,
    paddingLeft: 15,
    // width: 20,
  },
  selectedHourText: {
    backgroundColor: '#11535C',

    borderRadius: 50,
  },
  hoursText: {
    fontSize: 16,
  },
  selectedText: {
    color: '#FFFAC5',
  },
  calendar: {
    marginBottom: 10,
    height: '50%',
  },
  switchContainer: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  switchText: {
    margin: 10,
    fontSize: 16,
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16,
  },
  disabledText: {
    color: 'grey',
  },
  defaultText: {
    color: 'purple',
  },
  customCalendar: {
    height: 250,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  customDay: {
    textAlign: 'center',
  },
  customHeader: {
    backgroundColor: '#FCC',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: -4,
    padding: 8,
  },
  customTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  customTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00BBF2',
  },
});

export default Calendar;
