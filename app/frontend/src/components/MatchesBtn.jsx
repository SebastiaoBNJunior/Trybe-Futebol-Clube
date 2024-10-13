import React from 'react';
import { Link } from 'react-router-dom';

// Componente funcional para o botão de "Partidas" no cabeçalho
const MatchesBtn = () => (
  <Link data-testid="header__show_matches_btn" to="/matches">
    Partidas
  </Link>
);

export default MatchesBtn;
