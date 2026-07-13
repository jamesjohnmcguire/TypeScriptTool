export function helloWorld(name: string = 'World'): string
{
	return `Hello, ${name}! 👋 This is your modern TS CLI library.`;
}

// Future git integration example
export async function getGitStatus()
{
	const simpleGit = (await import('simple-git')).simpleGit();
	return simpleGit.status();
}
