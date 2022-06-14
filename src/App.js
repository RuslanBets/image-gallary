import './App.css';
import './components/Item/Item'
import Item from './components/Item/Item';


function App() {
  return (
    <div className='wrapper'>
      <Item sendUrl = '/img/fog.jpg' nameUp = 'Hey' nameDown = 'Dance' textCenter = "Let's"></Item>
      <Item sendUrl = '/img/fox.jpg' nameUp = 'Give' nameDown = 'Receive' textCenter = "Take"></Item>
      <Item sendUrl = '/img/girl.jpg' nameUp = 'Experience' nameDown = 'Today' textCenter = "It"></Item>
      <Item sendUrl = '/img/mountain.jpg' nameUp = 'Give' nameDown = 'You can' textCenter = "All"></Item>
      <Item sendUrl = '/img/northern-lights.jpeg' nameUp = 'Life' nameDown = 'Motion' textCenter = "In"></Item>
    </div>
  )
}

export default App;
