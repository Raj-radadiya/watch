import React from 'react'
import discImg from '../../../Assets/Images/discImg.webp';
export default function Discription() {
    return (
        <div>
            <div className='max-w-[1400px] mx-auto mob:mx-3'>
                <div className='flex gap-10 justify-center text-center items-center border-b border-borderGray mb-5 tab:w-[700px] tab:mx-auto tab:overflow-x-auto tab:justify-between mob:w-[350px] mob:mx-auto mob:overflow-x-auto mob:justify-between'>
                    <div className='text-black font-semibold text-lg pb-5 border-b-2 border-black mob:text-base'>
                        <a href='#'>Description</a>
                    </div>
                    <div className='text-spanGray font-semibold text-lg pb-5 hover:text-black duration-300 mob:text-base'>
                        <a className='tab:w-full whitespace-nowrap' href='#'>Additional information</a>
                    </div>
                    <div className='text-spanGray font-semibold text-lg pb-5 hover:text-black duration-300 mob:text-base'>
                        <a className='w-full whitespace-nowrap' href='#'>Reviews(1)</a>
                    </div>
                    <div className='text-spanGray font-semibold text-lg pb-5 hover:text-black duration-300 mob:text-base'>
                        <a className='w-full whitespace-nowrap' href='#'>Size Chart</a>
                    </div>
                    <div className='text-spanGray font-semibold text-lg pb-5 hover:text-black duration-300 mob:text-base'>
                        <a className='w-full whitespace-nowrap' href='#'>Image Tab</a>
                    </div>
                    <div className='text-spanGray font-semibold text-lg pb-5 hover:text-black duration-300 mob:text-base'>
                        <a className='w-full whitespace-nowrap' href='#'>Shipping & Return</a>
                    </div>
                </div>
                <div className='tab:px-5'>
                    <div className='text-base text-textGray my-4 tab:text-sm'>
                        <p>The Watch has a new design that combines ion-plated stainless steel and aluminum panels . This 46 mm stainless steel case is matched with a secure stainless steel band which makes it extremely durable. The stainless steel case and band lends more sturdiness as well as style to the dynamic design of the watch. The BAR value indicates the number of atmospheres to which water resistance is ensured. The edifice watch is 10 BAR i.e. the water resistance is up to 10 atmospheres. In simple terms, the watch has a 100m water resistance depth to avoid possible water damages.</p>
                    </div>
                    <div>
                        <img className='h-[525px] tab:h-[270px] mob:h-[125px] object-cover' src={discImg} alt='discImg' />
                    </div>
                    <div className='my-4'>
                        <div className='text-2xl font-semibold text-black mb-1 tab:text-xl'>
                            <h3>Amazing Features:</h3>
                        </div>
                        <div className='text-base text-textGray mb-2 mr-2 tab:text-sm'>
                            <li className='mob:pb-2'>Up to 7-day battery life - Get up to 7 days of battery life & up to 2 days of power with calling activated. (Battery life can vary due to multiple factors such as turning on continuous HR tracking or turning up the brightness)</li>
                            <li className='mob:pb-2'>Charging -  The smartwatch features a 260mAh battery that takes approx. 2.5 hours to fully charge. It is recommended that you use a 5W power adapter. Please avoid using a fast-charging adapter to prevent future watch damage.</li>
                            <li className='mob:pb-2'>Music playback - The smartwatch features a remote music control feature that lets you control music played on your phone as long as your smartphone and smartwatch are in Bluetooth range. However, it cannot be used to store music.</li>
                            <li className='mob:pb-2'>Volume control - You can control the volume both during music playback and while attending calls. The watch can also play music out loud due to the presence of an in-built mic and speaker.</li>
                            <li className='mob:pb-2'>NoiseFit app - Pair the smartwatch to the app to track your progress overtime, get health updates, compete with friends and share your achievements.</li>
                            <li className='mob:pb-2'>Bluetooth calling - Experience an advanced calling experience with the addition of Bluetooth calling.</li>
                            <li className='mob:pb-2'>1.81 inches(4.59cms) TFT display, 240*280px, Always on display - No, 550 nits brightness - Enjoy clear and vibrant visuals on its big and bright TFT display.</li>
                            <li className='mob:pb-2'>Health & fitness features - Pursue an active lifestyle with Noise Health SuiteTM, 100 sports modes and IP67 water resistance.</li>
                            <li className='mob:pb-2'>Additional features - Make the most of 100+ cloud based watch faces, AI voice assistant & some in-built games.</li>
                            <li className='mob:pb-2'>In-the-box - The contents in-the-box include the ColorFit Quad Call smartwatch, a magnetic charging cable & the user manual.</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
