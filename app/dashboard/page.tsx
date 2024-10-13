"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../lib/store";
import { setCustomers } from "../lib/slices/authSlice";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "../components/Footer";

interface Customer {
  id: string;
  prompt: string;
  image_url: string;
}

const Dashboard = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const customers = useSelector((state: RootState) => state.auth.customers);
  const dispatch = useDispatch();

    const fallbackData: Customer[] =
[
    {
        id: "1",
        prompt: "Photography",
        image_url: "http://untitled-twkmuar27a-uc.a.run.app/media/images/2024-03-29_16-24-56_7707_3xp83nR.webp"
    },
    {
        id: "2",
        prompt: "Photography",
        image_url: "http://untitled-twkmuar27a-uc.a.run.app/media/images/2024-02-04_08-15-27_5490.webp"
    },
    {
        id: "3",
        prompt: "Photography",
        image_url: "http://untitled-twkmuar27a-uc.a.run.app/media/images/2024-03-29_17-50-12_9747.webp"
    },
    {
        id: "4",
        prompt: "Photography",
        image_url: "http://untitled-twkmuar27a-uc.a.run.app/media/images/2024-03-29_15-17-59_9059.webp"
    },
    {
        id: "5",
        prompt: "Learning",
        image_url: "http://untitled-twkmuar27a-uc.a.run.app/media/images/2024-03-29_17-40-08_8905.webp"
    },
    {
        id: "6",
        prompt: "Learning",
        image_url: "http://untitled-twkmuar27a-uc.a.run.app/media/images/2024-03-29_16-10-19_5342.webp"
    },
    {
        id: "7",
        prompt: "Learning",
        image_url: "http://untitled-twkmuar27a-uc.a.run.app/media/images/2024-03-29_15-12-39_9730.webp"
    },
    {
        id: "8",
        prompt: "Photography",
        image_url: "http://untitled-twkmuar27a-uc.a.run.app/media/images/2024-03-29_15-17-50_1770.webp"
    },
    {
        id: "9",
        prompt: "Learning",
        image_url: "http://untitled-twkmuar27a-uc.a.run.app/media/images/2024-03-29_16-08-53_5159.webp"
    }
]

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchCustomers = async (token: string) => {
      try {
        const response = await fetch(
          "https://untitled-twkmuar27a-uc.a.run.app/api",
          {
            method: "GET",
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        dispatch(setCustomers(result));
        setDataLoaded(true);
        console.log("API Response:", result);
      } catch (error) {
        console.error("Failed to fetch customers:", error);
        // Use fallback data when API call fails
        dispatch(setCustomers(fallbackData));
        setDataLoaded(true);
      }
    };

    if (token) {
      fetchCustomers(token);
    } else {
      // Set fallback data if no token
      dispatch(setCustomers(fallbackData));
      setDataLoaded(true);
    }
  }, [token, dispatch]);

  const photographyCustomers = customers.filter(
    (customer: Customer) => customer.prompt === "Photography"
  );
  const learningCustomers = customers.filter(
    (customer: Customer) => customer.prompt === "Learning"
  );

  return (
    <div className="bg-black">
      <div className="flex text-white justify-center mx-auto flex-col bg-black max-w-[1728px] h-full w-full items-start">
        <div className="max-w-[1728px] sm:p-0 px-6 sm:pl-48 w-full">
          <div className="w-full pt-20 sm:pt-52">
            <Image
              src="/Logowhite.svg"
              width={100}
              height={100}
              alt="company logo"
            />
          </div>
          <div className="flex flex-col pt-20 gap-20 w-full justify-between">
            <div className="max-w-[278px] sm:max-w-[470px] sm:w-1/2">
              <h2 className="sm:text-[48px] text-[24px] font-bold leading-tight">
                Welcome <span className="underline ">Test</span>
              </h2>
              <p className="sm:text-[24px] pt-2 sm:pt-4 text-[12px] font-medium">
                Hope you are having a good day!
              </p>
            </div>

            {photographyCustomers.length > 0 && (
              <div className="mt-4">
                <h3 className="mb-10 sm:text-[48px] text-[24px] font-semibold">
                  Photography{" "}
                </h3>
                <Swiper
                  slidesPerView={3.5}
                  spaceBetween={40}
                  autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    el: ".photography-pagination",
                    clickable: true,
                  }}
                  loop={true}
                  speed={5000}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper"
                  breakpoints={{
                    1400: {
                      slidesPerView: 3.5,
                      spaceBetween: 10,
                    },
                    1000: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    600: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    0: {
                      slidesPerView: 1.5,
                      spaceBetween: 20,
                    },
                  }}
                >
                  {photographyCustomers.map((customer: Customer) => (
                    <SwiperSlide key={customer.id}>
                      <div className="flex flex-col">
                        <div className="flex overflow-x-auto">
                          <div className="max-w-[425px] 2xl:h-[700px] xl:max-h-[700px] w-full h-full">
                            <Image
                              src={customer.image_url}
                              width={450}
                              height={700}
                              alt="Customer Image"
                              className="w-full h-full rounded-[40px]"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="photography-pagination"></div>
              </div>
            )}

            {learningCustomers.length > 0 && (
              <div className="mt-4 mb-10">
                <h3 className="mb-10 sm:text-[48px] text-[24px] font-semibold">
                  Learning{" "}
                </h3>
                <Swiper
                  slidesPerView={3.5}
                  spaceBetween={10}
                  autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    el: ".learning-pagination",
                    clickable: true,
                  }}
                  loop={true}
                  speed={5000}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper"
                  breakpoints={{
                    1400: {
                      slidesPerView: 3.5,
                      spaceBetween: 10,
                    },
                    1000: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    600: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                  }}
                >
                  {learningCustomers.map((customer: Customer) => (
                    <SwiperSlide key={customer.id}>
                      <div className="flex flex-col">
                        <div className="flex overflow-x-auto">
                          <div className="max-w-[425px] 2xl:h-[700px] xl:max-h-[700px] w-full h-full">
                            <Image
                              src={customer.image_url}
                              width={450}
                              height={700}
                              alt="Customer Image"
                              className="w-full h-full rounded-[40px]"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="learning-pagination"></div>
              </div>
            )}

            {!dataLoaded && <p>Loading customers...</p>}
            {dataLoaded && photographyCustomers.length === 0 && learningCustomers.length === 0 && (
              <p>No customers found. Displaying placeholder data.</p>
            )}
          </div>
        </div>

        <style jsx>{`
          .photography-pagination,
          .learning-pagination {
            display: flex;
            justify-content: flex-end; /* Move to the right */
            margin-top: 10px; /* Move down */
          }
        `}</style>
      </div>
      <div className="mx-auto flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
