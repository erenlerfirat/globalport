import img from '../../../assets/evergreen.jpg'
const CandidateSection = () => {
    return (
        <div className=" py-16 text-gray-500 border-y border-gray-200">
            <div className="container mx-auto flex flex-col lg:flex-row items-stretch">
                {/* Image Section */}
                <div className="lg:w-1/2 px-8 ">
                    <img
                        src={img}
                        alt="img"
                        className="rounded-lg w-full h-full object-cover"
                    />
                </div>
                
                {/* Text Section */}
                <div className="lg:w-1/2 px-8 mt-8 lg:mt-0 rounded-lg">
                    <h2 className="text-4xl font-bold mb-4 mt-4 text-gray-600">
                        Expertise in Standard Marine Valves
                    </h2>
                    <p className="mb-6">
                        At Atlas Marine Valves, we focus on providing dependable, top-quality marine valves built to standards. 
                        With more than 45 years of industry experience, our worldwide network — including stock points and warehouses 
                        in Turkey, Singapore, China, Korea, and the Netherlands — allows us to offer:
                    </p>

                    <ul className="space-y-4 mb-6">
                        <li className="flex items-start">
                            <svg
                                className="w-6 h-6 mr-2 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span>
                                Fast and efficient global delivery, no matter where you operate.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <svg
                                className="w-6 h-6 mr-2 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span>
                                 Rapid support for urgent requests, ensuring your workflow continues smoothly.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <svg
                                className="w-6 h-6 mr-2 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span className="">
                                It's important that your hair loss pattern is stable; if your hair loss continues, you may need additional procedures.
                            </span>
                        </li>
                    </ul>

                    <button className="my-4 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg">
                        LEARN MORE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CandidateSection;