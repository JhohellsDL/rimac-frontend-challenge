export function validateLoginForm(
    documentType: string,
    documentNumber: string,
    phone: string,
    acceptPrivacy: boolean
): Record<string, string> {
    const errors: Record<string, string> = {};

    if (documentType === 'DNI' && !/^\d{8}$/.test(documentNumber)) {
        errors.documentNumber = 'El DNI debe tener exactamente 8 dígitos.';
    } else if (documentNumber === '') {
        errors.documentNumber = 'El número de documento es obligatorio.';
    } else {
        // nothing
    }

    if (!/^\d{9}$/.test(phone)) {
        errors.phone = 'El celular debe tener 9 dígitos numéricos.';
    }
    if (!acceptPrivacy) {
        errors.acceptPrivacy = 'Debes aceptar la Política de Privacidad.';
    }

    return errors;
}
