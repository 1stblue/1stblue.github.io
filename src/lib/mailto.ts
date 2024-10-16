import { MAIL_ADDRESS } from "../constant";



export function mailto() {
    window.location.href =`mailto:${MAIL_ADDRESS}`;
}