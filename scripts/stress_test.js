import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        {duration: '30s', target: 4}, // carga de VUs abaixo da 'normal'
        {duration: '1m', target: 4}, //----
        {duration: '30s', target: 6}, // carga de VUs 'load'
        {duration: '1m', target: 6}, //----
        {duration: '30s', target: 8}, // carga de VUs '+stress'
        {duration: '1m', target: 8}, //----
        {duration: '30s', target: 10}, // carga de VUs '++stress' 
        {duration: '1m', target: 10}, //----
        {duration: '1m', target: 0}, // carga de recuperação
    ]
}

export default function() {
    http.get('https://test.k6.io');
    sleep(1);
}