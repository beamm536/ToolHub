import React from 'react';
import './Sidebar.css';

const categoryIcons = {
  'Panel principal': '🏠',
  'Diseño': '🎨',
  'Desarrollo Web': '💻',
  'Inteligencia Artificial': '🧠',
  'Testing y Datos de Prueba': '💳',
  'Ciberseguridad': '🔐'
};

// Componente para cada elemento del sidebar, que sean clicables
const SidebarItem = ({ text, isActive, onClick }) => {
  const icon = categoryIcons[text] || '🔗';

  return (
    <li
      className={`sidebar-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {/* el item emite una accion, => transmite un estado */}
      <span className="sidebar-icon" role="img" aria-label={text}>
        {icon}
      </span>
      <span className="sidebar-text">{text}</span>
    </li>
  );
};

//entre los parentesis le definimos las props que vamos a recibir, que pasamos desde el componente padre(App.jsx)
const Sidebar = ({ categorias, subcategorias, categoriaActiva, subcategoriaActiva, setCategoriaActiva, setSubcategoriaActiva }) => {
  const menuData = [
    {
      title: 'Navegación',
      items: [
        { text: 'Panel principal' }
      ]
    }
  ];

  return (
    <div className="sidebar-container">

      {/* ===== Navegación ===== */}
      <h5 className="sidebar-section-title">
        Navegación
      </h5>

      <ul className="sidebar-list">
        <SidebarItem
          text="Panel principal"
          isActive={categoriaActiva === 'Panel principal'}
          onClick={() => setCategoriaActiva('Panel principal')}
        />
      </ul>

      {/* ===== Categorías ===== */}
      <h5 className="sidebar-section-title">
        Categorías
      </h5>

      <ul className="sidebar-list">
        {categorias
          .filter(cat => cat !== 'Panel principal')
          .map((categoria) => (
            <SidebarItem
              key={categoria}
              text={categoria}
              isActive={categoriaActiva === categoria}
              onClick={() => setCategoriaActiva(categoria)}
            />
          ))}
      </ul>

      {/* ===== SUBCategorías ===== */}
      {subcategorias.length > 0 && (
        <>
          <h5 className="sidebar-section-title">
            Subcategorías
          </h5>

          <ul className="sidebar-list">
            {subcategorias.map((sub) => (
              <SidebarItem
                key={sub}
                text={sub}
                isActive={subcategoriaActiva === sub}
                onClick={() => setSubcategoriaActiva(sub)}
              />
            ))}
          </ul>
        </>
      )}

    </div>
  );
};

export default Sidebar;
