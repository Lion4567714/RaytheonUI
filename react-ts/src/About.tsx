import React from 'react';
import './index.css';

import Header from './resources/Header';

const About: React.FC = () => {
	return (
		<div>
			<Header />
			<div className='w-full h-full p-8'>
				<div className='flex flex-col items-center w-full h-full shadow-lg p-4 bg-gray-50'>
					<div className='text-2xl text-red-600'>About Us</div>
				</div>

				<div className='h-5' />
				<div>
					<div className='shadow-lg'>
						<div className='w-full h-full p-4 bg-gray-50'>
							<div className='text-lg font-semibold'>{'>'} Summary</div>
							<div className='h-5' />
							<p className=''>
                                Our main goal for our project was to develop a pipeline to take run-to-failure data
                                for turbofan engines and provide analytics and predictions of Remaining Useful Life. We
                                prioritize our stakeholders and the deliverables that we develop. Our work in UI, ETL,
                                data transformation, API, and machine learning have broadened our horizons and
                                allowed us to improve our skills with the help of our Raytheon mentors and the Purdue
                                Datamine.
							</p>
							<div className='h-3' />
							<p className=''>
                                We are sophomore, junior, and senior students from Purdue University, with
                                majors in [ADD MAJORS] and all different backgrounds. We joined the Data Mine to
                                learn new skills and grow existing skills to prepare us for our future careers. We all
                                chose Raytheon as our corporate partner because of their [ADD REASONS]. This year
                                has been both fulfilling and enjoyable as we work with our mentor and project leads to
                                build our pipeline, website, and neural network.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
