export default function Cart({ icon, title, count, percentage }) {
    return (
        <div className=" w-[100%] p-[10px] h-[125px] rounded-[8px] border-[.6px] bg-[#1E1F20] border-[#343B4F]">
            <div className=" flex items-center justify-between">
                <div className="flex items-center text-[#fff] gap-[10px] text-[12px] font-[500]">
                    <img src={icon} alt="icon not found"></img>
                    <p>{title}</p>

                </div>
                <img src="/img/calendar.svg" className="cursor-pointer"></img>
            </div>

            <div className="flex items-center gap-[10px] my-[10px] mx-[5px]">
                <p className="text-[24px] font-[400] text-[#fff]">{count}</p>
                <span
                    className={`w-[47px] flex gap-[4px] h-[18px] rounded-[2px] justify-center items-center text-[10px]
                            ${percentage > 0
                            ? "text-[#14CA74] font-[500] bg-[#05C16833] border-[.6px] border-[#05C16833]"
                            : "bg-[#FF5A6533] border-[.6px] border-[#FF5A6533] text-[#FF5A65]"
                        }`}
                >          <span>  {percentage} % </span><img src={percentage > 0 ? '/img/Arrow External.svg' : '/img/Arrow External Right.svg'}></img>
                </span>
            </div>
            <div className="h-[.5px] w-[95%] mx-auto bg-[#ffffff67]"></div>

            <div className="py-[10px] px-[5px] flex gap-[10px] items-center">
                <p
                    className={`text-[10px] font-[400] ${percentage > 0 ? "text-[#14CA74]" : "text-[#FF5A65]"
                        }`}
                >             
                       Higher than yesterday
                </p>
                <img src={percentage > 0 ? '/img/upIcon.svg' : '/img/dowenIcon.svg'} className="mt-[3px]"></img>
            </div>
        </div>
    )
}