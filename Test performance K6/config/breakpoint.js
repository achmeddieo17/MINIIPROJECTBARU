import http from 'k6/http';

export const breakpoint_test = {
  
  exec: 'protocolBasedScript',
  executor: 'ramping-arrival-rate', 
  stages: [
    { duration: '2h', target: 20000 }, 
  ],
};