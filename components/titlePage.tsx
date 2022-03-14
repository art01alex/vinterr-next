import React, { Children } from 'react';

const TitlePage = ({ children = '' }): JSX.Element => {

	return <h1 className='title_page'>
		{children}
	</h1>;

};

export default TitlePage;