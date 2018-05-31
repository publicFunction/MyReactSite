import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import Input from '../Form/Input/Input';
import Select from '../Form/Select/Select';
// import projectsService from './../../../services/projects';
import organisationService from '../../services/organisations/index';

import './Button.css';
import './../../Form/Form.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      options: [
        { value: 1, label: 'xDesign' },
        { value: 2, label: 'The Federation' },
        { value: 3, label: 'Menzies' },
        { value: 4, label: 'See-Saw' },
        { value: 5, label: 'Ground Control' }
      ],
      placeHolder: { value: 0, label: 'Please Select...' }
    };
    this.createProject = this.createProject.bind(this);
    organisationService.listOrgs();
  }

  showAddProjectDialog = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  closeAddProjectDialog = () => {
    if (this.state.isOpen) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  };

  createProject = () => {
    this.closeAddProjectDialog();
  };

  render() {
    return (
      <div className="Add-Project-Holder">
        <span className="Add-Project" onClick={this.showAddProjectDialog}>
          <i className="icons add-circle-outline" />
          <span>Add Project</span>
        </span>
        <Modal
          title="Create A Project"
          height="auto"
          width="500px"
          top="10%"
          left="0"
          show={this.state.isOpen}
          onClose={this.closeAddProjectDialog}
          createProject={this.state.createProject}
        >
          <div className="Project-Form">
            <Input
              type="text"
              placeholder="Project Name"
              useLabel={true}
              name="projectName"
            />
            <Select
              useLabel={true}
              label="Organisation"
              placeholder={this.state.placeHolder}
              options={this.state.options}
            />
            <Input
              type="text"
              placeholder="Client Point of Contact"
              useLabel={true}
              name="pointOfContactName"
            />
            <Input
              type="text"
              placeholder="Client Point of Contact Email"
              useLabel={false}
              name="pointOfContactEmail"
            />
            <Input
              type="text"
              placeholder="JIRA Project Key"
              useLabel={true}
              name="JIRAProjectKey"
            />
            <div className="Modal-Footer">
              <button onClick={this.closeAddProjectDialog}>Cancel</button>
              <button onClick={this.createProject}>Save</button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Button;
