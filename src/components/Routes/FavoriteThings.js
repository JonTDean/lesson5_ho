import React, { useState } from 'react';

export default function FavoriteThings() {
	const [name, setName] = useState('');
	const [type, setType] = useState('');

	const favoriteObj = {
		Food: 'Papas Fritas',
		Music: 'Ella Callita',
		Animal: 'Turkey',
		Holiday: 'Halloween',
	};

	function handleClick(e) {
		e.preventDefault();
		// console.log(e.target.id);
		// console.log(favoriteObj[e.target.id]);
		setName(favoriteObj[e.target.id]);
		setType(e.target.id);
	}
	return (
		<div>
			<>
				<h1>Click One of these</h1>
				<p id="Food" onClick={handleClick}>
					Food
				</p>
				<p id="Music" onClick={handleClick}>
					Music
				</p>
				<p id="Animal" onClick={handleClick}>
					Animal
				</p>
				<p id="Holiday" onClick={handleClick}>
					Holiday
				</p>
			</>

			{type.length < 1 ? (
				<></>
			) : (
				<p>
					Favorite {type}: {name}
				</p>
			)}
		</div>
	);
}
