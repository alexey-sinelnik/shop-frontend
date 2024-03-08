import { Inter } from "next/font/google";
import Container from "@/components/container";
import HomeBannerComponent from "@/components/home/home-banner";
import HomeCategoryComponent from "@/components/home/home-category";
import NewArrivalsComponent from "@/components/home/new-arrivals";
import OurFeaturesComponent from "@/components/home/our-features";
import SalesBlockComponent from "@/components/home/sales-block";
import HomeArticleComponent from "@/components/home/home-articles";
import NewsletterComponent from "@/components/home/newsletter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <>
          <HomeBannerComponent />
          <Container>
              <HomeCategoryComponent />
          </Container>
          <Container>
              <NewArrivalsComponent />
          </Container>
          <Container>
              <OurFeaturesComponent />
          </Container>
          <SalesBlockComponent />
          <Container>
              <HomeArticleComponent />
          </Container>
          <NewsletterComponent />
      </>
  );
}
