import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        {duration: '30s', target: 6}, //carga crescente de VUs
        {duration: '30s', target: 6}, //período de stress
        {duration: '30s', target: 0}, //carga decrescente de VUs
    ]
}

// com base nos tempos de respostas nos 3 stages, podemos avaliar
// se a aplicação responde com tranquilidade sem variações muito
// elevadas com 4 VUs simultâneos

export default function() {
    http.get('https://test.k6.io');
    sleep(1);
}