import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text,View } from 'native-base';
export default class MyHeader extends Component {
  component(){
  this.state={
    search:''
  }
}
  render() {
    // let filteredContacts=this.props.List.filter(
    //   (data)=>{
    //     return data.Pname.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1;
    //   }
    // )
    return (
      <View >
        <Input  />
      </View>
    );
  }
}

      // {filteredContacts.map((data)=>{
      //    <Button><Text>data</Text></Button>
      // })}