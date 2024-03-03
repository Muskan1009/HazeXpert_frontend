import styles from "../style";
import { demo } from '../assets';
const Ab = () => (
	<section id='about' className={`flex md:flex-row flex-col mb-32 ${styles.paddingY}`}>
		<div className={`flex ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

		
		<div className="flex flex-col"> // Add a div around the text content
			<div className="flex flex-row justify-between items-center w-full">
				<h1 className="flex-1 font-poppins font-semibold ss:text-[50px] ss:leading-[70px] leading-[50px] text-[42px] text-white">
					<span className="text-gradient">About</span>{" "}
					
				</h1>
			</div>
			<p className={`${styles.paragraph} max-w-[750px] mt-10`}>As we all know Firefighters work in a very smoky environment and have the huge responsibility to save as many lives as possible.		
HazeXpert enables the firefighters to see clearer through thr smoke, resulting in faster response time. Since every second is valuable in situations like these , a faster response could effectively save someone’s life.
			</p>
			
</div>
			<p className={`${styles.paragraph} max-w-[750px] mt-10`}>After dehazing individual frames of the video, the  frames are then stitched together to form a video again.  This output video now contains a clearer view, without  the fog / smoke. There is a significant time delay since  the image processing is not done on the device, but  sent to a server.We have used the Stable Diffusion  model to train and finetune our model. For the image  dataset, we have used two versions of every image -  one clear and another hazy/smoky.
Different from traditional math operations-based tools and quite time consuming methods, HazeXpert excels at handling real details with deep learning.
			</p>
		</div>
		<img src={demo} alt="demo-img" className="md:w-[35%] ml-auto"/> // Add margin right to image

	</section>
  )

export default Ab