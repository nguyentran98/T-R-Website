import '../public/css/bootstrap.min.css';
import '../public/css/fontawesome.min.css';
import '../public/css/animate.min.css';
import '../public/css/flaticon.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-image-lightbox/style.css';
import '../public/css/style.css';
import '../public/css/responsive.css';

import App from 'next/app';
import Head from 'next/head';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';
import { appWithTranslation } from 'next-i18next'

class MyApp extends App {
    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    
    render () {
        const { Component, pageProps } = this.props

        return (
            <React.Fragment>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Tuam - React Next Office Space & Rental Template</title>
                </Head>

                <Component {...pageProps} />
                
                {/* Preloader */}
                <Loader loading={this.state.loading} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </React.Fragment>
        );
    }
}

export default  appWithTranslation(MyApp)