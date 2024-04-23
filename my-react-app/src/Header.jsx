import LeftBanner from './LeftBanner.jsx'
import RightBanner from './RightBanner.jsx';

function Header() {
    return (
        <div className="header">
            <LeftBanner />
            <RightBanner />
        </div>
    );
}

export default Header