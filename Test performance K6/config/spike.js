import http from 'k6/http';

export const spikes_test = {
  exec: 'protocolBasedScript',
  stages: [
    { duration: '2m', target: 2000 }, 
    
    { duration: '1m', target: 0 }, 
  ],
};