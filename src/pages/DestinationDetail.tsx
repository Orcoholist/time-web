import React from "react";
import { useParams } from "react-router-dom";
import { directions } from '../data/index';

const DestinationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Получаем id из параметров маршрута
  const destination = directions.find(dest => dest.id.toString() === id); // Находим направление по id

  if (!destination) {
    return <div>Направление не найдено.</div>; // Обработка случая, если направление не найдено
  }

  return (
    <div>
      <h2>{destination.name}</h2>
      <p>Год: {destination.year}</p>
      <p>{destination.description}</p>
    </div>
  );
};

export default DestinationDetail;