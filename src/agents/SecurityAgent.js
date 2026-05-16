const BaseAgent = require('./BaseAgent');

class SecurityAgent extends BaseAgent {
  constructor() {
    super('安全审查Agent');
  }

  async analyze(code, language) {
    await this.simulateDelay();
    
    const findings = [];
    let score = 100;

    if (code.includes('eval(')) {
      findings.push({
        type: 'security',
        severity: 'high',
        description: '使用 eval() 存在代码注入风险'
      });
      score -= 40;
    }

    if (code.includes('innerHTML')) {
      findings.push({
        type: 'security',
        severity: 'medium',
        description: 'innerHTML 可能导致 XSS 攻击'
      });
      score -= 20;
    }

    if (code.includes('.password') || code.includes('passwd')) {
      findings.push({
        type: 'security',
        severity: 'high',
        description: '检测到可能的密码处理，请确保安全存储'
      });
      score -= 25;
    }

    return {
      agent: this.name,
      score: Math.max(score, 0),
      findings,
      language
    };
  }
}

module.exports = SecurityAgent;
