import React from "react";
import { Button } from "../../components/common/Button";
import { Input } from "../../components/common/Input";
import { DocumentInput } from "../../components/ui/DocumentInput";
import { useLoginForm } from "../../hooks/useLoginForm";
import { AppHeader } from "../../components/layout/AppHeader";
import familyImage from "../../assets/image-login.png";
import { Checkbox } from "../../components/ui/Checkbox";

const s = {
  page: 'min-h-screen w-full bg-[#F8F9FF] flex flex-col font-sans',
  main: 'flex-1 w-full max-w-[1200px] mx-auto px-6 md:px-12 pb-12 md:pb-24 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-20',
  familyDesktop: 'hidden md:block w-full md:w-[480px] shrink-0',
  familyImg: 'w-full h-auto rounded-[32px] object-cover',
  formCol: 'w-full max-w-[380px] flex flex-col text-left',
  badge: 'w-fit bg-[#00F2A1] text-[#08060D] font-bold font-br-sonoma text-xs px-2.5 py-1 tracking-[0.2px] rounded-md inline-block',
  title: 'text-[#03050F] text-[28px] font-bold font-br-sonoma leading-tight tracking-[0.2px]',
  description: 'text-[#03050F] text-[14px] font-semibold font-br-sonoma leading-relaxed tracking-[0.2px] mb-6',
  apiError: 'bg-red-50 text-[#EF3340] p-3.5 rounded-lg text-sm font-semibold border border-red-200',
  termsLink: 'text-[#03050F] underline font-bold font-br-sonoma hover:text-black text-[14px] mt-1 block w-fit',
} as const

const HeroContent: React.FC<{ image: string }> = ({ image }) => (
  <>
    <div className="flex md:hidden items-center justify-between gap-4 w-full mb-6">
      <div className="flex-1 space-y-2">
        <span className={s.badge}>Seguro Salud Flexible</span>
        <div className={s.title}>Creado para ti y tu familia</div>
      </div>
      <img src={image} alt="" className="w-[136px] h-[160px] rounded-2xl object-cover shrink-0" />
    </div>
    <hr className="md:hidden border-[#CCD1EE] w-full mb-6" />

    <div className="hidden md:flex flex-col mb-4 space-y-3">
      <span className={s.badge}>Seguro Salud Flexible</span>
      <div className={s.title}>Creado para ti y tu familia</div>
    </div>
  </>
);

export const LoginView: React.FC = () => {
  const handleLoginSuccess = () => {
    alert("🎉 ¡Login Exitoso!");
  };

  const {
    documentType, setDocumentType,
    documentNumber, setDocumentNumber,
    phone, setPhone,
    acceptPrivacy, setAcceptPrivacy,
    acceptCommercial, setAcceptCommercial,
    errors, isLoading, handleSubmit,
  } = useLoginForm(handleLoginSuccess);

  const handleDocumentTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setDocumentType(e.target.value);
  const handleDocumentNumberChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDocumentNumber(e.target.value.replace(/\D/g, ''));
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value.replace(/\D/g, ''));

  const handlePrivacyChange = () => setAcceptPrivacy(!acceptPrivacy);
  const handleCommercialChange = () => setAcceptCommercial(!acceptCommercial);

  return (
    <div className={s.page}>
      <AppHeader />

      <main className={s.main}>
        <section className={s.familyDesktop}>
          <img src={familyImage} alt="Familia sonriente" className={s.familyImg} />
        </section>

        <section className={s.formCol}>
          <HeroContent image={familyImage} />

          <p className={s.description}>
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
          </p>

          <form onSubmit={handleSubmit} className="w-full space-y-4 mt-6">
            {errors.api && <div className={s.apiError}>{errors.api}</div>}

            <DocumentInput
              documentType={documentType}
              onTypeChange={handleDocumentTypeChange}
              value={documentNumber}
              onChange={handleDocumentNumberChange}
              error={errors.documentNumber}
              maxLength={documentType === 'DNI' ? 8 : 12}
            />

            <Input
              label="Celular"
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              error={errors.phone}
              maxLength={9}
            />

            <div className="flex flex-col gap-3.5 pt-2">
              <Checkbox
                checked={acceptPrivacy}
                onChange={handlePrivacyChange}
                error={errors.acceptPrivacy}
                label="Acepto la Política de Privacidad"
              />
              <Checkbox
                checked={acceptCommercial}
                onChange={handleCommercialChange}
                label="Acepto la Política Comunicaciones Comerciales"
              />
              <a href="#terminos" className={s.termsLink}>
                Aplican Términos y Condiciones.
              </a>
            </div>

            <div className="pt-4">
              <Button type="submit" isLoading={isLoading}>
                Cotiza aquí
              </Button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};
