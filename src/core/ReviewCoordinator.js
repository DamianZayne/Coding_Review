class ReviewCoordinator {
  synthesize(agentResults) {
    const totalScore = agentResults.reduce((sum, r) => sum + r.score, 0);
    const overallScore = Math.round(totalScore / agentResults.length);
    
    const allFindings = agentResults.flatMap(r => 
      r.findings.map(f => ({ ...f, agent: r.agent }))
    );
    
    const suggestions = this.generateSuggestions(allFindings);
    
    return {
      overallScore,
      details: agentResults,
      suggestions,
      timestamp: new Date().toISOString()
    };
  }

  generateSuggestions(findings) {
    const suggestions = [];
    
    if (findings.some(f => f.severity === 'high')) {
      suggestions.push('优先修复高严重性问题');
    }
    
    if (findings.some(f => f.type === 'performance')) {
      suggestions.push('考虑性能优化，使用更高效的算法');
    }
    
    if (findings.some(f => f.type === 'syntax')) {
      suggestions.push('遵循代码风格规范，提高可读性');
    }
    
    suggestions.push('添加单元测试覆盖关键逻辑');
    
    return suggestions;
  }
}

module.exports = ReviewCoordinator;
