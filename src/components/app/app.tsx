import Main from '../main/main';

type AppCountArendaProps = {
  countArenda : number;
}

export default function App ({countArenda}: AppCountArendaProps) : JSX.Element {
  return (
    <Main countArenda = {countArenda} />

  );
}
