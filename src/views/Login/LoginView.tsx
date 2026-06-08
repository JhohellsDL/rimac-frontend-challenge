import { useCallback } from "react";
import { Button } from "../../components/common/Button";
import { Input } from "../../components/common/Input";
import { DocumentInput } from "../../components/ui/DocumentInput";
import { useLoginForm } from "../../hooks/useLoginForm";
import { AppHeader } from "../../components/layout/AppHeader";
import familyImage from "../../assets/image-login.png";
import { Checkbox } from "../../components/ui/Checkbox";
import { useNavigate } from "react-router-dom";
import { HeroContent } from "./HeroContent";

const s = {
  page: 'min-h-screen w-full bg-[#F8F9FF] flex flex-col font-sans',
  main: 'flex-1 w-full max-w-[1200px] mx-auto px-6 md:px-12 pb-12 md:pb-24 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-20',
  familyDesktop: 'hidden md:block w-full md:w-[480px] shrink-0',
  familyImg: 'w-full h-auto rounded-[32px] object-cover',
  formCol: 'w-full max-w-[380px] flex flex-col text-left',
  description: 'text-[#03050F] text-[14px] font-semibold font-br-sonoma leading-relaxed tracking-[0.2px] mb-6',
  apiError: 'bg-red-50 text-[#EF3340] p-3.5 rounded-lg text-sm font-semibold border border-red-200',
  termsLink: 'text-[#03050F] underline font-bold font-br-sonoma hover:text-black text-[14px] mt-1 block w-fit',
} as const

export const LoginView = () => {
  const navigate = useNavigate();
  const onLoginSuccess = useCallback(() => navigate('/planes'), [navigate]);

  const {
    documentType, setDocumentType,
    documentNumber, setDocumentNumber,
    phone, setPhone,
    acceptPrivacy, setAcceptPrivacy,
    acceptCommercial, setAcceptCommercial,
    errors, isLoading, handleSubmit,
  } = useLoginForm(onLoginSuccess);

  const handleDocumentTypeChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) =>
    setDocumentType(e.target.value),
    [setDocumentType]);

  const handleDocumentNumberChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) =>
    setDocumentNumber(e.target.value.replace(/\D/g, '')),
    [setDocumentNumber]);

  const handlePhoneChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value.replace(/\D/g, '')),
    [setPhone]);

  const handlePrivacyChange = useCallback(() => setAcceptPrivacy(!acceptPrivacy), [setAcceptPrivacy]);
  const handleCommercialChange = useCallback(() => setAcceptCommercial(!acceptCommercial), [setAcceptCommercial]);

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
