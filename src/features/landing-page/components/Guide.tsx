import gear from '../../../assets/images/gear.svg';
const steps = [
    {
        value: <span>Choose your<br/> Competition</span>,
        description: "Choose a competition. Your dream car awaits."
    },
    {
        value: <span>Enter<br/> to Win</span>,
        description: "Answer a question, pay with $VT or cash."
    },
    {
        value: <span>Secure<br/> your Spot</span>,
        description: "Receive confirmation email. You're entered!"
    },
    {
        value: <span>The Big<br/> Reveal</span>,
        description: "Live draw announces winner. Car or cash?"
    }
]
export default function Guide() {

    return (
        <div className="w-full flex flex-col justify-between gap-14">
            <div className="bg-purple-900 py-1 px-3 sm:py-3 sm:px-7 rounded-[10px] w-fit">
                <h2 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-medium text-white flex gap-1 sm:gap-2.5 items-center flex-wrap">
                    Win Your Dream Car in Just
                    <span className="font-semibold sm:font-bold lg:font-extrabold">
                        4 Easy Steps!
                    </span>
                    <img src={gear} alt="gear" className="hidden sm:flex ml-1 sm:ml-3 w-4 sm:w-fit"/>
                </h2>
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-11">
                {steps.map((item, index) => (
                    <div key={index} className="flex flex-col gap-1 sm:gap-2.5">
                        <div className="flex gap-3 sm:gap-5 items-center">
                            <h2 className="text-4xl md:text-5xl xl:text-[54px] font-extrabold text-purple-600">{index + 1}</h2>
                            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-purple-900 dark:text-white min-h-[3rem] flex items-center">{item.value}</h3>
                        </div>
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-grey-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}