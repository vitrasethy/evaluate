import Image from "next/image";
import Form from "./Form";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[url('/stem.jpeg')] bg-cover h-screen">
      <div className="flex flex-wrap justify-evenly items-center bg-sky-950/30 backdrop-brightness-75 h-full">
        <div className="flex justify-center items-center md:ml-[5%] md:mb-[5%]">
          <div className="mr-2 max-lg:flex">
            <Image
              className="md:w-[120px] md:h-[120px] min-[300px]:w-[70px] min-[300px]:h-[70px]"
              src="/logo-rupp.svg"
              width={120}
              height={120}
              alt="Picture of the author"
            />
            <Image
              className="ml-2 md:mt-4 mt-2 md:w-[100px] md:h-[100px] min-[300px]:w-[60px] min-[300px]:h-[60px]"
              src="/logo-fe.svg"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <div className="max-md:hidden">
            <Image
              className="md:w-[500px] md:h-[150px] min-[300px]:w-[250px] min-[300px]:h-[100px]"
              src="/title-rupp.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <Image
              className="md:w-[400px] md:h-[100px] min-[300px]:w-[200px] min-[300px]:h-[80px]"
              src="/title-fe.svg"
              width={400}
              height={400}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="w-full xl:w-1/3 2xl:w-3/12 md:w-3/12 md:h-[700px] min-xl:mr-[10%] min-[300px]:w-96 min-[300px]:h-[560px] max-[640px]:mx-[5%] max-[640px]:mb-20 bg-[#fff] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] pt-6 pb-14 px-10 rounded-2xl">
          <h1 className="text-black text-center min-[300px]:text-2xl md:text-4xl md:mt-2  font-bold mb-1 md:6">
            Register
          </h1>
          <Form />
          <div className="flex items-center py-px md:py-3 my-2">
            <div className="flex-grow h-px bg-gray-400"></div>

            <span className="flex-shrink text-sm md:text-lg text-gray-500 px-4 font-light">
              OR
            </span>

            <div className="flex-grow h-px bg-gray-400"></div>
          </div>

          <Link href="/login">
            <div className="text-center">
              <h1 className="text-sm md:text-base">Don't have an account?</h1>
              <button className="mt-1 bg-[#024164] hover:bg-[#03679d] w-full px-3 py-3 text-sm md:text-lg leading-5 rounded-md font-semibold text-white">
                Login
              </button>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
