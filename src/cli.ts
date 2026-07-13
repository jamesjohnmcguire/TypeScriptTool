#!/usr/bin/env node
import { Command } from 'commander';
import { helloWorld } from './index.js';

const program = new Command();

program
	.name('mycli')
	.description('My modern TypeScript CLI')
	.version('0.1.0');

program
	.command('hello')
	.description('Say hello')
	.argument('[name]', 'Name to greet')
	.action((name) => {
	console.log(helloWorld(name));
	});

program.parse();
