import React from "react";
import Banner from "../Component/Banner";
import Content from "../Component/Content";
import img1 from "../Image/shopingImage/img1.jpg";
import img2 from "../Image/shopingImage/img2.jpg";
import img3 from "../Image/shopingImage/img3.jpg";
import img4 from "../Image/shopingImage/img4.jpg";
import img5 from "../Image/shopingImage/img5.jpg";
import img7 from "../Image/shopingImage/img7.jpg";
import img8 from "../Image/shopingImage/img8.jpg";
import img9 from "../Image/shopingImage/img9.jpg";
import img11 from "../Image/shopingImage/img11.jpg";
import img12 from "../Image/shopingImage/img12.jpg";
import img13 from "../Image/shopingImage/img13.jpg";
import img14 from "../Image/shopingImage/img14.jpg";
import img15 from "../Image/shopingImage/img15.jpg";
import img16 from "../Image/shopingImage/img16.jpg";
import img17 from "../Image/shopingImage/img17.jpg";
import img18 from "../Image/shopingImage/img18.jpg";
import ContentSlide from "../Component/ContentSlide";
import { Link } from "react-router-dom";
import RealetedContent from "./RealetedContent";
import RealetedContentView from "./RealetedContentView";
function ContentCollection() {
  return (
    <>
      <Banner />
      <div className="Content-collection">
        <Content
          price={200}
          imageHeader="Amazon Basics"
          img1={img1}
          imageLink="Discover now"
          id={1}
          ProjectDescription="Affordable and reliable everyday products for your home and office needs."
        />

        <Content
          price={300}
          imageHeader="Top deals"
          imageLink="See more"
          img1={img2}
          id={2}
          ProjectDescription="Get the best discounts on a wide range of products from top brands."
        />
        <div className="width-1255">
          <Content
            price={400}
            imageHeader="Fashion kicks"
            imageLink="Shop now"
            img1={img3}
            id={3}
            ProjectDescription="Stay stylish and comfortable with our trendy collection of shoes for men and women."
          />
        </div>
        <div className="form">
          <form className="login-form" action="">
            <h4>
              Get the most out of <br /> Amazon
            </h4>
            <Link to="/Login">
              <button> Create Account</button>

              <a className="login-btn" href="">
                sign in Securetly
              </a>
            </Link>
          </form>
          <img src={img7} alt="" />
        </div>
      </div>
      <div className="contentSlide">
        <h4>Top Sellers in Books for you</h4>
        <ContentSlide />
      </div>

      <div className="Content-collection">
        <Content
          imageHeader="Mother's Day tech gifts"
          imageLink="Discove now"
          price={500}
          img1={img5}
          id={4}
          ProjectDescription=" Surprise your mom with the latest tech gadgets and accessories."
        />
        <Content
          imageHeader="Labels you'll love"
          imageLink="Discove now"
          price={600}
          img1={img17}
          id={5}
          ProjectDescription="Organize your home and office with our stylish and functional labels."
        />
        <div className="width-1255">
          <Content
            imageHeader="Explore the great outdoors"
            imageLink="Discove now"
            price={700}
            img1={img18}
            id={6}
            ProjectDescription="Gear up for your next adventure with our high-quality outdoor equipment and accessories."
          />
        </div>
        <div className="width-1334">
          <Content
            imageHeader="Amazon Basic"
            imageLink="Discove now"
            price={800}
            img1={img8}
            id={7}
            ProjectDescription="Affordable and reliable everyday products for your home and office needs."
          />
        </div>
      </div>
      <RealetedContentView />
      <div className="Content-collection">
        <Content
          imageHeader="Help the people of Türkiye and Syria"
          imageLink="Donate now "
          img1={img9}
          id={8}
          ProjectDescription="Support the relief efforts by purchasing from our collection of products made by local artisans."
        />
        <Content
          price={900}
          imageHeader="Learning & Developmental Toys"
          imageLink="Discover now"
          img1={img1}
          id={9}
          ProjectDescription="Encourage your child's growth and development with our fun and educational toys."
        />
        <div className="width-1255">
          <Content
            price={1000}
            imageHeader="Book for You"
            imageLink="Buy now"
            img1={img11}
            id={10}
            ProjectDescription="Find your next favorite read from our vast collection of books for all ages and interests."
          />
        </div>
        <div className="width-1334">
          <Content
            price={2000}
            imageHeader="Explore home bedding"
            imageLink="Explore now"
            img1={img12}
            id={11}
            ProjectDescription="Create a cozy and comfortable sleeping environment with our luxurious bedding sets."
          />
        </div>
      </div>
      <div className="Content-collection">
        <Content
          imageHeader="Kitchen essentials
"
          imageLink="Explore now "
          img1={img13}
          id={12}
          price={3000}
          ProjectDescription="Cook like a pro with our range of high-quality kitchen tools and appliances."
        />
        <Content
          imageHeader="Pet care"
          imageLink="Shop now"
          img1={img14}
          id={13}
          price={4000}
          ProjectDescription=" Keep your furry friends healthy and happy with our selection of pet care products."
        />
        <div className="width-1255">
          <Content
            imageHeader="Outdoor tools for all seasons"
            imageLink="Explore now"
            img1={img15}
            id={14}
            price={5000}
            ProjectDescription="Be prepared for any weather condition with our durable outdoor tools and gear."
          />
        </div>
        <div className="width-1334">
          <Content
            imageHeader="Fashion for all"
            imageLink="Shop now"
            img1={img16}
            id={15}
            price={6000}
            ProjectDescription="Express your personal style with our diverse range of clothing, accessories, and footwear for men, women, and kids."
          />
        </div>
      </div>
      <RealetedContent />
    </>
  );
}

export default ContentCollection;
