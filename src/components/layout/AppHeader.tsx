import clsx from 'clsx';
import rimacLogo from '../../assets/logo-rimac.png';
import phoneIcon from '../../assets/GlTelephoneSolid.png';

const PHONE_NUMBER = '(01) 411 6001';
const PHONE_HREF = 'tel:014116001';

export const AppHeader = () => (
  <header className="w-full bg-[#FAFBFF]">
    <div className="max-w-[1440px] mx-auto h-16 md:h-24 px-6 md:px-24 flex items-center justify-between">
      <img src={rimacLogo} alt="RIMAC Logo" className="h-8 w-auto object-contain" />

      <div className="flex items-center gap-3">
        <span className="hidden md:inline text-xs font-semibold text-[#08060D]">
          ¡Compra por este medio!
        </span>
        <a
          href={PHONE_HREF}
          className={clsx(
            'flex items-center gap-1.5',
            'text-sm md:text-base font-bold text-[#08060D]',
            'hover:underline transition-all',
          )}
        >
          <img src={phoneIcon} alt="" aria-hidden="true" className="h-5 w-auto object-contain" />
          <span>{PHONE_NUMBER}</span>
        </a>
      </div>
    </div>
  </header>
);
