import React, { Component } from 'react';
import {  Footer, FooterTab, Button, Text } from 'native-base';
export default class MyFooter extends Component {
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button  full info>
              <Text>Patient Tracker</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}