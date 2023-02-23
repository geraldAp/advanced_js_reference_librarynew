// default export

// since we are using the default export, we don't have
//direct access to the people we could import it but naa
// we will pass people as a parameter
const showPeople = (people) => {
  const newPeople = people
    .map((person) => {
      const { Name, job } = person;
      return `<p>${Name} <strong>${job}</strong></p>`;
    })

    //   joins everything into one giant screen
    // an empty string since we don't want anything in between
    .join("");

  // we will set this up later in the app js
  // container.innerHTML = newPeople;

  // then we return newPeople

  return newPeople;
};

export default showPeople;

// for default the only downside is you can only have one default export per file 

// this can be done to but its primally not best practice not saying its bad but yh

// export default (people) => {
//     const newPeople = people
//       .map((person) => {
//         const { Name, job } = person;
//         return `<p>${Name} <strong>${job}</strong></p>`;
//       })

//       //   joins everything into one giant screen
//       .join("");

// return newPeople;
  
//   };

// const showPeople = () => {
//     const newPeople = people
//       .map((person) => {
//         const { Name, job } = person;
//         return `<p>${Name} <strong>${job}</strong></p>`;
//       })

//       //   joins everything into one giant screen
//       .join(""); // an empty string since we don't want anything in between
//     container.innerHTML = newPeople;
//   };
