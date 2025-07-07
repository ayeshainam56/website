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
        <div className="w-full flex flex-col lg:flex-row justify-between gap-12 bg-gray-100 dark:bg-[rgb(25,42,100)] rounded-xl p-6 shadow-md hover:shadow-lg transition-all">

            <div className="flex gap-14 flex-col lg:flex-row w-full justify-between">
                {stats.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2 items-center lg:items-start text-center lg:text-left">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-800 dark:text-white">
                            {item.value}
                        </h2>
                        <p className="text-base font-medium text-blue-950 dark:text-gray-200">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
