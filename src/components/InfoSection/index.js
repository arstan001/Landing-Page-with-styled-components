import React from 'react'
import { BtnWrapper, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoElements'
import { Button } from '../ButtonElement'
const InfoSection = ({ lightBg, dark2, lightText, dark, primary, id, imgStart, topLine, headline, description, buttonLable, darkText, img, alt }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrapper>
                                    <Button to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80} dark2={dark2 ? 1 : 0} dark={dark} primary={primary}>{buttonLable}</Button>
                                </BtnWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
