import { useState } from 'react';
import './App.css';
import CardComponent from './components/Card/CardComponent';
import githubBtn from './components/githubBtn';

//importacion del archivo json donde tenemos las herramientas a mostrar
import cardData from './data/data.json';

const App = () => {

  //const [count, setCount] = useState(0);
  const flatLinks = cardData.flatMap(category => 
    category.enlaces.map(link => ({
      ...link, // Copia las propiedades existentes (nombre, url, y la nueva descripcion)
      categoria: category.categoria, // ⬅️ Añade la categoría al objeto de enlace
    }))
  );

  return (
    <>
      <h3>Catalogo de herramientas</h3>
      <div className="parent">
        {/*hacemos uso del metodo .map() para iterar sobre cada componente uqe va a ir en las tarjeras*/}
        {/*por cada item del data.json una tarjeta que se crea*/}

        {flatLinks.map((item, index) => (

          <div className={`div${index + 1}`} key={index}>
            <CardComponent
              title={item.nombre}
              url={item.url}
              description={item.descripcion}
              categoryTag={item.categoria}
            />
          </div>
        ))}
      </div>

      <h3>Prueba tarjetas - mostrando componente</h3>
      <CardComponent title="Prueba Estática" content={[{nombre: "Enlace Falso", url: "#"}]} />
    </>




  )


}

{/*
return (
  <>

    <h3>rejilla de tarjetas</h3>
    <div className="parent">
      <div className="div1"><CardComponent /> </div>
      <div className="div2"><CardComponent /> </div>
      <div className="div3"><CardComponent /> </div>
      <div className="div4"><CardComponent /> </div>
      <div className="div5"><CardComponent /> </div>
      <div className="div6"><CardComponent /></div>
      <div className="div7"><CardComponent /></div>
      <div className="div8"><CardComponent /></div>
      <div className="div9"><CardComponent /></div>
    </div>


    <h3>Prueba tarjetas - mostrando componenteo</h3>


    <CardComponent />
  </>
);
 */}



export default App
