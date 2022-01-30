import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../components/Title';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../components/ContactItem';


function ContactPage() {

  const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />

  return(
    <MainLayout>
    <Title title={'Contact'} span={'Contact'} />
    <ContactPageStyled >
    <InnerLayout className={'contact-section'}>

       <div className="right-content">
            <ContactItem title={'Phone'} icon={phone} cont1={'+880-1798587817'}/>
            <ContactItem title={'Email'} icon={email} cont1={'aroy.sourov@gmail.com'} />
            <ContactItem title={'Address'} icon={location} cont1={'Gazipur CityCorporation,'} cont2={'Bangladesh'} />
            
        </div>
    </InnerLayout>
    </ContactPageStyled>
</MainLayout>

  );
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
    
    }
`;

export default ContactPage;
