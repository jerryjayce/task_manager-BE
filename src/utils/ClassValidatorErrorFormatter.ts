
export const class_validator_error_formatter = (errors) => {
    const errors_response = errors.map((error) => ({
        field: error.property,
        message: error.constraints[Object.keys(error.constraints)[0]],
    }));

    return { errors: errors_response };
};