import React from "react";
import { IDestination } from '../types/types';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate

interface DestinationCardProps {
  destination: IDestination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const navigate = useNavigate(); // Получаем функцию navigate

  const handleCardClick = () => {
    navigate(`/destination/${destination.id}`); // Перенаправляем на страницу с деталями
  };

  return (
    <div className="card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <h3>{destination.name}</h3>
      <p>Год: {destination.year}</p>
      <p>{destination.description}</p>
    </div>
  );
};

export default DestinationCard;