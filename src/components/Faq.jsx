import styles from "../style";
import { demo } from '../assets';
const Faq = () => (
	<section id='faq' className={`flex md:flex-row flex-col mb-32 ${styles.paddingY}`}>
		<div className={`flex ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

			<div className="flex flex-row justify-between items-center w-full">
				<h1 className="flex-1 font-poppins font-semibold ss:text-[50px] ss:leading-[70px] leading-[50px] text-[42px] text-white">
					<span className="text-gradient">Have Questions?, Try Finding Them Below</span>{" "}
					
				</h1>
			</div>
			<p className={`${styles.paragraph} font-poppins font-regular ss:text-[20px] max-w-[750px] mt-10`}> We are ready to support you with out best support system.


			</p>
		</div>
	</section>
  )

export default Faq