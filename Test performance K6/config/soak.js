import http from 'k6/http';

export const soak_test = {
  exec: 'protocolBasedScript',
  executor: 'ramping-arrival-rate', 
  stages: [
    { duration: '2h', target: 20000 }, 
  ],
};