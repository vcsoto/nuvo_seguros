import Frontpage from "@/components/front-page/frontPage";
import TabsHome from "@/components/tabs-home/tabsHome";
import Section from "@/layout-components/section/section";
import BannerTypeOne from "@/components/banners/bannerTypeOne";

export default function Home() {
    return (
        <>
            <Frontpage />
            <TabsHome />
            <Section className="bg_gray" classMedia="flex_justify_center">
                <BannerTypeOne />
            </Section>
        </>
    );
}
