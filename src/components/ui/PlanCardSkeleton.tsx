export const PlanCardSkeleton = () => (
  <div className="bg-white rounded-2xl border border-[#CCD1EE] p-6 animate-pulse flex flex-col gap-4">
    <div className="flex justify-between items-start">
      <div className="h-5 bg-gray-200 rounded w-1/2" />
      <div className="w-10 h-10 bg-gray-200 rounded" />
    </div>
    <div>
      <div className="h-3 bg-gray-100 rounded w-1/3 mb-1" />
      <div className="h-7 bg-gray-200 rounded w-1/2" />
    </div>
    <hr className="border-[#CCD1EE]" />
    <div className="space-y-2">
      <div className="h-3 bg-gray-100 rounded w-full" />
      <div className="h-3 bg-gray-100 rounded w-5/6" />
      <div className="h-3 bg-gray-100 rounded w-4/6" />
    </div>
    <div className="h-11 bg-gray-200 rounded-full mt-auto" />
  </div>
);
