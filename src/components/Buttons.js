import { useState } from 'react'
import P from 'prop-types'
import Button from './Button'
import PullToRefresh from 'react-simple-pull-to-refresh'


export default function Buttons({ count, setCount }) {
    const [round, setRound] = useState(1)
    const handleSubs = () => {
        setCount((c) => c - 1)
    }

    const handleAdd = () => {
        setCount((c) => c + 1)
    }

    const handleNextRound = () => {
        const newCount = count + 2
        if (newCount <= 10) {
            setCount(newCount)
        }
        setRound((r) => r + 1)
    }

    const handleNewArena = () => new Promise((resolve, reject) => {
        setCount(3);
        setRound(1);
        resolve(true);  
    }); 

    return (
        <div className="mt-6 mx-4 w-full lg:w-1/2">
            <PullToRefresh onRefresh={handleNewArena}>
            <div className="mb-4 text-4xl">
                <h4 className="text-center text-white text-xl font-bold mb-6 ">Round {round}</h4>
            </div>
            <div className="flex mt-16 mb-4 text-4xl">
                <Button label="-" classNames="bg-green-600" onClick={handleSubs} />
                <Button label="+" classNames="bg-green-600" onClick={handleAdd} />
            </div>
            <div className="flex mb-12 mt-6 w-full">
                <Button
                    label="New Round"
                    classNames="bg-green-900 w-full"
                    onClick={handleNextRound}
                />
            </div>
            </PullToRefresh>
        </div>
    )
}

Buttons.propTypes = {
    count: P.number.isRequired,
    setCount: P.func.isRequired,
}
