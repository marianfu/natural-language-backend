import { remove } from 'lodash';

// Websocket connections
const webSocketConnections = [];

const websocketActions = [
  {
    type: 'WEBSOCKET_SEND_MESSAGE',
    action: (socket, action) => {
      webSocketConnections.map(receiver => {
        receiver !== socket && receiver.emit('action',
          { 
            type: 'WEBSOCKET_RECEIVE_MESSAGE', 
            data: { from: action.data.from, message: action.data.message }
          }
        );
      });
    }
  }
];

function addSocketHandlers(io) {
  io.on('connection', (socket) => {
    console.log(`New socket connected: ${socket.id}`);
    webSocketConnections.push(socket);

    socket.emit('connection', { type: 'WEBSOCKET_ON_OPEN', data: socket.id});
    
    socket.on('action', (action) => {
      const handler = websocketActions.find(h => h.type === action.type);
      handler && handler.action(socket, action);
    });

    socket.on('disconnect', (data) => {
      remove(webSocketConnections, (instance) => socket.id === instance.id);
    });
  });
}

export { addSocketHandlers };
export default addSocketHandlers;