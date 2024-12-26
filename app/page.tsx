import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url(/sky-background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex justify-center items-center w-full h-[654px]"
    >
      <Carousel />
    </div>
  );
}
