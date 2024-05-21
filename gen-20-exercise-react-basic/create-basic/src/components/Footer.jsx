import React from 'react'

const Footer = () => {
  return (
    <>
            <footer class="bg-[#51291E] text-white">
                <div class="container mx-auto py-14 px-6">
                    <div class="flex flex-wrap justify-between gap-7">
                        <div class="flex flex-col">
                            <h2 class="tracking-wide font-semibold">About us</h2>
                            <p>House of Cards</p>
                            <div class="my-1 flex flex-wrap gap-[1vw]">
                                <span><a href="#map" class="hover:text-gray-500 transition-all duration-500"><i class="fa-solid fa-location-dot"></i> Jl. Simpang
                                    Lima</a></span>
                                <span><a href="#mail" class="hover:text-gray-500 transition-all duration-500"><i class="fa-solid fa-envelope"></i>
                                    cardhouse@example.com</a></span>
                            </div>
                            <div class="flex lg:gap-[1vw] md:gap-[3vw] gap-[6vw]">
                                <a href="#a" class="hover:text-gray-500"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#a" class="hover:text-gray-500"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#a" class="hover:text-gray-500"><i class="fa-brands fa-x-twitter"></i></a>
                            </div>
                        </div>
                        <div class="flex flex-col flex-wrap">
                            <h2 class="tracking-wide font-semibold">Quick Links</h2>
                            <ul class="list-none mt-2 flex gap-7 text-nowrap">
                                <li><a href="#Home" class="hover:text-gray-500 transition-all duration-500 ease-in-out">Home</a></li>
                                <li><a href="#TCG" class="hover:text-gray-500 transition-all duration-500 ease-in-out">TCG</a></li>
                                <li><a href="#Board-game" class="hover:text-gray-500 transition-all duration-500 ease-in-out">Board Game</a></li>
                                <li><a href="#Contact" class="hover:text-gray-500 transition-all duration-500 ease-in-out">Contact</a></li>
                            </ul>
                        </div>
                        <div class="lg:col-span-3 md:col-span-4 col-span-12">
                            <h3 class="tracking-wide font-semibold">
                                Contact Us
                            </h3>
                            <form action="">
                                <div class="my-3">
                                    <label for="email-input">Write your email<span class="text-red-600">*</span></label>
                                    <input
                                        type="email" id="email-input"
                                        class="mt-3 w-full py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-500 focus:ring-2 focus:ring-gray-300"
                                        placeholder="andy@example.com"
                                    />
                                </div>
                                <textarea name="message"
                                    class="mt-1 w-full py-2 px-3 h-full bg-transparent rounded outline-none border border-gray-500 focus:ring-2 focus:ring-gray-300"
                                    placeholder="your message"></textarea>
                                <input
                                    type="submit"
                                    class="py-2 px-5 tracking-wide border duration-500 text-base text-center bg-[#FFCDA3] hover:bg-[#FFCD88] border-[#FFCDA3] hover:border-[#FFCD88] text-black rounded w-full"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            <div class="flex justify-center items-center py-3 px-6">
                &copy; 2024 CardHouse. All rights reserved
            </div>
        </footer >
    </>
  )
}

export default Footer;
