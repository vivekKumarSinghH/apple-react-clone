import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { DiApple } from "react-icons/di";

import { FaBars, FaTimes } from "react-icons/fa";

import { GoogleLogin, GoogleLogout } from "react-google-login";

const clientId =
  "484481702817-uepprhj504uchatd6rcdjd2t8iv02vhg.apps.googleusercontent.com";

function Navbar() {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showPro, setPro] = useState(null);
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setPro(res.profileObj);
// handleClickLogin(!login)

    setShowloginButton(false);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };
  const onLogoutSuccess = () => {
    console.log("Logout made successfully");
    setPro(null);
    // handleClickLogin(!login)
    showloginButton(true)
    
    alert("Logout made successfully ✌");
  };

  const [search, setSearch] = useState(false);
  const [nav, setNav] = useState(false);
  const [login, setLogin] = useState(false);
  const handleClick = () => setSearch(!search);
  const handleClicknav = () => setNav(!nav);
  const handleClickLogin = () => setLogin(!login);

  return (
    <div className="bg-[#313132] h-[44px] flex justify-center items-center relative ">
      {search ? (
        <div
          className="flex 
    justify-center
items-center
gap-2
    text-[#d1d1d4]"
        >
          <AiOutlineSearch className="text-[18px]" />
          <input
            placeholder="Search apple.com"
            type="text"
            className="min-w-[500px] outline-none text-xl p-1 bg-[#313132]"
          />
          <AiOutlineClose onClick={handleClick} className="text-[16px]" />
        </div>
      ) : (
        <ul
          className="hidden lg:flex m-auto text-xs  justify-around items-center
      text-[#d1d1d4]
      min-w-[1020px]
      "
        >
          <li className="hover:text-white">
            <Link to="/">
              {" "}
              <DiApple className="text-[20px]" />
            </Link>
          </li>
          <li className="hover:text-white">
            <Link to="/store"> Store</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/mac"> Mac</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/ipad">iPad</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/iphone"> iPhone</Link>
          </li>

          <li className="hover:text-white">
            <Link to="/watch"> Watch</Link>
          </li>

          <li className="hover:text-white">
            <Link to="/airpods"> AirPods</Link>
          </li>

          <li className="hover:text-white">
            <Link to="/tvhome"> TV & Home</Link>
          </li>

          <li className="hover:text-white">
            <Link to="/accessories"> Accessories</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/support"> Support</Link>
          </li>

          <li className="hover:text-white text-[19px]">
            <Link to="/">
              <AiOutlineSearch onClick={handleClick} />
            </Link>
          </li>

          <li className="hover:text-white text-[17px]">
            <BsBag onClick={handleClickLogin} />
          </li>
        </ul>
      )}

      <div className="lg:hidden w-[100%] z-10">
        {!nav ? (
          <div className="w-[95%] m-auto flex justify-between">
            <FaBars
              className="text-[#d1d1d4] hover:text-white text-[17px]"
              onClick={handleClicknav}
            />

            <Link to="/">
              {" "}
              <DiApple className="text-[20px] text-[#d1d1d4] hover:text-white" />
            </Link>

            <BsBag
              className="hover:text-white text-[17px] text-[#d1d1d4]"
              onClick={handleClickLogin}
            />
          </div>
        ) : (
          <div className="w-[95%] m-auto flex justify-between">
            <FaTimes
              className="text-[#d1d1d4] hover:text-white text-[17px]"
              onClick={handleClicknav}
            />

            <Link to="/">
              <DiApple
                className="text-[20px] text-[#d1d1d4] hover:text-white"
                onClick={handleClicknav}
              />
            </Link>

            <BsBag
              className="hover:text-white text-[17px] text-[#d1d1d4]"
              onClick={() => {
                setLogin(!login);
                setNav(!nav);
              }}
            />

            <ul
              className={
                "absolute top-[44px] left-0 w-full h-screen bg-[#313132] z-20 flex flex-col  gap-5 text-2xl px-14 text-[#d1d1d4] "
              }
            >
              <div className="flex  items-center   px-2  bg-[#484849] rounded-lg">
                <AiOutlineSearch className="text-[28px] " />
                <input
                  placeholder="Search apple.com"
                  type="text"
                  className="  outline-none text-2xl p-1 bg-[#484849]"
                />
              </div>

              <li className="hover:text-white border-white-400 border-b-2 pb-2">
                <Link to="/store"> Store</Link>
              </li>
              <li className="hover:text-white border-white-400 border-b-2 pb-2">
                <Link to="/mac"> Mac</Link>
              </li>
              <li className="hover:text-white border-white-400 border-b-2 pb-2">
                <Link to="/ipad">iPad</Link>
              </li>
              <li className="hover:text-white border-white-400 border-b-2 pb-2">
                <Link to="/iphone"> iPhone</Link>
              </li>

              <li className="hover:text-white border-white-400 border-b-2 pb-2">
                <Link to="/watch"> Watch</Link>
              </li>

              <li className="hover:text-white border-white-400 border-b-2 pb-2">
                <Link to="/airpods"> AirPods</Link>
              </li>

              <li className="hover:text-white border-white-400 border-b-2 pb-2">
                <Link to="/tvhome"> TV & Home</Link>
              </li>

              <li className="hover:text-white border-white-400 border-b-2 pb-2">
                <Link to="/accessories"> Accessories</Link>
              </li>
              <li className="hover:text-white ">
                <Link to="/support"> Support</Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {login && (
        <div className="w-full absolute h-screen z-30 bg-black bg-opacity-50 top-[44px]" onClick={handleClickLogin}></div>
      )}

      {login ? (
        <div
          className="absolute top-[44px] bg-white z-40  w-full   flex
        flex-col
        text-[#0066cc] 
text-[15px]
        text-center
        p-10

        lg:w-[300px]
        lg:p-4
        lg:rounded-2xl
        lg:shadow-lg
        lg:right-28
        lg:top-[47px]
        "
        >
          <p className="mb-6 text-gray-500">Your Bag is empty.</p>
          <div className="flex gap-4 w-[85%] md:w-[94%] m-auto border-t-2 py-2">
            <img
              alt="c"
              className="w-[25px]"
              src="https://store.storeimages.cdn-apple.com/4668/store.apple.com/shop/rs-globalelements/dist/in/ac-globalnav-dist/assets/ac-store/bag.svg"
            />
            Bag
          </div>

          <div className="flex gap-4 w-[85%] md:w-[94%]  m-auto border-t-2 py-2">
            <img
              alt="c"
              className="w-[25px]"
              src="https://store.storeimages.cdn-apple.com/4668/store.apple.com/shop/rs-globalelements/dist/in/ac-globalnav-dist/assets/ac-store/savedbyyou.svg"
            />
            Saved Items
          </div>

          <div className="flex gap-4 w-[85%] md:w-[94%]  m-auto border-t-2 py-2">
            <img
              alt="c"
              className="w-[25px]"
              src="https://store.storeimages.cdn-apple.com/4668/store.apple.com/shop/rs-globalelements/dist/in/ac-globalnav-dist/assets/ac-store/orders.svg"
            />
            Orders
          </div>

          <div className="flex gap-4 w-[85%] md:w-[94%]  m-auto border-t-2 py-2">
            <img
              alt="c"
              className="w-[25px]"
              src="https://store.storeimages.cdn-apple.com/4668/store.apple.com/shop/rs-globalelements/dist/in/ac-globalnav-dist/assets/ac-store/account.svg"
            />
            Account
          </div>

          <div className="flex gap-4 w-[85%] md:w-[94%]  m-auto border-t-2 py-2">
            <img
              alt="c"
              className="w-[25px] rounded-full "
              src={
                !showPro
                  ? "https://store.storeimages.cdn-apple.com/4668/store.apple.com/shop/rs-globalelements/dist/in/ac-globalnav-dist/assets/ac-store/signIn.svg"
                  : showPro.imageUrl
              }
            />
            
              <div>
              {showPro?
                <p>{showPro.name}</p>:
                <GoogleLogin
                clientId={clientId}
                buttonText="Log In With google"
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
              }
              </div>
            
          </div>

          {showPro ? (
            <div className="flex gap-4 w-[85%] md:w-[94%]  m-auto border-t-2 py-2">
              <img
                alt="c"
                className="w-[25px] rounded-full "
                src="https://store.storeimages.cdn-apple.com/4668/store.apple.com/shop/rs-globalelements/dist/in/ac-globalnav-dist/assets/ac-store/signIn.svg"
              />
              {showPro && (
                <GoogleLogout className="text-[#0066cc]   hover:scale-105"
                  clientId={clientId}
                  buttonText="Logout"
                  onLogoutSuccess={onLogoutSuccess}
                ></GoogleLogout>
              )}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
