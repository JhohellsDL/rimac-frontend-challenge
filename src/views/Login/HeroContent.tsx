import clsx from 'clsx';

const badgeClass = clsx(
  'w-fit inline-block rounded-md',
  'bg-[#00F2A1] text-[#08060D]',
  'font-bold font-br-sonoma text-xs',
  'px-2.5 py-1 tracking-[0.2px]',
);

const titleClass = clsx(
  'text-[#03050F] text-[28px]',
  'font-bold font-br-sonoma',
  'leading-tight tracking-[0.2px]',
);

export const HeroContent = ({ image }: { image: string }) => (
  <>
    <div className="flex md:hidden items-center justify-between gap-4 w-full mb-6">
      <div className="flex-1 space-y-2">
        <span className={badgeClass}>Seguro Salud Flexible</span>
        <div className={titleClass}>Creado para ti y tu familia</div>
      </div>
      <img src={image} alt="" className="w-[136px] h-[160px] rounded-2xl object-cover shrink-0" />
    </div>
    <hr className="md:hidden border-[#CCD1EE] w-full mb-6" />

    <div className="hidden md:flex flex-col mb-4 space-y-3">
      <span className={badgeClass}>Seguro Salud Flexible</span>
      <div className={titleClass}>Creado para ti y tu familia</div>
    </div>
  </>
);
