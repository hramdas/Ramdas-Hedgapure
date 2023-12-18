//TRAVELLING - SEATING ARRANGEMENT

function findFacingSeatType(seatNumber) {
    const remaining = seatNumber % 12;

    switch (remaining) {
      case 0:
        console.log(seatNumber - 11, 'WS');
        break;
      case 1:
        console.log(seatNumber + 11,'WS');
        break;
      case 2:
        console.log(seatNumber + 9, 'MS');
        break;
      case 3:
        console.log(seatNumber + 7,'AS');
        break;
      case 4:
        console.log(seatNumber + 5,'AS');
        break;
      case 5:
        console.log(seatNumber + 3,'MS');
        break;
      case 6:
        console.log(seatNumber + 1, 'WS');
        break;
      case 7:
        console.log(seatNumber - 1, 'WS');
        break;
      case 8:
        console.log(seatNumber - 3, 'MS');
        break;
      case 9:
        console.log(seatNumber - 5, 'AS');
        break;
      case 10:
        console.log(seatNumber - 7, 'AS');
        break;
      case 11:
        console.log(seatNumber - 9, 'MS');
        break;
    }
}

const input = `2
18
40`
processTestCases(input)

function processTestCases(input) {
  const inputLines = input.trim().split("\n");
  const totalTestCases = parseInt(inputLines[0]);

  for (let i = 1; i <= totalTestCases; i++) {
      const seatNumber = parseInt(inputLines[i]);
      findFacingSeatType(seatNumber)
  }
}