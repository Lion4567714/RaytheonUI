import React from 'react';
import './index.css';

import Header from './resources/Header';

const About: React.FC = () => {
    return (
        <div>
            <Header />
            <div className='w-full h-full p-8'>
                <div className='flex flex-col items-center w-full h-full shadow-lg p-4 bg-gray-50'>
                    <div className='flex items-center justify-center col-span-4 shadow-lg'>
						<img className='w-[25vw]' src={require('./resources/graphics/QR.png')}></img>
					</div>
                </div>

                <div className='h-5' />

                <div className='flex flex-col items-center w-full h-full shadow-lg p-4 bg-gray-50'>
                    <div className='text-2xl text-red-600'>The Turbofan</div>
                </div>
                <img className='w-full' src={require('./resources/graphics/Turbofan.gif')}></img>
            </div>
        
            {/* Compressing into one page */}

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
                            Our goal for this year was to develop models to predict remaining useful life (RUL) and ingest run-to-failure data for turbofan engines. Predicting RUL improves operation capabilities by reducing downtime of equipment and mitigating catastrophic failures. In order to develop a robust enterprise solution to ingest sensor data, transform it, and feed it into neural networks for RUL prediction we considered the NASA CMAPSS Jet Engine Simulated Data.
							</p>
							<div className='h-3' />
							<p className=''>
                            The NASA CMAMPSS Jet Engine dataset describes the lifecycle of a turbofan engine. The dataset is comprised of multiple computer-simulated turbofan engines run to failure. Each engine is equipped with 24 sensors that correspond to real-life or virtual sensors. Furthermore, there are three batches of data each with increasing amounts of Gaussian noise added to the sensors. Overall, this provided the team with a dataset for training and validating our methods as well as providing insight on its robustness in relation to noise.
							</p>
						</div>
					</div>

                    <div className='h-5' />

                    <div className='shadow-lg'>
						<div className='w-full h-full p-4 bg-gray-50'>
							<div className='text-lg font-semibold'>{'>'} The Team</div>
							<div className='h-5' />
                            <p className=''>
                            Corporate Partner: Michael Douglass
							</p>
                            <div className='h-3' />
							<p className=''>
                            TAs: Pierce Warburton, Gahn Mungarndee
							</p>
                            <div className='h-3' />
							<p className=''>
                            Students: Shaynoah Bedford, Matthew Beringer, Rugved Dikay, Delaney Elder, Ivan Esparza, Anders Gilliland, Kapil Manicka, Christopher Meza, Gabriel Muzio, Rishab Pangal, Luis Salazar, Jack Secor, Simay Savas
							</p>
						</div>
					</div>
				</div>
			</div>

            {/* Teams */}

            <div className='w-full h-full p-8'>
				<div className='flex flex-col items-center w-full h-full shadow-lg p-4 bg-gray-50'>
					<div className='text-2xl text-red-600'>Teams</div>
				</div>

                <div className='h-3' />

                <div className='flex flex-col items-center w-full h-full shadow-lg p-4 bg-gray-50'>
					<div className='text-md text-red-600'>First Semester</div>
				</div>

				<div className='h-5' />

				<div className='grid grid-cols-12'>
					<div className='col-span-12 shadow-lg'>
						<div className='w-full h-full p-4 bg-gray-50'>
							<div className='text-lg font-semibold'>{'>'} ETL Team</div>
							<div className='h-5' />
							<p className=''>
							ETL consisted of refining and loading raw data into a more usable, organized format. Specifically, a focus was placed on first structuring the raw data into labeled, and organized CSVs, and then “cleaning” the data into files free of null values/gaps. Transformation was also explored through applying physics equations (isentropic flow, combustion) to identify anomalies in the data compared to theoretical turbofan engine function. These anomalies were colored/flagged in the clean final output data files as a reference for data analysis. Thus, ETL created a foundation of data for modeling work, while first incorporating domain knowledge into the project. 
							</p>
						</div>
					</div>
				</div>

                <div className='h-5' />

                <div className='grid grid-cols-12'>
                    <div className='col-span-12 shadow-lg'>
                        <div className='w-full h-full p-4 bg-gray-50'>
                            <div className='text-lg font-semibold'>{'>'} Database Team</div>
                            <div className='h-5' />
                            <p className=''>
                            The transformed data is stored in a format that easily accessible on our MongoDB database. Our database was hosted on the Geddes cluster by deploying a workload that contains a MongoDB image. Ultimately, improving security, scalability, and efficiency. Furthermore, selecting a nonrelational NoSQL database allows large amounts of unstructured data to be hosted and offers low management complexity. MongoDB data files were created in the Docker container and stored in a sub-path in the volume. With an active workload, a URI string with a username/password was generated to connect to the database on MongoDB while adding another layer of security.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='h-5' />

                <div className='grid grid-cols-12'>
					<div className='col-span-12 shadow-lg'>
						<div className='w-full h-full p-4 bg-gray-50'>
							<div className='text-lg font-semibold'>{'>'} User Interface Team</div>
							<div className='h-5' />
							<p className=''>
                            Our website is a medium to concentrate our work into a palatable format that is more accessible than scanning over code and documentation. The site is open to the public so anyone who wishes to view it may.
							</p>
							<div className='h-3' />
							<p className=''>
                            Our UI architecture is designed to accept new data from the user, securely connect the user to the pipeline, and use processed data to display data visualizations. We also have encryption implemented and user authentication in the works.
							</p>
							<div className='h-3' />
							<p className=''>
                            The UI can display our work on finding remaining useful life in cohesive graphs that will help our stakeholders make better judgments about scheduling maintenance, optimize mission efficiency, and help avoid downtime. 
							</p>
						</div>
					</div>
				</div>

                <div className='h-3' />

                <div className='flex flex-col items-center w-full h-full shadow-lg p-4 bg-gray-50'>
					<div className='text-md text-red-600'>Second Semester</div>
				</div>

				<div className='h-5' />

				<div className='grid grid-cols-12'>
					<div className='col-span-8 shadow-lg'>
						<div className='w-full h-full p-4 bg-gray-50'>
							<div className='text-lg font-semibold'>{'>'} LSTM Team</div>
							<div className='h-5' />
							<p className=''>
                            LSTMs are a powerful regression technique that account for past trends in data to make future predictions. In this project, the objective was to develop an LSTM to directly compute RUL for an engine based upon parameters identified through PCA. This model was trained under the assumption of both a linear engine degradation function (RUL), and differential degradation, as a method of determining which RUL model was a better fit for RUL prediction. 
							</p>
							<div className='h-3' />
							<p className=''>
                            The results of the LSTM model were the most promising of all models developed, yielding a 65% accuracy of RUL prediction under the assumption of linear RUL and a close to 80% accuracy for the differential RUL model. In total the models were trained on over 90000+ data points, and tested with both testing data, and specifically developed "hard" testing data as a method of robust model validation.
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
                            Given the range of “dangerous” sensor values, we placed an arbitrary threshold where 32% of units had failed. From there, we curve fitted the data to predict future sensor values from portions of the data.
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
							Using DBSCAN for unsupervised anomaly detection we developed column specific CDFs for the probability of failure which allowed for a remaining useful life prediction
							</p>
                            <div className='h-5' />
							<p className=''>
							Additionally, we tried using other clustering algorithms such as OPTICS, KNN, K-means, and Expectation-Maximization to see which algorithm would work best for our purposes. We discovered that, for our dataset, these typical clustering algorithms were not as useful as other models like LSTMs.
							</p>
						</div>
					</div>
					<div className='flex items-center justify-center col-span-4 shadow-lg'>
						<img src={require('./resources/graphics/ClusteringGraph.png')}></img>
					</div>
				</div>

                <div className='h-5' />

				<div className='grid grid-cols-12'>
					<div className='col-span-12 shadow-lg'>
						<div className='w-full h-full p-4 bg-gray-50'>
							<div className='text-lg font-semibold'>{'>'} CNN Team</div>
							<div className='h-5' />
							<p className=''>
							Convolutional Neural Networks (CNN) was a method employed to analyze chunks of the data at a time, reducing them to classifiable embeddings. While a classification approach garnered some results, the regression approach was unsuccessful. This is because CNNs are designed to analyze two-dimensional input, whereas time series is one-dimensional. Additionally, time-series requires a different set of pre-processing's steps, such as normalization and differencing, which may not be compatible with the standard pre-processing. A potential area of future work is to convert NASA data to images for more powerful, suitable CNN analyses.
							</p>
						</div>
					</div>
				</div>

			</div>

{/* AHH */}

            <div className='w-full h-full p-8'>
				<div className='flex flex-col items-center w-full h-full shadow-lg p-4 bg-gray-50'>
					<div className='text-2xl text-red-600'>Future Work</div>
				</div>

				<div className='h-5' />
				<div>
					<div className='shadow-lg'>
						<div className='w-full h-full p-4 bg-gray-50'>
							<div className='text-lg font-semibold'>{'>'} Enterprise Solution</div>
							<div className='h-5' />
							<p className=''>
                            To compose a unified solution using all current models and algorithms the team plans to restructure individual processes into a singular data pipeline capable of ingestion through prediction/analysis. This will include hosting it on the Data Mine's resources to fully automate the ETL process. Furthermore, connecting the current website with different steps of the pipeline to allow for dynamic data visualization and enhanced user interaction. 
							</p>
						</div>
					</div>

                    <div className='h-5' />

                    <div className='shadow-lg'>
						<div className='w-full h-full p-4 bg-gray-50'>
							<div className='text-lg font-semibold'>{'>'} RUL Prediction</div>
							<div className='h-5' />
                            <p className=''>
                            To enhance RUL prediction, the successful LSTM and classifier models will be expanded through hyperparameter turning, improving model architectures through research and testing, as well as considering more effective predictive maintenance techniques. Moreover, a Physics Integrated Neural Network (PINN) will be developed to simulate ideal engine behavior, determine more detailed degradation functions, and generate temperature-specific testing data. A more robust clustering approach could also be investigated to improve the anomaly detection CDF generation process.
							</p>
						</div>
					</div>
				</div>
			</div>

            {/* AHHH */}

            <div className='w-full h-full p-8'>
				<div className='flex flex-col items-center w-full h-full shadow-lg p-4 bg-gray-50'>
					<div className='text-2xl text-red-600'>Tools and Libraries</div>
				</div>

				<div className='h-5' />
				<div>
					<div className='shadow-lg'>
						<div className='w-full h-full p-4 bg-gray-50'>
							<div className='text-lg font-semibold'>{'>'}</div>
							<div className='h-5' />
							<p className=''>
                            The primary tools used included Python, using Pandas, TensorFlow, Keras, and Matplotlib libraries in Jupyter Notebook and Anaconda environments. The database was constructed using MongoDB and Docker. Lucid Chart was used to create UI architecture, dodaf ov-1 graph, and RUL Pipeline. The UI was generated using React, Flask, and Netlify hosting.
							</p>
						</div>
					</div>
				</div>
			</div>
        </div>
    );
};

export default About;
