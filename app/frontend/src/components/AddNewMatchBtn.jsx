import React from 'react';
import { Link } from 'react-router-dom';

// Componente funcional para o botão de adicionar nova partida
const AddNewMatchBtn = () => (
  <div>
    {/* Link para a página de configurações de novas partidas */}
    <Link
      className="add-new-game-button"
      data-testid="header__add_match_btn"
      to="/matches/settings"
    >
      + Adicionar nova partida
    </Link>
  </div>
);

export default AddNewMatchBtn;
