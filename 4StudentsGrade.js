let studentScore = 101;
let grade = null;
let message = "";

const gradeStudent = (score) => {
  if (score < 0 || score > 100) {
    grade = null;
    message = "student score range must be 0 - 100";
  } else {
    if (score >= 85) {
      grade = "A";
      message = "Excellent";
    } else if (score >= 75 && score < 85) {
      grade = "B";
      message = "Good Job";
    } else if (score >= 60 && score < 75) {
      grade = "C";
      message = "Keep Practicing";
    } else {
      grade = "D";
      message = "Needs Improvement";
    }
  }
  return { grade, message };
};

const result = gradeStudent(studentScore);
console.log(result.grade);
