import React, { Component } from 'react'

export class prof extends Component {
     state = {
    person: {
      fullName: "Nader Sdiri",
      bio: 'A motivated and enthusiastic recent graduate with a degree in computer science. Possessing quite strong  programming skills, along with excellent algorithm skills. Keen to start a career in web development and eager to bring my passion and knowledge to the role. I am a quick learner, able to work well in a team, and have a strong work ethic. I am looking for an opportunity to contribute to a dynamic and growing organization and to continue developing my skills',
      imgSrc:"./image/imgme.png",
      profession: "Future full stack developer",
    },
    count: 0,
  };
  componentDidMount() {
    this.setState({
      intervall: setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000),
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }

  componentWillUnmount() {
    clearInterval(this.state.intervall);
    console.log("componentWillUnmount");
  }
  render() {
    return (
      <div>
        <img src={this.state.person.imgSrc} alt="scott" />
        <h1>{this.state.person.fullName}</h1>
        <h4> {this.state.person.bio}</h4>
        <p>
          {this.state.person.profession} A motivated and enthusiastic recent graduate with a degree in computer science.
        </p>
        <h1>Time elapsed :{this.state.count}</h1>
      </div>
    );
  }
}


export default prof