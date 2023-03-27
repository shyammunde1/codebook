import React from "react";
import { useTitle } from "../../hooks/useTitle";
import { useLocation } from "react-router-dom";
import { OrderFail } from "./component/OrderFail";
import { OrderSuccess } from "./component/OrderSuccess";


export const OrederPgae = () => {
  useTitle("Order Summary")
    const {state} = useLocation()
  return <main>{state.status ? <OrderSuccess  data={state.data}/> : <OrderFail />}</main>;
};
