const { question } = require("./question.js");

const makeQuery = (selected) => {
  let answer = selected.selections;
  switch (answer) {
    case question[0]:
      console.log("hi");
      break;

    case question[1]:
      break;

    case question[2]:
      break;

    case question[3]:
      break;

    case question[4]:
      break;

    case question[5]:
      break;

    case question[6]:
      break;

    case question[7]:
      break;

    case question[8]:
      break;
  }
};

module.exports = { makeQuery };
