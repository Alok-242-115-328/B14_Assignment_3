function bonusScore(scores){
  
  if(!Array.isArray(scores) ||scores.length === 0){
    return "Invalid";
  }

  const allNumbers = scores.every(score => typeof score === "number");
  if (!allNumbers){
    return "Invalid";
  }
  const updatedScores = scores.map(score => score + 10);
  const totalScore = updatedScores.reduce((sum, score) => sum + score, 0);

  return totalScore;
}