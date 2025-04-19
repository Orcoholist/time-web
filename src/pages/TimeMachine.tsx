import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TimeMachine: React.FC = () => {
  const [year, setYear] = useState<number>(2025);
  const [destination, setDestination] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);

  const handleTravel = () => {
    alert(`Отправляемся в ${year} год! Пункт назначения: ${destination}`);
  };

  return (
    <div className="time-machine">
      <h2>Машина времени</h2>
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(parseInt(e.target.value))}
        placeholder="Введите год"
      />
        <DatePicker
        id="datePicker"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Выберите дату"
      />
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Введите место назначения"
      />
      <button onClick={handleTravel}>Отправиться в путешествие</button>
    </div>
  );
};

export default TimeMachine;
