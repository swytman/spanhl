import React, { Component } from 'react'


export default class TeamForm extends Component {

    constructor(props) {
      super(props);
      this.state = {team_title: '' }

      var self = this;

      window.ee.addListener('TeamPage.SELECT_TEAM', (id) =>  {
        var value = self.props.teamlist.teams.filter((team) => team.id === id);
        if (value.length == 1) {value = value[0].title } else {value = ''}
        if (value){
           self.setState({team_title: value });
        } else {
           self.setState({team_title: '' });
        }
      });

    }

    handleSubmit = (e) => {
      e.preventDefault();
    }

    handleUpdateClick = (e) => {
        e.preventDefault();
        var input = this.refs.team_title;
        var team = {id: input.getAttribute('data-id'), title: input.value};
        this.props.updateTeam(team);
    }

    handleChange = (e) => {
        this.setState({team_title: e.target.value});
    }

    render() {

        return (
            <div>
              <form onSubmit={this.handleSubmit} className='form-horizontal' role='form'>
                <div className='form-group'>
                  <div className='col-sm-4'>
                    <input
                      value = {this.state.team_title}
                      ref='team_title'
                      data-id={this.props.teamlist.selected}
                      type='text'
                      onChange = {this.handleChange}
                      className='form-control'
                      placeholder='Название' />
                  </div>
                  <div className='col-sm-2'>
                    <button onClick = {this.handleUpdateClick} className='btn btn-success'>
                      <span className='glyphicon glyphicon-ok' aria-hidden='true' />
                    </button>
                    <button className='btn btn-primary'>
                      <span className='glyphicon glyphicon-plus' aria-hidden='true' />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            )
    }
}
