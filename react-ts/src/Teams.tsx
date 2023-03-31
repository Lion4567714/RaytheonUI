import React from 'react';
import './index.css';

import Header from './resources/Header';

const Teams: React.FC = () => {
	return (
		<div>
			<Header />
			<div className='w-full h-full p-8'>
				<div className='flex flex-col items-center w-full h-full shadow-lg p-4 bg-gray-50'>
					<div className='text-2xl text-red-600'>Teams</div>
				</div>

				<div className='h-5' />
				<div className='grid grid-cols-12'>
					<div className='col-span-8 shadow-lg'>
						<div className='w-full h-full p-4 bg-gray-50'>
							<div className='text-lg font-semibold'>{'>'} LSTM Team</div>
							<div className='h-5' />
							<p className=''>
								LSTMs (Long-Term Short-Term Memory Models) are a powerful regression technique that account for past trends in data to make future predictions. In this project, the objective was to develop an LSTM to directly compute RUL for an engine based upon parameters identified through PCA. This model was trained under the assumption of both a linear RUL or engine degradation, and differential solution RUL, as a method of determining which RUL model was a better fit for RUL prediction.
							</p>
							<div className='h-3' />
							<p className=''>
								The results of the LSTM model were the most promising of all models developed, yielding a 65% accuracy of RUL prediction under the assumption of linear RUL and a close to 80% accuracy for the differential RUL model. In total the models were trained on over 90000+ data points, and tested with both testing data, and specifically developed "hard" testing data as a method of robust model validation.
							</p>
							<div className='h-3' />
							<p className=''>
								The results of the LSTM model were the most promising of all models developed, yielding a 65% accuracy of RUL prediction under the assumption of linear RUL and a close to 80% accuracy for the differential RUL model. In total the models were trained on over 90000+ data points, and tested with both testing data, and specifically developed "hard" testing data as a method of robust model validation.
							</p>
						</div>
					</div>
					<div className='flex items-center justify-center col-span-4 shadow-lg'>
						<img src={require('./resources/graphics/LSTMGraph.png')}></img>
					</div>
				</div>

				<div className='h-5' />
				<div className='grid grid-cols-12'>
					<div className='col-span-8 shadow-lg'>
						<div className='w-full h-full p-4 bg-gray-50'>
							<div className='text-lg font-semibold'>{'>'} Regression Team</div>
							<div className='h-5' />
							<p className=''>
								Using Principal Component Analysis (PCA), we found that all failures occurred in a specific range of sensor values. From this, we made a regression analysis of sensor data.
							</p>
							<div className='h-3' />
							<p className=''>
								Given the range of “dangerous” sensor values, we placed an arbitrary threshold where 32% of units had failed. From there, we curve fitted the data to predict future sensor values from portions of the data, pictured below.
							</p>
						</div>
					</div>
					<div className='flex items-center justify-center col-span-4 shadow-lg'>
						<img src={require('./resources/graphics/RegressionGraph.png')}></img>
					</div>
				</div>

				<div className='h-5' />
				<div className='grid grid-cols-12'>
					<div className='col-span-8 shadow-lg'>
						<div className='w-full h-full p-4 bg-gray-50'>
							<div className='text-lg font-semibold'>{'>'} Clustering Team</div>
							<div className='h-5' />
							<p className=''>
							Using DBSCAN for unsupervised anomaly detection we developed column specific CDFs for the probability of failure which allowed for a reaming useful life prediction.
							</p>
						</div>
					</div>
					<div className='flex items-center justify-center col-span-4 shadow-lg'>
						<img src={require('./resources/graphics/ClusteringGraph.png')}></img>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Teams;
