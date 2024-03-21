import Image from "next/image";
import modernartgallery2 from "../../assets/modernartgallery2.jpg";
import iconfacebook from "../../assets/icon-facebook.svg";
import iconinstagram from "../../assets/icon-instagram.svg";
import icontwitter from "../../assets/icon-twitter.svg";

export default function Footer() {
  return (
    <footer className="bg-[#151515] w-screen h-[244px] flex justify-center items-center">
      <div className="w-[1110px] h-[84px] text-[#D9D9D9] flex justify-between">
        <div className="w-[730px] h-[84px] flex justify-between">
          <div className="min-w-[159.57px] max-h-[58px] flex">
            <Image
              src={modernartgallery2.src}
              alt=""
              width={58}
              height={159.57}
              className="flex-grow"
            />
          </div>
          <div
            className="w-[430px] h-[84px] text-lg font-extralight"
            style={{ fontFamily: "outfit" }}
          >
            The Modern Art Gallery is free to all visitors and open seven days a
            week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
          </div>
        </div>
        <div className="min-w-[100px] max-h-5 flex justify-between">
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
