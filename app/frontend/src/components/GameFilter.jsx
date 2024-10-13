import React from 'react';
import PropTypes from 'prop-types';

// Componente funcional para filtrar partidas por estado
const GameFilter = ({ currentFilter, setCurrentFilter }) => {
  // Função para lidar com a mudança do filtro atual
  const handleCurrentFilter = () => {
    // Obtém o valor selecionado no seletor de filtro
    const selectedFilter = document.getElementById('game-filter').value;
    // Atualiza o estado do filtro atual com o valor selecionado
    setCurrentFilter(selectedFilter);
  };

  return (
    <form>
      <label htmlFor="game-filter">
        Partidas:
        {/* Seletor de filtro de partidas */}
        <select
          id="game-filter"
          defaultValue={ currentFilter }
          data-testid="matches__option_show_finish_matches"
        >
          <option>Todos os Jogos</option>
          <option>Em andamento</option>
          <option>Finalizado</option>
        </select>
      </label>
      {/* Botão para acionar a função de filtragem */}
      <button
        data-testid="matches__search_match_btn"
        type="button"
        onClick={ () => handleCurrentFilter() }
      >
        Buscar
      </button>
    </form>
  );
};

// Definição das propriedades esperadas pelo componente GameFilter
GameFilter.propTypes = {
  currentFilter: PropTypes.string,
  setCurrentFilter: PropTypes.func,
}.isRequired; // Propriedades são obrigatórias

export default GameFilter;
