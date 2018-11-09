import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

// Need info about a user
// Need info about that users ideas

const IdeaStyles = styled.div`
  display: flex;
  position: relative; 
  flex-direction: column;
  width: 200px;
  height: 200px;
  background: #F1FAEE;
  margin: 10px 0;
  button {
    position: absolute;
    top: 5px;
    right: 10px;
  }

  input, textarea {
    background-color: transparent;
    border: none;
  }

  input {
    height: 30%;
    font-size: 1.3rem;
  }
  textarea {
    height: 70%;
  }
`

const NewIdeaButton = styled.button`
  background: #1d3557;
  color: white;
  font-size: 1.3rem;
  padding: 7.5px 5px;

`

const IdeasContainerStyle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: flex-start;
`

class IdeaPage extends Component {
  state = {
    user: {},
    ideas: [
      {
        id: 1,
        title: 'hello',
        description: 'world'
      },
      {
        id: 2,
        title: 'hola',
        description: 'mundo'
      },
      {
        id: 3,
        title: 'goodnight',
        description: 'moon'
      },
      {
        id: 4,
        title: 'greetings',
        description: 'earthlings'
      }
    ]
  }

  componentDidMount() {
    // make an api call to get one single user
    // On the server URL is '/api/users/:userId'
    const userId = this.props.match.params.userId
    axios.get(`/api/users/${userId}`).then(res => {
      console.log(res.data)
      this.setState({ user: res.data })
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.user.username}'s Idea Page</h1>
        <NewIdeaButton>New Idea</NewIdeaButton>
        <IdeasContainerStyle>
          {this.state.ideas.map(idea => (
            <IdeaStyles>
              <input type="text" name="title" />
              <textarea name="description" />
              <button>X</button>
            </IdeaStyles>
          ))}
        </IdeasContainerStyle>
      </div>
    )
  }
}

export default IdeaPage
