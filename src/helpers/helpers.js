export function areThereMissingFields({
  name,
  difficulty,
  duration,
  season,
  countries,
}) {
  return (
    !name ||
    !/^[a-zA-Z\s]*$/.test(name) ||
    !difficulty ||
    !duration ||
    !season ||
    countries?.length < 1
  );
}

export const bubbleishSort = (arr, key, order) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (order?.toUpperCase() === "ZA") {
        if (arr[j][key] < arr[j + 1][key]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      } else {
        if (arr[j][key] > arr[j + 1][key]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  }
  return arr;
};

export const applyFilters = (arr, { activity, continents }) => {
  let filtered = arr;
  // Filter by activity
  if (activity && typeof activity === "string") {
    filtered = filtered.filter((country) =>
      country.Activities.some((act) => act.name === activity)
    );
  }
  // Filter by Continents
  if (Object.keys(continents).length) {
    for (let continent in continents) {
      if (!continents[continent]) {
        filtered = filtered.filter(
          (country) => country.continent !== continent
        );
      }
    }
  }
  return filtered;
};

export const checkForErrors = (data) => {
  let errors = {
    activity: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: "",
  };

  // Activity Name
  if (!/^[a-zA-Z\s]*$/.test(data.name)) {
    errors.activity = "Use only letters and spaces";
  } else if (data.name === "") {
    errors.activity = "Name is required";
  }

  // Difficulty
  if (
    typeof data.difficulty !== "number" ||
    data.difficulty < 1 ||
    data.difficulty > 5
  ) {
    errors.difficulty = "Expected value: integer between 1 and 5";
  }

  // Duration
  if (
    typeof data.duration !== "number" ||
    data.duration < 1 ||
    data.duration > 24
  ) {
    errors.duration = "Expected value: integer between 1 and 24";
  }

  // Season
  if (
    ["summer", "winter", "spring", "fall", "any"].indexOf(
      data.season?.toLowerCase()
    ) === -1
  ) {
    errors.season = "Select a valid season from the list";
  }

  if (!data.countries?.length) {
    errors.countries = "Country selection is still pending";
  }

  return errors;
};

export const initialFormState = {
  name: "",
  difficulty: 0,
  duration: 0,
  season: "",
  countries: [],
};

export const stateCountries = (sort, filters, countriesToShow) => {
  
  return applyFilters(
    bubbleishSort(
      countriesToShow,
      sort.sortBy,
      sort.order
    ),
    filters
  );
}
