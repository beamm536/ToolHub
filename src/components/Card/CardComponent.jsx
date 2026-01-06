import './CardComponent.css';
import Button from '../CardButton/Button.jsx';


// const getIconForCategory = (category) => {
//   switch (category) {
//     case 'Diseño':
//       return '🎨'; // Emoji de Paleta de Pintura
//     case 'Desarrollo':
//       return '💻'; // Emoji de Laptop
//     case 'Servicios':
//       return '🛠️'; // (Si añades otra categoría)
//     default:
//       return '🔗'; // Icono por defecto
//   }
// };

const categoryIcons = {
  'Diseño': '🎨',
  'Desarrollo Web': '💻',
  'Inteligencia Artificial': '🧠',
  'Testing y Datos de Prueba': '💳',
  'Ciberseguridad': '🔐',
  'Aprendizaje': '🎓'
};

const getIconForCategory = (category) => {
  return categoryIcons[category] || '🔗';
};

const CardComponent = ({ title, url, description, categoryTag }) => {
  const icon = getIconForCategory(categoryTag);

  return (
    <div className="card">

      {/* Barra tipo ventana */}
      <div className="tools">
        <div className="circle"><span className="red box" /></div>
        <div className="circle"><span className="yellow box" /></div>
        <div className="circle"><span className="green box" /></div>
      </div>

      {/* Categoría + icono */}
      <div className="category-tag">
        <span role="img" aria-label={categoryTag}>
          {icon}
        </span>
        {/* Si luego quieres mostrar el texto */}
        {/* <small>{categoryTag}</small> */}
      </div>

      {/* Contenido */}
      <div className="card__content">
        <h4>{title}</h4>

        {description && <p>{description}</p>}

        <div className="card__actions">
          <Button url={url}>
            Ir a {title}
          </Button>
        </div>
      </div>

    </div>
  );
};

export default CardComponent;