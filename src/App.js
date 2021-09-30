import { useState } from 'react'
import Buttons from './components/Buttons'
import Counter from './components/Counter'

function App() {
    const [energy, setEnergy] = useState(3)

    return (
        <div className="App">
            <Counter count={energy} />
            <Buttons count={energy} setCount={setEnergy} />
        </div>
    )
}

export default App;
