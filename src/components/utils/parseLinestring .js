
export const parseLinestring = (wktString) => {


    // Use a regular expression to match and extract the first two numbers


    const match = wktString.match(/\d+\.\d+/g);

    if (match && match.length >= 2) {
        // Convert the matched values to numbers and store them in an array
        const coordinates = match.slice(0, 2).map(Number);
        console.log(coordinates); // Output: [50.3292096568498, 40.400225120066125]
        return coordinates
    } else {
        return undefined
    }
}
