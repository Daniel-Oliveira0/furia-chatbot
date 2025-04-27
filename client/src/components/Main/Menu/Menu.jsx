const Menu = ({ onOptionClick }) => {
  if (typeof onOptionClick !== 'function') {
    console.error('Função onOptionClick não foi passada corretamente');
    return null;
  }

  const options = [
    "Agenda de Jogos",
    "Elenco",
    "Notícias",
  ];

  return (
    <div className="menu">
      <ul className="menu-list">
        {options.map((option, index) => (
          <li
            key={index}
            className="menu-item"
            onClick={() => onOptionClick(option)} 
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
