const SyntaxAgent = require('../agents/SyntaxAgent');
const SecurityAgent = require('../agents/SecurityAgent');
const PerformanceAgent = require('../agents/PerformanceAgent');
const ReviewCoordinator = require('./ReviewCoordinator');

class CodeReviewSystem {
  constructor() {
    this.agents = [
      new SyntaxAgent(),
      new SecurityAgent(),
      new PerformanceAgent()
    ];
    this.coordinator = new ReviewCoordinator();
  }

  async reviewCode(code, language) {
    console.log(`📝 开始审查代码 (${language})...\n`);
    
    const reviewTasks = this.agents.map(agent => 
      agent.analyze(code, language)
    );
    
    const results = await Promise.all(reviewTasks);
    const finalReport = this.coordinator.synthesize(results);
    
    this.displayReport(finalReport);
    return finalReport;
  }

  displayReport(report) {
    console.log('='.repeat(60));
    console.log('📊 代码审查报告');
    console.log('='.repeat(60));
    console.log(`整体评分: ${report.overallScore}/100\n`);
    
    report.details.forEach((detail, index) => {
      console.log(`${index + 1}. ${detail.agent}:`);
      console.log(`   评分: ${detail.score}/100`);
      console.log(`   发现: ${detail.findings.length} 个问题`);
      detail.findings.forEach(finding => {
        console.log(`   - ${finding.type}: ${finding.description}`);
      });
      console.log('');
    });
    
    console.log('💡 改进建议:');
    report.suggestions.forEach((suggestion, index) => {
      console.log(`${index + 1}. ${suggestion}`);
    });
  }
}

module.exports = CodeReviewSystem;
