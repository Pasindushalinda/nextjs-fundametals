import Hero from "@/components/hero";
import homeImg from "@/public/images/home.jpg";

export default function Home() {
  return (
    <div>
      <Hero
        imgData={homeImg}
        imgAlt={"car factory"}
        title="Professional Cloud Hostig."
      />
    </div>
  );
}
