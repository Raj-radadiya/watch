import React from 'react'
import postFirst from '../../../Assets/Images/postFirst.webp';
import postSecond from '../../../Assets/Images/postSecond.webp';
import postThird from '../../../Assets/Images/postThird.jpg';
import postForth from '../../../Assets/Images/postForth.webp';
import postFifth from '../../../Assets/Images/postFifth.webp';
export default function RelatedBlog() {
    return (
        <div>
            <div>
                <div className='mb-3'>
                    <h3 className='text-xl font-bold'>Recent Posts</h3>
                </div>
                <div>
                    <div className='flex gap-3 mt-4'>
                        <div className='w-[33%] tab:w-auto'>
                            <img className='w-[89px] h-16' src={postFirst} alt='post' />
                        </div>
                        <div className='w-[65%]'>
                            <p className='text-sm tracking-wider text-textGray font-medium hover:text-black duration-300 ease-in-out mob:text-xs'>How to Write a Blog Post Your Readers Will Love in 5 Steps</p>
                        </div>
                    </div>
                    <div className='flex gap-3 mt-7' >
                        <div className='w-[33%] tab:w-auto'>
                            <img className='w-[89px] h-16' src={postSecond} alt='post' />
                        </div>
                        <div className='w-[65%]'>
                            <p className='text-sm tracking-wider text-textGray font-medium hover:text-black duration-300 ease-in-out mob:text-xs'>9 Content Marketing Trends and Ideas to Increase Traffic</p>
                        </div>
                    </div>
                    <div className='flex gap-3 mt-7'>
                        <div className='w-[33%] tab:w-auto'>
                            <img className='w-[89px] h-16' src={postThird} alt='post' />
                        </div>
                        <div className='w-[65%]'>
                            <p className='text-sm tracking-wider text-textGray font-medium hover:text-black duration-300 ease-in-out mob:text-xs'>The Ultimate Guide to Marketing Strategies to Improve Sales</p>
                        </div>
                    </div>
                    <div className='flex gap-3 mt-7'>
                        <div className='w-[33%] tab:w-auto'>
                            <img className='w-[89px] h-16' src={postForth} alt='post' />
                        </div>
                        <div className='w-[65%]'>
                            <p className='text-sm tracking-wider text-textGray font-medium hover:text-black duration-300 ease-in-out mob:text-xs'>50 Best Sales Questions to Determine Your Customer's Needs</p>
                        </div>
                    </div>
                    <div className='flex gap-3 mt-7'>
                        <div className='w-[33%] tab:w-auto'>
                            <img className='w-[89px] h-16' src={postFifth} alt='post' />
                        </div>
                        <div className='w-[65%]'>
                            <p className='text-sm tracking-wider text-textGray font-medium hover:text-black duration-300 ease-in-out mob:text-xs'>6 Simple Ways To Boost Your Ecommerce Conversion Rate</p>
                        </div>
                    </div>
                </div>

                <div className='mt-10'>
                    <div className='text-xl font-bold'>
                        <h3>Recent Comments</h3>
                    </div>
                    <div>
                        <div className='mt-4 mob:mt-2'>
                            <span className='text-textGray text-[15px] pr-1'>Jones on</span>
                            <a className='text-textGray text-[15px] hover:text-black duration-300 ease-in-out leading-8 mob:text-sm' href='#'>Joker & Witch Niko Dial Silver Metallic Strap Watch</a>
                        </div>
                        <div className='mt-4 mob:mt-2'>
                            <span className='text-textGray text-[15px] pr-1'>Jones on</span>
                            <a className='text-textGray text-[15px] hover:text-black duration-300 ease-in-out leading-8 mob:text-sm' href='#'>Hugo Boss Women's White Analog Quartz Watch</a>
                        </div>
                        <div className='mt-4 mob:mt-2'>
                            <span className='text-textGray text-[15px] pr-1'>Jones on</span>
                            <a className='text-textGray text-[15px] hover:text-black duration-300 ease-in-out leading-8 mob:text-sm' href='#'>Hugo Boss Women's White Analog Quartz Watch</a>
                        </div>
                        <div className='mt-4 mob:mt-2'>
                            <span className='text-textGray text-[15px] pr-1'>Jones on</span>
                            <a className='text-textGray text-[15px] hover:text-black duration-300 ease-in-out leading-8 mob:text-sm' href='#'>womens Lovely Stainless Steel Dress Watch Grey</a>
                        </div>
                        <div className='mt-4 mob:mt-2'>
                            <span className='text-textGray text-[15px] pr-1'>Jones on</span>
                            <a className='text-textGray text-[15px] hover:text-black duration-300 ease-in-out leading-8 mob:text-sm' href='#'>Watch For Men Le Rockle Locle Men's Watch</a>
                        </div>
                        <div className='mt-4 mob:mt-2'>
                            <span className='text-textGray text-[15px] pr-1'>Jones on</span>
                            <a className='text-textGray text-[15px] hover:text-black duration-300 ease-in-out leading-8 mob:text-sm' href='#'>Treeweto Women's Quartz Watch, Small Case Analog</a>
                        </div>
                    </div>
                </div>

                <div className='mt-10'>
                    <div className='text-xl font-bold'>
                        <h3>Categories</h3>
                    </div>
                    <div className='mt-5 text-textGray'>
                        <a className='block mob:text-sm' href='#'>Business</a>
                        <a className='block mob:text-sm' href='#'>Information</a>
                        <a className='block mob:text-sm' href='#'>Marketing</a>
                        <a className='block mob:text-sm' href='#'>Promotions</a>
                        <a className='block mob:text-sm' href='#'>Search Engine</a>
                        <a className='block mob:text-sm' href='#'>Social Media</a>
                        <a className='block mob:text-sm' href='#'>Statistics</a>
                        <a className='block mob:text-sm' href='#'>Writing</a>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='text-xl font-bold'>
                        <h3>Tags</h3>
                    </div>
                    <div className='mt-5 text-textGray'>
                        <a className='text-sm' href='#'>Blogging (4)</a>
                        <a className='text-sm' href='#'> Community (6)</a>
                        <a className='text-sm' href='#'>Copywriting (4)</a>
                        <a className='text-sm' href='#'> Educational (4)</a>
                        <a className='text-sm' href='#'>Learning (4)</a>
                        <a className='text-sm' href='#'> Management (4)</a>
                        <a className='text-sm' href='#'>Networking (4)</a>
                        <a className='text-sm' href='#'> Photography (4)</a>
                        <a className='text-sm' href='#'> Success Story (4)</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
