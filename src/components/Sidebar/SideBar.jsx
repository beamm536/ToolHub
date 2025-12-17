// src/components/Sidebar/Sidebar.jsx

import React from 'react';
import './Sidebar.css';

// Componente para cada elemento individual de la lista
const SidebarItem = ({ icon, text, isActive }) => {
  const itemClass = isActive ? 'sidebar-item active' : 'sidebar-item';
  return (
    <li className={itemClass}>
      {/* El icono (usamos un simple ⚡ para el ejemplo) */}
      <span className="sidebar-icon" role="img" aria-label="icono">
        {icon || '⚡'}
      </span>
      <span className="sidebar-text">{text}</span>
    </li>
  );
};


const Sidebar = () => {
  // Estructura de datos replicando la imagen
  const menuData = [
    {
      title: 'Navegación',
      items: [
        { text: 'Panel principal', icon: '⚡', active: true }, // El elemento activo
      ],
    },
    {
      title: 'Herramientas',
      items: [
        { text: 'Conversor de color', icon: '⚡' },
        { text: 'Conversor de código', icon: '⚡' },
        { text: 'Imágenes', icon: '⚡' },
        { text: 'Paletas', icon: '⚡' },
        { text: 'Componentes', icon: '⚡' },
      ],
    },
  ];

  return (
    <div className="sidebar-container">
      {menuData.map((section, sectionIndex) => (
        <React.Fragment key={sectionIndex}>
          {/* Título de la sección (Navegación, Herramientas) */}
          <h5 className="sidebar-section-title">{section.title}</h5>
          
          {/* Lista de elementos */}
          <ul className="sidebar-list">
            {section.items.map((item, itemIndex) => (
              <SidebarItem
                key={itemIndex}
                icon={item.icon}
                text={item.text}
                isActive={item.active}
              />
            ))}
          </ul>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Sidebar;