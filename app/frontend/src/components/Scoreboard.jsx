import React from 'react';
import PropTypes from 'prop-types';

// Componente funcional para o placar (scoreboard)
const Scoreboard = ({ homeTeam, score, setScore, qtyGoal, testId }) => (
  <label htmlFor={ (homeTeam) ? 'home-team-scoreboard' : 'away-team-scoreboard' }>
    <p>Gols</p>
    <input
      data-testid={ testId }
      type="number"
      min="0"
      value={ score }
      onChange={ ({ target: { value } }) => {
        // Verifica se o valor digitado é menor que a quantidade de gols
        if (value < qtyGoal) {
          setScore(qtyGoal); // Define o placar como a quantidade de gols
        } else {
          setScore(value); // Define o placar como o valor digitado
        }
      } }
    />
  </label>
);

// Definição das propriedades esperadas pelo componente Scoreboard
Scoreboard.propTypes = {
  homeTeam: PropTypes.bool.isRequired, // Indica se é o placar do time mandante
  score: PropTypes.number, // Placar atual
  setScore: PropTypes.func.isRequired, // Função para atualizar o placar
  qtyGoal: PropTypes.string, // Quantidade de gols
  testId: PropTypes.string.isRequired, // ID do teste
};

// Configurações padrão das propriedades do componente Scoreboard
Scoreboard.defaultProps = {
  score: undefined,
  qtyGoal: undefined,
};

export default Scoreboard;
