import styles from "../style";
import { processed_input1, input1, demo } from '../assets';
import Button from "./Button";

const Hero = () => (
	<section id='home' className={`flex md:flex-row flex-col mb-0 md:mb-32 ${styles.paddingY}`}>
		<div className={`flex ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
			<div className="flex flex-row justify-between items-center w-full">
				<h1 className="flex-1 font-poppins font-semibold ss:text-[50px] ss:leading-[70px] leading-[50px] text-[42px] text-white">
					<span className="text-gradient">Welcome to</span>{" "}
					HazeXpert, Your <br className="sm:block hidden" />{" "}
				</h1>
			</div>

			<h1 className="font-poppins font-semibold ss:text-[50px] ss:leading-[70px] leading-[50px] text-[42px] text-white w-full">Guide to Dehazing Brilliance!
			</h1>
			<p className={`${styles.paragraph} max-w-[750px] mt-10`}>HazeXpert utilises deep learning to dehaze and desmoke vedios and images online, restore features in hazy shots and fix the colour of the sky, portraits, mountains, clouds, and emergency spots for much more explicit pictures.
			</p>
			<img src={demo} alt="demo-img" className="mt-8 mb-8 md:mb-0 md:mt-0 md:hidden md:w-[35%]"/>
			<Button />
		</div>
		<img src={demo} alt="demo-img" className="hidden md:inline md:w-[35%]"/>

	</section>
);

export default Hero

/*uppercase bg-orskin   absolute top-23 left-52  font-dm-sans*/