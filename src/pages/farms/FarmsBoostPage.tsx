import React, { useEffect, useRef, useState, useContext } from 'react';
import FarmsHome from '~components/farm/FarmsHome';
import FarmsDetail from '~components/farm/FarmsDetail';
import Loading, { BeatLoading } from '~components/layout/Loading';
import { Seed, BoostConfig, UserSeedInfo } from '~services/farm';
export default function FarmsBoosterPage(props: any) {
  const [detailData, setDetailData] = useState(null);
  const [tokenPriceList, setTokenPriceList] = useState(null);
  const [loveSeed, serLoveSeed] = useState(null);
  const [boostConfig, setBoostConfig] = useState(null);
  const [user_data, set_user_data] = useState({});
  const [user_data_loading, set_user_data_loading] = useState(true);
  const [dayVolumeMap, setDayVolumeMap] = useState({});
  const paramId = props.match.params.id;
  const getDetailData_user_data = (data: {
    user_seeds_map: Record<string, UserSeedInfo>;
    user_unclaimed_token_meta_map: Record<string, any>;
    user_unclaimed_map: Record<string, any>;
  }) => {
    const {
      user_seeds_map,
      user_unclaimed_map,
      user_unclaimed_token_meta_map,
    } = data;
    set_user_data({
      user_seeds_map,
      user_unclaimed_map,
      user_unclaimed_token_meta_map,
    });
    set_user_data_loading(false);
  };
  const getDayVolumeMap = (map: any) => {
    setDayVolumeMap(map || {});
  };
  const getDetailData_boost_config = (boostConfig: BoostConfig) => {
    setBoostConfig(boostConfig);
  };
  const getDetailData = (data: {
    detailData: Seed;
    tokenPriceList: any;
    loveSeed: Seed;
  }) => {
    const { detailData, tokenPriceList, loveSeed } = data;
    setDetailData(detailData);
    setTokenPriceList(tokenPriceList);
    serLoveSeed(loveSeed);
  };
  const emptyDetailData = () => {
    setDetailData(null);
  };
  const showDetailPage =
    paramId &&
    detailData &&
    tokenPriceList &&
    Object.keys(tokenPriceList).length > 0;
  const showLoading = paramId && !showDetailPage;
  return (
    <>
      <FarmsHome
        getDetailData={getDetailData}
        getDetailData_user_data={getDetailData_user_data}
        getDetailData_boost_config={getDetailData_boost_config}
        getDayVolumeMap={getDayVolumeMap}
      ></FarmsHome>
      {showLoading ? <Loading></Loading> : null}
      {showDetailPage ? (
        <FarmsDetail
          detailData={detailData}
          tokenPriceList={tokenPriceList}
          emptyDetailData={emptyDetailData}
          loveSeed={loveSeed}
          boostConfig={boostConfig}
          user_data={user_data}
          user_data_loading={user_data_loading}
          dayVolumeMap={dayVolumeMap}
        ></FarmsDetail>
      ) : null}
    </>
  );
}
