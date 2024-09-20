import Img17 from '../Img17/sugi.jpg';
import Header from '../Header'

import './index.css'

const User = () => {
    return (
        <>
        <Header/>
        <div className="bg1">
            <div className="bg2">
                <img src={Img17} className='img1'/>
                <div className='bg3'>
                    <h1 className='h1'> <span className='c1'> Name : </span> sukishkavi</h1>
                    <h1 className='h1'> <span className='c1'> Role : </span> Full Stack-Developer</h1>
                    <h1 className='h1'> <span className='c1'> Phone : </span> +91 9384172679</h1>
                    <h1 className='h1'> <span className='c1'> Gmail : </span> sukish71@gmail.com</h1>
                    <a className='h1' href="https://github.com/Sukish17"> <span className='c1'>Github : </span> https://github.com/Sukish17</a> <br/>
                    <a className='h1' href="https://www.linkedin.com/in/sukishkavi/">
                    <span className='c1'>linkedin : </span> https://www.linkedin.com/in/sukishkavi/</a>
                    
                    

                </div>

            </div>

        </div>
        </>
    )
}
export default User