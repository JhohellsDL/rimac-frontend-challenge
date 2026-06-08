
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { userService } from '../api/userService';
import { validateLoginForm } from '../utils/loginValidators';


export const useLoginForm = (onSuccess: () => void) => {
    const { login } = useAuth();

    const [documentType, setDocumentType] = useState('DNI');
    const [documentNumber, setDocumentNumber] = useState('');
    const [phone, setPhone] = useState('');
    const [acceptPrivacy, setAcceptPrivacy] = useState(false);
    const [acceptCommercial, setAcceptCommercial] = useState(false);

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isLoading, setIsLoading] = useState(false);

    const validateForm = (): boolean => {
        const newErrors = validateLoginForm(documentType, documentNumber, phone, acceptPrivacy);
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();

        if (!validateForm()) {return};

        try {
            setIsLoading(true);
            const user = await userService.getUser();
            login(user, documentNumber, phone);

            onSuccess();
        } catch (error) {
            setErrors({ api: 'Hubo un problema al iniciar sesión. Inténtalo de nuevo.', error: String(error) });
        } finally {
            setIsLoading(false);
        }
    };

    return {
        documentType,
        setDocumentType,
        documentNumber,
        setDocumentNumber,
        phone,
        setPhone,
        acceptPrivacy,
        setAcceptPrivacy,
        acceptCommercial,
        setAcceptCommercial,
        errors,
        isLoading,
        handleSubmit,
    };
};