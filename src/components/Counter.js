import P from 'prop-types'

export default function Counter({ count }) {
    return (
        <div className="px-6 w-full text-center mt-16">
            <h3 className="font-bold text-white text-2xl">Enemy Energy</h3>
            <p className="font-bold text-white text-9xl">{count}</p>
        </div>
    )
}

Counter.defaultProps = {
    count: 0,
}

Counter.propTypes = {
    count: P.number,
}
