import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);


function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg"
                alt="Hoa"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check-name')} icon={faCheckCircle}/>
                </h4>
                <p className={cx('username')}>nguyenvana</p>
            </div>
        </div>
    );
}

export default AcountItem;