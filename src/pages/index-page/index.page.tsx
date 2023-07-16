import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'socket.io-client';
import { HeadComponent, PageContainer, MainComponent, FooterComponent } from "../../components";
import { websocketUrl } from '../../config';

const connectSocketServer = () => {
  const socket = connect(websocketUrl, {
    transports: ['websocket']
  });
  return socket;
}

function IndexPage(): JSX.Element {

  const {id} = useParams();

  const [ socket ] = useState(connectSocketServer());

  socket.emit('connect-to-backend', `QLQ MANO TU ERES LOCO ${id}`);

  useEffect(() => {
    socket.on('message', (data: any) => {
      console.log(data);
      return () => {socket.off('message')}
    });
  }, [ socket ]);

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
