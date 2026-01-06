import { useState } from 'react';
import './App.css';
import CardComponent from './components/Card/CardComponent';
import Sidebar from './components/Sidebar/SideBar';
import { useEffect } from 'react';
import BarraBusqueda from './components/BarraBusqueda/BarraBusqueda';



//importacion del archivo json donde tenemos las herramientas a mostrar
import cardData from './data/data.json';

const App = () => {

  const [categoriaActiva, setCategoriaActiva] = useState('Panel principal'); //AQUI NO TENEMOS NINGÚN FILTRO APLICADO, ASÍ QUE INICIALIZAMOS CON 'TODAS'
  const [subcategoriaActiva, setSubcategoriaActiva] = useState(null);
  const [textoBusqueda, setTextoBusqueda] = useState('');

  //con esto lo que estamos haciendo es normalizar la estructura de los datos para tener un solo array con todos los enlaces
  const normalizacionEnlaces = cardData.flatMap(category =>
    category.enlaces.map(link => ({
      id: `${category.categoria}-${link.nombre}`,
      nombre: link.nombre,
      url: link.url,
      descripcion: link.descripcion,
      subcategoria: link.subcategoria,
      categoria: category.categoria,
    }))
  );

  const categorias = [
    'Panel principal',
    ...new Set(normalizacionEnlaces.map(item => item.categoria))
  ];



  //calculamos las subcategorias en funcion de las existentes en el json
  const subcategorias = [
    ...new Set(
      normalizacionEnlaces
        .filter(item =>
          categoriaActiva === 'Panel principal'
            ? false
            : item.categoria === categoriaActiva
        )
        .map(item => item.subcategoria)
    )
  ];

  // const filtrosLinks = 
  //   categoriaActiva === 'Panel principal'
  //     ? normalizacionEnlaces // Si no hay filtro, mostramos todos los enlaces
  //     : normalizacionEnlaces.filter(
  //       (item) => item.categoria === categoriaActiva
  //     ); 

  const filtrosLinks = normalizacionEnlaces.filter(item => {
    //filtro por categoria
    const categoriaOK =
      categoriaActiva === 'Panel principal' ||
      item.categoria === categoriaActiva;

    //filtro por subcategoria
    const subcategoriaOK =
      subcategoriaActiva === null ||
      item.subcategoria === subcategoriaActiva;

    //filtro por texto - barra de busqueda
    const textoNormalizado = textoBusqueda.toLowerCase().trim();

    const textoOK =
      textoNormalizado === '' || //si no hya texto no filtra
      item.nombre.toLowerCase().includes(textoNormalizado) ||
      item.descripcion.toLowerCase().includes(textoNormalizado);


    return categoriaOK && subcategoriaOK && textoOK;
  });




  //cada vez que cambie la categoria activa, reseteamos la subcategoria activa
  useEffect(() => {
    setSubcategoriaActiva(null);
  }, [categoriaActiva]);


  return (
    <>

      <div className="page-layout">

        {/* <input
          type="text"
          placeholder="Buscar herramientas..."
          value={textoBusqueda}
          onChange={(e) => setTextoBusqueda(e.target.value)}
          className="search-input"
        /> */}


<BarraBusqueda
  value={textoBusqueda}
  onChange={setTextoBusqueda}
  onReset={() => setTextoBusqueda('')}
/>


        <Sidebar
          //vamos a pasar el estado mediante las props del componente
          categorias={categorias}
          subcategorias={subcategorias}
          categoriaActiva={categoriaActiva}
          subcategoriaActiva={subcategoriaActiva}
          setCategoriaActiva={setCategoriaActiva}
          setSubcategoriaActiva={setSubcategoriaActiva}
        //poder setear la categoria activa desde el sidebar
        />

        <div className="main-content-area">

          <h3>Catalogo de herramientas</h3>
          <div className="parent">
            {/*hacemos uso del metodo .map() para iterar sobre cada componente uqe va a ir en las tarjeras*/}
            {/*por cada item del data.json una tarjeta que se crea*/}

            {filtrosLinks.map((item, index) => (

              /* div por cada tarjeta que creemos, segun nuestros datos del data.json */
              <div className={`div${index + 1}`} key={item.id}>
                <CardComponent
                  title={item.nombre}
                  url={item.url}
                  description={item.descripcion}
                  categoryTag={item.categoria}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </>




  )


}

export default App;