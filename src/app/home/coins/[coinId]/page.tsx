export default function Coin({ params }: { params: { coinId: string } }) {
  return <div>{params.coinId}</div>;
}
