
export default function TermsandConditions() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center p-8">
            {/* Title Section */}
            <div className="text-center mb-10">
            <h1 className="text-[30px] lg:text-5xl font-bold tracking-[-2px] font-oswald text-purple-600">TERMS &
                    <span style={{
                 color: 'white',
                 textShadow: '1px 1px 0 purple, -1px -1px 0 purple, 1px -1px 0 purple, -1px 1px 0 purple'
    }}
                        className="outlined-text font-bold"> CONDITIONS</span></h1>
            </div>
            <div className="w-full  flex flex-col items-center gap-8">

                
    
{/* First Box */}
<div className="flex flex-col lg:flex-row ">
    {/* Main Content Box */}
    <div className="w-full bg-white p-8 rounded-xl shadow-lg text-left h-[505px] lg:h-[556px] max-w-[367px] lg:max-w-[1100px] lg:ml-[10px] ml-0 lg:mr-0">
        <h2
            className="text-xl lg:text-[22px] font-bold text-black lg:font-bold lg:leading-[32px] lg:tracking-[0.3125px] mb-2 ml-[32px] lg:ml-[150px] mr-[32px] lg:mr-[150px] mt-[-10px] lg:mt-[30px]"
        >
            Terms and Conditions
        </h2>
        <h3
            className="text-lg lg:text-[22px] font-bold text-purple-850 mb-4 ml-[32px] lg:ml-[150px] mr-[32px] lg:mr-[150px] lg:font-bold lg:leading-[32px] lg:tracking-[0.3125px]"
        >
            General Site Usage
        </h3>
        <p
            className="text-sm lg:text-[22px] text-black ml-[32px] lg:ml-[150px] mr-[32px] lg:mr-[150px] lg:font-medium lg:leading-[32px] lg:tracking-[0.3125px]"
        >
            PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify, or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.
        </p>
    </div>

    {/* Vertical Rectangle */}
    <div className="hidden lg:flex flex-col justify-center ml-4">
        <div className="bg-purple-800" style={{ width: '7px', height: '350px', marginTop: '15%' }}></div>
    </div>
</div>


<div className="relative flex items-start">
    {/* Vertical Rectangle */}
    <div className="hidden lg:block absolute mt-20 justify-center" style={{ right: 'calc(100% - 55px)', width: '6px', height: '370px', backgroundColor: '#622B86' }}></div>

    {/* Second Box */}
    <div className="w-full bg-purple-800 p-8 rounded-xl shadow-lg text-left h-[505px] lg:h-[556px] max-w-[367px] lg:max-w-[1100px] ml-[5px] lg:ml-[70px]">
        <h2
            className="text-xl lg:text-[22px] font-bold text-white lg:font-bold lg:leading-[32px] lg:tracking-[0.3125px] mb-2 ml-[32px] lg:ml-[150px] mt-[-10px] lg:mt-[30px]"
        >
            Terms and Conditions
        </h2>

        <h3
            className="text-lg lg:text-[22px] font-bold text-white mb-4 ml-[32px] lg:ml-[150px] mr-[32px] lg:mr-[150px] lg:font-bold lg:leading-[32px] lg:tracking-[0.3125px]"
        >
            General Site Usage
        </h3>
        
        <p
            className="text-sm lg:text-[22px] text-white ml-[32px] lg:ml-[150px] mr-[32px] lg:mr-[150px] lg:font-medium lg:leading-[32px] lg:tracking-[0.3125px]"
        >
            PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify, or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.
        </p>
    </div>
</div>
</div>
 </div>
    );
}
