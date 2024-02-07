#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import App from './app.js';

/*
import meow from 'meow';
 const cli = meow(
	`
	Usage
	  $ go

	Options
		--name  Your name

	Examples
	  $ go --name=Jane
	  Hello, Jane
`,
	{
		importMeta: import.meta,
		flags: {
			name: {
				type: 'string',
			},
		},
	},
); */

render(<App />);
