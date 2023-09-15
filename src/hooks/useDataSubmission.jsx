import { useState } from 'react';

const useDataSubmission = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const submitData = async (data) => {
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:5000/templates', {
                method: 'POST', // Use POST method for creating new data
                headers: {
                    'Content-Type': 'application/json', // Set the content type to JSON
                },
                body: JSON.stringify(data), // Convert data to JSON string
            });

            if (!response.ok) {
                throw new Error('Data submission failed.');
            }

            // Data submission was successful
        } catch (error) {
            setError(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return { submitData, isSubmitting, error };
};

export default useDataSubmission;
