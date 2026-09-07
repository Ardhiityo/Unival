import Header from "../../_components/header";
import Footer from "../../_components/footer";
import { BackgroundGradient } from "../../_components/background-gradient";
import NewsDetailManagement from "./_components/news-detail-management";

export default function NewsDetailPage() {
    return (
        <>
            <Header />
            <BackgroundGradient />
            <NewsDetailManagement />
            <Footer />
        </>
    );
}