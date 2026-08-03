type QuizClientState =
  | { phase: "lobby"; playersConnected: string[] }
  | { phase: "question"; question: string; questionIndex: number }
  | { phase: "reveal"; correctAnswer: string; scoreDlelta: number; totalScore: number }
  | { phase: "gameOver"; finalScores: Record<string, number> };


function renderState(state: QuizClientState): string {
  switch (state.phase) {
    case "lobby":
      return 'Waiting For players: ${state.playersConnected.join(",")}';
    case "question":
      return 'Q${state.questionIndex}: ${state.questiponText} (${state.timeRemaining}s left) ';
    case "reveal":
      return 'Correct answer: ${state.correctAnser} | +${state.scoreDelta} pts(total: ${state.totalScore})';
      case "gameOver":
            const winner = Object.entries(state.finalScores).sort((a, b) => b[1] - a[1])[0];
            return `Game over! Winner: ${winner[0]} with ${winner[1]} points`;
  }
    
  }
  
