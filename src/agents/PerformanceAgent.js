const BaseAgent = require('./BaseAgent');

class PerformanceAgent extends BaseAgent {
  constructor() {
    super('性能优化Agent');
  }

  async analyze(code, language) {
    await this.simulateDelay();
    
    const findings = [];
    let score = 100;

    if (code.includes('for (let i = 0')) {
      findings.push({
        type: 'performance',
        severity: 'medium',
        description: '循环中可考虑使用 reduce 提升性能和可读性'
      });
      score -= 15;
    }

    if (code.includes('console.log') && code.length > 500) {
      findings.push({
        type: 'performance',
        severity: 'low',
        description: '生产环境应移除调试日志'
      });
      score -= 5;
    }

    if (code.includes('document.getElementById') && code.includes('document.querySelector')) {
      findings.push({
        type: 'performance',
        severity: 'low',
        description: 'DOM 查询可缓存优化'
      });
      score -= 10;
    }

    return {
      agent: this.name,
      score: Math.max(score, 0),
      findings,
      language
    };
  }
}

module.exports = PerformanceAgent;
