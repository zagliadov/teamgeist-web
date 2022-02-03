import moment from "moment";
import { IInitialState } from "../interfaces/stateInterface/stateInterface";
import { ActionType } from "./actions";

export const initialState = {
  statistics: [],
  user: [],
  users: [],
  isLoading: false,
  auth: {
    isAuthificated: false,
    role: "",
  },
  adminUsers: {
    admin: true,
    superadmin: true,
    moderator: true,
  },
  monthString: moment().format('MMMM.YYYY'),
  timeStep: "week",
};

export const reducer = (state: IInitialState, action: any): IInitialState => {
  switch (action.type) {
    case ActionType.SET_TIME_STEP:
      return { ...state, timeStep: action.payload };
    case ActionType.SET_MONTH_STRING:
      return { ...state, monthString: action.payload };
    case ActionType.SET_AUTH:
      return { ...state, auth: action.payload };
    case ActionType.SET_ISLOADING:
      return { ...state, isLoading: action.payload };
    case ActionType.STATISTICS_GET_STATISTICS:
      return { ...state, statistics: action.payload };
    case ActionType.STATISTICS_DELETE_STATISTICS:
      return { ...state, statistics: action.payload };
    case ActionType.STATISTICS_UPDATE_STATISTICS:
      return { ...state, statistics: action.payload };
    case ActionType.STATISTICS_GET_ONE_USER_ANALITICS_BY_ID:
      return { ...state, user: action.payload };
    case ActionType.USER_GET_ALL_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
