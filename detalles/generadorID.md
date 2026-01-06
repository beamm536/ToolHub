## generador de IDs automatico
> para poder filtrar tanto por categoria como subcategoria, react necesita trabajar con ids, los cuales no están incorporados por lo qu vamos a generarlos automaticamente, juntando tanto la categoria a la que pertenece la herramienta y el nombre de la misma

1. por cada herramienta una **key** > ayuda a mantener escalabilidad, por si mas adelante queremos trasladarlo a una base de datos
```js
`${categoria}-${nombre}`
```

estos ids que estoy creando no se van a añadir al archivo json que contiene los datos, no aportan valor al contenido de la herramienta, ademas de que no los estamos usando fuera de la web para otras funcionalidades o algo, simplemente para poder hacer la funcion de los filtros desde react, para el renderizado 
*el json es unicamente contenido NO implementación*


## aplicacion de filtros
```js
  const filtrosLinks = 
    categoriaActiva === 'Panel principal'
      ? normalizacionEnlaces // Si no hay filtro, mostramos todos los enlaces
      : normalizacionEnlaces.filter( //filtramos en funcion del item.categoria que ha sido seleccionado por el usuario, y la categoria coincida con las tarjetas que tengan esa misma
        (item) => item.categoria === categoriaActiva
      ); 

```

JSON (cardData)
   ↓
Datos normalizados (normalizacionLinks)
   ↓
Estado (categoriaActiva)
   ↓
Datos filtrados (filtrosLinks)
   ↓
Render


=> con  esto todavia no lo tenemos conectado con el sidebar, por lo que tendremos que crear un estado que vive en app que pase al sidebara traves de **props**

**flujo del filtrado del sidebar**

Usuario hace click en Sidebar
   ↓
Sidebar llama a setCategoriaActiva
   ↓
App cambia categoriaActiva
   ↓
filteredLinks se recalcula
   ↓
Se renderizan las cards filtradas
   ↓
Sidebar se re-renderiza con el item activo