import '../style/index.scss';
interface CadaverExquisitoAppProps {
  Component: any;
  pageProps: any;
}
export default function LnvApp({ Component, pageProps }: CadaverExquisitoAppProps) {
  return <Component {...pageProps} />;
}
