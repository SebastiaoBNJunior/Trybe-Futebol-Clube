import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TeamOption from './TeamOption';
import Scoreboard from './Scoreboard';

// Componente funcional para criar uma nova partida
const CreateNewGame = ({
  teams,
  setTeams,
  getTeam,
  homeTeamScoreboard,
  setHomeTeamScoreboard,
  awayTeamScoreboard,
  setAwayTeamScoreboard,
  createMatch,
  finishMatch,
}) => {
  // Constantes para representar os estados da criação da partida
  const notCreated = 'not-created';
  const [inProgress, setInProgress] = useState(notCreated);
  const [createdMatch, setCreatedMatch] = useState(notCreated);

  return (
    <section className="match-settings-section">
      <form className="match-settings-form">
        <div className="match-settings-form-options">
          {/* Componente para selecionar o time da casa */}
          <TeamOption
            testId="insertion_matches__select_home_team"
            teams={ teams }
            setTeams={ setTeams }
            homeTeam
            getTeam={ getTeam }
          />
          {/* Componente para controlar os gols do time da casa */}
          <Scoreboard
            testId="insertion_matches__select_quantity_goals_home_team"
            homeTeam
            score={ homeTeamScoreboard }
            setScore={ setHomeTeamScoreboard }
          />
          <div className="match-settings-form-versus">
            <span />
            <span>X</span>
          </div>
          {/* Componente para controlar os gols do time visitante */}
          <Scoreboard
            testId="insertion_matches__select_quantity_goals_away_team"
            homeTeam={ false }
            score={ awayTeamScoreboard }
            setScore={ setAwayTeamScoreboard }
          />
          {/* Componente para selecionar o time visitante */}
          <TeamOption
            testId="insertion_matches__select_away_team"
            teams={ teams }
            setTeams={ setTeams }
            homeTeam={ false }
            getTeam={ getTeam }
          />
        </div>
        <div className="match-settings-form-buttons">
          {/* Botão para salvar a partida */}
          <button
            data-testid="insertion_matches__save_match_btn"
            onClick={ async () => {
              // Cria a partida e atualiza o estado da criação
              const body = await createMatch();
              setCreatedMatch(body);
              setInProgress('In-Progress');
            } }
            type="button"
            disabled={ (inProgress !== notCreated) }
          >
            Salvar Partida
          </button>
          {/* Botão para finalizar a partida */}
          <button
            data-testid="insertion_matches__finish_match_btn"
            onClick={ () => { finishMatch(createdMatch.id); } }
            type="button"
            disabled={ (inProgress === notCreated) }
          >
            Finalizar Partida
          </button>
        </div>
      </form>
    </section>
  );
};

// Propriedades esperadas pelo componente CreateNewGame
CreateNewGame.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object),
  setTeams: PropTypes.func,
  getTeam: PropTypes.func,
  homeTeamScoreboard: PropTypes.string,
  setHomeTeamScoreboard: PropTypes.func,
  awayTeamScoreboard: PropTypes.string,
  setAwayTeamScoreboard: PropTypes.func,
}.isRequired;

export default CreateNewGame;
