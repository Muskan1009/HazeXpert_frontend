const Button = () => (
	<div className="mt-5 xs:mt-20 xs:space-x-10 flex flex-col xs:flex-row">
		<button type="button" className={`bg-gradient-to-r from-purpleG to-whiteG text-white text-base font-semibold px-5 xs:px-10 py-2 rounded-full hover:scale-125 ease-out duration-300 mb-5 xs:mb-0`}>Dehaze</button>

		<button type="button" className={`bg-black border-purple border-2 text-white text-base font-semibold px-5 xs:px-10 py-2 rounded-full hover:scale-125 ease-out duration-300`}>Download</button>
	</div>
);

export default Button;