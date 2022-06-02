import './App.css'
import Callout from './Callout'

function App() {
  return (
    <main>
      <h1>Cards</h1>

      <Callout>
        <img src="https://" alt="Image cap"/>
        <h2>Card title</h2>
        <p>Some quik example text to build on the card title and make up the bulk of the card`s content</p>
        <button>Go somewhere</button>
      </Callout>

      <Callout>
        <h2>Card title</h2>
        <p>With supporting text below as a natural lead-in to additional content</p>
        <button>Go somewhere</button>
      </Callout>

    </main>
  )
}

export default App;