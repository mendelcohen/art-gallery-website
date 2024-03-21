import Image from "next/image";
import imagehero from "../../assets/mobile/image-hero.jpg";
import modernartgallery3 from "../../assets/modernartgallery3.jpg";
import iconlocationarrow from "../../assets/icon-location-arrow.jpg";

export default function MobileHeader() {
  return (
    <div className="w-[375px] h-[630px] mb-[120px]">
      <Image
        src={imagehero.src}
        alt=""
        width={375}
        height={240}
        priority
        className="mb-8"
      />
      <div className="mx-4">
        <Image
          src={modernartgallery3.src}
          alt=""
          width={343}
          height={110}
          className="mb-8"
        />
        <div
          className="w-[343px] h-[112px] text-lg text-[#444444] mb-8 font-light"
          style={{ fontFamily: "outfit" }}
        >
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </div>
        <Image src={iconlocationarrow.src} alt="" width={260} height={72} />
      </div>
    </div>
  );
}
