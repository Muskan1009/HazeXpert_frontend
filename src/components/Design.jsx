import { circle, Line, Line2, round1, round2, Gradient } from "../assets";

const Design = () => (
	<div className="md:inline-block hidden">
      <img src={circle} alt="circle" className="w-[30px] h-[30px] relative bottom-40 left-[6.7rem]" />
      <img src={Line} alt="line" className="h-[280px] relative left-[7.5rem] bottom-40" />
      <img src={Gradient} alt="gradient" className="w-[70px] relative bottom-[10.2rem] left-[5.5rem]" />
      <img src={round1} alt="round1" className="relative bottom-[10.2rem] left-[7.5rem]" />
      <img src={Line2} alt="line2" className="relative bottom-[10.4rem] left-[11.5rem]" />
      <img src={circle} alt="circle" className="w-[30px] h-[30px] relative bottom-[11.5rem] left-[37.5rem]" />
      <img src={round2} alt="round2" className="relative bottom-[12.6rem] left-52" />
      <img src={Line} alt="line" className="h-[280px] relative left-52 bottom-[12.6rem]" />
      <img src={circle} alt="circle" className="w-[30px] h-[30px] relative bottom-[12.7rem] left-[12.2rem]" />
    </div>
  );

export default Design