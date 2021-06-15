import React from 'react'
import ProjectImg from '../img/thumb-1.jpg'


export default function ProjectItem({
    img = ProjectImg,
    title = 'Project Name',
    desc = 'Lorem Ipsum',
  }) {
    return (
    <div  className="mix react" data-my-order="1">
        <div className="card"></div>
        <div className="text">
            <div className="bold">{title}</div>
            <span className="highlight">{desc}</span>
        </div>
        <div className="button" id="ordering">LEARN MORE</div>
    </div>
    )
  }