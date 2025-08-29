import Footer from "./Footer";
import Header from "./header";
import data from "../data/data.json";
import Card from "./Card";
import { useState } from "react";

const Layout = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPosts, setNumberOfPosts] = useState(6);
  return (
    <section> 
      <Header />
      <main className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 items-start">
        {data &&
          data.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
      </main>
      <Footer />
    </section>
  );
};

export default Layout;
