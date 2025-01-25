import { Container, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
// import EmblaCarousel from "@/components/common/Swiper";
import { EmblaOptionsType } from "embla-carousel";
import Carousel from "@/components/common/Swiper";

const OPTIONS: EmblaOptionsType = {
  direction: "rtl",
  loop: true,
  // startIndex: 2,
};

import React, { useMemo } from "react";
import { Card, CardContent, Button, Box } from "@mui/material";

const PricingCard = ({
  price = "240,000",
  duration = "3",
  internetData = "120",
  callMinutes = "1700",
  smsCount = "1700",
}) => {
  const DiamondIcon = useMemo(
    () => (
      <svg
        width="35"
        height="28"
        viewBox="0 0 35 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        <path
          id="Vector 75"
          d="M17.5 27L33.5 9.47191M17.5 27L1.5 9.47191M17.5 27L12.463 9.47191M17.5 27L22.537 9.47191M33.5 9.47191H30.8333M33.5 9.47191L27.5741 1M27.5741 1H17.5M27.5741 1L22.537 9.47191M22.537 9.47191L17.5 1M22.537 9.47191H26.9815M22.537 9.47191H12.463M17.5 1H14.8333M17.5 1L12.463 9.47191M12.463 9.47191L7.42593 1M12.463 9.47191H7.42593M7.42593 1H11.2778M7.42593 1L1.5 9.47191M1.5 9.47191H5.64815M13.6481 1H12.463M28.1667 9.47191H29.3519"
          stroke="#00AAAD"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    []
  );

  const SpecialOfferMobileIcon = useMemo(
    () => (
      <svg
        width="37"
        height="54"
        viewBox="0 0 37 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.501 2C7.18253 6.87407 -5.19272 21.2889 6.18935 30"
          stroke="#333539"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.6566 25.711C18.2955 25.7376 18.9092 25.9677 19.4082 26.3676L34.128 38.1673C35.4319 39.2125 35.6303 41.1217 34.5692 42.4127L27.1422 51.4489C26.0992 52.7179 24.2296 52.9122 22.9479 51.8848L8.20278 40.0649C7.6843 39.6492 7.31849 39.0732 7.16276 38.4273L5.06117 29.7098C4.84056 28.7947 5.06227 27.8292 5.65998 27.102L6.21347 26.4286C6.81118 25.7013 7.71557 25.2968 8.6561 25.336L17.6566 25.711ZM7.81824 30.8105C8.642 31.4875 9.85862 31.3685 10.5357 30.5448C11.2127 29.7211 11.0937 28.5046 10.27 27.8276C9.44622 27.1506 8.22959 27.2695 7.55257 28.0932C6.87554 28.9169 6.99448 30.1335 7.81824 30.8105Z"
          fill="#FFCB05"
        />
        <path
          opacity="0.9"
          d="M14.6171 36.1048C14.6057 36.0957 14.5757 36.0683 14.5271 36.0223C14.4789 35.9804 14.4218 35.9241 14.3559 35.8533C14.2922 35.7844 14.2237 35.7005 14.1504 35.6017C14.0793 35.5046 14.0143 35.3977 13.9554 35.2807C13.8014 34.9663 13.7373 34.6529 13.7631 34.3404C13.7907 34.0257 13.9125 33.7321 14.1286 33.4595C14.4887 33.0052 15.0634 32.6932 15.8526 32.5236C15.915 32.5102 15.9663 32.4991 16.0066 32.4903C16.0491 32.4833 16.0875 32.4768 16.1219 32.4708C16.1563 32.4647 16.1877 32.4601 16.2162 32.4568C16.2488 32.453 16.2855 32.4488 16.3262 32.4441C16.3169 32.3997 16.3068 32.3566 16.2957 32.3145C16.287 32.2743 16.2807 32.2379 16.2769 32.2053L16.2588 32.1021L17.5932 31.8117C17.6406 31.9898 17.6864 32.2166 17.7307 32.4921C17.7767 32.7653 17.8153 33.0992 17.8465 33.4938C17.9036 34.6302 17.7251 35.4596 17.3109 35.982C17.0985 36.2501 16.8456 36.4361 16.5522 36.5402C16.2612 36.646 15.9552 36.668 15.6345 36.6061C15.5243 36.5817 15.4183 36.5475 15.3162 36.5036C15.2146 36.4638 15.1198 36.4201 15.0318 36.3725C14.9438 36.3249 14.8639 36.2763 14.7921 36.2269C14.7208 36.1815 14.6625 36.1408 14.6171 36.1048ZM16.3774 35.242C16.4332 35.1716 16.4735 35.0741 16.4983 34.9495C16.5231 34.8249 16.5358 34.6852 16.5365 34.5304C16.5412 34.3751 16.5369 34.2126 16.5234 34.0429C16.5118 33.871 16.4966 33.7035 16.4777 33.5407C16.3624 33.5602 16.2364 33.5861 16.0999 33.6184C15.9651 33.6484 15.8315 33.6886 15.6991 33.739C15.5667 33.7894 15.4418 33.8513 15.3244 33.9247C15.2088 33.9958 15.1146 34.082 15.0417 34.1833C15.0008 34.2396 14.9891 34.308 15.0067 34.3885C15.0242 34.469 15.0572 34.5488 15.1055 34.6278C15.1561 34.7086 15.2146 34.7864 15.2811 34.8612C15.3493 34.9338 15.4106 34.9917 15.4652 35.0349C15.5333 35.0889 15.6096 35.142 15.694 35.1941C15.7825 35.2458 15.8685 35.2844 15.9519 35.3098C16.0376 35.337 16.1182 35.3473 16.1938 35.3406C16.2693 35.3339 16.3305 35.3011 16.3774 35.242ZM19.2639 39.7881C19.2139 39.7485 19.1462 39.6893 19.0607 39.6105C18.9753 39.5316 18.8974 39.4292 18.8271 39.3032C18.5539 39.5453 18.248 39.7374 17.9096 39.8797C17.5716 40.0261 17.2142 40.1293 16.8374 40.1894C16.4588 40.2517 16.0662 40.2734 15.6595 40.2544C15.2529 40.2354 14.8446 40.1836 14.4345 40.099L14.4944 38.7427C14.7205 38.7888 14.954 38.8278 15.195 38.8598C15.4342 38.894 15.6708 38.9151 15.9049 38.9231C16.1394 38.9352 16.3671 38.9326 16.5879 38.9153C16.8093 38.9021 17.0171 38.8709 17.2116 38.8216C17.406 38.7723 17.5827 38.7033 17.7417 38.6148C17.8988 38.5286 18.0305 38.4184 18.1367 38.2844C18.1421 38.2776 18.1491 38.2665 18.1576 38.251C18.1684 38.2374 18.1792 38.2238 18.1901 38.2102C18.2009 38.1965 18.2078 38.1854 18.211 38.1768C18.2164 38.17 18.2155 38.1711 18.2083 38.1802L18.2056 38.1836C18.2941 38.0393 18.3713 37.8952 18.4372 37.7514C18.5031 37.6076 18.5629 37.4553 18.6165 37.2943C18.6724 37.1352 18.7248 36.9641 18.7738 36.781C18.8246 36.5956 18.8784 36.3923 18.9354 36.1712L20.2604 36.5224C20.1352 36.867 20.0403 37.1617 19.9757 37.4064C19.9112 37.6511 19.8732 37.8577 19.8617 38.0262C19.8525 38.1964 19.8685 38.3348 19.9097 38.4415C19.9528 38.5459 20.0174 38.6323 20.1037 38.7007L20.1208 38.7142C20.1957 38.7736 20.2544 38.8442 20.2969 38.9259C20.3394 39.0077 20.3646 39.0924 20.3727 39.1802C20.3849 39.2675 20.3785 39.3549 20.3535 39.4424C20.3308 39.5317 20.2907 39.6127 20.2331 39.6853C20.1736 39.7603 20.1031 39.819 20.0213 39.8615C19.9418 39.9057 19.8582 39.9319 19.7704 39.94C19.6849 39.9499 19.5984 39.9424 19.5109 39.9174C19.4234 39.8924 19.3411 39.8493 19.2639 39.7881ZM22.016 35.9666L20.8405 36.1056L20.7063 34.9451L19.5579 35.0779L19.4182 33.8964L20.5937 33.7574L20.7279 34.9179L21.8762 34.7851L22.016 35.9666ZM20.8912 33.4661L21.9785 33.3404L22.1049 34.4337L21.0176 34.5594L20.8912 33.4661ZM20.9527 42.9522L19.7773 43.0912L19.6431 41.9307L18.4947 42.0635L18.355 40.882L19.5305 40.7429L19.6647 41.9034L20.813 41.7707L20.9527 42.9522ZM18.9733 38.6812C19.0328 38.6063 19.1033 38.5476 19.1851 38.5051C19.2646 38.4609 19.3471 38.4338 19.4326 38.4239C19.5199 38.4117 19.6073 38.4181 19.6948 38.4431C19.7823 38.468 19.8635 38.5102 19.9384 38.5697L20.3166 38.8694L20.4802 38.9991C20.5824 39.0801 20.6984 39.1647 20.8283 39.2528C20.9582 39.341 21.088 39.4198 21.2178 39.4894C21.3475 39.559 21.4714 39.6128 21.5892 39.6507C21.7112 39.6882 21.8153 39.6968 21.9017 39.6765C21.9573 39.6577 22.0112 39.6153 22.0634 39.5495C22.1409 39.4518 22.2088 39.3171 22.2674 39.1452C22.3282 38.9752 22.3817 38.7957 22.428 38.6067C22.4742 38.4178 22.5137 38.2327 22.5464 38.0515C22.5813 37.8721 22.6117 37.7241 22.6374 37.6077L23.9866 37.9004C23.9598 38.0789 23.9127 38.2783 23.8453 38.4986C23.7797 38.7166 23.7028 38.9349 23.6146 39.1535C23.5282 39.3698 23.4334 39.5757 23.3302 39.7713C23.2287 39.9646 23.1285 40.1237 23.0294 40.2486C22.8476 40.478 22.6401 40.6557 22.4071 40.7817C22.1424 40.9196 21.8714 40.9932 21.5939 41.0026C21.3182 41.0097 21.0385 40.9544 20.7545 40.8366C20.672 40.8008 20.5751 40.748 20.4639 40.6783C20.3527 40.6087 20.243 40.5347 20.1349 40.4564C20.025 40.3804 19.9235 40.3055 19.8304 40.2317C19.7355 40.1601 19.6619 40.1036 19.6096 40.0622L19.1156 39.6706L19.0849 39.6463C19.01 39.5869 18.9503 39.5174 18.9061 39.438C18.8618 39.3585 18.8356 39.2749 18.8276 39.1871C18.8177 39.1016 18.8252 39.0151 18.8502 38.9276C18.8729 38.8383 18.9139 38.7562 18.9733 38.6812ZM25.5003 41.1253C25.4598 41.0784 25.3918 41.0523 25.2963 41.0468C25.2048 41.0409 25.103 41.0526 24.9908 41.0821C24.8828 41.1111 24.7764 41.1544 24.6716 41.2119C24.5691 41.2712 24.4863 41.3406 24.4233 41.4201C24.3639 41.495 24.336 41.5746 24.3395 41.6588C24.343 41.743 24.3651 41.8271 24.4058 41.9111C24.4487 41.9969 24.5037 42.0793 24.5706 42.1582C24.6397 42.2389 24.7091 42.3124 24.7786 42.3786L24.7752 42.3759C24.8307 42.4273 24.895 42.4838 24.9682 42.5455C25.0454 42.6067 25.1204 42.6661 25.193 42.7237C25.2158 42.7417 25.2319 42.7564 25.2415 42.7677C25.2551 42.7785 25.2664 42.7875 25.2755 42.7947C25.2846 42.8019 25.2937 42.8091 25.3028 42.8163C25.3141 42.8253 25.3309 42.8367 25.3532 42.8507C25.4308 42.6828 25.4961 42.5164 25.5492 42.3514C25.6064 42.1859 25.6449 42.0278 25.6646 41.8769C25.6843 41.7261 25.6816 41.5872 25.6566 41.4601C25.6334 41.3307 25.5813 41.2191 25.5003 41.1253ZM21.0028 43.3692C21.3735 43.5594 21.7294 43.7102 22.0703 43.8214C22.4094 43.9348 22.7255 44.0097 23.0185 44.046C23.3121 44.0863 23.5767 44.0908 23.8124 44.0594C24.0504 44.0298 24.2515 43.9674 24.4159 43.872C24.3182 43.7946 24.2167 43.7104 24.1112 43.6194C24.004 43.5307 23.917 43.4562 23.8502 43.3958C23.6047 43.1643 23.4107 42.9143 23.2683 42.6461C23.1241 42.3801 23.0511 42.1152 23.0495 41.8513C23.0513 41.653 23.0885 41.4661 23.1611 41.2906C23.2359 41.1169 23.3363 40.9505 23.4624 40.7915C23.5596 40.6689 23.6682 40.5552 23.7882 40.4506C23.9099 40.3437 24.0372 40.2485 24.1699 40.1651C24.3044 40.0794 24.4403 40.0059 24.5777 39.9446C24.7173 39.8851 24.8531 39.8374 24.9851 39.8015C25.2565 39.7392 25.507 39.7288 25.7367 39.7703C25.9705 39.8114 26.1771 39.903 26.3565 40.0453C26.7404 40.3496 26.9536 40.7922 26.996 41.3733C27.0078 41.5824 26.9965 41.7972 26.9622 42.0178C26.9279 42.2384 26.8718 42.4584 26.794 42.6779C26.7203 42.8968 26.6246 43.1132 26.507 43.3269C26.3911 43.5384 26.2566 43.7407 26.1036 43.9337C26.0568 43.9928 26.0077 44.05 25.9563 44.1055C25.9072 44.1628 25.8597 44.2157 25.8138 44.2643C25.5758 44.5085 25.3185 44.7095 25.0417 44.8674C24.7653 45.0293 24.4771 45.1503 24.1768 45.2304C23.8771 45.3146 23.5688 45.3606 23.2519 45.3683C22.9333 45.3783 22.6138 45.3544 22.2935 45.2965C21.9736 45.2427 21.6564 45.1577 21.3417 45.0414C21.027 44.9251 20.7217 44.783 20.4258 44.615L21.0028 43.3692Z"
          fill="#191A1C"
        />
        <path
          d="M10.0167 2C13.9716 6.87407 13.2526 27.8222 7.5 30"
          stroke="#333539"
          strokeWidth="2"
        />
        <circle cx="11.5" cy="4" r="3.5" fill="#333539" stroke="#333539" />
      </svg>
    ),
    []
  );

  const SpecialOfferIcon = useMemo(
    () => (
      <svg
        width="63"
        height="90"
        viewBox="0 0 63 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.0176 5.5C11.3265 13.3333 -4.98242 36.5 10.0176 50.5"
          stroke="#333539"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31.3261 40.7467C31.965 40.7733 32.5787 41.0034 33.0777 41.4034L60.6312 63.4907C61.9351 64.536 62.1335 66.4451 61.0724 67.7362L45.5694 86.598C44.5264 87.8669 42.6568 88.0612 41.3752 87.0338L13.7964 64.9262C13.2779 64.5106 12.9121 63.9346 12.7564 63.2886L8.72001 46.5457C8.4994 45.6306 8.72111 44.665 9.31882 43.9378L11.6343 41.1206C12.232 40.3934 13.1364 39.9889 14.0769 40.0281L31.3261 40.7467ZM13.7103 49.4817C15.1261 50.6452 17.217 50.4408 18.3806 49.0251C19.5442 47.6094 19.3398 45.5185 17.924 44.355C16.5083 43.1914 14.4173 43.3959 13.2537 44.8116C12.0901 46.2273 12.2945 48.3181 13.7103 49.4817Z"
          fill="#FFCB05"
        />
        <path
          opacity="0.9"
          d="M27.635 60.0667C27.6191 60.0541 27.5771 60.0156 27.509 59.9513C27.4416 59.8926 27.3617 59.8138 27.2693 59.7147C27.1802 59.6181 27.0843 59.5007 26.9816 59.3623C26.8821 59.2265 26.7912 59.0767 26.7087 58.913C26.4931 58.4728 26.4034 58.0341 26.4395 57.5966C26.4781 57.156 26.6486 56.7449 26.9511 56.3633C27.4553 55.7273 28.2599 55.2906 29.3647 55.053C29.4521 55.0343 29.524 55.0187 29.5803 55.0064C29.6399 54.9967 29.6937 54.9876 29.7418 54.9791C29.7899 54.9707 29.834 54.9641 29.8739 54.9595C29.9195 54.9542 29.9708 54.9483 30.0278 54.9417C30.0148 54.8797 30.0006 54.8192 29.9852 54.7603C29.9729 54.704 29.9641 54.653 29.9588 54.6074L29.9334 54.463L31.8016 54.0564C31.868 54.3058 31.9321 54.6233 31.994 55.009C32.0585 55.3915 32.1125 55.8589 32.1562 56.4114C32.2362 58.0023 31.9863 59.1635 31.4064 59.8949C31.109 60.2701 30.7549 60.5306 30.3442 60.6763C29.9368 60.8245 29.5085 60.8552 29.0594 60.7685C28.9052 60.7343 28.7567 60.6865 28.6138 60.6251C28.4716 60.5693 28.3389 60.5081 28.2156 60.4415C28.0924 60.3748 27.9805 60.3069 27.8801 60.2376C27.7803 60.1741 27.6986 60.1171 27.635 60.0667ZM30.0994 58.8588C30.1776 58.7603 30.234 58.6238 30.2687 58.4493C30.3034 58.2749 30.3213 58.0793 30.3222 57.8626C30.3288 57.6452 30.3228 57.4177 30.3039 57.1801C30.2877 56.9394 30.2663 56.705 30.24 56.4769C30.0785 56.5043 29.9021 56.5406 29.7109 56.5858C29.5223 56.6278 29.3352 56.6841 29.1499 56.7546C28.9645 56.8252 28.7896 56.9118 28.6253 57.0146C28.4635 57.1142 28.3316 57.2349 28.2295 57.3766C28.1722 57.4555 28.1559 57.5513 28.1804 57.6639C28.205 57.7766 28.2512 57.8883 28.3188 57.9989C28.3897 58.112 28.4716 58.221 28.5646 58.3258C28.6601 58.4274 28.746 58.5084 28.8224 58.5689C28.9178 58.6445 29.0246 58.7188 29.1428 58.7918C29.2667 58.8642 29.387 58.9181 29.5038 58.9537C29.6237 58.9918 29.7366 59.0062 29.8424 58.9969C29.9482 58.9875 30.0339 58.9415 30.0994 58.8588ZM34.1405 65.2234C34.0706 65.1679 33.9758 65.085 33.8561 64.9747C33.7365 64.8643 33.6275 64.7209 33.5291 64.5445C33.1465 64.8834 32.7183 65.1524 32.2445 65.3516C31.7714 65.5566 31.271 65.7011 30.7435 65.7852C30.2134 65.8725 29.6637 65.9028 29.0945 65.8762C28.5253 65.8496 27.9536 65.777 27.3795 65.6586L27.4633 63.7598C27.7798 63.8243 28.1067 63.8789 28.4441 63.9237C28.779 63.9716 29.1102 64.0012 29.4379 64.0124C29.7663 64.0293 30.0851 64.0257 30.3942 64.0015C30.7041 63.983 30.9951 63.9392 31.2673 63.8702C31.5395 63.8012 31.7869 63.7047 32.0094 63.5808C32.2295 63.46 32.4138 63.3058 32.5626 63.1182C32.5701 63.1087 32.5799 63.0931 32.5918 63.0715C32.6069 63.0524 32.6221 63.0333 32.6372 63.0142C32.6523 62.9952 32.6621 62.9796 32.6665 62.9675C32.674 62.958 32.6728 62.9596 32.6627 62.9723L32.6589 62.9771C32.7829 62.775 32.891 62.5733 32.9832 62.372C33.0755 62.1707 33.1592 61.9574 33.2342 61.7321C33.3124 61.5093 33.3858 61.2697 33.4544 61.0134C33.5255 60.7538 33.6009 60.4693 33.6807 60.1597L35.5357 60.6514C35.3604 61.1338 35.2275 61.5463 35.1372 61.889C35.0468 62.2316 34.9936 62.5208 34.9775 62.7566C34.9646 62.995 34.987 63.1888 35.0448 63.3381C35.105 63.4842 35.1955 63.6052 35.3164 63.701L35.3402 63.7199C35.4451 63.8031 35.5273 63.9019 35.5868 64.0163C35.6462 64.1308 35.6816 64.2494 35.693 64.3723C35.71 64.4946 35.701 64.6169 35.6661 64.7394C35.6343 64.8644 35.5781 64.9777 35.4974 65.0795C35.4142 65.1844 35.3154 65.2666 35.201 65.3261C35.0897 65.3881 34.9726 65.4247 34.8497 65.436C34.73 65.4499 34.6089 65.4393 34.4864 65.4044C34.3639 65.3694 34.2486 65.3091 34.1405 65.2234ZM37.9935 59.8733L36.3478 60.0679L36.1599 58.4432L34.5523 58.6291L34.3567 56.9749L36.0023 56.7803L36.1902 58.405L37.7979 58.2191L37.9935 59.8733ZM36.4188 56.3726L37.941 56.1966L38.1179 57.7272L36.5958 57.9032L36.4188 56.3726ZM36.505 69.6531L34.8593 69.8477L34.6714 68.223L33.0638 68.4089L32.8682 66.7547L34.5138 66.5601L34.7017 68.1848L36.3094 67.9989L36.505 69.6531ZM33.7338 63.6738C33.817 63.5688 33.9158 63.4866 34.0303 63.4272C34.1415 63.3652 34.257 63.3273 34.3767 63.3135C34.499 63.2964 34.6213 63.3054 34.7438 63.3403C34.8663 63.3753 34.98 63.4343 35.0849 63.5175L35.6144 63.9372L35.8434 64.1187C35.9865 64.2322 36.1489 64.3506 36.3307 64.474C36.5126 64.5974 36.6943 64.7078 36.876 64.8052C37.0577 64.9026 37.231 64.9779 37.3961 65.031C37.5668 65.0835 37.7126 65.0955 37.8335 65.0671C37.9114 65.0408 37.9868 64.9815 38.0599 64.8893C38.1683 64.7525 38.2635 64.5639 38.3455 64.3233C38.4306 64.0853 38.5055 63.834 38.5703 63.5695C38.635 63.3049 38.6903 63.0458 38.736 62.7921C38.785 62.5409 38.8275 62.3338 38.8635 62.1708L40.7524 62.5806C40.7148 62.8305 40.6489 63.1096 40.5546 63.418C40.4628 63.7232 40.3551 64.0289 40.2316 64.3349C40.1106 64.6377 39.9779 64.926 39.8333 65.1998C39.6913 65.4704 39.551 65.6932 39.4123 65.8681C39.1577 66.1893 38.8673 66.438 38.541 66.6144C38.1705 66.8074 37.791 66.9105 37.4026 66.9237C37.0167 66.9336 36.625 66.8562 36.2275 66.6913C36.1119 66.6411 35.9763 66.5672 35.8206 66.4697C35.6649 66.3722 35.5114 66.2686 35.36 66.159C35.2062 66.0526 35.0641 65.9477 34.9337 65.8443C34.8008 65.7442 34.6978 65.6651 34.6246 65.6071L33.9329 65.0589L33.89 65.0248C33.7851 64.9416 33.7016 64.8444 33.6396 64.7332C33.5777 64.6219 33.541 64.5048 33.5297 64.3819C33.5159 64.2622 33.5264 64.1411 33.5614 64.0187C33.5931 63.8937 33.6506 63.7787 33.7338 63.6738ZM42.8716 67.0955C42.8149 67.0298 42.7196 66.9932 42.5859 66.9855C42.4578 66.9772 42.3153 66.9937 42.1583 67.035C42.007 67.0756 41.858 67.1361 41.7114 67.2166C41.5679 67.2997 41.452 67.3968 41.3638 67.5081C41.2806 67.6131 41.2415 67.7245 41.2464 67.8423C41.2514 67.9602 41.2823 68.0779 41.3393 68.1955C41.3994 68.3157 41.4763 68.431 41.5699 68.5415C41.6667 68.6545 41.7639 68.7573 41.8612 68.8501L41.8565 68.8463C41.9341 68.9182 42.0241 68.9973 42.1266 69.0837C42.2347 69.1694 42.3396 69.2526 42.4414 69.3332C42.4732 69.3585 42.4958 69.3789 42.5092 69.3947C42.5282 69.4099 42.5441 69.4225 42.5569 69.4325C42.5696 69.4426 42.5823 69.4527 42.595 69.4628C42.6109 69.4754 42.6344 69.4914 42.6656 69.511C42.7742 69.276 42.8657 69.043 42.9401 68.812C43.0202 68.5803 43.074 68.3589 43.1016 68.1477C43.1291 67.9366 43.1254 67.742 43.0904 67.5641C43.0579 67.383 42.985 67.2268 42.8716 67.0955ZM36.5751 70.2369C37.0941 70.5032 37.5922 70.7143 38.0695 70.8699C38.5443 71.0288 38.9868 71.1336 39.3971 71.1844C39.808 71.2408 40.1785 71.2471 40.5085 71.2032C40.8417 71.1618 41.1233 71.0743 41.3534 70.9408C41.2167 70.8324 41.0745 70.7146 40.9269 70.5872C40.7768 70.463 40.6549 70.3587 40.5614 70.2742C40.2177 69.95 39.9462 69.6001 39.7467 69.2245C39.5448 68.8522 39.4427 68.4813 39.4404 68.1118C39.443 67.8342 39.4951 67.5726 39.5966 67.3269C39.7014 67.0837 39.842 66.8508 40.0185 66.6282C40.1546 66.4565 40.3066 66.2973 40.4746 66.1508C40.645 66.0011 40.8231 65.8679 41.009 65.7511C41.1973 65.6311 41.3876 65.5282 41.5799 65.4424C41.7753 65.3592 41.9655 65.2924 42.1503 65.2422C42.5302 65.1549 42.8809 65.1404 43.2025 65.1985C43.5298 65.256 43.819 65.3843 44.0703 65.5834C44.6077 66.0094 44.9061 66.6292 44.9655 67.4426C44.982 67.7353 44.9663 68.0361 44.9182 68.345C44.8701 68.6538 44.7917 68.9618 44.6827 69.269C44.5795 69.5756 44.4456 69.8785 44.2809 70.1777C44.1187 70.4738 43.9304 70.7569 43.7162 71.0272C43.6506 71.1099 43.5819 71.1901 43.51 71.2677C43.4413 71.3479 43.3747 71.422 43.3104 71.4901C42.9773 71.8319 42.617 72.1133 42.2295 72.3343C41.8426 72.561 41.439 72.7304 41.0187 72.8426C40.599 72.9604 40.1674 73.0248 39.7238 73.0356C39.2777 73.0497 38.8304 73.0162 38.382 72.9352C37.9342 72.8599 37.49 72.7408 37.0495 72.578C36.6089 72.4152 36.1815 72.2162 35.7672 71.981L36.5751 70.2369Z"
          fill="#191A1C"
        />
        <path
          d="M17.0176 5C22.5176 12.8333 21.5176 46.5 13.5176 50"
          stroke="#333539"
          strokeWidth="2"
        />
        <circle cx="17.0176" cy="6" r="5.5" fill="#333539" stroke="#333539" />
      </svg>
    ),
    []
  );

  return (
    <Card
      sx={{
        width: {
          xs: "25.9rem",
          // sm: 576,
          md: "35.2rem",
        },
        height: {
          xs: "28.8rem",
          // sm: 576,
          md: "32.3rem",
        },
        borderRadius: "24px",
        bgcolor: "#A9EDEE",
        position: "relative",
        overflow: "visible",
        padding: "3.2rem",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: -15,
          display: "flex",
          alignItems: "center",
        }}
      >
        {SpecialOfferIcon}
      </Box>
      <Box>
        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            display: "flex",
            alignItems: "center",
          }}
        ></Box>

        <Box sx={{ mt: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #ccc",
              pb: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  marginBottom: "5px",
                  ml: "9px",
                }}
              >
                {DiamondIcon}
              </Box>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                }}
              >
                {`${duration} ماهه`}
              </Typography>
            </Box>

            <Typography
              variant="h5"
              component="div"
              sx={{
                mb: 0,
                textAlign: "center",
                direction: "rtl",
                fontWeight: 700,
                fontSize: {
                  xs: "1.6rem",
                  md: "2rem",
                },
              }}
            >
              {`${price} تومان`}
            </Typography>
          </Box>

          <Box sx={{ my: 2, fontSize: "1.6rem" }}>
            <Typography sx={{ mb: 1, textAlign: "right" }}>
              {`${internetData} گیگابایت اینترنت`}
            </Typography>
            <Typography sx={{ mb: 1, textAlign: "right" }}>
              {`${callMinutes} دقیقه مکالمه`}
            </Typography>
            <Typography sx={{ mb: 1, textAlign: "right" }}>
              {`${smsCount} عدد پیامک`}
            </Typography>
          </Box>

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: "18px",
              p: "14px",
              bgcolor: "#00CED1",
              "&:hover": {
                bgcolor: "#00AAAD",
              },
              borderRadius: "12px",
              fontSize: "1.6rem",
              color: "var(--Color-Grey-Grey600, #333539)",
            }}
          >
            خرید محصول
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default function Home() {
  return (
    <Container
      sx={{
        marginTop: 5,
        padding: {
          xs: "10rem 2rem",
          sm: "10rem 1rem",
          md: "20rem",
        },
        background: "black",
        maxWidth: "100% !important",
      }}
    >
      {/* <Typography>{t("title")}</Typography> */}
      <Carousel options={OPTIONS}>
        <PricingCard
          price="1"
          duration="3"
          internetData="120"
          callMinutes="1700"
          smsCount="1700"
        />
        <PricingCard
          price="2"
          duration="3"
          internetData="120"
          callMinutes="1700"
          smsCount="1700"
        />
        <PricingCard
          price="3"
          duration="3"
          internetData="120"
          callMinutes="1700"
          smsCount="1700"
        />
        <PricingCard
          price="4"
          duration="3"
          internetData="120"
          callMinutes="1700"
          smsCount="1700"
        />
        <PricingCard
          price="5"
          duration="3"
          internetData="120"
          callMinutes="1700"
          smsCount="1700"
        />
        <PricingCard
          price="6"
          duration="3"
          internetData="120"
          callMinutes="1700"
          smsCount="1700"
        />
      </Carousel>
    </Container>
  );
}
