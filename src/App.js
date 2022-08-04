import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {  
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Se vende Todo madera"/>
      <ItemCount initial={1} stock={10}/>
    </div>
  );
}

export default App;
