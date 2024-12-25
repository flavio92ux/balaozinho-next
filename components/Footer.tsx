import Logo from "@/assets/logo.svg";
import Image from "next/image";
export default function Footer() {
  return (
    <footer>
      <div
        style={{
          backgroundImage: "url(/top-footer-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="min-h-48 flex justify-center items-center"
      >
        <div className="flex justify-center items-center gap-56 h-full">
          <div>
            <Image src={Logo} alt="logo escola" />
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex flex-row items-center gap-2">
              <Image
                src={"/localization-icon.svg"}
                alt="ícone de localização"
                width={26}
                height={22.8}
              />
              <div className="text-center max-w-80">
                Av. Nevaldo Rocha, 4475 - Morro Branco, Natal - RN, 59015-450.
              </div>
            </div>

            <div className="flex flex-row items-center gap-2">
              <Image
                src={"/whatsapp-icon.svg"}
                alt="ícone do whatsapp"
                width={26}
                height={22.8}
              />
              <span>(84) 99449-5841</span>
            </div>

            <div className="flex flex-row items-center gap-2">
              <Image
                src={"/telephone-icon.svg"}
                alt="ícone de contato"
                width={26}
                height={22.8}
              />
              <span>(84) 3222-2991</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 font-fredoka">
            <button className="w-[179px] h-8 text-white border-[3px] border-white rounded-[50px] flex justify-center text-center">
              Agende sua visita
            </button>
            <button className="w-[179px] h-8 bg-white text-red-default rounded-[50px]">
              Portal balãozinho
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
