import {
  CLEAN_COUNTRY,
  GET_ACTIVITIES,
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_BY_NAME,
  GET_COUNTRY_BY_ID,
  MARK_ALL_CONTINENTS,
  RESET_SORT_AND_FILTERS,
  SET_ACTIVITY_FILTER,
  SET_CONTINENT_FILTER,
  SET_LOADING,
  SORT_COUNTRIES,
  UNMARK_ALL_CONTINENTS,
} from "./actionTypes";
import { bubbleishSort } from "../helpers/helpers";

const initialState = {
  globalCountries: [],
  countriesToShow: [],
  activities: [],
  country: {},
  sort: {
    sortBy: "name",
    order: "AZ",
  },
  filters: {
    continents: {
      Asia: true,
      "North America": true,
      "South America": true,
      Africa: true,
      Europe: true,
      Oceania: true,
      Antarctica: true,
    },
    activity: "",
  },
  loading: false,
};

export default function reducer(state = initialState, { type, payload }) {
  const stateCopy = structuredClone(state);
  switch (type) {
    case GET_ALL_COUNTRIES: {
      return {
        ...stateCopy,
        globalCountries: payload,
        countriesToShow: payload,
        loading: false,
      };
    }
    case GET_COUNTRY_BY_ID: {
      return {
        ...stateCopy,
        country: payload,
        loading: false,
      };
    }
    case GET_COUNTRIES_BY_NAME: {
      return {
        ...stateCopy,
        countriesToShow: payload,
        loading: false,
      };
    }
    case SORT_COUNTRIES: {
      return {
        ...stateCopy,
        countriesToShow: bubbleishSort(
          stateCopy.countriesToShow,
          payload.sortBy,
          payload.order
        ),
        sort: {
          sortBy: payload.sortBy,
          order: payload.order,
        },
      };
    }
    case GET_ACTIVITIES: {
      return {
        ...stateCopy,
        activities: payload,
        loading: false,
      };
    }
    case SET_ACTIVITY_FILTER: {
      return {
        ...stateCopy,
        filters: {
          ...stateCopy.filters,
          activity: payload,
        },
      };
    }
    case SET_CONTINENT_FILTER: {
      return {
        ...stateCopy,
        filters: {
          ...stateCopy.filters,
          continents: {
            ...stateCopy.filters.continents,
            [payload[0]]: payload[1],
          },
        },
      };
    }
    case MARK_ALL_CONTINENTS: {
      return {
        ...stateCopy,
        filters: {
          ...stateCopy.filters,
          continents: {
            Asia: true,
            "North America": true,
            "South America": true,
            Africa: true,
            Europe: true,
            Oceania: true,
            Antarctica: true,
          },
        },
      };
    }
    case UNMARK_ALL_CONTINENTS: {
      return {
        ...stateCopy,
        filters: {
          ...stateCopy.filters,
          continents: {
            Asia: false,
            "North America": false,
            "South America": false,
            Africa: false,
            Europe: false,
            Oceania: false,
            Antarctica: false,
          },
        },
      };
    }
    case RESET_SORT_AND_FILTERS: {
      return {
        ...stateCopy,
        sort: {
          sortBy: "name",
          order: "AZ",
        },
        filters: {
          continents: {
            Asia: true,
            "North America": true,
            "South America": true,
            Africa: true,
            Europe: true,
            Oceania: true,
            Antarctica: true,
          },
          activity: "",
        },
      };
    }
    case CLEAN_COUNTRY: {
      return {
        ...stateCopy,
        country: {},
      };
    }
    case SET_LOADING: {
      return {
        ...stateCopy,
        loading: true,
      };
    }
    default:
      return state;
  }
}
