import ChatComponent from "@/components/ChatComponent";
import Layout from "@/components/Layout";
import { Component } from "react";

export default class chat extends Component {
  render() {
    return (
      <Layout>
        <div className="mt-10 mb-40 mx-[20px] flex flex-col gap-[20px] sm:mx-14 md:mx-20 lg:mx-28">
          <ChatComponent />
          <ChatComponent />
          <ChatComponent />
          <ChatComponent />
          <ChatComponent />
          <ChatComponent />
          <ChatComponent />
          <ChatComponent />
        </div>
      </Layout>
    )
  }
}
