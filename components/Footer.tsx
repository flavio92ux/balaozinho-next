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
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center gap-2">
              <Image
                src={"/localization-icon.svg"}
                alt="ícone de localização"
                width={26}
                height={22.8}
              />
              <span>
                Av. Nevaldo Rocha, 4475 - Morro Branco, Natal - RN, 59015-450.
              </span>
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
          <div>
            <button className="w-[179px] text-red-default border-[3px] border-red-default rounded-[50px] flex justify-center text-center">
              Agende sua visita
            </button>
            <button className="w-[179px] bg-red-default text-white rounded-[50px]">
              Portal balãozinho
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
