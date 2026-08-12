export default function SectionHeading({ tag, title }) {
    return (
        <div className="section-heading">
            <p>{tag}</p>
            <h2>{title}</h2>
        </div>
    );
}
