export default function Button(props) {
    const defaultColor = "bg-amber-400";
    const colorClasses = props.bgColor || defaultColor;

    return (
        <button
            className={`${colorClasses} text-white p-2 font-bold rounded-2xl transition duration-150`}
        >
            {props.label}
        </button>
    )
}