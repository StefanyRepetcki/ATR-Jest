module.exports = (grade1, grade2, grade3) => {
    const average = (grade1 + grade2 + grade3) / 3;
    return average >= 6;
};
