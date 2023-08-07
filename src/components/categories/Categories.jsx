import React, { useState } from "react";
import "./categories.css";
import Profiles from "../profiles/Profiles";

const profileDate = [
  {
    type: "AI Video",
    img: "https://p2crires.cri.cn/01dcri/images/zhycms_chinaplus/20190718/8e2ec84a-b9c6-4cbb-a3c6-9d77f5189aea.jpg?x-oss-process=image/resize,w_650",
  },
  {
    type: "AI Chatbots",
    img: "https://p2crires.cri.cn/01dcri/images/zhycms_chinaplus/20190718/8e2ec84a-b9c6-4cbb-a3c6-9d77f5189aea.jpg?x-oss-process=image/resize,w_650",
  },
  {
    type: "AI Code",
    img: "https://p2crires.cri.cn/01dcri/images/zhycms_chinaplus/20190718/8e2ec84a-b9c6-4cbb-a3c6-9d77f5189aea.jpg?x-oss-process=image/resize,w_650",
  },
  {
    type: "AI Voice & Audio",
    img: "https://p2crires.cri.cn/01dcri/images/zhycms_chinaplus/20190718/8e2ec84a-b9c6-4cbb-a3c6-9d77f5189aea.jpg?x-oss-process=image/resize,w_650",
  },
  {
    type: "AI Automation",
    img: "https://p2crires.cri.cn/01dcri/images/zhycms_chinaplus/20190718/8e2ec84a-b9c6-4cbb-a3c6-9d77f5189aea.jpg?x-oss-process=image/resize,w_650",
  },
  {
    type: "AI VR & 3D",
    img: "https://p2crires.cri.cn/01dcri/images/zhycms_chinaplus/20190718/8e2ec84a-b9c6-4cbb-a3c6-9d77f5189aea.jpg?x-oss-process=image/resize,w_650",
  },
  {
    type: "AI Design",
    img: "https://p2crires.cri.cn/01dcri/images/zhycms_chinaplus/20190718/8e2ec84a-b9c6-4cbb-a3c6-9d77f5189aea.jpg?x-oss-process=image/resize,w_650",
  },
];

function Categories() {
  const [menueProducts, setMenuProducts] = useState(profileDate);
  const filter = (type) => {
    setMenuProducts(profileDate.filter((profile) => profile.type === type));
  };

  return (
    <div className="catContainer">
      <div className="catTitles">
        <h1 className="catTitle">
          Featured
          <span> AI </span>
          Software
        </h1>
        <h1 className="catTitle">Categories</h1>
      </div>

      <div className="Product">
        <ul className="menue">
          <li onClick={() => setMenuProducts(profileDate)}>All</li>
          <li>AI SEO</li>
          <li>AI SEO</li>
          <li>AI Video</li>
          <li onClick={() => filter("AI Chatbots")}>AI Chatbots</li>
          <li onClick={() => filter("AI Chatbots")}>AI Code</li>
          <li>AI Voice & Audio</li>
          <li>AI Automation</li>
          <li>AI VR & 3D</li>
          <li onClick={() => filter("AI Design")}>AI Design</li>
        </ul>
        <div className="list">
          {menueProducts.map((product, i) => (
            <div className="ProductG">
              <div className="product">
                <img src={product.img} alt="" />
              </div>
              <span>Profile</span>
            </div>
          ))}

          {/*  
          <Profiles />
          <Profiles/>
          <Profiles/>
          <Profiles/>
          <Profiles/>
          <Profiles/>
          <Profiles/>
          <Profiles/>
  <Profiles/> */}
        </div>
      </div>
    </div>
  );
}

export default Categories;
