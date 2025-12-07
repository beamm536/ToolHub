import './CardComponent.css';
import Button from '../CardButton/Button.jsx';


const getIconForCategory = (category) => {
  switch (category) {
    case 'Diseño':
      return '🎨'; // Emoji de Paleta de Pintura
    case 'Desarrollo':
      return '💻'; // Emoji de Laptop
    case 'Servicios':
      return '🛠️'; // (Si añades otra categoría)
    default:
      return '🔗'; // Icono por defecto
  }
};



// 1. Ahora 'content' es el array de enlaces: [{ nombre, url }, ...]
const CardComponent = ({ title, url, description, categoryTag }) => {

  const icon = getIconForCategory(categoryTag);

  return (
    <div className="card">
      
      {/* 1. Barra de herramientas - mantiene los círculos */}
      <div className="tools">
        <div className="circle"><span className="red box" /></div>
        <div className="circle"><span className="yellow box" /></div>
        <div className="circle"><span className="green box" /></div>
      </div>
      
      {/* 2. Campo de Categoría y su Ícono en la Esquina Superior Derecha */}
      <div className="category-tag">
        <span role="img" aria-label={categoryTag}>
          {icon}
        </span>
        {/*<small>{categoryTag}</small>*/}
      </div>

      {/* 3. Contenido Principal */}
      <div className="card__content">
        
        {/* Nombre del enlace (el título de la tarjeta) */}
        <h4>{title}</h4>
        
        {/* Descripción (si existe) */}
        {description && <p>{description}</p>}

        <div className="card__actions">
          <Button url={url}>
            Ir a {title} {/* Texto del botón: ejemplo "Ir a Figma" */}
          </Button>
        </div>
        
      </div>
    </div>
  );
};
export default CardComponent;