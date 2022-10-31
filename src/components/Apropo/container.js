import { Fiabilite } from './fiabilite';
import { Respect } from './respect';
import { Securite } from './securite';

import { Service } from './service';
export function Container() {
    return (
        <section className='container-size'>
            <Fiabilite></Fiabilite>
            <Respect></Respect>
            <Service></Service>
            <Securite></Securite>
        </section>
    )
}