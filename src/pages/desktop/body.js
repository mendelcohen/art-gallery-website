import Image from "next/image";
import heading1 from "../../assets/heading1.jpg";
import heading2 from "../../assets/heading2.jpg";
import imagegrid1 from "../../assets/desktop/image-grid-1.jpg";
import imagegrid2 from "../../assets/desktop/image-grid-2.jpg";
import imagegrid3 from "../../assets/desktop/image-grid-3.jpg";

export default function Body() {
  return (
    <div className="flex flex-wrap gap-[30px] w-[1110px] h-[1150px] mb-[220px] m-auto">
      <div className="flex justify-between w-[1110px] h-[400px]">
        <div className="flex flex-col justify-between w-[350px] h-[280px] mt-[60px]">
          <Image
            src={heading1.src}
            alt=""
            width={350}
            height={120}
            className=""
          />
          <div
            className="w-[350px] h-[128px] leading-8 text-[22px] text-[#444444] font-extralight"
            style={{ fontFamily: "outfit" }}
          >
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </div>
        </div>
        <Image
          src={imagegrid1.src}
          alt=""
          width={635}
          height={400}
          className=""
        />
      </div>
      <div className="flex gap-[30px] w-[1110px] h-[720px] row-span-2">
        <Image src={imagegrid2.src} alt="" width={635} height={720} priority />
        <div className="flex flex-col gap-[30px] w-[445px] h-[720px]">
          <Image
            src={imagegrid3.src}
            alt=""
            height={313}
            width={445}
            className=""
          />
          <div className="flex justify-center items-center bg-[#151515] w-[445px] h-[377px]">
            <div className="flex flex-col justify-between  w-[350px] h-[248px]">
              <Image
                src={heading2.src}
                alt=""
                height={120}
                width={350}
                className=""
              />
              <div
                className=" w-[350px] h-[96px] leading-8 text-[22px] text-[#FFFFFF] font-extralight"
                style={{ fontFamily: "outfit" }}
              >
                We’re excited to welcome you to our gallery and see how our
                collections influence you.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
