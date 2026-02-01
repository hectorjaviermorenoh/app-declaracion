// src/hooks/useFormValidator.js
import { useState, useCallback } from "react";
import { validators } from "../utils/formValidator";

export function useFormValidator() {

  // errors = { entidad: "El campo es obligatorio", valor: "Debe ser número" }
  const [errors, setErrors] = useState({});

  // const validateField = (name, value) => {
  const validateField = useCallback((name, value) => {
    const validator = validators[name];
    if (!validator) return;

    const errorMessage = validator(value); // ahora es string

    setErrors(prev => {
      const updated = { ...prev };
      if (errorMessage) {
        updated[name] = errorMessage;
      } else {
        delete updated[name];
      }
      return updated;
    });
  }, []);

  const validateForm = useCallback((values) => {
    const newErrors = {};

    for (const [field, value] of Object.entries(values)) {
      const validator = validators[field];
      if (!validator) continue;

      const msg = validator(value);
      if (msg) newErrors[field] = msg;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }, []);


  const clearError = useCallback((field) => {
    setErrors(prev => {
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });
  }, []);

  const clearErrors = useCallback(() => setErrors({}), []);

  return {
    errors,            // objeto final para FormErrorList
    validateField,     // validar campo individual
    validateForm,      // validar todo el formulario
    clearError,
    clearErrors,
  };
}
