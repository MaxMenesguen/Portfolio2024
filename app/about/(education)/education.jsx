// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMedal } from "@fortawesome/free-solid-svg-icons";

//import Me4 from "@/public/img/me4.jpg";

export default function Education() {
	return (
		<section className="grid gap-8 md:gap-12">
			<div className="text-center space-y-2">
				<h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
					Education
				</h1>
				<p className="text-muted-foreground max-w-[800px] mx-auto">
					Get to know more about my educational background.
				</p>
			</div>

			<div className="relative after:absolute after:inset-y-2 after:w-1 after:bg-gray-700 after:left-[-4px] md:after:left-1 lg:after:left-2 xl:after:left-3 grid gap-8 md:gap-12 pl-6 md:pl-8">

				{/* Double Degree at ESILV */}
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">2021 - 2025</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
							ESILV | Paris La Défense
						</h3>
						<h4 className="font-light text-md mb-4">
							Double Degree: Creative Technology and Master of Science
						</h4>
						<p className="text-justify">
							Education focused on technological creation and innovation, combining advanced scientific knowledge with project management skills for the research and development of new products. Courses included Computer Science (Python, Arduino), Design, AI, Management, and Web Design.
						</p>
						<p className="text-justify mt-4">
							<strong>Soft skills:</strong> Stress Management, Team Collaboration, Public Speaking.
						</p>
						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Python
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Arduino
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								AI
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Web Design
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Project Management
							</div>
						</div>
					</div>
				</div>

				{/* Preparatory Class at Lycée Jules Ferry */}
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">2019 - 2021</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
							Lycée Jules Ferry | Versailles
						</h3>
						<h4 className="font-light text-md mb-4">
							Preparatory Class PTSI / PT
						</h4>
						<p className="text-justify">
							Completed a rigorous preparatory program in Physics, Technology, and Engineering Sciences (PTSI/PT), providing a solid foundation in scientific and engineering disciplines, preparing for entrance into top engineering schools.
						</p>
					</div>
				</div>

				{/* Scientific Baccalaureate at École Alsacienne */}
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">2019</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
							École Alsacienne | Paris 6
						</h3>
						<h4 className="font-light text-md mb-4">
							Scientific Baccalaureate
						</h4>
						<p className="text-justify">
							Obtained a Scientific Baccalaureate with a focus on mathematics and sciences, building a strong foundation for further studies in engineering and technology.
						</p>
					</div>
				</div>

			</div>
		</section>
	);
}


function GraduationCapIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
			<path d="M22 10v6" />
			<path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
		</svg>
	);
}

{/* <div className="grid gap-8 md:gap-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="px-5">
						<div className="font-medium text-lg">
							2022 - Present
						</div>
						<div>
							<h2 className="font-semibold text-xl">
								Universitas Negeri Malang
							</h2>
							<h3 className="text-md font-normal mb-3">
								S1 Teknik Informatika | Computer Science
							</h3>
							<div className="grid gap-4 mb-4 grayscale hover:grayscale-0 transition-all ease duration-300">
								<Image
									src={Me4}
									width={400}
									height={225}
									alt="University"
									className="rounded-lg"
									style={{
										aspectRatio: "16/9",
										objectFit: "cover",
										width: "100%",
									}}
								/>
							</div>
							<div className="flex items-center gap-2">
								<p className="text-justify">
									Aspiring to be a software engineer, I am
									currently pursuing a bachelor&rsquo;s degree
									in computer science at Universitas Negeri
									Malang. Fascinated by the world of
									technology, I am eager to learn and explore
									new things in the field of computer science.
								</p>
							</div>
							{/* add gpa in a style 
							<div className="flex flex-wrap gap-2 mt-4 text-sm">
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
									GPA: 3.9 out of 4
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-start ">
            <h2 className="font-semibold text-xl mt-7">
              Achievements
            </h2>
            <p className="text-md font-normal mb-3 md:mb-12">
              Some of my achievements during my study.
            </p>
						<div className="flex items-center gap-4 mb-4">
							<div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
								<FontAwesomeIcon
									icon={faMedal}
									className="text-white h-5 w-5"
								/>
							</div>
							<div>
								<h3 className="font-medium">
									Special Award | Gold Medal | Incubation Opportunity
								</h3>
								<p className="text-sm">
									Indonesia Inventor Day 2024 (IID) | Aug
									2024
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4 mb-4">
							<div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
								<FontAwesomeIcon
									icon={faMedal}
									className="text-white h-5 w-5"
								/>
							</div>
							<div>
								<h3 className="font-medium">
									3rd place (Bronze Medal)
								</h3>
								<p className="text-sm">
									Student Digital Innovation Competition (LIDM) | Jun
									2024
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4 mb-4">
							<div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
								<FontAwesomeIcon
									icon={faMedal}
									className="text-white h-5 w-5"
								/>
							</div>
							<div>
								<h3 className="font-medium">
									3rd place (Bronze Medal)
								</h3>
								<p className="text-sm">
									Fesmaro UI/UX Design | Jun
									2024
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4 mb-5">
							<div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
								<FontAwesomeIcon
									icon={faMedal}
									className="text-white h-5 w-5"
								/>
							</div>
							<div>
								<h3 className="font-medium">Finalist</h3>
								<p className="text-sm">
									36th National Student Science Week (PIMNAS) | Nov 2023
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4 mb-5">
							<div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
								<FontAwesomeIcon
									icon={faMedal}
									className="text-white h-5 w-5"
								/>
							</div>
							<div>
								<h3 className="font-medium">
									3rd place (Bronze Medal)
								</h3>
								<p className="text-sm">
									FORKAFEST 3.0 Web Development competition | Jan 2023
								</p>
							</div>
						</div>
					</div>
				</div>
			</div> */}