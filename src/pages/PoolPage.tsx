import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import FullCard from '~components/layout/FullCard';
import TokenList from '../components/tokens/TokenList';
import SelectToken from '../components/forms/SelectToken';
import InputAmount from '../components/forms/InputAmount';
import FormWrap from '../components/forms/FormWrap';
import { usePool } from '../state/pool';
import {
  addLiquidityToPool,
  Pool,
  PoolDetails,
  removeLiquidityFromPool,
} from '~services/pool';
import { sumBN } from '~utils/numbers';
import { TokenMetadata } from '~services/token';
import { useTokenBalances, useTokens } from '~state/token';
import TokenAmount from '~components/forms/TokenAmount';

interface ParamTypes {
  poolId: string;
}

interface TokenDetailColumnProps {
  title: string;
  value: string | number;
}

function DetailColumn({ title, value }: TokenDetailColumnProps) {
  return (
    <div className="flex flex-col mr-8 mb-8 lg:m-0 text-center">
      <h2 className="text-gray-500 pb-1">{title}</h2>
      <div>
        <p>{value}</p>
      </div>
    </div>
  );
}

function Shares({ shares }: { shares: string }) {
  if (!shares) return null;

  return <h2 className="text-lg pb-4 font-bold">My Shares: {shares}</h2>;
}

function PoolHeader({ pool, shares }: { pool: PoolDetails; shares: string }) {
  const total = Object.values(pool.supplies).reduce(
    (acc, amount) => sumBN(acc, amount),
    ''
  );
  const volume = Object.values(pool.volumes).reduce(
    (acc, { input, output }) => sumBN(acc, input, output),
    '0'
  );
  return (
    <div className="flex flex-col lg:pl-6 mt-8 mb-14">
      <h1 className="font-normal text-xl pb-2">Pool Details</h1>
      <Shares shares={shares} />
      <div className="grid grid-cols-2 gap-10">
        <DetailColumn title="Total Shares" value={pool.shareSupply} />
        <DetailColumn title="Fee" value={pool.fee} />
        <DetailColumn title="Total Liquidity" value={total} />
        <DetailColumn title="Accumulated Volume" value={volume} />
      </div>
    </div>
  );
}

function AddLiquidity({
  pool,
  tokens,
}: {
  pool: Pool;
  tokens: TokenMetadata[];
}) {
  const balances = useTokenBalances();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fd = new FormData(event.target as HTMLFormElement);

    const amounts = pool.tokenIds.reduce<{ [key: string]: string }>(
      (acc, tokenId) => {
        acc[tokenId] = fd.get(tokenId).toString();
        return acc;
      },
      {}
    );

    await addLiquidityToPool({
      id: pool.id,
      tokenAmounts: amounts,
    });
  };

  return (
    <FormWrap title="Add Liquidity" onSubmit={handleSubmit}>
      {Object.entries(pool.supplies).map(([tokenId, max]) => (
        <TokenAmount
          max={balances?.[tokenId]}
          tokens={tokens}
          selectedToken={tokens.find((t) => t.id === tokenId)}
        />
      ))}
    </FormWrap>
  );
}

function RemoveLiquidity({ pool, shares }: { pool: Pool; shares: string }) {
  const [amount, setAmount] = useState<string>();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await removeLiquidityFromPool({
      id: pool.id,
      shares: amount,
      minimumAmounts: pool.tokenIds.reduce<{ [id: string]: string }>(
        (acc, id) => {
          acc[id] = '0';
          return acc;
        },
        {}
      ),
    });
  };

  return (
    <FormWrap title="Remove Liquidity" onSubmit={handleSubmit}>
      <InputAmount value={amount} max={shares} onChangeAmount={setAmount} />
    </FormWrap>
  );
}

export default function PoolPage() {
  const { poolId } = useParams<ParamTypes>();
  const { pool, shares } = usePool(poolId);
  const tokens = useTokens(pool?.tokenIds);

  const render = (token: TokenMetadata) => {
    return (
      <p>
        <span className="font-black">Total Supply: </span>
        {pool.supplies[token.id]}
      </p>
    );
  };

  // TODO: loading
  if (!pool) return null;

  return (
    <FullCard>
      <PoolHeader pool={pool} shares={shares} />
      <AddLiquidity pool={pool} tokens={tokens} />
      <RemoveLiquidity pool={pool} tokens={tokens} />
      <TokenList tokens={tokens} render={render} />
    </FullCard>
  );
}
