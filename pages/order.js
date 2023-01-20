import CardOrder from "@/components/card/CardOrder";
import Layout from "@/components/Layout";
import { Component } from "react";

export default class order extends Component {
  render() {
    return (
      <Layout>
        <div className="mt-[18px] mb-40 mx-[20px] flex flex-col gap-[20px] sm:mx-14 md:mx-20 lg:mx-28">
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
        </div>
      </Layout>
    )
  }
}
