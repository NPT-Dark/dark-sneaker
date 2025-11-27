type SectionHomeWrapperProps = {
    id?: string
    children: React.ReactNode
}
export default function SectionHomeWrapper({ children, id }: SectionHomeWrapperProps) {
    return (
        <section className="min-h-screen w-full snap-start text-primary relative" id={id}>
            {children}
        </section>
    )
}