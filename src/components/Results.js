import React from 'react';
import { Link } from 'react-router-dom';

function Results({ results, category }) {
	function loaded() {
		function characters() {
			return (
				<div className='results'>
					{results.map((result, index) => {
						return (
							<div className='Info' key={index}>
								<img
									className='Img'
									src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
									alt={`Picture of ${result.name}`}
								/>
								<div className='background'>
									<div className='Name'>
										<h3>{result.name}</h3>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			);
		}
		function comics() {
			return (
				<div className='results'>
					{results.map((result, index) => {
						return (
							<div className='Info' key={index}>
								<img
									className='comicImg'
									src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
									alt={`Picture of ${result.title}`}
								/>
								<div className='Name'>
									<h4>{result.title}</h4>
								</div>
							</div>
						);
					})}
				</div>
			);
		}

		if (category === 'characters') {
			return characters();
		} else if (category === 'comics') {
			return comics();
		}
	}
	console.log(results);
	function loading() {
		return <h1>Getting your info</h1>;
	}
	return results ? loaded() : loading();
}

export default Results;
