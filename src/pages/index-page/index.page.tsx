// import { useParams } from 'react-router-dom';
import { useState } from "react";
import { HeadComponent, PageContainer, MainComponent, FooterComponent, ModalComponent, ApplicationComponent } from "../../components";

function IndexPage(): JSX.Element {

  const [modalOpen, setModalOpen] = useState<boolean>(true);

  return (
    <PageContainer>
    { modalOpen ?
      <ModalComponent isOpen={modalOpen} onClose={setModalOpen}/> :
      <ApplicationComponent>
        <HeadComponent />
        <MainComponent />
        <FooterComponent />
      </ApplicationComponent>
    }
    </PageContainer>
  );
}

export {
  IndexPage
}
