export function parseLineString(wkt) {
    // Use a regular expression to match and extract number pairs
    const numberPairs = wkt.match(/-?\d+\.\d+\s+-?\d+\.\d+/g);
    
    if (numberPairs && numberPairs.length >= 2) {
      const coordinates = numberPairs.map(pair => pair.split(' ').map(Number));
      const center = coordinates.reduce(
        (acc, curr) => [acc[0] + curr[0], acc[1] + curr[1]],
        [0, 0]
      );
      center[0] /= coordinates.length;
      center[1] /= coordinates.length;
  
      return {
        coordinates: coordinates,
        center: center
      };
    } else {
      return {
        coordinates: [],
        center: null
      };
    }
  }
  
