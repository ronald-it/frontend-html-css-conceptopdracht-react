import * as React from 'react';
import styles from './Services.module.scss';
import {Service} from "../Service/Service";
import design from '../../assets/icon_web-design.svg'
import development from '../../assets/icon_web-development.svg'
import experience from '../../assets/icon_ux.svg'
import logo from '../../assets/icon_graphic-design.svg'
import seo from '../../assets/icon_seo.svg'
import copy from '../../assets/icon_copywriting.svg'

export function Services() {
    return (
        <section id="services" className={styles['services-section']}>
            <Service
            image={design}
            title="Web Design"
            text="Good web design is how companies stand out from their competitors. High quality web design leads to increased user conversion and engagement. Through a proven web design process, we help clients launch websites and products that improve on their bottom line."
            />

            <Service
                image={development}
                title="Web Development"
                text="Modern websites need to be responsive and fully functional at all sizes. We develop all of our sites with a mobile first approach and ensure that our code quality is clean, organized and performant. Already have a design but need it developed? We’re here to help!"
            />

            <Service
                image={experience}
                title="User Experience"
                text="In order to build successful products you have to understand the user. We create user personas, wireframes and prototypes to test with users. This allows us to gather feedback which helps to shape the product and can quickly eliminate potential risks – saving you time and money."
            />

            <Service
                image={logo}
                title="Logo Design + Branding"
                text="Nike, Apple, Coca-Cola, Starbucks. What do all of these brands have in common? Easily recognizable logos and brand identity. The best brands stand out from the crowd by having a clear and unique point of view. We will work with you to understand your vision and help create a unique brand identity and style guide for your company."
            />

            <Service
                image={seo}
                title="SEO"
                text="Do you want your site to rank higher in search results? Google is constantly changing their algorithms for how they rank pages. Don’t worry about constantly playing catch-up. We will make sure your website it optimized, providing you the best opportunities for organic search exposure."
            />

            <Service
                image={copy}
                title="Copy Writing"
                text="Brand messaging needs to be clear, direct and easy to understand to be effective. A unique tone of voice will help you stand out from the crowd and build brand loyalty. We work with you to establish your brand bible and ensure your messaging is focused and targeted."
            />
        </section>
    );
}