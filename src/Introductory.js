import React, { Component } from 'react'
import Venom1 from './venom-1.jpg'
import Hulk1 from './hulk-1.jpg'
import Venom2 from './venom-2.jpg'

export class Introductory extends Component {
    render() {
        return (
            <div>
                {/* <!-- Introductory Content --> */}
    <header className="header">
      <div className="container">
        <h1 className="title">Mavel's Fearless</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
        <div className="search-bar">
          <input type="search" placeholder="Search" />
        </div> 
        <div className="sample-wallpaper">
          <article className="wallpaper">
            <img src={Venom1} alt="Wallpaper #1" className="wallpaper" />
          </article>

          <article className="wallpaper">
            <img src={Hulk1} alt="Wallpaper #1" className="wallpaper" />
          </article>
          <article className="wallpaper">
            <img src={Venom2} alt="Wallpaper #1" className="wallpaper" />
          </article>
        </div> 
                
            </div>
            </header>
            </div>
        )
    }
}

export default Introductory

