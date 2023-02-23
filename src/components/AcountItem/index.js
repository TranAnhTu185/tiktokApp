import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);


function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/cfac997a41fa416c4e38f3000b8bb48c~c5_100x100.jpeg?x-expires=1657821600&x-signature=yBBP60FrqD2cHJh8qs9t8niky08%3D"
                alt="Hoa"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check-name')} icon={faCheckCircle}/>
                </h4>
                <p className={cx('username')}>Nguyễn Văn A</p>
            </div>
        </div>
    );
}

export default AcountItem;