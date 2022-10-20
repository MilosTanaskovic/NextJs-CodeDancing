import React from 'react';
import Link from 'next/link';
import {Box} from '@mui/material';


import { client } from '../lib/client'
import styles from '../styles/Home.module.css'
import { EarPhoneBanner, HeadPhoneBanner, HeroBanner, PromoBanner, SpeakerBanner } from '../components/banners';
import { Categories } from '../components';
import { useStateContext } from '../context/StateContext';

const Home = ({bannerData, categoryData, infoData}) => {
  const {setInfo, setHeroBanner} = useStateContext();

  const heroBanner = bannerData?.filter((item) => item.name === "HeroBanner");
  const speakerBanner = bannerData?.filter((item) => item.name === "SpeakerBanner");
  const headphoneBanner = bannerData?.filter((item) => item.name === "HeadphoneBanner");
  const earPhoneBanner = bannerData?.filter((item) => item.name === "EarPhoneBanner");
  const promoBanner = bannerData?.filter((item) => item.name === "PromoBanner");

  setInfo(infoData);
  setHeroBanner(heroBanner);

  console.log('Banner Data: ', bannerData);
  console.log('Categories Data: ', categoryData);
  console.log('Info Data: ', infoData);
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: {xs: '327px', sm: '500px', md: '689px', lg: '1110px'},
        height: 'auto',
        
      }}
    >
      {/* <HeroBanner 
        heroBannerData={bannerData && (heroBanner[0])}
      /> */}
      <Categories categoryData={categoryData} />

      <SpeakerBanner speakerBannerData={bannerData && (speakerBanner[0])} />

      <HeadPhoneBanner headphoneBannerData={bannerData && (headphoneBanner[0])} />

      <EarPhoneBanner earPhoneBannerData={bannerData && (earPhoneBanner[0])} />

      <PromoBanner promoBannerData={bannerData && (promoBanner[0])} />
    </Box>
  )
}

// SSR
export const getServerSideProps = async () => {
  const queryBanner = '*[_type == "banner"]';
  const bannerData = await client.fetch(queryBanner);

  const queryCategory = '*[_type == "category"]';
  const categoryData = await client.fetch(queryCategory);

  const queryInfo = '*[_type == "information"]';
  const infoData = await client.fetch(queryInfo);



  if(!categoryData) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      bannerData,
      categoryData,
      infoData
    }
  }
}

export default Home;
