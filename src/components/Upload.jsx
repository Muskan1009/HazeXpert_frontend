import { useRef } from "react";
import Button from "./Button";
import { cloud } from "../assets";

const Upload = () => {
	const fileContainerRef = useRef(null);
	const bgfileRef = useRef(null);

	const handleContainerClick = (event) => {
		if (event.target !== fileContainerRef.current) {
			return; // Clicked outside of the div, do nothing
		}

		// Clicked inside the div, open the file input
		bgfileRef.current.click();
	};
	return (
		<div className='w-[308px] h-[300px] xs:w-[513px] xs:h-[316px] sm:w-[698px] sm:h-[430px] bg-gradient-to-r from-purpleG to to-whiteG relative sm:left-[42rem] sm:bottom-[47rem] rounded-xl p-[2px] ml-8 md:ml-0 mt-10 xs:mt-0 mx-2 xs:mx-0 -mb-[35rem]'>
			<div className="bg-black w-[100%] h-[100%] rounded-xl items-center justify-center flex flex-col pt-10 xs:pt-5 sm:pt-0">
				<div id="fileContainer" ref={fileContainerRef} onClick={handleContainerClick} className="w-[90%] py-6 xs:py-0 xs:w-[55%] xs:h-[33%] sm:w-[88%] sm:h-[55%] border-dashed border-purpleG border-2 rounded-xl items-center justify-center flex flex-col pt-5 cursor-pointer">
					<img src={cloud} alt="upload" className="w-[10%] sm:w-[20%] relative bottom-3 sm:bottom-5" />
					<p className="text-dimWhite mb-0 sm:mb-5 xs:text-sm sm:text-base">Supports JPG, PNG, Mp4</p>
					<p className="text-purple xs:text-sm sm:text-base">Upload your files here! Or <label ref={bgfileRef} for="bgfile" title="Upload a file" className="relative z-20 cursor-pointer text-white">Browse</label></p>
					<input accept=".jpg, .jpeg, .png, .svg, .webp, .mp4" className="absolute z-10 opacity-0 cursor-pointer" type="file" name="bgfile" id="bgfile"></input>
				</div>
				<Button />
			</div>
		</div>
	)
}

export default Upload