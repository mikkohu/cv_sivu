import ItemNode from './ItemNode.js'
import CommandConsole from './CommandConsole.js';
import './App.css';
const CVData = {
  name: "Mikko",
  items: [{
    name: "Opiskelut",
    items: [{
      name: "Kandi",
      attr: [
        { key: 'Oppilaitos', value : "Jyväskylän yliopisto" },
        { key: 'Suoritettu', value: '2018-08-01T00:00:00.000Z' }
      ]
    },
    {
      name: "Gradu",
    }
    ]
  },
  {
    name: 'Duunit',
    items: [{
      name: 'System designer',
      attr: [
        { key: 'Tyonantaja', value: "Samlink OY" },
        { key: "Aloitettu", value: '2012-01-02T00:00:00.000Z' },
        { key: "Paattynyt", value: '2014-11-30T00:00:00.000Z' }
      ]
    }
    ],
  },
  {
    name: 'Muut',
  }
  ],
}

function App() {
  return (
    <div className="App">
      <ItemNode tab={0} {...CVData}>

      </ItemNode>
      <CommandConsole></CommandConsole>
    </div>
  );
}

export default App;
