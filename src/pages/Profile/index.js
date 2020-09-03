import React from 'react'
import { connect } from 'react-redux'
import { Container } from "../../global-styles";

const Profile = ({ user }) => (
  <Container profile>
    <p>USER: {user?.values.name} {user?.values.surname || '-'} </p>
  </Container>
)

function mapStateToProps(state) {
  return { user: state.register.user }
}
export default connect(mapStateToProps)(Profile)