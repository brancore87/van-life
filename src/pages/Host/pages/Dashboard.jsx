export default function Dashboard() {
  return (
    <main className="mt-10 flex min-h-screen w-full flex-col bg-[#FFEAD0]">
      <div className="px-10">
        <h1 className="pt-8 text-[36px] leading-[22px] font-bold">Welcome</h1>
        <div className="flex justify-between py-8">
          <span className="font-medium">
            Income last{" "}
            <span className="font-semibold underline underline-offset-4">
              30 days
            </span>
          </span>
          <span className="font-medium">Details</span>
        </div>
        <h2 className="text-5xl font-extrabold">$2,260</h2>
      </div>
      <div className="mt-10 flex items-center justify-between bg-[#FFDDB2] p-10">
        <div className="flex items-center justify-center gap-3">
          <span className="text-2xl font-bold">Review score</span>
          <img src="star.svg" className="size-4" />
          <span className="text-[20px]">5.0/5</span>
        </div>
        <span className="font-medium">Details</span>
      </div>
    </main>
  );
}
