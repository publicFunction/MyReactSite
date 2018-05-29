import React, { Component } from 'react';
import AddProject from './AddProject/AddProject';
import './Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      organisations: [
        {
          value: 1,
          label: 'xDesign',
          projects: [
            { id: 1, name: 'Project Timeline' },
            { id: 2, name: 'Project Dashboard' }
          ]
        },
        {
          value: 2,
          label: 'The Federation',
          projects: [{ id: 3, name: 'ACE360' }, { id: 4, name: 'Dougal' }]
        },
        {
          value: 3,
          label: 'Menzies',
          projects: [{ id: 5, name: 'SMART' }, { id: 6, name: 'Cargo' }]
        },
        {
          value: 4,
          label: 'See-Saw',
          projects: [{ id: 7, name: 'See-Saw' }]
        },
        {
          value: 5,
          label: 'Ground Control',
          projects: [
            { id: 8, name: 'Litterboss' },
            { id: 9, name: 'H and S' },
            { id: 10, name: 'Rail' }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <section className="Sidebar">
        <h1 className="Sidebar-title">Project Timeline</h1>
        <div className="Sidebar-Organisations">
          <ul>
            <li className="Organisation">
              <span className="Name Header">Projects</span>
              <span className="icons drop-arrow">&nbsp;</span>
            </li>
            {this.state.organisations.map((organisation, index) => {
              return (
                <li className="Organisation" key={index}>
                  <span className="Name">{organisation.label}</span>
                  <span className="icons drop-arrow">&nbsp;</span>
                  <ul className="Projects">
                    {organisation.projects.map((project, index) => {
                      return (
                        <li className="Project" key={project.id}>
                          {project.name}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
        <AddProject />
      </section>
    );
  }
}

export default Sidebar;
