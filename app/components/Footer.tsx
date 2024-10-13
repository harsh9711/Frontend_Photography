import Link from "next/link";
import React from "react";
const FacebookIcon = () =>
{
    return (
        <svg  className="w-full" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="49" height="49" stroke="black" />
            <path d="M37.4999 4.16663H31.2499C28.4872 4.16663 25.8377 5.26409 23.8842 7.2176C21.9307 9.1711 20.8333 11.8206 20.8333 14.5833V20.8333H14.5833V29.1666H20.8333V45.8333H29.1666V29.1666H35.4166L37.4999 20.8333H29.1666V14.5833C29.1666 14.0308 29.3861 13.5009 29.7768 13.1102C30.1675 12.7195 30.6974 12.5 31.2499 12.5H37.4999V4.16663Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
       
       
        </svg>

    );
}
const InstagramIcon = () =>
{
    return (
        <svg  className="w-full" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="49" height="49" stroke="black" />
            <path d="M35.4167 4.16663H14.5834C8.83045 4.16663 4.16675 8.83033 4.16675 14.5833V35.4166C4.16675 41.1696 8.83045 45.8333 14.5834 45.8333H35.4167C41.1697 45.8333 45.8334 41.1696 45.8334 35.4166V14.5833C45.8334 8.83033 41.1697 4.16663 35.4167 4.16663Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M33.3334 23.6875C33.5905 25.4214 33.2943 27.1921 32.487 28.748C31.6797 30.3038 30.4024 31.5655 28.8368 32.3535C27.2711 33.1415 25.4968 33.4158 23.7663 33.1374C22.0357 32.8589 20.437 32.0419 19.1976 30.8024C17.9582 29.563 17.1411 27.9643 16.8627 26.2338C16.5842 24.5033 16.8585 22.729 17.6466 21.1633C18.4346 19.5976 19.6963 18.3203 21.2521 17.513C22.8079 16.7057 24.5787 16.4096 26.3125 16.6667C28.0811 16.9289 29.7185 17.7531 30.9827 19.0173C32.247 20.2816 33.0711 21.9189 33.3334 23.6875Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M36.4583 13.5416H36.4791" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
}
const TwitterIcon = () =>
{
    return (
        <svg   className="w-full" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="49" height="49" stroke="black" />
            <path d="M47.9166 6.24995C45.9216 7.6572 43.7126 8.73351 41.3749 9.43745C40.1202 7.99477 38.4527 6.97223 36.5979 6.50813C34.7431 6.04404 32.7905 6.16078 31.0043 6.84256C29.218 7.52435 27.6842 8.73829 26.6103 10.3202C25.5364 11.9021 24.9743 13.7757 24.9999 15.6875V17.7708C21.3387 17.8657 17.7109 17.0537 14.4395 15.4071C11.1681 13.7605 8.35475 11.3304 6.24992 8.33329C6.24992 8.33329 -2.08341 27.0833 16.6666 35.4166C12.376 38.3291 7.26483 39.7894 2.08325 39.5833C20.8333 50 43.7499 39.5833 43.7499 15.625C43.748 15.0446 43.6922 14.4658 43.5833 13.8958C45.7095 11.7989 47.21 9.15144 47.9166 6.24995Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>


    );
}
const OtherIcon = () =>
{
    return (
        <svg  className="w-full"  width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="49" height="49" stroke="black" />
            <path d="M22.9167 22.9166V14.5833M33.3333 22.9166V14.5833M43.75 4.16663H6.25V37.5H16.6667V45.8333L25 37.5H35.4167L43.75 29.1666V4.16663Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>



    );
}
const YoutubeIcon = () =>
{
    return (
        <svg   className="w-full" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="49" height="49" stroke="black" />
            <path d="M46.9582 13.375C46.7107 12.3863 46.2067 11.4804 45.4971 10.7488C44.7874 10.0172 43.8973 9.48584 42.9166 9.20837C39.3332 8.33337 24.9999 8.33337 24.9999 8.33337C24.9999 8.33337 10.6666 8.33337 7.08322 9.29171C6.10249 9.56918 5.21234 10.1005 4.50269 10.8321C3.79305 11.5637 3.28903 12.4696 3.04156 13.4584C2.38575 17.0949 2.06496 20.784 2.08322 24.4792C2.05985 28.2022 2.38065 31.9194 3.04156 35.5834C3.31439 36.5414 3.82969 37.4128 4.53769 38.1135C5.24568 38.8142 6.12243 39.3205 7.08322 39.5834C10.6666 40.5417 24.9999 40.5417 24.9999 40.5417C24.9999 40.5417 39.3332 40.5417 42.9166 39.5834C43.8973 39.3059 44.7874 38.7745 45.4971 38.0429C46.2067 37.3114 46.7107 36.4054 46.9582 35.4167C47.609 31.8075 47.9297 28.1466 47.9166 24.4792C47.9399 20.7562 47.6191 17.039 46.9582 13.375Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20.3125 31.2916L32.2917 24.4791L20.3125 17.6666V31.2916Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>


    );
}
const Footer = () => {
    return (
        <footer className=" bg-black max-w-[1728px] w-full px-6 xl:py-8 2xl:py-16 md:px-16 md:pt-16 md:pb-6 2xl:px-24 text-white">
            <div className="text-white  w-full sm:pl-28  mx-auto pt-10">
                <div className="flex flex-row w-full justify-between">
                    <div className="grid grid-cols-1 gap-x-2  gap-y-10">
                        <div className="flex flex-col 2xl:gap-y-8 items-start  ">
                            <div className="flex sm:flex-row gap-x-10"  >
                               
                                <FacebookIcon/><InstagramIcon/><OtherIcon/><TwitterIcon/><YoutubeIcon/>

                            </div>

                        </div>
<div className="text-white flex sm:flex-col flex-row w-full mt-8 justify-between gap-x-20 items-center">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-x-16 gap-y-4 2xl:gap-y-10">
                            <ul className="text-white leading-2 2xl:leading-8 flex flex-col gap-y-2 2xl:gap-y-4">
                                <div>  <li className="text-white text-[12px] sm:text-[24px] font-bold mb-1.5 2xl:mb-3">Privacy Policy</li>
                                </div>






                            </ul>

                            <ul className="text-white leading-2 2xl:leading-8 flex flex-col gap-y-2 2xl:gap-y-4">
                                <div>  <li className="text-white text-[12px] sm:text-[24px] font-bold mb-1.5 2xl:mb-3">Contact Us</li>
                                </div>






                            </ul>

                            <ul className="text-white leading-2 2xl:leading-8 flex flex-col gap-y-2 2xl:gap-y-4">
                                <div>  <li className="text-white text-[12px] sm:text-[24px] font-bold mb-1.5 2xl:mb-3">Cookie preferences</li>
                                </div>






                            </ul>

                            <ul className="text-white leading-2 2xl:leading-8 flex flex-col gap-y-2 2xl:gap-y-4">
                                <div>  <li className="text-white text-[12px] sm:text-[24px] font-bold mb-1.5 2xl:mb-3">Corporate Information</li>
                                </div>






                            </ul></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-x-16 gap-y-4 2xl:gap-y-10">
                            <ul className="text-white leading-2 2xl:leading-8 flex flex-col gap-y-2 2xl:gap-y-4">
                                <div>  <li className="text-white text-[12px] sm:text-[24px] font-bold mb-1.5 2xl:mb-3">Privacy Policy</li>
                                </div>






                            </ul>

                            <ul className="text-white leading-2 2xl:leading-8 flex flex-col gap-y-2 2xl:gap-y-4">
                                <div>  <li className="text-white text-[12px] sm:text-[24px] font-bold mb-1.5 2xl:mb-3">Contact Us</li>
                                </div>






                            </ul>

                            <ul className="text-white leading-2 2xl:leading-8 flex flex-col gap-y-2 2xl:gap-y-4">
                                <div>  <li className="text-white text-[12px] sm:text-[24px] font-bold mb-1.5 2xl:mb-3">Cookie preferences</li>
                                </div>






                            </ul>

                            <ul className="text-white leading-2 2xl:leading-8 flex flex-col gap-y-2 2xl:gap-y-4">
                                <div>  <li className="text-white text-[12px] sm:text-[24px] font-bold mb-1.5 2xl:mb-3">Corporate Information</li>
                                </div>






                                </ul></div></div>

                    </div>
                </div>
                <div>
                    <div className="text-white text-[12px] xl:text-[16px] 2xl:text-[20px] flex flex-col-reverse lg:flex-row-reverse gap-y-4 2xl:gap-y-8 gap-x-2 2xl:gap-x-6 justify-between items-start pt-4 2xl:pt-10  ">
                        <h3 className="opacity-0">© AI builder 2024</h3>
                        <div className="flex flex-row items-start gap-x-2 2xl:gap-x-8 gap-y-8">
                            <Link href="/policies/refund" className="  pr-2 2xl:pr-8 font-bold  whitespace-nowrap w-fit">
                                <span className="text-gray-500">©</span>  Alkye Test
                            </Link>


                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;