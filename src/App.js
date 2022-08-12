import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {  
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Guitarras "/>
      <ItemCount initial={1} stock={10}/>
      <ItemDetailContainer greeting="Contenedor de detalle"/>
    </div>
  );
}

export default App;
