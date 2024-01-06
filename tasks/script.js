let myResume = {
    "basics": {
      "name": "Manoj R",
      "email": "manojchandran1997@gmail.com",
      "phone": "0000000000",
      "degree": "M.Sc",
      "location": {
        "address": "xxxxxx"
      }
    },
    "work": [
      {
        "company": "KMCH",
        "position": "Executive",
        "startDate": "2021-11-24",
        "endDate": "2023-11-15",
        "summary": "I am the executive handling various tasks and gaining lots of experience"
      }
    ],
    "education": [
      {
        "institution": "Dr.N.G.P Arts and Science college",
        "department": "Computer Science",
        "batch start year": 2017,
        "batch end year": 2019
      }
    ],
    "skills": [
      {
        "name": "javascript",
        "level": "beginner"
      }
    ],
    "languages": [
      {
        "language": "Tamil,English"
      }
    ]
  };

  console.log(myResume)
  
  // Using a for loop
  console.log("Using for loop:");
  for (let i = 0; i < myResume.education.length; i++) {
    console.log(myResume.education[i]);
  }
  
  // Using for...in loop
  console.log("\nUsing for...in loop:");
  for (let key in myResume.basics) {
    console.log(`${key}: ${myResume.basics[key]}`);
  }
  
  // Using forEach for work array
  console.log("\nUsing forEach for work array:");
  myResume.work.forEach((item) => {
    console.log(item);
  });
  
  // Using for...of loop for skills array
  console.log("\nUsing for...of loop for skills array:");
  for (let skill of myResume.skills) {
    console.log(skill);
  }
  