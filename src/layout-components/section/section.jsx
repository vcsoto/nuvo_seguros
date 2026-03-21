export default function Section({ children, className, classMedia }) {
    return (
        <section className={className}>
            <div className={`cmedia ${classMedia}`}>{children}</div>
        </section>
    );
}
