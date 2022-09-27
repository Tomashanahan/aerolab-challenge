/* eslint-disable no-console */
/* eslint-disable no-prototype-builtins */
import React, {createContext, useReducer} from "react";

export const UserContext = createContext();

const initialState = {
  user: {},
  redeemHistory: [],
  addingPointsLoading: false,
};

const actionTypes = {
  GET_USER: "GET_USER",
  USER_REDEEM: "USER_REDEEM",
  REDEEM_LOWEST_PRICE: "REDEEM_LOWEST_PRICE",
  REDEEM_HIGHEST_PRICE: "REDEEM_HIGHEST_PRICE",
  MOST_RECENTS_REDEEMS: "MOST_RECENTS_REDEEMS",
  ADD_POINTS: "ADD_POINTS",
  ADDING_POINTS_LOADING: "ADDING_POINTS_LOADING",
};

const getQuantity = (products) => {
  const obj = {};

  for (let i = 0; i < products.length; i++) {
    if (products[i].productId in obj) {
      obj[products[i].productId].quantity += 1;
    } else if (!obj.hasOwnProperty(products.productId)) {
      obj[products[i].productId] = {...products[i], quantity: 1};
    }
  }

  return obj;
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        user: payload,
        redeemHistory: Object.values(getQuantity(payload.redeemHistory)),
      };
    case actionTypes.USER_REDEEM:
      return {
        ...state,
      };
    case actionTypes.REDEEM_LOWEST_PRICE:
      return {
        ...state,
        redeemHistory: state.redeemHistory.sort((a, b) => a.cost - b.cost),
      };
    case actionTypes.REDEEM_HIGHEST_PRICE:
      return {
        ...state,
        redeemHistory: state.redeemHistory.sort((a, b) => b.cost - a.cost),
      };
    case actionTypes.ADD_POINTS:
      return {
        ...state,
      };
    case actionTypes.MOST_RECENTS_REDEEMS:
      return {
        ...state,
        redeemHistory: state.redeemHistory.sort(
          (a, b) =>
            Number(b.createDate.replace(/[^0-9]/gi, "")) -
            Number(a.createDate.replace(/[^0-9]/gi, "")),
        ),
      };
    case actionTypes.ADDING_POINTS_LOADING:
      return {
        ...state,
        addingPointsLoading: payload,
      };
    default:
      return state;
  }
};

export function UserProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {user, redeemHistory, addingPointsLoading} = state;

  const getUser = async () => {
    const user = await fetch("https://coding-challenge-api.aerolab.co/user/me", {
      method: "GET",
      headers: new Headers({
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU4NDA0YjRkYzhhODAwMWE4N2E1YTgiLCJpYXQiOjE2NDk5NTA3OTV9.EZqjg65FEIKnsRah2WhNJ1vNHKrvO3a8puXb4O3K8h0",
      }),
    }).then((res) => res.json());

    dispatch({type: actionTypes.GET_USER, payload: user});
  };

  const redeem = async (productId) => {
    try {
      const userRedeemFetch = await fetch("https://coding-challenge-api.aerolab.co/redeem", {
        method: "POST",
        body: JSON.stringify({
          productId: productId,
        }),
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU4NDA0YjRkYzhhODAwMWE4N2E1YTgiLCJpYXQiOjE2NDk5NTA3OTV9.EZqjg65FEIKnsRah2WhNJ1vNHKrvO3a8puXb4O3K8h0",
        }),
      });
      const userRedeem = await userRedeemFetch.json();

      await getUser();

      return dispatch({type: actionTypes.USER_REDEEM, payload: userRedeem});
    } catch (error) {
      console.log(error, " soy el error del redeem");
    }
  };

  const redeemLowestPrice = () => {
    return dispatch({type: actionTypes.REDEEM_LOWEST_PRICE});
  };

  const redeemHighestPrice = () => {
    return dispatch({type: actionTypes.REDEEM_HIGHEST_PRICE});
  };

  const mostRecentsRedeems = () => {
    return dispatch({type: actionTypes.MOST_RECENTS_REDEEMS});
  };

  const addingUserPoints = async (points) => {
    try {
      dispatch({type: actionTypes.ADDING_POINTS_LOADING, payload: true});
      const addingPoints = await fetch("https://coding-challenge-api.aerolab.co/user/points", {
        method: "POST",
        body: JSON.stringify({
          amount: points,
        }),
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU4NDA0YjRkYzhhODAwMWE4N2E1YTgiLCJpYXQiOjE2NDk5NTA3OTV9.EZqjg65FEIKnsRah2WhNJ1vNHKrvO3a8puXb4O3K8h0",
        }),
      });
      const userPoints = await addingPoints.json();

      await getUser();
      dispatch({type: actionTypes.ADDING_POINTS_LOADING, payload: false});

      return dispatch({type: actionTypes.ADD_POINTS, payload: userPoints});
    } catch (error) {
      console.log(error, " soy el error del addingPionts");
    }
  };

  const value = {
    user,
    getUser,
    dispatch,
    redeem,
    redeemHistory,
    redeemLowestPrice,
    redeemHighestPrice,
    mostRecentsRedeems,
    addingUserPoints,
    addingPointsLoading,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
