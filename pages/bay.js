const fs = require('fs');

// Gewichtungen
const weights = {
  'DEU': 1,
  'MAT': 1,
  'FRE': 1,
  'ABITUR': 4
};

// lesen der json
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

// formel fuer gesamtpunkte
function calculatePoints(subject) {
  const subjectPoints = data[subject];
  const subjectWeight = weights[subject];

  const bestPoints = subjectPoints.slice().sort().reverse().slice(0, 4);
  const sumPoints = bestPoints.reduce((a, b) => a + b);

  const points = sumPoints / bestPoints.length;
  return points * subjectWeight;
}

// abiformel
const deuPoints = calculatePoints('DEU');
const matPoints = calculatePoints('MAT');
const frePoints = calculatePoints('FRE');
const abiPoints = calculatePoints('ABITUR');

const sumPoints = deuPoints + matPoints + frePoints + abiPoints;
const sumWeights = weights['DEU'] + weights['MAT'] + weights['FRE'] + weights['ABITUR'];
const abiGrade = sumPoints / sumWeights;

// abinote in json
data['Abiturnote']['ABI'] = [abiGrade];

fs.writeFileSync('data.json', JSON.stringify(data));
