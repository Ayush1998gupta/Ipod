import React from 'react';
class Menu extends React.Component {
   render() {
      return (
         <div className='screen-menu'>
            <div className='app-logo'>
               <h3>iPod</h3>
            </div>
            <div>
               <p>Games</p>
            </div>
            <div>
               <p>Music</p>
            </div>
            <div>
               <p>Setting</p>
            </div>
            <div>
               <p>Cover Flow</p>
            </div>
         </div>
      )
   }
}
export default Menu;