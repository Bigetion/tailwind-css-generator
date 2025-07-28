import { build } from 'esbuild';
import fs from 'fs';
import path from 'path';

const buildOptions = {
  bundle: true,
  sourcemap: false,
  target: ['es2018'],
  external: [], // Bundle everything
};

async function buildAll() {
  try {
    console.log('🚀 Building Tailwind CSS Generator...\n');

    // Main build - Full version
    console.log('📦 Building Full Version...');
    
    // CommonJS build
    await build({
      ...buildOptions,
      entryPoints: ['src/index.js'],
      format: 'cjs',
      outfile: 'index.js',
      platform: 'node',
      banner: { js: '// CommonJS build for Node.js' }
    });

    // ES Modules build
    await build({
      ...buildOptions,
      entryPoints: ['src/index.js'],
      format: 'esm',
      outfile: 'index.esm.js',
      platform: 'neutral',
    });

    // Minified build for CDN
    await build({
      ...buildOptions,
      entryPoints: ['src/index.js'],
      format: 'esm',
      outfile: 'index.min.js',
      platform: 'neutral',
      minify: true,
      globalName: 'generateTailwindCss',
    });
    console.log('✅ Full version builds complete\n');

    // Basic builds - Compact version with essential utilities
    console.log('📦 Building Basic Version...');
    
    await build({
      ...buildOptions,
      entryPoints: ['src/mini/basic.js'],
      format: 'esm',
      outfile: 'basic.esm.js',
      platform: 'neutral',
    });

    await build({
      ...buildOptions,
      entryPoints: ['src/mini/basic.js'],
      format: 'esm',
      outfile: 'basic.min.js',
      platform: 'neutral',
      minify: true,
      globalName: 'generateTailwindBasic',
    });
    console.log('✅ Basic version builds complete\n');

    // Get file sizes
    const fullCjsSize = (fs.statSync('index.js').size / 1024).toFixed(1);
    const fullEsmSize = (fs.statSync('index.esm.js').size / 1024).toFixed(1);
    const fullMinSize = (fs.statSync('index.min.js').size / 1024).toFixed(1);
    
    const basicEsmSize = (fs.statSync('basic.esm.js').size / 1024).toFixed(1);
    const basicMinSize = (fs.statSync('basic.min.js').size / 1024).toFixed(1);

    console.log('📊 Build Summary:');
    console.log('   🎯 Full Version (All Utilities):');
    console.log(`      CommonJS: ${fullCjsSize} KB`);
    console.log(`      ES Modules: ${fullEsmSize} KB`);
    console.log(`      Minified: ${fullMinSize} KB`);
    console.log('   🚀 Basic Version (Essential Utilities):');
    console.log(`      ES Modules: ${basicEsmSize} KB`);
    console.log(`      Minified: ${basicMinSize} KB`);
    
    const savings = ((1 - basicMinSize / fullMinSize) * 100).toFixed(1);
    console.log(`   💡 Size reduction: ${savings}% smaller than full version`);
    console.log('\n🎉 All builds completed successfully!');

  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

buildAll();
