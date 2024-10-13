import React from 'react';
import PropTypes from 'prop-types';
import '../styles/pages/games.css';

// Componente funcional para o filtro de classificação de partidas
const GamerFilter = ({ currentFilter, setCurrentFilter }) => {
  // Função para lidar com a mudança do filtro de classificação
  const handleCurrentFilter = () => {
    // Obtém o valor do filtro selecionado pelo usuário
    const selectedFilter = document.getElementById('classification-filter').value;
    // Define o filtro atual utilizando a função passada como prop
    setCurrentFilter(selectedFilter);
  };

  return (
    <form>
      <label htmlFor="classification-filter">
        Partidas:
        <select
          id="classification-filter"
          defaultValue={ currentFilter }
          data-testid="score_boarding__classification_filter"
        >
          <option>Classificação Geral</option>
          <option>Classificação Mandantes</option>
          <option>Classificação Visitantes</option>
        </select>
      </label>
      {/* Botão para aplicar o filtro */}
      <button
        data-testid="score_boarding__classification_filter_button"
        type="button"
        onClick={ () => handleCurrentFilter() }
      >
        Buscar
      </button>
    </form>
  );
};

// Definição das propriedades esperadas pelo componente GamerFilter
GamerFilter.propTypes = {
  currentFilter: PropTypes.string, // Filtro de classificação atual
  setCurrentFilter: PropTypes.func, // Função para definir o filtro atual
};

// Configuração padrão das propriedades do componente GamerFilter
GamerFilter.defaultProps = {
  currentFilter: '', // Valor padrão para o filtro de classificação
  setCurrentFilter: () => {}, // Função vazia como padrão
};

export default GamerFilter;
