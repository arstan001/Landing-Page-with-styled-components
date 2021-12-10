import React from 'react'
import { ServiceCard, ServiceContainer, ServiceH1, ServiceH2, ServiceIcon, ServiceP, ServiceWrapper } from './ServiceElements'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
const Services = () => {
    return (
        <ServiceContainer id='services'>
            <ServiceH1>
                Our services
            </ServiceH1>
            <ServiceWrapper>
                <ServiceCard>
                    <ServiceIcon src={Icon1} />
                    <ServiceH2>Reduce expenses</ServiceH2>
                    <ServiceP>We help reduce your fees and increase your overall revenue.</ServiceP>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src={Icon2} />
                    <ServiceH2>Virtual Offices</ServiceH2>
                    <ServiceP>You can access our platform online anywhere in the world.</ServiceP>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src={Icon3} />
                    <ServiceH2>Premium Benefits</ServiceH2>
                    <ServiceP>Unlock our special membership card that returns 5% cash back.</ServiceP>
                </ServiceCard>
            </ServiceWrapper>
        </ServiceContainer>
    )
}

export default Services
