// icons
import { IoIosArrowForward } from "react-icons/io";
import { PiSquaresFourFill } from "react-icons/pi";
import { FiList } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

// stylesheet
import "./product.css";

// images
import Image from "next/image";
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'
import logo5 from '../images/logo5.png'
import logo6 from '../images/logo6.png'
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function page() {
  return (
    <>
      <Header />
      <div className="product-page">
        {/* Category Section */}
        <div className="category">
          <h4>Shop</h4>
          <span className="cat-list">
            Home <IoIosArrowForward className="cate-gray" /> Shop{" "}
          </span>
        </div>

        {/* Category Cards */}
        <div className="cate-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          <div className="cat-card1 p-4 border">
            <h4>CLOTHS</h4>
            <p>5 Items</p>
          </div>
          <div className="cat-card2 p-4 border">
            <h4>CLOTHS</h4>
            <p>5 Items</p>
          </div>
          <div className="cat-card3 p-4 border">
            <h4>CLOTHS</h4>
            <p>5 Items</p>
          </div>
          <div className="cat-card4 p-4 border">
            <h4>CLOTHS</h4>
            <p>5 Items</p>
          </div>
          <div className="cat-card5 p-4 border">
            <h4>CLOTHS</h4>
            <p>5 Items</p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="filters flex justify-between items-center mt-6">
          <div className="ft-first">Showing all 12 results</div>

          <div className="ft-middle flex items-center space-x-2">
            Views:
            <div className="ft-btn-1 cursor-pointer">
              <PiSquaresFourFill />
            </div>
            <div className="ft-btn-2 cursor-pointer">
              <FiList />
            </div>
          </div>

          <div className="ft-third flex space-x-2">
            <button className="ft-pop-btn flex items-center justify-center space-x-1">
              Popularity <IoIosArrowDown />
            </button>
            <button className="ft-blue-btn">Filter</button>
          </div>
        </div>

        {/* Company Logos Section - One logo per row */}
        <div className="companies grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mt-4">
          <Image src={logo1} alt="logo-1" className="logoimg" />
          <Image src={logo2} alt="logo-2" className="logoimg" />
          <Image src={logo3} alt="logo-3" className="logoimg" />
          <Image src={logo4} alt="logo-4" className="logoimg" />
          <Image src={logo5} alt="logo-5" className="logoimg" />
          <Image src={logo6} alt="logo-6" className="logoimg" />
        </div>

        {/* Product Cards Section */}
        <div className="pr-cards-cont grid grid-cols-1 gap-6 mt-6">
          <div className="card">
            <div className="card-img"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>
              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-2"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>
              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-3"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>
              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-4"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>
              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          {/* Add more cards as per your original structure */}
        </div>

        {/* Pagination */}
        <div className="pagination flex justify-center mt-6 space-x-4">
          <div className="pag-1 cursor-pointer">First</div>
          <div className="pag-2 cursor-pointer">1</div>
          <div className="pag-3 cursor-pointer">2</div>
          <div className="pag-4 cursor-pointer">3</div>
          <div className="pag-5 cursor-pointer">Next</div>
        </div>

      </div>
      <Footer />
    </>
  );
}
