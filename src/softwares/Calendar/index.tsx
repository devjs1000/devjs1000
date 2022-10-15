import { Flex } from "@chakra-ui/react";
import TButton from "../../gui/Button";

const Calendar = ({ date }: Props) => {
  const parseDate = new Date(date);
  const numberOfDaysInMonth = new Date(
    parseDate.getFullYear(),
    parseDate.getMonth() + 1,
    0
  ).getDate();

  const day = new Date(
    parseDate.getFullYear(),
    parseDate.getMonth(),
    1
  ).getDay();

  const days = [
    ...Array(day).fill(""),
    ,
    ...Array.from({ length: numberOfDaysInMonth }, (_, i) => i + 1),
  ];

  const daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <Flex bg={"primary.100"} rounded={10} flexWrap={"wrap"} w={400} gap={2}>
      {daysName.map((day) => (
        <DateButton date={day} />
      ))}
      {days.map((day, i) => {
        return <DateButton date={day} />;
      })}
    </Flex>
  );
};

const DateButton = ({ date }: { date: any }) => {
  const today = new Date().getDate();
  const bg =
    date == ""
      ? "secondary.100"
      : date == today
      ? "secondary.900"
      : typeof date == "string"
      ? "blue.500"
      : "primary.900";
  const color =
    date == today
      ? "white"
      : typeof date == "string"
      ? "white"
      : "secondary.700";
  return (
    <TButton
      others={{
        width: 50,
        bg,
        color,
      }}
      title={date}
    />
  );
};

interface Props {
  date: string;
}

export default Calendar;
