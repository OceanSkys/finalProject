import React from 'react';

const SearchBar = (props) => {
	return (
		<div className='search'>
			<h1 className='h1'>Search Products</h1>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
		</div>
	);
};

export default SearchBar;