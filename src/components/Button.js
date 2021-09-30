import P from 'prop-types'

export default function Button({ label, onClick, classNames }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`border-gray-900 bg-gray-900 py-6 text-white font-bold rounded-full w-1/2 mx-2 ${classNames}`}
        >
            {label}
        </button>
    )
}

Button.defaultProps = {
    classNames: '',
}

Button.propTypes = {
    label: P.string.isRequired,
    onClick: P.func.isRequired,
    classNames: P.string,
}
