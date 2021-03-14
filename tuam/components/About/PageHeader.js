import React, { Component } from 'react';
import Link from 'next/link';
import { withTranslation } from 'react-i18next';
// import { withTranslation } from 'next-i18next';

class PageHeader extends Component {
    render() {
        const { t } = this.props;
        return (
            <React.Fragment>
                <div className="page-title-area item-bg1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="page-title-content">
                                    <h2>{t('About Us.1')}</h2>
                                    <ul>
                                        <li>
                                            <Link href="/">
                                                <a>{t('Home.1')}</a>
                                            </Link>
                                        </li>
                                        <li>{t('About Us.1')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withTranslation()(PageHeader);