import React, { Component } from "react";
import "./Orders.css";
import Order from "../../components/Order/Order";
import axios from "../..//axios-orders";
import WithErrors  from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        console.log(res.data);
        console.log(fetchedOrders);
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div>
       {this.state.orders.map(order => (
         <Order 
         key ={order.id}
         ingredients = {order.ingredients}
         price ={order.price}
         />
       ))}
      </div>
    );
  }
}

export default WithErrors(Orders, axios);
