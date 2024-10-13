import React from 'react';
import { Link } from 'react-router-dom';

// Componente funcional para o botão de classificação no cabeçalho
const LeaderboardBtn = () => (
  <Link data-testid="header__show_classification_btn" to="/leaderboard">
    Classificação
  </Link>
);

export default LeaderboardBtn;
