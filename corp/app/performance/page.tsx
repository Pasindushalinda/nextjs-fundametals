import Hero from "@/components/hero";
import performanceImg from "@/public/images/performance.jpg";

export default function performancePage() {
  return (
    <div>
      <Hero
        imgData={performanceImg}
        imgAlt={"welding"}
        title="We serve high performance application."
      />
    </div>
  );
}
