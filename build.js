import { build } from 'esbuild';
import fs from 'fs';
import path from 'path';

const buildOptions = {
  entryPoints: ['src/index.js'],
  bundle: true,
  sourcemap: false,
  target: ['es2018'],
  external: [], // Bundle everything
};

async function buildAll() {
  try {
    console.log('🚀 Building Tailwind CSS Generator...\n');

    // CommonJS build
    console.log('📦 Building CommonJS...');
    await build({
      ...buildOptions,
      format: 'cjs',
      outfile: 'index.js',
      platform: 'node',
      banner: {
        js: '// CommonJS build for Node.js'
      }
    });
    console.log('✅ CommonJS build complete\n');

    // ES Modules build
    console.log('📦 Building ES Modules...');
    await build({
      ...buildOptions,
      format: 'esm',
      outfile: 'index.esm.js',
      platform: 'neutral',
    });
    console.log('✅ ES Modules build complete\n');

    // Minified build for CDN
    console.log('📦 Building minified version...');
    await build({
      ...buildOptions,
      format: 'esm',
      outfile: 'index.min.js',
      platform: 'neutral',
      minify: true,
      globalName: 'generateTailwindCss',
    });
    console.log('✅ Minified build complete\n');

    // Get file sizes
    const cjsSize = (fs.statSync('index.js').size / 1024).toFixed(1);
    const esmSize = (fs.statSync('index.esm.js').size / 1024).toFixed(1);
    const minSize = (fs.statSync('index.min.js').size / 1024).toFixed(1);

    console.log('📊 Build Summary:');
    console.log(`   CommonJS: ${cjsSize} KB`);
    console.log(`   ES Modules: ${esmSize} KB`);
    console.log(`   Minified: ${minSize} KB`);
    console.log('\n🎉 All builds completed successfully!');

  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

buildAll();
