import generateContainerQuery from '../generators/containerQuery.js';

export const containerQuery = {
  key: 'containerQuery',
  generate(config) {
    return generateContainerQuery(config);
  },
};
