import Image from "next/image";
import imagehero from "../../assets/desktop/image-hero.jpg";
import modernartgallery1 from "../../assets/modernartgallery1.jpg";
import iconlocationarrow from "../../assets/icon-location-arrow.jpg";

export default function Header() {
  return (
    <div className="h-[800px] w-[1275px] flex relative mb-[180px]">
      <div className="h-[799px] w-[450px] bg-[#151515]"></div>
      <Image src={imagehero.src} alt="" width={540} height={800} priority />
      <Image
        src={modernartgallery1.src}
        alt=""
        width={514}
        height={176}
        className="absolute top-[190px] left-[165px]"
      />
      <div
        className="absolute top-[190px] left-[925px] h-[160px] w-[350px] leading-8 text-[22px] text-[#444444] font-extralight"
        style={{ fontFamily: "outfit" }}
      >
        The arts in the collection of the Modern Art Gallery all started from a
        spark of inspiration. Will these pieces inspire you? Visit us and find
        out.
      </div>
      <Image
        src={iconlocationarrow.src}
        alt=""
        width={260}
        height={72}
        className="absolute top-[414px] left-[925px]"
      />
    </div>
  );
}
