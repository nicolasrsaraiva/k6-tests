import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        {duration: '10s', target: 3}, // carga de VUs abaixo da 'normal'
        {duration: '30s', target: 3}, //----
        {duration: '10s', target: 16}, // carga de VUs 'peak'
        {duration: '1m', target: 16}, // ----
        {duration: '10s', target: 3}, // carga de recuperação 
        {duration: '1m', target: 3}, //----
        {duration: '10s', target: 0}, // manter carga até 0
    ]
}

export default function() {
    http.get('https://test.k6.io');
    sleep(1);
}