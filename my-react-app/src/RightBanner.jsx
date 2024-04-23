import Profilepic from './assets/yoo.jpg'
import Links from './Links'

function RightBanner() {
    return(
        <>
            <div className="right-banner">
                <div>
                    <img className='banner-img' src={Profilepic} alt="Profile" />
                </div>
                <div className="links">
                    <Links />
                </div>
            </div>
        </>
    )
}

export default RightBanner