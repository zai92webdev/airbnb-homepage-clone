import cardFooter from '../data/cardFooter.json'
import '../styles/Footer.css'
import LanguageIcon from '@material-ui/icons/Language';
import { Facebook, Instagram, Twitter } from '@material-ui/icons';


function Footer() {


    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer__Links'>
                {cardFooter && cardFooter.map(data => (
                    <div className='footer__listLinks'>
                        <p>{data.title}</p>
                        <ul>
                            {data.links.map(link => (
                                <li>{link}</li>
                            ))}
                        </ul>
                    </div>
                ))}
                </div>


                <div className='footer__FooterContent'>
                        <div className='footerContent__left'>
                                <h6>© 2021 Airbnb, Inc. All rights reserved</h6>
                                <ul>
                                    <li> Privacy</li>
                                    <li>Terms</li>
                                    <li>Sitemap</li>
                                </ul>
                        </div>

                        <div className='footerContent__right'>
                                <div className='footerContent__rightLanguage'>
                                    <LanguageIcon />
                                        <h6>English</h6><h6>(US)</h6>
                                </div>

                                <div className='footerContent__rightCurrency'>
                                    <h6>RM <span>MYR</span></h6>
                                </div>

                                <div className='footerContent__rightIcons'>
                                    <Facebook className='footerContent__rightIcons__icon' />
                                    <Twitter className='footerContent__rightIcons__icon'/>
                                    <Instagram className='footerContent__rightIcons__icon'/>
                                </div>
                        </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
