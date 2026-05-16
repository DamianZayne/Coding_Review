const BaseAgent = require('./BaseAgent');

class SyntaxAgent extends BaseAgent {
  constructor() {
    super('语法规范Agent');
  }

  async analyze(code, language) {
    await this.simulateDelay();
    
    const findings = [];
    let score = 100;

    if (code.includes('var ')) {
      findings.push({
        type: 'syntax',
        severity: 'low',
        description: '使用 var 而非 let/const，建议使用块级作用域变量'
      });
      score -= 10;
    }

    if (code.includes('for (let i = 0')) {
      findings.push({
        type: 'syntax',
        severity: 'medium',
        description: '建议使用更现代的数组遍历方法（如 forEach、reduce）'
      });
      score -= 15;
    }

    if (!code.includes('//') && !code.includes('/*')) {
      findings.push({
        type: 'syntax',
        severity: 'low',
        description: '缺少注释，建议添加代码说明'
      });
      score -= 5;
    }

    return {
      agent: this.name,
      score: Math.max(score, 0),
      findings,
      language
    };
  }
}

module.exports = SyntaxAgent;
