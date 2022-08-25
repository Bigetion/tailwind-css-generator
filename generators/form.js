module.exports = function generateForm(configOptions = {}) {
	const { form = {} } = configOptions;
	const {
		inputBackgroundColor = '#fff',
		inputBorderColor = '#e2e8f0',
		focusBoderColor = '#63b3ed',
	} = form;

	const formInputBaseStyle = `
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: ${inputBackgroundColor};
    border-color: ${inputBorderColor};
    border-width: 1px;
    border-radius: .25rem;
    padding-top: .5rem;
    padding-right: .75rem;
    padding-bottom: .5rem;
    padding-left: .75rem;
    font-size: 1rem;
    line-height: 1.5
  `;

	const formSelectBaseStyle = `
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e");
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    background-repeat: no-repeat;
    background-color: ${inputBackgroundColor};
    border-color: ${inputBorderColor};
    border-width: 1px;
    border-radius: .25rem;
    padding-top: .5rem;
    padding-right: 2.5rem;
    padding-bottom: .5rem;
    padding-left: .75rem;
    font-size: 1rem;
    line-height: 1.5;
    background-position: right .5rem center;
    background-size: 1.5em 1.5em
  `;

	const generatePlaceholderStyle = (type) => {
		const placeHolderOptions = [
			'::-webkit-input-placeholder',
			':-ms-input-placeholder',
			'::-ms-input-placeholder',
		];
		let placeholderStyle = '';
		placeHolderOptions.forEach((item) => {
			placeholderStyle += `
        .form-${type}${item} {
          color: #a0aec0;
          opacity: 1
        }
      `;
		});
	};

	return `
    .form-input {
      ${formInputBaseStyle}
    }
    ${generatePlaceholderStyle('input')}
    .form-input:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, .5);
      border-color: ${focusBoderColor}
    }
    .form-textarea {
      ${formInputBaseStyle}
    }
    ${generatePlaceholderStyle('textarea')}
    .form-textarea:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, .5);
      border-color: ${focusBoderColor}
    }
    .form-multiselect {
      ${formInputBaseStyle}
    }
    .form-multiselect:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, .5);
      border-color: ${focusBoderColor}
    }
    .form-select {
      ${formSelectBaseStyle}
    }
    .form-select::-ms-expand {
      color: #a0aec0;
      border: none
    }
    @media not print {
      .form-select::-ms-expand {
        display: none
      }
    }
    @media print and (-ms-high-contrast:active),
    print and (-ms-high-contrast:none) {
      .form-select {
        padding-right: .75rem
      }
    }
    .form-select:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, .5);
      border-color: ${focusBoderColor}
    }
    .form-checkbox:checked {
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
      border-color: transparent;
      background-color: currentColor;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat
    }
    @media not print {
      .form-checkbox::-ms-check {
        border-width: 1px;
        color: transparent;
        background: inherit;
        border-color: inherit;
        border-radius: inherit
      }
    }
    .form-checkbox {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      -webkit-print-color-adjust: exact;
      color-adjust: exact;
      display: inline-block;
      vertical-align: middle;
      background-origin: border-box;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      flex-shrink: 0;
      height: 1em;
      width: 1em;
      color: #4299e1;
      background-color: ${inputBackgroundColor};
      border-color: ${inputBorderColor};
      border-width: 1px;
      border-radius: .25rem
    }
    .form-checkbox:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, .5);
      border-color: ${focusBoderColor}
    }
    .form-radio:checked {
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
      border-color: transparent;
      background-color: currentColor;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat
    }
    @media not print {
      .form-radio::-ms-check {
        border-width: 1px;
        color: transparent;
        background: inherit;
        border-color: inherit;
        border-radius: inherit
      }
    }
    .form-radio {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      -webkit-print-color-adjust: exact;
      color-adjust: exact;
      display: inline-block;
      vertical-align: middle;
      background-origin: border-box;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      flex-shrink: 0;
      border-radius: 100%;
      height: 1em;
      width: 1em;
      color: #4299e1;
      background-color: ${inputBackgroundColor};
      border-color: ${inputBorderColor};
      border-width: 1px
    }
    .form-radio:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, .5);
      border-color: ${focusBoderColor}
    }
  `;
};
