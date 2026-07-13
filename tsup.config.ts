import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/cli.ts', 'src/index.ts'],  // CLI + library entry
  format: ['esm'],  // or ['cjs', 'esm'] for broader support
  dts: true,
  sourcemap: true,
  clean: true,
  target: 'es2022',
  // For CLI shebang
  banner: {
    js: '#!/usr/bin/env node',
  },
});
