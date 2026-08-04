function greet(name: string, title?: string): string{
  return title ? '${title} ${name}' : name;
}

greet("Tabi");
greet("Tabi", "Mrs"); 

function sumAll(...numbers: number[]): number{
  return numbers.reduce((total, n) => total + n, 0);
}

sumAll(1, 3, 5, 7, 5); 

function processArray(arr: number[], callback: (item: number) => number): number[]{
  return arr.map(callback);
}

processArray([1, 2, 3, 4], (n) => n * 2); 

function logMessage(msg: string): void{
  console.log(msg);
} 

function formatAnswerFeedback(
  isCorrect: boolean,
  playerName: string,
  pointsEarned: number,
): string {
  if (isCorrect) {
    return 'Error ${playerName} got it wrong.';
  }
  if (pointsEarned !== undefined) {
    return ' $ {playerName} got it right! +${pointEarned} points';
  }
  return '${playerName} got it right!';
}

type AnswerCheckResult =
     | { outcome: "correct" }
     | { outcome: "incorrect"; correctAnswer: string };


function checkAnswer(
  submittedAnswer: string,
  correctAnswer:string
): AnswerCheckResult{
  if(submittedAnswer === correctAnswer) {
    return { outcome: "correct" };
  } else {
    return { outcome: "incorrect", correctAnswer: correctAnswer };
  }
}

interface PlayerFields {
  name: string;
  score: number;
  isActive?: boolean;
}

type PlayerUpdate = Partial<PlayerFields>;


interface Player{
  id: string;
  name: string;
  score: number;
  isReady?: boolean;
}

type Ozone=Pick<Player, "id" | "name">;