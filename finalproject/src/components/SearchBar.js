import React from 'react';

const SearchBar = (props) => {
	return (

	<div className='search my-4 border border-dark'>
		<h1 className='h1 mx-4'>Search Products</h1>
		<input
			className='form-control mx-5'
			value={props.value}
			onChange={(event) => props.setSearchValue(event.target.value)}
			placeholder='Type to search...'
		></input>
	</div>			

	);
};

export default SearchBar;