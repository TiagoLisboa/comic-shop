import { createGlobalStyle } from 'styled-components';

import * as colors from './colors';

export default createGlobalStyle`
	* {
	 	margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	body {
		-webkit-font-smoothing: antialiased;
		background-color: ${colors.primary};
	}

	body, input, button {
		font: 14px sans-serif;
	}

	#root {
		max-width: 1012px;
		margin: 0 auto;
		padding: 0 20px 500px;
	}

	button {
		cursor: pointer;
	}
`;
