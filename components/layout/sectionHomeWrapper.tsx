type SectionHomeWrapperProps = {
    children: React.ReactNode
}
export default function SectionHomeWrapper({ children }: SectionHomeWrapperProps) {
    return (
        <section className="min-h-screen w-full container">
            {children}
        </section>
    )
}