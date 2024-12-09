import "@/public/styles/cabinet-grotesk.css";

export default function Home() {
  return (
    <>
      <div
        style={{ fontFamily: "CabinetGrotesk-Variable" }}
        className="flex flex-col min-h-screen w-full lg:items-center px-2 space-y-4 py-4"
      >
        <h1 className="text-3xl font-bold">Playground here</h1>

        <div className="flex">
          {/* bottom proj card */}
          <div className="w-64 h-72 border border-black bg-gradient-to-t from-lime-300 to-lime-500 to-85%">
            {/* top proj card */}
            <div className="w-64 h-72 ml-4 mt-4 hover:mt-0 hover:ml-0 hover:border-l-0 hover:border-t-0 border border-black bg-white transition-all duration-500 ease-in-out">
              <div className="pl-2 flex w-full h-8 border-b border-black items-center text-xs">
                Feb 2024 - Nov 2024
              </div>
              <div className="pl-2 flex w-full h-16 border-b border-black items-center text-[32px] font-bold">
                Arima Data
              </div>
              <div className="pl-2 flex w-full h-32 border-b border-black items-center bg-[rgb(190,217,115)]" />
              <div className="pl-2 flex w-full h-16 border-black items-center text-sm">
                Home Page Redesign / Authentication Routes
              </div>
            </div>
          </div>

          <div className="w-12"></div>
          {/* bottom proj card */}
          <div className="w-64 h-72 border border-black bg-gradient-to-t from-red-100  to-red-500">
            {/* top proj card */}
            <div className="w-64 h-72 ml-4 mt-4 hover:mt-0 hover:ml-0 hover:border-l-0 hover:border-t-0 border border-black bg-white transition-all duration-500 ease-in-out">
              <div className="pl-2 flex w-full h-8 border-b border-black items-center text-xs">
                Winter 2022
              </div>
              <div className="pl-2 flex w-full h-16 border-b border-black items-center text-[32px] font-bold">
                Tesla
              </div>
              <div className="pl-2 flex w-full h-32 border-b border-black items-center bg-red-500" />
              <div className="pl-2 flex w-full h-16 border-black items-center text-sm">
                Infotainment / Navigation Systems Team
              </div>
            </div>
          </div>
        </div>

        <div className="h-12" />

        <div className="flex">
          {/* bottom proj card */}
          <div className="w-64 h-72 border border-black bg-gradient-to-t from-[#a6a6a6]  to-[#000000]">
            {/* top proj card */}
            <div className="w-64 h-72 ml-4 mt-4 hover:mt-0 hover:ml-0 hover:border-l-0 hover:border-t-0 border border-black bg-white transition-all duration-500 ease-in-out">
              <div className="pl-2 flex w-full h-8 border-b border-black items-center text-xs">
                Fall 2021
              </div>
              <div className="pl-2 flex w-full h-16 border-b border-black items-center text-[32px] font-bold">
                CertiK
              </div>
              <div className="pl-2 flex w-full h-32 border-b border-black items-center bg-[#6c6c6c]" />
              <div className="pl-2 flex w-full h-16 border-black items-center text-sm">
                Security Tools / Static Analysis Team
              </div>
            </div>
          </div>

          <div className="w-12"></div>
          {/* bottom proj card */}
          <div className="w-64 h-72 border border-black bg-gradient-to-t from-blue-300  to-blue-700">
            {/* top proj card */}
            <div className="w-64 h-72 ml-4 mt-4 hover:mt-0 hover:ml-0 hover:border-l-0 hover:border-t-0 border border-black bg-white transition-all duration-500 ease-in-out">
              <div className="pl-2 flex w-full h-8 border-b border-black items-center text-xs">
                Fall 2021
              </div>
              <div className="pl-2 flex w-full h-16 border-b border-black items-center text-[32px] font-bold">
                4PAY
              </div>
              <div className="pl-2 flex w-full h-32 border-b border-black items-center bg-blue-900" />
              <div className="pl-2 flex w-full h-16 border-black items-center text-sm">
                Money Transfers / Fraud Detection
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
