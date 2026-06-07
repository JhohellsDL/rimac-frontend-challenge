import React from 'react';
import rimacLogo from '../../assets/logo-rimac.png';
import phoneIcon from '../../assets/GlTelephoneSolid.png';

const s = {
    header: 'w-full h-16 md:h-24 px-6 md:px-24 flex items-center justify-between max-w-[1440px] mx-auto',
    logo: 'h-8 w-auto object-contain',
    logoPhone: 'h-5 w-auto object-contain',
    phoneLink: 'flex items-center gap-1.5 text-sm md:text-base font-bold text-[#08060D] hover:underline',
    callText: 'hidden md:inline text-xs font-semibold text-[#08060D]',
} as const;

export const AppHeader: React.FC = () => (
    <header className={s.header}>
        <img src={rimacLogo} alt="RIMAC Logo" className={s.logo} />
        <div className="flex items-center gap-3">
            <span className={s.callText}>¡Compra por este medio!</span>
            <a href="tel:014116001" className={s.phoneLink}>
                <img src={phoneIcon} alt="" aria-hidden="true" className={s.logoPhone} />
                <span>(01) 411 6001</span>
            </a>
        </div>
    </header>
);
