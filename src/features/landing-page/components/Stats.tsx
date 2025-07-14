const stats = [
    {
        value: "500+",
        description: "Clients Represented"
    },
    {
        value: "300+",
        description: "Successful Case Outcomes"
    },
    {
        value: "15+",
        description: "Years of Legal Experience"
    }
];

export default function Stats() {
    return (
        <div className="w-full bg-[rgba(221,201,174,0.2)] rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-[rgba(221,201,174,0.3)]">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                {stats.map((item, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col gap-1 items-center text-center p-4 bg-white/80 rounded-lg border border-[rgba(221,201,174,0.2)] hover:bg-white transition-all"
                    >
                        <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-900">
                            {item.value}
                        </h2>
                        <p className="text-base font-medium text-blue-950 dark:text-blue-800">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}