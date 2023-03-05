import Navbar from './Navbar';

function Main() {
return (
    <section className='main-section' id='home'>
        <div className='main-section-bg'></div>
        <Navbar />
        <div className='main-section-content '>
            <img className = 'left-line d-none d-sm-block' src = {'/images/left-curve-line.png'} alt = 'animation line' />
            <img className = 'right-golden-curve d-none d-sm-block ' src = {'/images/right-golden-curve.png'} alt = 'animation line' />
            <img className = 'right-white-curve d-none d-sm-block' src = {'/images/right-white-curve.png'} alt = 'animation line' />
            <div className='text-main-box text-white d-flex justify-content-center align-items-sm-start align-items-center flex-column container'>
                <h3 className='h5'>Welcome To Pharmacy</h3>
                <p className='display-5 display-sm-1' id='main-tittle'>ORDER ALL YOUR PHARMACY  NEEDS</p>
                <a className='golden-btn'><p>Descover More</p></a>
            </div>
            
        </div>
    </section>
);
}

export default Main;