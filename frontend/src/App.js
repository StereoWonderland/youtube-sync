import { useEffect, useState } from 'react';
import YouTube from 'react-youtube'
import io from 'socket.io-client'

const App = () => {

  const [ socket, setSocket ] = useState(null)

  let videoTarget = null

  useEffect(() => {
    const newSocket = io()
    setSocket(newSocket)
    return () => newSocket.close()
  }, [setSocket])

  const onStateChange = (event) => {
  //   console.log(event)
  //   event.target.seekTo(7)
    switch (event.data) {
      case 2:
        socket.emit('pause video', 'test-room')
        break;
      case 1:
        socket.emit('resume video', 'test-room')
        break;
      default:
    }
  }

  const onReady = (event) => {
    videoTarget = event.target

    socket.on('pause video', () => {
      videoTarget.pauseVideo()
    })

    socket.on('resume video', () => {
      videoTarget.playVideo()
    })

  }

  return (
    <div className="App">
      <p>Hi there</p>
      <YouTube videoId="2g811Eo7K8U" onStateChange={onStateChange} onReady={onReady}/>
    </div>
  );
}

export default App;
