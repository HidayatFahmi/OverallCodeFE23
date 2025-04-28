const voteArr = [1, 2, 1, 1, 2, 2, 2, 1, 2, 1, 1, 2, 2, 2, 2, 1, 2];

const electionFunction = (votes) => {
  let voters1 = 0;
  let voters2 = 0;

  for (let a = 0; a < voteArr.length; a++) {
    if (voteArr[a] == 1) voters1++;
    else if (voteArr[a] == 2) voters2++;
  }

  console.log("voter1 = ", voters1);

  return {
    voters1,
    voters2,
  };
};

console.log(electionFunction(voteArr));
const electionResult = electionFunction();

console.log(electionResult.voters1);

// =============================== cara2
const generatePeopleVote = () => {
  let votersMax = 20;
  let peopleVote = [];
  for (let a = 0; a < votersMax; a++) {
    peopleVote.push(Math.ceil(Math.random() * 2));
  }
  console.log(peopleVote);
  return peopleVote;
};

const result = (voters) => {
  let candidate1 = 0;
  let candidate2 = 0;
  let winner = "";

  for (let a of voters) {
    if (a == 1) candidate1++;
    else candidate2++;
  }

  if (candidate1 > candidate2) winner = `candidate 1 is the winner`;
  else if (candidate2 > candidate1) winner = "candidate 2 is the winner";
  else winner = "draw";

  return { candidate1, candidate2, winner };
};

console.log(result(generatePeopleVote()));
