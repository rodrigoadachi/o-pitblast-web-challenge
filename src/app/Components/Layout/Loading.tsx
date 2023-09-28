interface iProps {
  enable: boolean;
}
export default function Loading({ enable }: iProps) {
  return (
    <>
      {enable && (
        <div className="fixed right-0 left-0 top-0 bottom-0 z-[99] bg-[#707070] bg-opacity-75 flex justify-center items-center">
          <div className="grid justify-items-center">
            <div className="flex space-x-4">
              <span className="relative flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-red-600"></span>
              </span>
              <span className="relative flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-red-600"></span>
              </span>
              <span className="relative flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-red-600"></span>
              </span>
            </div>

            <p className="title-white title-[26px] pt-20 title-center drop-shadow-lg">
              Carregando...
            </p>
          </div>
        </div>
      )}
    </>
  );
}
