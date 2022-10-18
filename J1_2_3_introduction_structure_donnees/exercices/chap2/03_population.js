const populations = [
  { id: 0, name: "Alan" },
  { id: 1, name: "Albert" },
  { id: 2, name: "Jhon" },
  { id: 3, name: "Brice" },
  { id: 4, name: "Alexendra" },
  { id: 5, name: "Brad" },
  { id: 6, name: "Carl" },
  { id: 7, name: "Dallas" },
  { id: 8, name: "Dennis" },
  { id: 9, name: "Edgar" },
  { id: 10, name: "Erika" },
  { id: 11, name: "Isaac" },
  { id: 12, name: "Ian" },
];

/* for (const el of populations) {
  el.nbOfA = 0;
  el.nbOfL = 0;

  for (let letter of el.name) {
    letter = letter.toUpperCase();
    if (letter === "A") {
      el.nbOfA++;
    } else if (letter === "L") {
      el.nbOfL++;
    }
  }
}

console.log(populations); */

// ================================

const populations_counted = populations.map( person => {
    const letters = person.name.toLowerCase().split("");

    return {
        ...person,
        // nbOfL : letters.filter(c => c === 'l').length,
        // nbOfA : letters.filter(c => c === 'a').length
        count: letters.filter(c => c === 'l' || c === 'a').length
    }
} );
const populations_sorted = populations_counted.sort( (a, b) => a.count - b.count );

populations_sorted

// ================================

const populations_counted_2 = populations.map( person => {

    return {
        ...person,
        // nbOfL : person.name.replace(/[^l]/ig, '').length,
        // nbOfA : person.name.replace(/[^a]/ig, '').length 
        count : person.name.replace(/[^al]/ig, '').length 
    }
} );

const populations_sorted_2 = populations_counted_2.sort( (a, b) => a.count - b.count );
