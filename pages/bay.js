import fs from 'fs';

export async function getServerSideProps() {
  // Read the JSON file
  const data = fs.readFileSync('data.json');
  const jsonData = JSON.parse(data);

  // gehe durch json und sammle daten
  for (let i = 0; i < jsonData.length; i++) {
    const item = jsonData[i];
    const grades = item.grades;

    // gewichtung der noten
    const gradeWeights = {
      '1A': 1.5,
      '2A': 1.5,
      '3A': 1.5,
      '4A': 1.5,
      '1HJQ11DEU': 1,
      '1HJQ11MAT': 1,
      '1HJQ11ENG': 1,
      '2HJQ11DEU': 1,
      '2HJQ11MAT': 1,
      '2HJQ11ENG': 1,
      '1HJQ12DEU': 1,
      '1HJQ12MAT': 1,
      '1HJQ12ENG': 1,
      '2HJQ12DEU': 1,
      '2HJQ12MAT': 1,
      '2HJQ12ENG': 1,
    };

    //codes zum verkuerzen
    const subjectCodes = {
      '1A': 'abitur1',
      '2A': 'abitur2',
      '3A': 'abitur3',
      '4A': 'abitur4',
      '1HJQ11DEU': 'deutsch1HJQ11',
      '1HJQ11MAT': 'mathe1HJQ11',
      '1HJQ11ENG': 'englisch1HJQ11',
      '2HJQ11DEU': 'deutsch2HJQ11',
      '2HJQ11MAT': 'mathe2HJQ11',
      '2HJQ11ENG': 'englisch2HJQ11',
      '1HJQ12DEU': 'deutsch1HJQ12',
      '1HJQ12MAT': 'mathe1HJQ12',
      '1HJQ12ENG': 'englisch1HJQ12',
      '2HJQ12DEU': 'deutsch2HJQ12',
      '2HJQ12MAT': 'mathe2HJQ12',
      '2HJQ12ENG': 'englisch2HJQ12',
    };

    // Calc abinote
    const abiturGrades = {};
    for (const code in subjectCodes) {
      let sum = 0;
      let weightSum = 0;
      for (let j = 0; j < grades.length; j++) {
        const grade = grades[j];
        const gradeCode = grade[0];
        const gradeValue = grade[1];
        if (gradeCode.startsWith(code)) {
          const gradeWeight = gradeWeights[gradeCode];
          sum += gradeValue * gradeWeight;
          weightSum += gradeWeight;
        }
      }
      if (weightSum > 0) {
        const average = sum / weightSum;
        abiturGrades[subjectCodes[code]] = Math.round(average * 10)
        / 10;
      }
    }

    // ganze abinote
    const weights = [1, 1, 1, 1, 2, 2, 3];
    let sum = 0;
    let weightSum = 0;
    for (const code in subjectCodes) {
      if (abiturGrades[subjectCodes[code]]) {
        const gradeWeight = weights[weightSum];
        sum += abiturGrades[subjectCodes[code]] * gradeWeight;
        weightSum += 1;
      }
    }
    const abiturAverage = sum / 10;

    // abitur note zu schuelerdata
    item.abiturGrade = abiturAverage;
  }

  // updated json zurueck in json file
  const updatedData = JSON.stringify(jsonData, null, 2);
  fs.writeFileSync('data.json', updatedData);

  return {
    props: {
      jsonData,
    },
  };
}

