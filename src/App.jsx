
import './App.css'
import ColorChanger from './componente color/cambiacolor'


const MyComponent = () => {
  return (
    <div style={{display:'flex', flexDirection:'row'}}>
      <h1>Ejemplo de Uso de ColorChanger</h1>
      <ColorChanger color="blue" />
      <ColorChanger color="red" />
      <ColorChanger color="green" />
      <ColorChanger color="cyan"/>
      <ColorChanger color="pink"/>
      <ColorChanger color="black" />
      <ColorChanger color="magenta" />
      <ColorChanger color="ambar" />
      <ColorChanger color="aquamarine"/>
      <ColorChanger color="crimson"/>

    </div>
  );
};

export default MyComponent;