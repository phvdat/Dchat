import { socket } from './socket';
import { ConnectionManager } from './components/ConnectionManager';
import { MyForm } from './components/MyForm';
import { Events } from './components/MyEvents';
import { useEffect, useState } from 'react';

const Chat = () => {
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [fooEvents, setFooEvents] = useState<any>([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    const onListenFromServer = (value: any) => {
      console.log(value);
      setFooEvents((previous: any) => [...previous, value]);
    };
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('show-message', onListenFromServer);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('show-message', onListenFromServer);
    };
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          socket.emit('hello', 'world');
        }}
      >
        send sth
      </button>
      <p>State: {'' + isConnected}</p>
      <Events events={fooEvents} />
      <ConnectionManager />
      <MyForm />
    </div>
  );
};

export default Chat;
