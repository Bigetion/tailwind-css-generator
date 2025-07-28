// Test CommonJS and ES Modules builds
import fs from 'fs';

console.log('🧪 Testing built files...\n');

// Test CommonJS build with dynamic import since we're in ES module mode
console.log('Testing CommonJS build...');
try {
  // Since we're in ES module mode, we can't use require directly
  // Let's just check if the file exists and has the right format
  const cjsContent = fs.readFileSync('./index.js', 'utf8');
  if (cjsContent.includes('module.exports') || cjsContent.includes('exports.')) {
    console.log('✅ CommonJS build has correct format');
  } else {
    console.log('⚠️  CommonJS build format looks unusual');
  }
} catch (error) {
  console.error('❌ CommonJS test failed:', error.message);
}

// Test ES Modules build
console.log('\nTesting ES Modules build...');
try {
  const module = await import('./index.esm.js');
  console.log('✅ ES Modules import successful');
  console.log('   Default export type:', typeof module.default);
  console.log('   generateTailwindCssString type:', typeof module.generateTailwindCssString);
  
  // Test CSS generation
  if (typeof module.generateTailwindCssString === 'function') {
    const css = module.generateTailwindCssString();
    console.log('   CSS generated:', css.length > 0 ? `${Math.round(css.length / 1024)}KB` : 'Failed');
    console.log('   First 100 chars:', css.substring(0, 100) + '...');
  }
} catch (error) {
  console.error('❌ ES Modules test failed:', error.message);
}

console.log('\n🎉 Test completed!');
