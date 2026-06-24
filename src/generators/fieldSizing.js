export default function generator(configOptions = {}) {
  const { prefix = "" } = configOptions;

  return `
    .${prefix}field-sizing-fixed {
      field-sizing: fixed;
    }
    .${prefix}field-sizing-content {
      field-sizing: content;
    }
  `;
}
