import Image from "next/image";
import heading3 from "../../assets/heading3.jpg";
import heading4 from "../../assets/heading4.jpg";
import imagegrid1 from "../../assets/mobile/image-grid-1.jpg";
import imagegrid2 from "../../assets/mobile/image-grid-2.jpg";
import imagegrid3 from "../../assets/mobile/image-grid-3.jpg";

export default function MobileBody() {
  return (
    <div className="w-[343px] h-[1605px] mx-4 mb-[120px]">
      <Image
        src={imagegrid1.src}
        alt=""
        width={343}
        height={320}
        className="mb-[25px]"
      />
      <div className="w-[343px] h-[223px] flex flex-col justify-between mb-8">
        <Image src={heading3.src} alt="" width={343} height={90} className="" />
        <div
          className="w-[343px] h-[112px] text-lg text-[#444444] font-light"
          style={{ fontFamily: "outfit" }}
        >
          Wander through our distinct collections and find new insights about
          our artists. Dive into the details of their creative process.
        </div>
      </div>
      <Image
        src={imagegrid2.src}
        alt=""
        width={343}
        height={480}
        className="mb-4"
        priority
      />
      <Image
        src={imagegrid3.src}
        alt=""
        width={343}
        height={200}
        className="mb-4"
      />
      <div className="flex justify-center items-center w-[343px] h-[293px] bg-[#151515]">
        <div className="flex flex-col justify-between w-[295px] h-[198px] ">
          <Image
            src={heading4.src}
            alt=""
            height={90}
            width={295}
            className=""
          />
          <div
            className="w-[295px] h-[84px] text-lg text-[#D9D9D9] font-light"
            style={{ fontFamily: "outfit" }}
          >
            We’re excited to welcome you to our gallery and see how our
            collections influence you.
          </div>
        </div>
      </div>
    </div>
  );
}
