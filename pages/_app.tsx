import '../style/index.scss';
interface CadaverExquisitoAppProps {
    Component: any;
    pageProps: any;
}
/**
 * @param root0
 * @param root0.Component
 * @param root0.pageProps
 */
export default function LnvApp({
    Component,
    pageProps,
}: CadaverExquisitoAppProps) {
    return <Component {...pageProps} />;
}
