// firebaseBugSolution.js

const database = firebase.database();

database.ref('data/myData').once('value', (snapshot) => {
  const data = snapshot.val();

  // Validate data type before using it
  if (typeof data === 'string') {
    console.log('Data is a string:', data);
  } else if (typeof data === 'number') {
    console.log('Data is a number:', data);
  } else if (data === null) {
    console.log('Data is null');
  } else {
    console.error('Unexpected data type:', typeof data);
  }
});