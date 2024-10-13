import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { negativeLogo, exitToAppImg } from '../images';
import '../styles/components/header.css';

// Componente funcional para o cabeçalho da aplicação
const Header = ({
  page,
  FirstNavigationLink,
  SecondNavigationLink,
  logged,
  setLogin,
}) => {
  const navigate = useNavigate();

  // Função para fazer logout do usuário
  const logoff = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setLogin(false);
    navigate('/leaderboard');
  };

  return (
    <header className="common-header">
      <div className="image-content">
        {/* Logotipo da aplicação */}
        <img src={ negativeLogo } alt="Trybe Futebol Clube Negative Logo" />
      </div>
      {/* Título da página */}
      <h1 data-testid="header__title">{ page }</h1>
      <div className="buttons-content">
        {/* Primeiro link de navegação */}
        <FirstNavigationLink />
        {
          (logged)
            ? (
              // Botão para fazer logout se o usuário estiver logado
              <button type="button" onClick={ () => logoff() }>
                Sair
                <img src={ exitToAppImg } alt="Sair do aplicativo" />
              </button>
            )
            // Segundo link de navegação se o usuário não estiver logado
            : <SecondNavigationLink />
        }
      </div>
    </header>
  );
};

// Definição das propriedades esperadas pelo componente Header
Header.propTypes = {
  page: PropTypes.string.isRequired,
  FirstNavigationLink: PropTypes.elementType.isRequired,
  SecondNavigationLink: PropTypes.elementType,
  logged: PropTypes.bool,
  setLogin: PropTypes.func,
};

// Configurações padrão das propriedades do componente Header
Header.defaultProps = {
  SecondNavigationLink: null,
  logged: undefined,
  setLogin: undefined,
};

export default Header;
