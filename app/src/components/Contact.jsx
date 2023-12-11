import React from 'react'
import behance from '../assets/behance.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import github from '../assets/github.png';

const Contact = () => {
  return (
    <section id="contact" className="aparece mt-36 max-md:mt-24 flex items-center mb-36">
        <div className="grid grid-cols-12 gap-4 w-full">
            <div className="col-start-2 lg:col-start-3 col-span-10 lg:col-span-8 grid grid-cols-8 gap-4 gap-y-9">
                <div className="col-span-full">
                    <h6 className="text-6xl font-bold fontCool">Let's talk</h6>            </div>
                <div className="col-span-full md:col-span-3">
                    <p className="text-xl text-slate-900">I'm open for hiring and also for collaborating!</p>
                </div>
                <div className="col-span-full md:col-span-3 md:col-start-5">
                    <p className="text-xl text-slate-900">Email me at:</p>
                    <a href="mailto:ssp.mays@gmail.com" className="text-xl hover:bg-white biggie">ssp.mays@gmail.com</a>
                    <div className="flex w-full justify-start mt-8">
                        <a target="_blank" rel='noreferrer' href="https://wa.me/34722312303" className='me-5 biggie'>
                        <svg className="bg-white rounded-xl fill-slate-800 hover:bg-verde" width="43" height="43" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47715 0 0 4.47715 0 10V32C0 37.5228 4.47715 42 10 42H32C37.5228 42 42 37.5228 42 32V10C42 4.47715 37.5228 0 32 0H10ZM5.1321 21.1048C5.13515 12.7766 12.1708 6 20.816 6C25.0116 6.00102 28.9491 7.57602 31.9101 10.4313C34.8722 13.2856 36.502 17.0829 36.5 21.117C36.4969 29.4451 29.4613 36.2227 20.816 36.2227H20.81C18.1997 36.2245 15.6279 35.5934 13.315 34.3835L5 36.4839L7.22532 28.6566C5.85355 26.3673 5.13006 23.768 5.1321 21.1048ZM20.811 33.6712H20.815C28.0011 33.6712 33.8489 28.0388 33.852 21.1159C33.854 17.7607 32.4995 14.6056 30.0374 12.2329C27.5753 9.86027 24.3024 8.55252 20.8211 8.5515C13.631 8.5515 7.78216 14.1819 7.77911 21.1048C7.77803 23.4788 8.471 25.8015 9.77276 27.7868L10.0827 28.2614L8.76577 32.8949L13.6981 31.6491L14.1756 31.9215C16.1774 33.0656 18.4718 33.6712 20.811 33.6712ZM25.288 23.0385C25.6477 23.1655 27.5743 24.079 27.9665 24.267C28.0443 24.3046 28.1169 24.3385 28.1841 24.3699C28.4561 24.4969 28.6399 24.5827 28.7164 24.709C28.814 24.8665 28.814 25.6225 28.4868 26.5035C28.1616 27.3844 26.5948 28.1882 25.8428 28.2969C25.1681 28.3935 24.3136 28.4351 23.3747 28.1475C22.8046 27.9728 22.075 27.7401 21.1402 27.3529C17.4721 25.8265 14.9911 22.4045 14.5159 21.7491C14.4818 21.7021 14.4581 21.6693 14.4449 21.6525L14.4418 21.6484C14.2344 21.382 12.8445 19.5964 12.8445 17.7475C12.8445 16.0111 13.7298 15.1005 14.1382 14.6804C14.1667 14.6511 14.1929 14.6242 14.2163 14.5995C14.576 14.2215 15.0018 14.127 15.2609 14.127C15.524 14.127 15.7842 14.13 16.0128 14.1402C16.041 14.1416 16.0703 14.1415 16.1006 14.1415C16.3291 14.1408 16.6138 14.1399 16.8938 14.7895C17.0152 15.0688 17.1988 15.4989 17.3869 15.9397C17.7073 16.6905 18.0409 17.4723 18.103 17.592C18.2015 17.78 18.2666 18.0015 18.1365 18.2525C18.1154 18.2928 18.0959 18.3308 18.0774 18.3669C17.9803 18.5565 17.9081 18.6973 17.7443 18.8825C17.6819 18.953 17.6173 19.0288 17.5526 19.1048C17.4149 19.2664 17.2765 19.4289 17.157 19.543C16.9609 19.731 16.7566 19.9352 16.9852 20.3122C17.2139 20.6912 18.0004 21.9268 19.1659 22.9267C20.4174 24.0031 21.506 24.4577 22.0579 24.6881C22.1656 24.7331 22.2528 24.7696 22.3169 24.8004C22.7091 24.9884 22.9377 24.9579 23.1674 24.7059C23.395 24.4549 24.1469 23.6044 24.407 23.2264C24.6682 22.8484 24.9293 22.9135 25.288 23.0385Z"/>
</svg>
                        </a>
                        <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/said-sel-lam-palomino-8b747960/" className='me-5 biggie'>
                            <svg className="bg-white rounded-xl fill-slate-800 hover:bg-verde" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.7951 0C33.2465 0 34.6135 0.27846 35.8961 0.835381C37.1787 1.3923 38.301 2.15174 39.2629 3.11369C40.2249 4.07565 40.9843 5.19793 41.5412 6.48053C42.0982 7.76314 42.3766 9.13013 42.3766 10.5815V31.7445C42.3766 33.1959 42.0982 34.5713 41.5412 35.8708C40.9843 37.1703 40.2249 38.301 39.2629 39.2629C38.301 40.2249 37.1787 40.9843 35.8961 41.5412C34.6135 42.0982 33.2465 42.3766 31.7951 42.3766H10.5815C9.13013 42.3766 7.76314 42.0982 6.48053 41.5412C5.19793 40.9843 4.07565 40.2249 3.11369 39.2629C2.15174 38.301 1.3923 37.1703 0.835381 35.8708C0.27846 34.5713 0 33.1959 0 31.7445V10.5815C0 9.13013 0.27846 7.76314 0.835381 6.48053C1.3923 5.19793 2.15174 4.07565 3.11369 3.11369C4.07565 2.15174 5.19793 1.3923 6.48053 0.835381C7.76314 0.27846 9.13013 0 10.5815 0H31.7951ZM14.5812 15.8976H9.26514V33.1115H14.5812V15.8976ZM11.9485 14.5306C12.6573 14.5306 13.2733 14.2774 13.7965 13.7711C14.3196 13.2648 14.5812 12.6404 14.5812 11.8979C14.5812 11.1553 14.3196 10.5309 13.7965 10.0246C13.2733 9.51828 12.6573 9.26514 11.9485 9.26514C11.2059 9.26514 10.5731 9.51828 10.0499 10.0246C9.52672 10.5309 9.26514 11.1553 9.26514 11.8979C9.26514 12.6404 9.52672 13.2648 10.0499 13.7711C10.5731 14.2774 11.2059 14.5306 11.9485 14.5306ZM33.1115 23.1375C33.1115 21.9224 32.774 20.7326 32.0989 19.5682C31.4238 18.4037 30.5463 17.5177 29.4662 16.9101C28.4874 16.3701 27.3482 16.0832 26.0487 16.0494C24.7492 16.0157 23.5763 16.2351 22.53 16.7076V15.8976H17.2139V33.1115H22.53V22.5806L24.707 21.5174C24.9771 21.3824 25.3483 21.3149 25.8209 21.3149C26.2934 21.3149 26.6478 21.3993 26.8841 21.568C27.0866 21.6693 27.2891 21.8887 27.4916 22.2262C27.6942 22.5637 27.7954 22.8675 27.7954 23.1375V33.1115H33.1115V23.1375Z"/>
</svg>
                        </a>
                        <a target="_blank" rel='noreferrer' href="https://www.behance.net/sspmays270e" className='me-5 biggie'>
                            <svg className="bg-white rounded-xl fill-slate-800 hover:bg-verde" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.2645 19.2897C17.062 19.4247 16.8342 19.5513 16.5811 19.6694C16.3279 19.7876 16.0326 19.8466 15.695 19.8466H13.2648V15.8976H15.3406C15.7119 15.8976 16.0326 15.9313 16.3026 15.9988C16.5726 16.0663 16.8258 16.1507 17.062 16.252C17.3321 16.3532 17.5261 16.5389 17.6443 16.8089C17.7624 17.0789 17.8215 17.3996 17.8215 17.7708C17.8215 18.5134 17.6358 19.0197 17.2645 19.2897ZM17.2139 22.5806C17.5177 22.7494 17.7455 22.9435 17.8974 23.1628C18.0493 23.3822 18.1252 23.7113 18.1252 24.1501C18.1252 25.1289 17.8046 25.7871 17.1633 26.1247C16.7583 26.3609 16.2688 26.4791 15.695 26.4791H13.2648V22.4794H16.5811L17.2139 22.5806ZM31.7951 0C33.2465 0 34.6135 0.27846 35.8961 0.835381C37.1787 1.3923 38.301 2.15174 39.2629 3.11369C40.2249 4.07565 40.9843 5.19793 41.5412 6.48053C42.0982 7.76314 42.3766 9.13013 42.3766 10.5815V31.7445C42.3766 33.1959 42.0982 34.5713 41.5412 35.8708C40.9843 37.1703 40.2249 38.301 39.2629 39.2629C38.301 40.2249 37.1787 40.9843 35.8961 41.5412C34.6135 42.0982 33.2465 42.3766 31.7951 42.3766H10.5815C9.13013 42.3766 7.76314 42.0982 6.48053 41.5412C5.19793 40.9843 4.07565 40.2249 3.11369 39.2629C2.15174 38.301 1.3923 37.1703 0.835381 35.8708C0.27846 34.5713 0 33.1959 0 31.7445V10.5815C0 9.13013 0.27846 7.76314 0.835381 6.48053C1.3923 5.19793 2.15174 4.07565 3.11369 3.11369C4.07565 2.15174 5.19793 1.3923 6.48053 0.835381C7.76314 0.27846 9.13013 0 10.5815 0H31.7951ZM25.1627 15.8976H30.4788V13.2142H25.1627V15.8976ZM20.5554 26.8335C20.9942 26.0571 21.2136 25.2133 21.2136 24.302C21.2136 23.4244 21.0111 22.6481 20.6061 21.9731C20.2348 21.3655 19.6779 20.9098 18.9353 20.6061C19.4079 20.3361 19.7791 20.0323 20.0492 19.6947C20.4879 19.121 20.7073 18.3446 20.7073 17.3658C20.7073 16.387 20.4879 15.5769 20.0492 14.9356C19.3403 13.8555 18.0915 13.2817 16.3026 13.2142H9.26514V29.1118H15.8469C16.2182 29.1118 16.5726 29.0949 16.9101 29.0611C17.2477 29.0274 17.5683 28.9768 17.8721 28.9093C18.5134 28.7405 19.0534 28.4705 19.4922 28.0992C19.7285 27.9304 19.9226 27.7448 20.0745 27.5423C20.2264 27.3398 20.3867 27.1035 20.5554 26.8335ZM33.1115 23.7957C33.0777 23.4919 33.0609 23.205 33.0609 22.935C33.0609 22.6987 33.0524 22.4625 33.0355 22.2262C33.0187 21.9899 33.0102 21.8043 33.0102 21.6693C32.9427 21.1967 32.8415 20.7833 32.7064 20.4289C32.5714 20.0745 32.4027 19.7285 32.2002 19.391C31.7276 18.6147 31.1538 18.0577 30.4788 17.7202C29.8037 17.3827 29.0274 17.2139 28.1498 17.2139C26.6647 17.2139 25.4665 17.7202 24.5552 18.7328C23.6438 19.8129 23.1882 21.3149 23.1882 23.2388C23.1882 25.2977 23.6945 26.7828 24.707 27.6942C25.7196 28.6055 26.901 29.0611 28.2511 29.0611C29.0274 29.0611 29.7278 28.9093 30.3522 28.6055C30.9766 28.3017 31.5251 27.8798 31.9976 27.3398C32.2677 26.9685 32.4871 26.6309 32.6558 26.3272C32.8246 26.0234 32.9258 25.6352 32.9596 25.1627H30.2762C30.2087 25.6352 30.1328 25.8799 30.0484 25.8968C29.964 25.9137 29.8712 25.9728 29.77 26.074C29.5674 26.2428 29.348 26.3862 29.1118 26.5044C28.8755 26.6225 28.6055 26.6816 28.3017 26.6816C27.7279 26.6816 27.2385 26.5297 26.8335 26.2259C26.5297 26.0234 26.2934 25.7365 26.1247 25.3652C25.9559 24.9939 25.8546 24.4708 25.8209 23.7957H33.1115ZM28.1498 19.8466C28.7574 19.8466 29.2637 20.0492 29.6687 20.4542C29.905 20.6567 30.0737 20.8761 30.175 21.1124C30.2762 21.3486 30.3438 21.8043 30.3775 22.4794H25.8715C25.939 21.8043 26.0318 21.3655 26.15 21.163C26.2681 20.9605 26.4116 20.7411 26.5803 20.5048C26.9516 20.066 27.4748 19.8466 28.1498 19.8466Z"/>
</svg>
                        </a>
                        <a target="_blank" rel='noreferrer' href="https://github.com/Ganimedess" className='me-5 biggie'>
                            <svg className="bg-white rounded-xl fill-slate-800 hover:bg-verde" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.7951 0C33.2465 0 34.6135 0.27846 35.8961 0.835381C37.1787 1.3923 38.301 2.15174 39.2629 3.11369C40.2249 4.07565 40.9843 5.19793 41.5412 6.48053C42.0982 7.76314 42.3766 9.13013 42.3766 10.5815V31.7445C42.3766 33.1959 42.0982 34.5713 41.5412 35.8708C40.9843 37.1703 40.2249 38.301 39.2629 39.2629C38.301 40.2249 37.1787 40.9843 35.8961 41.5412C34.6135 42.0982 33.2465 42.3766 31.7951 42.3766H10.5815C9.13013 42.3766 7.76314 42.0982 6.48053 41.5412C5.19793 40.9843 4.07565 40.2249 3.11369 39.2629C2.15174 38.301 1.3923 37.1703 0.835381 35.8708C0.27846 34.5713 0 33.1959 0 31.7445V10.5815C0 9.13013 0.27846 7.76314 0.835381 6.48053C1.3923 5.19793 2.15174 4.07565 3.11369 3.11369C4.07565 2.15174 5.19793 1.3923 6.48053 0.835381C7.76314 0.27846 9.13013 0 10.5815 0H31.7951ZM34.8329 27.9979C35.5417 26.5466 35.8961 24.6058 35.8961 22.1756C35.8961 19.4079 35.1029 17.0789 33.5165 15.1888C33.8203 14.2437 33.9722 13.2648 33.9722 12.2523C33.9722 10.9021 33.6684 9.61954 33.0609 8.40444C31.7782 8.40444 30.6813 8.62384 29.77 9.06262C28.7574 9.53516 27.6604 10.244 26.4791 11.189C25.7027 11.0203 24.9096 10.8853 24.0995 10.784C23.2894 10.6828 22.4456 10.6321 21.568 10.6321C19.6779 10.6321 17.8721 10.8346 16.1507 11.2397C14.8681 10.2946 13.7543 9.58579 12.8092 9.11325C11.8979 8.64071 10.784 8.40444 9.46766 8.40444C8.86011 9.61954 8.55633 10.9021 8.55633 12.2523C8.55633 12.7586 8.59852 13.2564 8.6829 13.7458C8.76729 14.2352 8.89386 14.7162 9.06262 15.1888C7.47624 17.0114 6.68305 19.3403 6.68305 22.1756C6.68305 24.6058 7.03746 26.5466 7.74626 27.9979C8.32006 29.1793 9.16388 30.1159 10.2777 30.8079C11.3916 31.4998 12.556 31.9976 13.7711 32.3014C14.6487 32.5714 15.5432 32.7571 16.4545 32.8583C16.9608 32.9258 17.4333 32.9765 17.8721 33.0102C18.3109 33.044 18.7159 33.0609 19.0872 33.0609C19.4585 33.0946 19.8466 33.1115 20.2517 33.1115H23.0869L24.5045 33.0609C24.9433 33.0271 25.4074 32.9765 25.8968 32.909C26.3862 32.8415 26.9178 32.7571 27.4916 32.6558C28.673 32.4533 29.6687 32.1833 30.4788 31.8458C31.3563 31.4745 32.1833 30.9597 32.9596 30.3016C33.7359 29.6434 34.3603 28.8755 34.8329 27.9979ZM27.441 19.9985C28.8586 19.9985 29.9556 20.4879 30.7319 21.4668C31.542 22.4456 31.947 23.6438 31.947 25.0614C31.947 26.074 31.7614 26.96 31.3901 27.7195C31.0188 28.4789 30.5463 29.0949 29.9725 29.5674C29.3649 30.0062 28.6561 30.3438 27.846 30.58C26.9685 30.85 26.1415 31.0272 25.3652 31.1116C24.5889 31.196 23.7113 31.2382 22.7325 31.2382H19.796C18.8172 31.2382 17.948 31.196 17.1886 31.1116C16.4292 31.0272 15.6107 30.85 14.7331 30.58C13.923 30.3438 13.2142 30.0062 12.6067 29.5674C12.0329 29.0949 11.5519 28.4789 11.1637 27.7195C10.7756 26.96 10.5815 26.074 10.5815 25.0614C10.5815 23.6438 10.9865 22.4456 11.7966 21.4668C12.5729 20.4879 13.6699 19.9985 15.0875 19.9985C15.3575 19.9985 15.7794 20.0238 16.3532 20.0745C16.927 20.1251 17.6527 20.2179 18.5303 20.3529C18.9353 20.4204 19.3657 20.4711 19.8213 20.5048C20.277 20.5386 20.758 20.5554 21.2643 20.5554C21.7705 20.5554 22.2515 20.5386 22.7072 20.5048C23.1628 20.4711 23.6101 20.4204 24.0489 20.3529C24.9264 20.2179 25.6521 20.1251 26.2259 20.0745C26.7997 20.0238 27.2047 19.9985 27.441 19.9985ZM16.9101 27.7954C17.4502 27.1879 17.7624 26.5128 17.8468 25.7703C17.9312 25.0277 17.8721 24.302 17.6696 23.5932C17.5346 23.1207 17.2899 22.6819 16.9355 22.2768C16.5811 21.8718 16.1507 21.6693 15.6444 21.6693C15.1381 21.6693 14.7162 21.8718 14.3787 22.2768C13.8386 22.8844 13.5264 23.5594 13.442 24.302C13.3577 25.0446 13.4167 25.7703 13.6192 26.4791C13.788 26.9516 14.0496 27.3904 14.404 27.7954C14.7584 28.2005 15.1719 28.403 15.6444 28.403C16.117 28.403 16.5389 28.2005 16.9101 27.7954ZM28.1498 27.7954C28.6899 27.1879 29.0021 26.5128 29.0865 25.7703C29.1708 25.0277 29.1118 24.302 28.9093 23.5932C28.7742 23.1207 28.5295 22.6819 28.1751 22.2768C27.8207 21.8718 27.3904 21.6693 26.8841 21.6693C26.3778 21.6693 25.9559 21.8718 25.6184 22.2768C25.0783 22.8844 24.7661 23.5594 24.6817 24.302C24.5973 25.0446 24.6564 25.7703 24.8589 26.4791C25.0277 26.9516 25.2893 27.3904 25.6437 27.7954C25.9981 28.2005 26.4116 28.403 26.8841 28.403C27.3566 28.403 27.7785 28.2005 28.1498 27.7954Z"/>
</svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact