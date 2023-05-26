import { getWeekDays } from "@/utils /get-week-days";
import { CaretLeft, CaretRight } from "phosphor-react";
import { CalendarActions, CalendarBody, CalendarContainer, CalendarDay, CalendarHeader, CalendarTitle } from "./styles";

export function Calendar() {
  const shortWeekDays = getWeekDays({ short: true });
  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          Maio <span>2023</span>
        </CalendarTitle>
        <CalendarActions>
          <button><CaretLeft /></button>
          <button><CaretRight /></button>
        </CalendarActions>
      </CalendarHeader>
      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><CalendarDay>1</CalendarDay></td>
            <td><CalendarDay>1</CalendarDay></td>
            <td><CalendarDay>1</CalendarDay></td>
            <td><CalendarDay>1</CalendarDay></td>
            <td><CalendarDay>1</CalendarDay></td>
            <td><CalendarDay>1</CalendarDay></td>
            <td><CalendarDay>1</CalendarDay></td>
          </tr>
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  );
}