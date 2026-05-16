class BaseAgent {
  constructor(name) {
    this.name = name;
  }

  async analyze(code, language) {
    throw new Error('analyze() must be implemented');
  }

  simulateDelay(ms = 500) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

module.exports = BaseAgent;
