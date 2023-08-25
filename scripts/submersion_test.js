import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        {duration: '30s', target: 18}, //carga crescente de VUs
        {duration: '30s', target: 18}, //período de stress
        {duration: '30s', target: 0}, //carga decrescente de VUs
    ]
}

export default function() {
    http.get('https://test.k6.io');
    sleep(1);
}