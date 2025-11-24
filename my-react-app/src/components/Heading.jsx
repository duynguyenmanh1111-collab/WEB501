export default function Heading({ title }) {
    return (
        <div className="text-center">
            <span className="text-4xl font-bold text-blue-500 border-b-2 border-blue-500 uppercase inline-block">
                {title}
            </span>
        </div>
    )
}