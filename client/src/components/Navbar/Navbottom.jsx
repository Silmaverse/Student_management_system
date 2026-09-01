import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import brandImage from "../../assets/brandImage/GraduationCap.png";
import { GrNotification } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import Info from "../../utils/Info";
import { Link } from "react-router";

const Navbottom = () => {
  return (
    <>
      {/* LayOut structure */}
      <div className="navbottom flex justify-between items-center py-6 px-8">
        {/* Left Section */}
        <div className="navleft flex gap-12.5 items-center ">
          {/* NavLogo */}
          <Link to={'/'} className="navlogo flex gap-2  items-center">
            <div className="navimg w-10 h-10">
              <img src={brandImage} alt="error" />
            </div>
            <Info
              item={"h1"}
              children1={"E-tutor"}
              style={{
                fontSize: "32px",
                fontWeight: "600",
                color: "var(--color-primary)",
              }}
            />
          </Link>
          {/* Nav browse search part */}
          <div className="flex gap-4 items-center">
            <div className="browse w-50 h-12 border-2 border-boxes px-4.5 py-3 flex justify-between items-center">
              <p className="text-[16px] font-inter front-normal font-brand text-boxestext">
                Browse
              </p>
              <div className="text-[16px] font-inter front-normal text-boxestext">
                <MdOutlineKeyboardArrowDown />
              </div>
            </div>
            <div className="inputboxes w-106 h-12 border-2 px-4.5 py-3 border-boxes flex gap-3 items-center">
              <div className="text-[16px] text-fivenary">
                <IoSearchOutline />
              </div>
              <input
                placeholder=" What do you want learn..."
                className="text-[16px] font-normal font-brand text-fivenary outline-0"
              />
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="navright flex gap-10 items-center">
          {/* nav icon */}
          <div className="navulright flex items-center gap-3">
            <div className="size-5 text-primary">
              <GrNotification className="w-full h-full" />
            </div>
            <div className="size-5 text-primary">
              <FaRegHeart className="size-full" />
            </div>
            <div className="size-5 text-primary">
              <FiShoppingCart className="w-full size-full" />
            </div>
          </div>
          {/* Account button */}
          <div className="navbtn flex gap-3">
            <Link to={"/auth/register"} className="w-42 h-12 flex justify-center items-center text-[16px] font-semibold bg-secondarybtn text-brand font-brand">
            Create Account
            </Link>
            <Link to={'/auth/login'} className="w-42 h-12 text-[16px] bg-brand text-white font-semibold font-brand flex justify-center items-center"
              variant="primary"
              style={{ width: "168px", height: "48px", fontSize: "16px" }}
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbottom;
