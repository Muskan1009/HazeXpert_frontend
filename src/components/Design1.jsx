import { circle, Line3, Line4, Line5, round3, round4 } from "../assets";

const Design1 = () => (
	<div className="sm:inline-block hidden -mb-64">
		<img src={circle} alt="circle" className="w-[30px] h-[30px] relative bottom-60 left-[76.2rem]" />
		<img src={Line3} alt="line3" className="h-[4px] relative left-[78rem] bottom-64" />
		<img src={round3} alt="round3" className="relative bottom-[16.3rem] left-[86.5rem]" />
		<img src={Line4} alt="line4" className="relative bottom-[17rem] left-[90.2rem]" />
		<img src={round4} alt="round4" className="relative bottom-[17.2rem] left-[86.6rem]" />
		<img src={Line5} alt="line5" className="relative left-[37.8rem] bottom-[17.5rem]" />
		<img src={circle} alt="circle" className="w-[30px] h-[30px] relative bottom-[18.6rem] left-[36rem]" />
	</div>
);

export default Design1