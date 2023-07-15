import { HeadComponent, PageContainer, MainComponent, FooterComponent } from "../../components";

function IndexPage(): JSX.Element {
  return (
    <PageContainer>
      <HeadComponent />
      <MainComponent />
      <FooterComponent />
    </PageContainer>
  );
}

export {
  IndexPage
}
