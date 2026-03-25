import Hero from "@/components/hero";
import reliabilityImg from "@/public/images/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <div>
      <Hero
        imgData={reliabilityImg}
        imgAlt={"reliability"}
        title="Super high relability hosting."
      />
    </div>
  );
}
