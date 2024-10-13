import React from 'react';
import PropTypes from 'prop-types';

// Componente funcional para a opção de seleção de time
const TeamOption = ({ teams, homeTeam, getTeam, testId }) => (
  <label htmlFor={ (homeTeam) ? 'home-team-scoreboard' : 'away-team-scoreboard' }>
    { (homeTeam) ? <p>Time Mandante</p> : <p>Time Visitante</p> }
    <select
      data-testid={ testId }
      onChange={ ({ target: { value } }) => {
        // Determina se o time é mandante ou visitante
        const homeOrAway = (homeTeam) ? 'homeTeam' : 'awayTeam';
        // Chama a função passada como prop para obter informações sobre o time selecionado
        getTeam(value, homeOrAway);
      } }
    >
      {/* Mapeia os times disponíveis e cria opções para cada um */}
      {
        teams.map(({ teamName }, index) => (
          <option key={ index } value={ teamName }>{ teamName }</option>
        ))
      }
    </select>
  </label>
);

// Definição das propriedades esperadas pelo componente TeamOption
TeamOption.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object).isRequired, // Lista de times disponíveis
  homeTeam: PropTypes.bool.isRequired, // Indica se é o time mandante
  getTeam: PropTypes.func.isRequired, // Função para obter informações sobre o time selecionado
  testId: PropTypes.string.isRequired, // ID para teste
};

export default TeamOption;
