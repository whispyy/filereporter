import { createClient } from 'urql';

const client = createClient({
  url: 'http://localhost:4000',
});

export default client;
