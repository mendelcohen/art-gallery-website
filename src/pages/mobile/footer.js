import Image from "next/image";
import modernartgallery4 from "../../assets/modernartgallery4.jpg";
import iconfacebook from "../../assets/icon-facebook.svg";
import iconinstagram from "../../assets/icon-instagram.svg";
import icontwitter from "../../assets/icon-twitter.svg";

export default function MobileFooter() {
  return (
    <footer className="bg-[#151515] w-[375px] h-[336px] flex justify-center items-center">
      <div className="w-[311px] h-[240px] flex flex-col justify-between">
        <Image src={modernartgallery4.src} alt="" width={110} height={40} />
        <div
          className="w-[311px] h-[104px] leading-[26px] text-[16px] text-[#FFFFFF] font-light"
          style={{ fontFamily: "outfit" }}
        >
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </div>
        <div className="w-[100px] h-5 flex justify-between">
          <Image
            src={iconfacebook.src}
            alt=""
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <Image
            src={iconinstagram.src}
            alt=""
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <Image
            src={icontwitter.src}
            alt=""
            width="0"
            height="0"
            className="w-5 h-[16.25px]"
          />
        </div>
      </div>
    </footer>
  );
}
