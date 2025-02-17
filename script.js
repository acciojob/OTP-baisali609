//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

        // Move focus to the next field when typing
        inputs.forEach((input, index) => {
            input.addEventListener('input', () => {
                if (input.value) {
                    // If the field is filled, move to the next field
                    if (index < inputs.length - 1) {
                        inputs[index + 1].focus();
                    }
                }
            });

            // Handle backspace key behavior
            input.addEventListener('keydown', (e) => {
                if (e.key === "Backspace" && !input.value) {
                    // If the current field is empty, move focus to the previous field
                    if (index > 0) {
                        inputs[index - 1].focus();
                    }
                }
            });
        });