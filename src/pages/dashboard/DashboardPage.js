import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useTitle } from "../../hooks/useTitle";
import { getUserOrders } from "../../services";
import { DashboardCard } from "./component/DashboardCard";
import { DashboardEmpty } from "./component/DashboardEmpty";

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  useTitle("Dashboard");
  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await getUserOrders();
      setOrders(data);
      } catch (error) {
        toast.error(error.message,{closeButton:true,autoClose:5000,position:"bottom-center"})
      }
    }
    fetchOrders();
  }, []);

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>
      <section>
        {orders.length &&
          orders.map((order) => <DashboardCard key={order.id} order={order} />)}
      </section>

      <section>{!orders.length && <DashboardEmpty />}</section>
    </main>
  );
};
