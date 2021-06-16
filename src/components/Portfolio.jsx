import React, {useState,useEffect} from 'react'
import ProjectsInfo from '../data/projects.js';
import ProjectItem from './ProjectItem'
import '../style/componentstyle/portfolio.css'


const Portfolio = () => {

    const [searchText, setSearchText] = useState('')
    const [projectsData, setProjectsData] = useState(ProjectsInfo)

    useEffect(() => {
        if (searchText === '') return;
        setProjectsData(() => 
            ProjectsInfo.filter((item) => 
                item.desc.toLowerCase().match(searchText.toLowerCase())
            )
        )
    }, [searchText])

    const handleFilter = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);
      };
    const handleTodos = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);
        setProjectsData(ProjectsInfo);
    };

    return (
        <section className="flex" id="portfolio">
            <div className="header wayp slide-in-right">
            PROJECTS
            </div>
            <div className="header-bar wayp slide-in-right dly3"></div>

            <div className="filter-wrap wayp fade-in">
                <div className="flex row">
                    <button
                        className="filter button" 
                        type="button" 
                        value="" 
                        onClick={handleTodos}
                    > 
                        ALL
                    </button>
                    <button
                        className="filter button" 
                        type="button" 
                        value="rails" 
                        onClick={handleFilter}
                    > 
                        RUBY/RAILS
                    </button>
                    <button
                        className="filter button" 
                        type="button" 
                        value="react" 
                        onClick={handleFilter}
                    > 
                        REACT-JS
                    </button>
                    <button
                        className="filter button" 
                        type="button" 
                        value="js" 
                        onClick={handleFilter}
                    > 
                        JAVASCRIPT
                    </button>
                </div>
                {/* <div className="float-bar">
                    <div className="flex row">
                    <div className="filter" data-filter="all">ALL</div>
                    <div className="filter" data-filter=".rails">RUBY/RAILS</div>
                    <div className="filter" data-filter=".react">REACT-JS</div>
                    <div className="filter" data-filter=".js">JAVASCRIPT</div>
                    </div>
                </div> */}
            </div>
            <div id="gallery" className="container flex row wrap wayp">
                {projectsData.map((item) => (
                    <ProjectItem
                        key={item.id}
                        title={item.name}
                        desc={item.desc}
                        img={item.img}
                    />
                ))
                }
            </div>
        </section>    
    )}

export default Portfolio