Problem-01: Student Introduction Generator

function studentIntroduction(student) {
    if (typeof student != "object" || student == null) {
        return "Invalid";
    }
    if (!("name" in student) || !("age" in student) || !("course" in student)) {
        return "Invalid";
    }
    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}




Problem-02: Active User Filter

function filterActiveUsers(users) {
    if (!Array.isArray(users) || users.length == 0) {
        return "Invalid";
    }
    for (let i = 0; i < users.length; i++) {
        if (!("isActive" in users[i])) {
            return "Invalid";
        }
    }
    return users.filter(function(user) {
        return user.isActive == true;
    });
}



Problem-03: Trending Hashtag Counter



function countHashtags(caption) {
    if (typeof caption != "string") {
        return "Invalid";
    }
    let words = caption.split(" ");
    let hashtagCount = 0;
    let longestTag = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith("#")) {
            hashtagCount++;
            let tag = words[i].slice(1);
            if (tag.length > longestTag.length) {
                longestTag = tag;
            }
        }
    }
    return {
        hashtagCount: hashtagCount,
        longestTag: longestTag
    };
}





Problem-04: Bonus Score Calculator


function bonusScore(scores) {
    if (!Array.isArray(scores) || scores.length == 0) {
        return "Invalid";
    }
    for (let i = 0; i < scores.length; i++) {
        if (typeof scores[i] != "number") {
            return "Invalid";
        }
    }
    let updatedScores = scores.map(function(score) {
        return score + 10;
    });
    let total = updatedScores.reduce(function(sum, score) {
        return sum + score;
    }, 0);
    return total;
}






Problem-05: Debugging Challenge - AI Leaderboard Generator


/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {

    if (!Array.isArray(students)) {
        return "Invalid";
    }
    if (students.length == 0) {
        return "Invalid";
    }
    for (let i = 0; i < students.length; i++) {
        if (!("name" in students[i]) || !("score" in students[i])) {
            return "Invalid";
        }
        if (typeof students[i].score != "number") {
            return "Invalid";
        }
    }
    const qualified = students.filter(student => {
        return student.score >= 70;
    });
    const names = qualified.map(({ name }) => {
        return name.toUpperCase();
    });
    return names.slice(0, 3);
}