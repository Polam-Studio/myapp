import Image from "next/image";
import Link from "next/link";
import { FiArrowRightCircle } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <div className="absolute top-5 w-full">
        <div className="flex h-auto w-full items-center justify-center px-4">
          <div className="flex w-[800px] items-center justify-between rounded-full bg-white p-3 shadow-[0_0_15px_rgba(0,0,0,0.25)]">
            <div className="flex gap-2">
              <Image
                alt="Logo Polam Studio"
                src="/logo.svg"
                width={25}
                height={25}
              />
              <h1 className="hidden text-2xl font-bold text-black sm:block">
                Polam Studio
              </h1>
            </div>
            <Link
              href={"https://www.instagram.com/polam.studio/"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-full bg-gradient-to-r from-[#1E5BCB] via-[#4544BD] to-[#6143BC] py-1 pl-3 pr-1 font-semibold text-white"
            >
              Orçamento
              <FiArrowRightCircle size={30} color="white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex h-screen items-center justify-center bg-[#FFFCF8] px-4">
        <div className="flex h-auto w-[750px] flex-col items-center justify-between gap-24 rounded-xl bg-black p-10 shadow-[0_0_10px_rgba(0,0,0,0.5)] md:flex-row">
          <div className="flex flex-col items-start gap-3">
            <h1 className="text-2xl font-bold text-white">
              Estamos em Reforma
            </h1>
            <div className="flex w-full flex-col gap-1">
              <span className="text-base leading-5 text-white">
                Estamos aprimorando nossa página para entregar uma experiência
                ainda mais exclusiva. Volte logo para ver o resultado.
              </span>
              <span className="text-sm leading-5 text-white">
                Enquanto isso aproveite nossos conteudos no instagram!
              </span>
            </div>
            <Link
              href={"https://www.instagram.com/polam.studio/"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-gradient-to-r from-[#1E5BCB] via-[#4544BD] to-[#6143BC] px-4 py-2 font-semibold text-white"
            >
              Ver Instagram
              <FiArrowRightCircle size={20} color="white" />
            </Link>
          </div>
          <div className="relative hidden h-[260px] min-w-[260px] rounded-xl bg-gray-500 md:block">
            <Image
              alt="Banner Stand By"
              src="/banner.png"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
