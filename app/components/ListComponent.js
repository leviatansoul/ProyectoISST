import React, { Component } from 'react'
import { Container, Content, List, ListItem, Text, Icon, Badge, Left, Body, Right, Switch } from 'native-base'
import RowComponent from './RowComponent'

class ListComponent extends Component {
  render () {
    return (
      <Container>
        <Content>
          {this.props.lista.map(
            item => <RowComponent
              key={item.id}
              item={item}
              borrar={this.props.borrar}
            />
          )}
        </Content>
      </Container>
    )
  }
}

export default ListComponent
