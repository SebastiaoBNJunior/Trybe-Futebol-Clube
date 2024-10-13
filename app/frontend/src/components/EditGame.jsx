import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TeamOption from './TeamOption';
import Scoreboard from './Scoreboard';

// Componente funcional para editar um jogo
const EditGame = ({
  homeTeam,
  awayTeam,
  homeTeamGoals,
  awayTeamGoals,
  idMatch,
  updateMatch,
  finishMatch,
  getTeam,
}) => {
  // Estados locais para controlar os gols do time da casa e do time visitante
  const [currentHomeTeamGoals, setHomeTeamGoals] = useState(homeTeamGoals);
  const [currentAwayTeamGoals, setAwayTeamGoals] = useState(awayTeamGoals);

  return (
    <section className="match-settings-section">
      <form className="match-settings-form">
        <div className="match-settings-form-options">
          {/* Componente para selecionar o time da casa */}
          <TeamOption
            testId="insertion_matches__select_home_team"
            teams={ homeTeam }
            homeTeam
            getTeam={ getTeam }
          />
          {/* Componente para controlar os gols do time da casa */}
          <Scoreboard
            testId="insertion_matches__select_quantity_goals_home_team"
            homeTeam
            score={ currentHomeTeamGoals }
            setScore={ setHomeTeamGoals }
            qtyGoal={ homeTeamGoals }
          />
          <div className="match-settings-form-versus">
            <span />
            <span>X</span>
          </div>
          {/* Componente para controlar os gols do time visitante */}
          <Scoreboard
            testId="insertion_matches__select_quantity_goals_away_team"
            homeTeam={ false }
            score={ currentAwayTeamGoals }
            setScore={ setAwayTeamGoals }
            qtyGoal={ awayTeamGoals }
          />
          {/* Componente para selecionar o time visitante */}
          <TeamOption
            testId="insertion_matches__select_away_team"
            teams={ awayTeam }
            homeTeam={ false }
            getTeam={ getTeam }
          />
        </div>
        <div className="match-settings-form-buttons">
          {/* Botão para atualizar os gols do jogo */}
          <button
            data-testid="insertion_matches__edit_match_btn"
            onClick={ () => updateMatch(idMatch, {
              homeTeamGoals: currentHomeTeamGoals,
              awayTeamGoals: currentAwayTeamGoals,
            }) }
            type="button"
          >
            Editar
          </button>
          {/* Botão para finalizar o jogo */}
          <button
            data-testid="insertion_matches__finish_match_btn"
            onClick={ () => finishMatch(idMatch) }
            type="button"
          >
            Finalizar
          </button>
        </div>
      </form>
    </section>
  );
};

// Propriedades esperadas pelo componente EditGame
EditGame.propTypes = {
  homeTeam: PropTypes.any,
  awayTeam: PropTypes.any,
  homeTeamGoals: PropTypes.any,
  awayTeamGoals: PropTypes.any,
  idMatch: PropTypes.any,
  getTeam: PropTypes.any,
  finishMatch: PropTypes.any,
  updateMatch: PropTypes.any,
}.isRequired; // Propriedades são obrigatórias

export default EditGame;
