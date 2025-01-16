/* Now the teacher needs your help converting the student score to a letter grade
Your function should return a string representing a letter grade based on the score.
*/

function getAverage(scores) {
    let totalSum = 0
        for (let i = 0; i < scores.length; i++){
            totalSum += scores[i]
        }
    
    let average = totalSum / scores.length
    return average
    }

    function getGrade(score) {
        if (score == 100){
            return "A++"
        } else if (score >= 90){
            return "A"
            } else if (score >= 80){
                return "B"
                } else if (score >= 70){
                    return "C"
                    } else if (score >= 60){
                        return "D"
                        } else {
                        score <= 59
                            return "F"
                        }
    }

    console.log(getGrade(96));
    console.log(getGrade(82));
    console.log(getGrade(56));