import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import {Wrapper as PopperWrapper} from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AcountItem from '~/components/AcountItem';
import Button from '~/components/Button';


const cx = classNames.bind(styles);

function Header() {
    const [SearchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0)
    }, [])
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img src={images.logo} alt='Tiktok' />
            <Tippy
                interactive
                visible={SearchResult.length > 0}
                render={attrs => (
                    <div className={cx('Search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Account</h4>
                            <AcountItem/>
                            <AcountItem/>
                        </PopperWrapper>
                    </div>

                )}
            >
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false}/>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
            <div className={cx('actions')}>
                <Button text>Upload</Button>
                <Button primary> Log in</Button>
            </div>
        </div>
    </header>
}

export default Header;