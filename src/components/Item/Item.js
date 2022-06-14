import './Item.css'
function Item(props) {
  return (
    <div className='wrapperImg' style={{ backgroundImage: `url(${props.sendUrl})` }} onClick={function (event) {
      const wrapper = event.target.closest('.wrapperImg')
      
      let arrElems = Array.from(document.querySelectorAll('.wrapperImg'))
      let up = wrapper.children[0]
      let down = wrapper.children[1]
      let center = wrapper.children[2]


      if (Array.from(wrapper.classList).includes('active')) {

        wrapper.classList.remove('active')
        up.classList.remove('activeUp')
        down.classList.remove('activeDown')
        center.style.fontSize = 2 + 'em'

      } else {
        for (const elem of arrElems) {

          elem.classList.remove('active')
          elem.children[0].classList.remove('activeUp')
          elem.children[1].classList.remove('activeDown')
          elem.children[2].style.fontSize = 2 + 'em'
        }

        wrapper.classList.add('active')
        up.classList.add('activeUp')
        down.classList.add('activeDown')
        center.style.fontSize = 3 + 'em'
      }
    }}>
      <div className='up'>
        {props.nameUp}
      </div>
      <div className='down'>
        {props.nameDown}
      </div>
      <div className='textCenter'>
        {props.textCenter}
      </div>
    </div>
  )
}
export default Item