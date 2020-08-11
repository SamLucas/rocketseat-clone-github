import React from "react";
import Heatmap from "react-calendar-heatmap";
import { subYears, isBefore, isSameDay, addDays } from "date-fns";

import { Container } from "./styles";

type HeatmapValue = { date: Date; count: number };

const generateHeatMapsValues = (startDate: Date, endDate: Date) => {
  const values: HeatmapValue[] = [];
  let currentDate = startDate;

  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    const count = Math.random() * 4;
    values.push({ date: currentDate, count: Math.round(count) });
    currentDate = addDays(currentDate, 1);
  }
  return values;
};

const RandowCalendar: React.FC = () => {
  const endDate = new Date();
  const startDate = subYears(new Date(), 1);

  return (
    <Container>
      <div className="wrapper">
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={generateHeatMapsValues(startDate, endDate)}
          gutterSize={3.5}
          classForValue={(item: HeatmapValue) => {
            let clampledCount = 0;
            if (item !== null) {
              const { count } = item;
              clampledCount = Math.max(count, 0);
              clampledCount = Math.min(count, 4);
            }
            return `scale-${clampledCount}`;
          }}
          showWeekdayLabels={true}
        />
      </div>

      <span>Random Calendar (do not represent actual data)</span>
    </Container>
  );
};

export default RandowCalendar;
