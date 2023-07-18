import io from 'socket.io-client';
import { WebsocketServerUrl } from '../config';

const socket = io(WebsocketServerUrl);

export default socket;
