const addToBatch2 = (arr, number) => {

    if (arr.length >= 5) {
        return arr;
    }

    return arr.concat(number);
    };

    console.log(addToBatch([1], 3)); // Output: [1, 3]
    console.log(addToBatch([1, 2, 3], 4)); // Output: [1, 2, 3, 4]
    console.log(addToBatch([], 8)); // Output: [8]
    console.log(addToBatch([1, 2, 3, 4, 5, 6], 7)); // Output: [1, 2, 3, 4, 5, 6]
    console.log(addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]


const cohort = {
        name: 'May2022',
        id: 1234,
        address: {
          city: 'London',
          postcode: 'E1 123'
        },
        hobbies: ['writing', 'tennis', 'cooking']
      };
      