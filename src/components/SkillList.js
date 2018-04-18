import React, { Component } from "react";

class SkillList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false
    };
  }

  sectionClick = () => {
    this.setState({
      showText: !this.state.showText
    });
  };

  render() {
    const justLists = this.props.skills.map(listing => (
      <li key={listing[0]}>{listing}</li>
    ));
    console.log(justLists);

    return (
      <li>
        <div className="profile-card" onClick={this.sectionClick}>
          <li>
            <header className="profile-header">
              <img src={this.props.image} alt="" />
              <h2>{this.props.name}</h2>
            </header>
            {this.state.showText ? (
              <section className="skills-container">
                <h4>Skills</h4>
                <ul className="skills-list">{justLists}</ul>
              </section>
            ) : (
              <section />
            )}
          </li>
        </div>
      </li>
    );
  }
}

export default SkillList;
