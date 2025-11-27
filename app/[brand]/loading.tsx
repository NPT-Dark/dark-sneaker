// app/[brand]/loading.tsx
export default function Loading() {
    return (
        <main className="w-full p-default min-h-screen pt-20 flex flex-col gap-2 items-center animate-pulse mx-auto">
            {/* Title skeleton */}
            <div className="h-[30px] w-40 bg-fuchsia-300 rounded-lg" />

            {/* Grid 4 columns skeleton */}
            <div className="grid grid-cols-4 gap-5 px-4 max-w-safe w-full animate-pulse max-xl:grid-cols-2 max-sm:grid-cols-1">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                        key={i}
                        className="flex flex-col border border-fuchsia-200 rounded-xl overflow-hidden bg-white"
                    >
                        {/* Image placeholder */}
                        <div className="w-full h-auto bg-fuchsia-200/30 object-cover object-center aspect-4/3" />

                        {/* Content */}
                        <div className="space-y-2 p-default">
                            {/* Title + discount badge */}
                            <div className="flex w-full items-center justify-between">
                                <div className="h-8 w-3/4 bg-fuchsia-200/30 rounded"></div>
                                <div className="h-5 px-2 bg-fuchsia-200/30 rounded-full"></div>
                            </div>

                            {/* Category + color */}
                            <div className="flex w-full items-center gap-2">
                                <div className="h-6 w-1/4 bg-fuchsia-200/30 rounded"></div>
                                <div className="h-6 w-4 rounded-sm border border-gray-300 bg-fuchsia-200/30" />
                            </div>

                            {/* Price + button */}
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center justify-center gap-2 w-fit">
                                    <div className="h-10 w-10 bg-fuchsia-200/30 rounded line-through"></div>
                                    <div className="h-10 w-12 bg-fuchsia-200/30 rounded"></div>
                                </div>
                                <div className="h-10 w-20 bg-fuchsia-200/30 rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            {/* Pagination Skeleton */}
            <div className="flex gap-2">
                {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i} className="h-[34px] w-10 bg-fuchsia-300 rounded-lg" />
                ))}
            </div>
        </main>
    );
}
