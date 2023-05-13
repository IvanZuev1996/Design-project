import AppWrap from 'widgets/AppWrap/AppWrap';
import MotionWrap from 'widgets/MotionWrap/MotionWrap';
import FooterWrap from './Footer';

export default AppWrap(
    MotionWrap(FooterWrap, 'app__footer'),
    'contact',
    'app__whitebg'
);
