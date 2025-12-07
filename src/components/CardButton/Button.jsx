import './Button.css';

const Button = ({ url, children }) => {
  return (
    // Usamos <a> para que sea un enlace. Le damos el rol 'button' por accesibilidad.
    <a 
      href={url} 
      className="custom-button" // Usaremos esta clase para darle estilo de botón
      target="_blank"           // Abrir en nueva pestaña
      rel="noopener noreferrer"   // Seguridad
      role="button"             // Mejora la accesibilidad
    >
      {children}
    </a>
  );
};

export default Button;