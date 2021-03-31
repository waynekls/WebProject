"use strict"

class ValidationResult {
    constructor(ValidationStatus, ErrorMessage)
    {
        this.ValidationStatus = ValidationStatus;
        this.ErrorMessage = ErrorMessage;
    }

    getValidationStatus() {
        return this.ValidationStatus;
    }
    getErrorMessage() {
        return this.ErrorMessage;
    }

    setValidationStatus(ValidationStatus) {
        this.ValidationStatus = ValidationStatus;
    }
    setErrorMessage(ErrorMessage) {
        this.ErrorMessage = ErrorMessage;
    }
}

module.exports = ValidationResult;