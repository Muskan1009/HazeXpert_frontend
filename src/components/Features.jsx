import { features } from '../constants';
import styles, { layout } from '../style';

const FeatureCard = ({ icon, title, content, index }) => (
	<div className='flex flex-col md:flex-row md:space-x-24 -space-y-20'>
		<div className='flex flex-col w-full ml-5 md:ml-0'>
			<h1 className={`font-poppins font-semibold text-white text-3xl leading-10 md:leading-[23px] -mb-10 md:mb-0 relative -left-72 md:left-0 md:mt-0 ${index !== 0 ? "mt-28":"mt-0"}`}>{title}</h1>
			<div className={`bg-gradient-to-r from-purpleG to to-whiteG w-[280px] h-[340px] ss:w-[380px] ss:h-[260px] md:w-[680px] md:h-[260px] p-[2px] rounded-lg my-20 relative -left-72 ${index % 2 === 0 ? "md:right-[400px]":"unset"} ${index % 2 === 0 ? "unset":"md:left-[300px]"}`}>
				<div className="bg-black max-w-[50rem] w-[100%] h-[100%] rounded-lg flex flex-1 flex-col justify-center items-center">
					<p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1 text-justify px-4'>{content}</p>
				</div>
			</div>
		</div>
		<img src={icon} className={`h-[75%] w-[75%] md:h-[25%] md:w-[25%] object-contain relative top-10 md:top-40 right-64 ${index % 2 === 0 ? 'md:right-[400px]' : 'md:right-[1200px]'}`} alt="icon"/>
	</div>

)

const Features = () => (
	<section className='mb-32 md:mb-0'>
		<div className={`${layout.sectionImg} flex-col`}>
			{features.map((feature, index) => (
				<FeatureCard key={feature.id} {...feature} index={index} />
			))}
		</div>
	</section>
);

export default Features