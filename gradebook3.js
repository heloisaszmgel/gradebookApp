/* Complete the function hasPassingGrade that takes a student score as a parameter. Your function should return true 
if the student has a passing grade and false if they do not. */

function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

    function getGrade(score) {
        if (score === 100) {
        return "A++";
        } else if (score >= 90) {
            return "A";
            } else if (score >= 80) {
                return "B";
                } else if (score >= 70) {
                    return "C";
                    } else if (score >= 60) {
                        return "D";
                        } else {
                            return "F";
                            }
                        }

    function hasPassingGrade(score) {
        let grade = getGrade(score)
        if (grade != "F"){
            return true
            } else {
                return false
    }
    
}
console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));