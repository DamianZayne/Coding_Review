const CodeReviewSystem = require('./core/CodeReviewSystem');

async function main() {
  console.log('🤖 AI代码审查系统启动中...\n');
  
  const system = new CodeReviewSystem();
  const sampleCode = `
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}
  `;
  
  await system.reviewCode(sampleCode, 'javascript');
}

main().catch(console.error);
