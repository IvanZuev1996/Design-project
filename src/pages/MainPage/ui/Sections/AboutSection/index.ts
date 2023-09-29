import AppWrap from 'widgets/AppWrap/AppWrap';
import MotionWrap from 'widgets/MotionWrap/MotionWrap';
import AboutSection from './AboutSection';

export default AppWrap(
    MotionWrap(AboutSection, 'app__about'),
    'about',
    'app__whitebg'
);
